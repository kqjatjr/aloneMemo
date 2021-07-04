from bs4 import BeautifulSoup
import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}


def parserUrlToSoup(url):
    data = requests.get(
        url, headers=headers)
    soup = BeautifulSoup(data.text, 'html.parser')
    # BeautifulSoup :
    # 요청한 HTML을 프린트 해보면 매우 길고 지저분 합니다. 그래서 결국 라이브러리의 힘을 빌려야 합니다.
    # HTML 문서를 탐색해서 원하는 부분만 쉽게 뽑아낼 수 있는 파이썬 라이브러리 입니다.
    return soup
