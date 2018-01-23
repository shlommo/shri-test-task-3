export const getCoords = (elem) => {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
};

export const getNodeFromMarkup = (markupTemplate) => {
  const div = document.createElement('div');
  div.innerHTML = markupTemplate;
  return div.firstChild;
};

export const getDay = (date) => { // получить номер дня недели, от 0(пн) до 6(вс)
  let day = date.getDay();
  if (day === 0) {
    day = 7;
  }
  return day - 1;
};

export const addListenerMulti = (el, s, fn) => {
  s.split(' ').forEach((e) => {
    el.addEventListener(e, fn, false);
  });
};
export const removeListenerMulti = (el, s, fn) => {
  s.split(' ').forEach((e) => {
    el.removeEventListener(e, fn, false);
  });
};

export const debounce = (f, ms) =>{
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

export const getDateValue = (inputDate) => {
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

export const parseObjToHash = (inputObj) => {
  let hashPartBuffer = [];
  for (let k in inputObj) {
    hashPartBuffer.push(
      encodeURIComponent(k),
      '=',
      encodeURIComponent(inputObj[k]),
      '&');
  }
  if (hashPartBuffer.length) {
    // Remove the last element from the string buffer
    // which is '&'.
    hashPartBuffer.pop();
  }
  const hashPartString = hashPartBuffer.join('');

  return hashPartString;
};

export const encodeObjFromHash = (hashPartString) => {
  let pairs = hashPartString.split(/&/);
  let object = {};
  for (let i = 0; i < pairs.length; i++) {
    let keyValue = pairs[i].split(/=/);
    // Validate that this has the right structure.
    if (keyValue.length == 2) {
      object[keyValue[0]] = keyValue[1];
    }
  }
  return object;
};

export const checkEventTarget = (event, elem) => {
  let isTarget = false;

  for (let i = 0; i < elem.childNodes.length; i++) {
    const children = elem.childNodes[i];

    if (event.target === children) {
      isTarget = true;
      return isTarget;
    } else {
      checkNode(children);
    }
  }

  function checkNode(node) {
    if (node.hasChildNodes()) {
      for (let i = 0; i < node.childNodes.length; i++) {
        const recuChildren = node.childNodes[i];
        if (event.target === node) {
          isTarget = true;
          return true;
        }
        checkNode(recuChildren);
      }
    } else if (event.target === node) {
      isTarget = true;
      return true;
    } else {
      return false;
    }
    return true;
  }
  return isTarget;
}
