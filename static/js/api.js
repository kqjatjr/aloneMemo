// promise는 promise를 반환하는게 좋습니다.
// 즉시 실행함수로 만들어줍니다.
(function (window) {
  function getMemo() {
    return fetch("/api/memo") // 기본 매소드는 GET방식.
      .then((response) => response.json()); //실행 결과를 josn 형식으로 변환한다.
  }

  function postMemo(data) {
    return fetch("/api/memo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // JSON.stringify() : 자바스크립트 값을 jSON문자열로 변환한다.
    }).then((response) => response.json());
  }
  // 외부에 공개되는것을 정의해줍니다.
  window.api = {
    getMemo,
    postMemo,
  };
})(window);
