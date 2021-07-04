from db.memo import createMemo, getMemos
from utils.parse import parserUrlToSoup
from flask import Flask, request
from flask.json import jsonify
from flask.templating import render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


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


@app.route('/api/memo', methods=['GET'])
def getMemo():
    memos = getMemos()
    return jsonify({"memos": memos})


if __name__ == '__main__':
    app.run('localhost', port=5000, debug=True)
