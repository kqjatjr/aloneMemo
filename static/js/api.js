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
  window.api = {
    getMemo,
    postMemo,
  };
})(window);
