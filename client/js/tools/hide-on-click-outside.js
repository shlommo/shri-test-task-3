import {addListenerMulti, removeListenerMulti, checkEventTarget} from './helpers';

export default (selector, callback) => {
  const outsideClickListener = (event) => {
    const elem = document.querySelector(selector);
    const clickCallback = callback || function () {};
    let elemChildIsTarget = false;
    if (elem !== null) {
      elemChildIsTarget = checkEventTarget(event, elem);
    }

    if (event.target !== elem && !elemChildIsTarget) {
      clickCallback();
      removeClickListener();
    }
  };

  const removeClickListener = () => {
    removeListenerMulti(document, 'click touchstart', outsideClickListener);
  };

  addListenerMulti(document, 'click touchstart', outsideClickListener);
};
