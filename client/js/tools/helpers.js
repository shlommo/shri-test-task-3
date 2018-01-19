const getCoords = (elem) => {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
};

const getNodeFromMarkup = (markupTemplate) => {
  const div = document.createElement('div');
  div.innerHTML = markupTemplate;
  return div.firstChild;
};

const getDay = (date) => { // получить номер дня недели, от 0(пн) до 6(вс)
  let day = date.getDay();
  if (day === 0) {
    day = 7;
  }
  return day - 1;
};

const addListenerMulti = (el, s, fn) => {
  s.split(' ').forEach((e) => {
    el.addEventListener(e, fn, false);
  });
};
const removeListenerMulti = (el, s, fn) => {
  s.split(' ').forEach((e) => {
    el.removeEventListener(e, fn, false);
  });
};

const debounce = (f, ms) =>{
  let timer = null;

  return function (...args) {
    const onComplete = () => {
      f.apply(this, args);
      timer = null;
    };

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplete, ms);
  };
};

const getDateValue = (inputDate) => {
  const date = inputDate || new Date();
  const year = new Date(date.getFullYear());
  const month = new Date(date.getFullYear(), date.getMonth());
  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const hour = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
  const minute = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());

  return {
    year: year.valueOf(),
    month: month.valueOf(),
    day: day.valueOf(),
    hour: hour.valueOf(),
    minute: minute.valueOf()
  }
};

Element.prototype.parents = function(selector) {
  let elements = [];
  let elem = this;
  const ishaveselector = selector !== undefined;

  while ((elem = elem.parentElement) !== null) {
    if (elem.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    if (!ishaveselector || elem.matches(selector)) {
      elements.push(elem);
    }
  }

  return elements;
};

export {getCoords, getNodeFromMarkup, getDay, addListenerMulti, removeListenerMulti, debounce, getDateValue};
