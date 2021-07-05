from db.memo import createMemo, getMemos
from utils.parse import parserUrlToSoup
from flask import Flask, request
from flask.json import jsonify
from flask.templating import render_template

# pip freeze > requirements.txt : 새로 다운받은 모듈을 추가해줍니다.
# pip install -r requirements.txt : requirements.txt내의 명시되어있는 모듈 전체를 다운로드 받습니다.

app = Flask(__name__)

# 제일기본상태


@app.route('/')
def home():
    return render_template('index.html')

# 'fetch ('/api/memo'), {method: 'POST', ... })


@app.route('/api/memo', methods=['POST'])
def postMemo():
    url = request.json['url_give']
    comment = request.json['comment_give']
    soup = parserUrlToSoup(url)
    title = soup.find('meta', property='og:title')
    imgUrl = soup.find('meta', property='og:image')
    description = soup.find('meta', property="og:description")
    memo = {
        "title": title["content"],
        "imgUrl": imgUrl["content"],
        "description": description["content"],
        "comment": comment,
        "url": url
    }
    createMemo(memo)
    return jsonify({"Success": True})
    # jsonify() : 사용자가 json data를 내보내도록 제공하는 flask의 함수


# 'fetch ('/api/memo')


@app.route('/api/memo', methods=['GET'])
# 데이터 베이스 상의 아이디 값을 뺀 모든 정보를 가져옵니다.
def getMemo():
    memos = getMemos()
    return jsonify({"memos": memos})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
