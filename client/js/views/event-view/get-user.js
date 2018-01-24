export default (login, avatarUrl) => {
  return `<div class="user" data-login="${login}">
              <div class="user__icon">
                  <img src="${avatarUrl}" alt="">
              </div>
              ${login}
          </div>`;
};
