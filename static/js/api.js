(function (window) {
  const memos = [
    {
      comment: 'asdf',
      description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
      imgUrl:
        'https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png',
      title: '네이버',
      url: 'http://www.naver.com'
    },
    {
      comment: '다음',
      description:
        '언제 어디서나 믿고 쓰는 Daum, 쉽고 편리하게 모바일을 즐겨보세요!',
      imgUrl: 'https://t1.daumcdn.net/daumtop_deco/images/op/og_daum.png',
      title: '모바일 라이프의 시작과 끝, Daum',
      url: 'https://m.daum.net/?nil_top=mobile'
    },
    {
      comment: '개봉이 미루고 미뤄져 vod로 개봉한 영화',
      description:
        '어벤져스의 히어로 블랙 위도우, ‘나타샤 로마노프’ (스칼렛 요한슨)는자신의 과거와 연결된 레드룸의...',
      imgUrl:
        'https://movie-phinf.pstatic.net/20210617_272/1623906098516QjpeS_JPEG/movie_image.jpg?type=m665_443_2',
      title: '블랙 위도우',
      url: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=184318'
    },
    {
      comment: '123',
      description: '이미지 출처:https://www.pexels.com/ko-kr/photo/6307488/',
      imgUrl: 'https://i.ytimg.com/vi/QbuRSewX9EU/maxresdefault.jpg',
      title: 'Sam Ryder - Tiny Riot(한글자막)',
      url: 'https://www.youtube.com/watch?v=QbuRSewX9EU'
    },
    {
      comment: '다음',
      description: '나의 관심 콘텐츠를 가장 즐겁게 볼 수 있는 Daum',
      imgUrl: '//i1.daumcdn.net/svc/image/U03/common_icon/5587C4E4012FCD0001',
      title: 'Daum',
      url: 'https://www.daum.net/'
    }
  ];

  function getMemo() {
    // return fetch('/api/memo') // 기본 매소드는 GET방식.
    //   .then((response) => response.json()); //실행 결과를 josn 형식으로 변환한다.
    return Promise.resolve({ memos });
  }

  function postMemo(data) {
    // return fetch('/api/memo', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    //   // JSON.stringify() : 자바스크립트 값을 jSON문자열로 변환한다.
    // }).then((response) => response.json());
    memos.push({
      comment: '다음',
      description: '나의 관심 콘텐츠를 가장 즐겁게 볼 수 있는 Daum',
      imgUrl: '//i1.daumcdn.net/svc/image/U03/common_icon/5587C4E4012FCD0001',
      title: 'Daum',
      url: 'https://www.daum.net/',
      ...{
        url: data.url_give,
        comment: data.comment_give
      }
    });
    return Promise.resolve({ Success: true });
  }
  window.api = {
    getMemo,
    postMemo
  };
})(window);
