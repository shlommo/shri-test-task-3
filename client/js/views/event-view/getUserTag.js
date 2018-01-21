import getUser from './getUser'
import {getNodeFromMarkup} from './../../tools/helpers';

export default (userId, login, avatarUrl) => {
  const userTag = `<div class="user-tag" data-user-id="${userId}">
                      ${getUser(login, avatarUrl)}
                      <a class="user-tag__remove" href="#">
                        <i>
                          <svg width="10" height="10">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
                          </svg>
                        </i>
                      </a>
                  </div>`;

  const userTagElement = getNodeFromMarkup(userTag);
  const userTagRemoveBtn = userTagElement.querySelector('.user-tag__remove');

  const userRemoveBtnHandler = (event) => {
    event.preventDefault();
    userTagElement.parentNode.removeChild(userTagElement);
    removeClickListener();
  };

  const removeClickListener = () => {
    userTagRemoveBtn.removeEventListener('click', userRemoveBtnHandler)
  };

  userTagRemoveBtn.addEventListener('click', userRemoveBtnHandler);

  return userTagElement;
}