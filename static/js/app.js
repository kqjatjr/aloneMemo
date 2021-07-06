(function () {
  class AloneMemo {
    constructor() {
      this.memos = [];
    }
    initialize() {
      this.$inputWrap = document.querySelector('.wrap');
      this.$list = document.querySelector('#list');
      this.$togglePostBtn = document.querySelector('#post-toggle');
      this.$form = document.querySelector('#form');
      this.setEvents();
      return this.getMemo();
    }

    setEvents() {
      this.$togglePostBtn.addEventListener('click', this.handleClickToggleBtn);
      this.$form.addEventListener('submit', this.handleSubmit);
    }

    handleClickToggleBtn = () => {
      this.togglePostBox();
    };

    handleSubmit = (e) => {
      e.preventDefault(); //form의 기본 기능인 즉시 새로고침을 하지 못하게 하는 기능
      const $urlInput = form.querySelector('.form_url');
      const $memoInput = form.querySelector('.form_memo');
      const url = $urlInput.value;
      const memo = $memoInput.value;
      $urlInput.value = '';
      $memoInput.value = '';
      this.postMemo({ url, memo });
      this.getMemo();
      this.togglePostBox(false);
    };

    setMemo(memos) {
      this.memos = memos;
      this.renderMemo();
    }

    getMemo() {
      return api.getMemo().then(({ memos }) => this.setMemo(memos));
    }

    postMemo({ url, memo }) {
      return api
        .postMemo({ url_give: url, comment_give: memo })
        .then((result) => {
          if (result.Success) {
            alert('포스팅 성공');
          }
        })
        .catch((error) => {
          // 기준이 되는 url의 사이트에서 내가 찾는 데이터가 없을경우
          alert('저장에 실패했습니다.');
          // alert() : 브라우저 창에서 나오는 알림창 느낌
        });
    }

    togglePostBox = (value) => {
      const $post = document.querySelector('#post-box');
      const shouldToggle =
        value === undefined ? $post.style.display === 'none' : value;
      if (shouldToggle) {
        $post.style.display = 'block';
        this.$togglePostBtn.innerText = '닫기';
      } else {
        $post.style.display = 'none';
        this.$togglePostBtn.innerText = '포스팅 하기!';
      }
    };

    renderMemo() {
      // @app.route('/api/memo', methods=['GET']) 구문의 결과로 나온 memos
      // 각 값을 map을 통해 list.inlineHTML에 적용시킵니다.
      // { title, imgUrl, description, comment, url } 이놈들을~   => 이후 포맷으로 바꿔줍니다
      // con-sm-4 : 12개의 간격중 4개의 구간을 가진다
      this.$list.innerHTML = this.memos
        .map(
          ({ title, imgUrl, description, comment, url }) => `
            <li class="col-sm-4 aloneMemo_memo-item">
              <div class="card">
                <img class="card-img-top" src="${imgUrl}" />
                <div class="card-body">
                  <a class="card-title" href="${url}">${title}</a>
                  <div class="card-text">${description}</div>
                  <div class="aloneMemo_memo-item-comment">${comment}</div>
                </div>
              </div>
            </li>
            `
        )
        .join('');
    }
  }

  window.AloneMemo = AloneMemo;
})(window);
