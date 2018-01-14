/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _application = __webpack_require__(1);
	
	var _application2 = _interopRequireDefault(_application);
	
	var _apiService = __webpack_require__(15);
	
	var _apiService2 = _interopRequireDefault(_apiService);
	
	var _createSvgSprite = __webpack_require__(21);
	
	var _createSvgSprite2 = _interopRequireDefault(_createSvgSprite);
	
	var _meetingRoomsView = __webpack_require__(6);
	
	var _meetingRoomsView2 = _interopRequireDefault(_meetingRoomsView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// const createEvent = mutation.createEvent(
	//   `{
	//     title: "Тестовой запрос",
	//     dateStart: "${new Date().toISOString()}",
	//     dateEnd: "${new Date().toISOString()}"}
	//   `, `"${[1]}"`, 6);
	_apiService2.default.getAll().then(function (data) {
	  _application2.default.data = data;
	  _application2.default.showMeetingRooms();
	  (0, _createSvgSprite2.default)();
	
	  document.addEventListener('dateChange', function (e) {
	    var newData = Object.assign(data, {
	      date: e.detail.date
	    });
	
	    _application2.default.data = newData;
	    _application2.default.showMeetingRooms();
	  });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _roomsPresenter = __webpack_require__(2);
	
	var _roomsPresenter2 = _interopRequireDefault(_roomsPresenter);
	
	var _data = __webpack_require__(4);
	
	var _view = __webpack_require__(5);
	
	var _view2 = _interopRequireDefault(_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var meetingRoomsData = void 0;
	
	var Application = function () {
	  function Application() {
	    _classCallCheck(this, Application);
	  }
	
	  _createClass(Application, null, [{
	    key: 'showMeetingRooms',
	    value: function showMeetingRooms() {
	      (0, _view2.default)(_data.TYPES.MEETING_ROOMS, meetingRoomsData);
	    }
	  }, {
	    key: 'showEventCreate',
	    value: function showEventCreate() {
	      (0, _view2.default)(_data.TYPES.EVENT_CREATE, meetingRoomsData);
	    }
	  }, {
	    key: 'data',
	    set: function set(data) {
	      meetingRoomsData = data;
	    }
	  }]);
	
	  return Application;
	}();
	
	exports.default = Application;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _model = __webpack_require__(3);
	
	var _model2 = _interopRequireDefault(_model);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RoomsPresenter = function () {
	  function RoomsPresenter() {
	    var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _model2.default;
	
	    _classCallCheck(this, RoomsPresenter);
	
	    this.model = model;
	  }
	
	  _createClass(RoomsPresenter, [{
	    key: 'setData',
	    value: function setData(data) {
	      this.events = data.events;
	      this.rooms = data.rooms;
	      console.log(this.rooms, this.events);
	    }
	  }, {
	    key: 'renderRooms',
	    value: function renderRooms() {}
	  }]);
	
	  return RoomsPresenter;
	}();
	
	exports.default = new RoomsPresenter();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Model = function Model(state) {
	  _classCallCheck(this, Model);
	
	  this._state = state;
	  this._defaultState = state;
	};
	
	exports.default = new Model();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TYPES = exports.TYPES = {
	  MEETING_ROOMS: 'meeting_rooms',
	  EVENT_CREATE: 'event-create',
	  EVENT_EDIT: 'event-edit',
	  ERROR: 'error'
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _data = __webpack_require__(4);
	
	var _meetingRoomsView = __webpack_require__(6);
	
	var _meetingRoomsView2 = _interopRequireDefault(_meetingRoomsView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var RENDERS = _defineProperty({}, _data.TYPES.MEETING_ROOMS, _meetingRoomsView2.default);
	
	exports.default = function (type, inputData) {
	  RENDERS[type](inputData).renderView();
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _meetingRoomsView = __webpack_require__(7);
	
	var _meetingRoomsView2 = _interopRequireDefault(_meetingRoomsView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (data) {
	  return new _meetingRoomsView2.default(data);
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _abstractView = __webpack_require__(8);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	var _application = __webpack_require__(1);
	
	var _application2 = _interopRequireDefault(_application);
	
	var _calendar = __webpack_require__(9);
	
	var _renderCalendarWidget = __webpack_require__(12);
	
	var _renderCalendarWidget2 = _interopRequireDefault(_renderCalendarWidget);
	
	var _helpers = __webpack_require__(11);
	
	var _activateRoomName = __webpack_require__(13);
	
	var _activateRoomName2 = _interopRequireDefault(_activateRoomName);
	
	var _renderEvents = __webpack_require__(14);
	
	var _renderEvents2 = _interopRequireDefault(_renderEvents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MeetingRoomsView = function (_AbstractView) {
	  _inherits(MeetingRoomsView, _AbstractView);
	
	  function MeetingRoomsView(inputData) {
	    _classCallCheck(this, MeetingRoomsView);
	
	    var _this = _possibleConstructorReturn(this, (MeetingRoomsView.__proto__ || Object.getPrototypeOf(MeetingRoomsView)).call(this, inputData));
	
	    _this.rooms = inputData.rooms;
	    _this.events = inputData.events;
	    _this.date = inputData.date || new Date();
	    _this.year = _this.date.getFullYear();
	    _this.month = _this.date.getMonth();
	    _this.day = _this.date.getDate();
	    _this.hour = _this.date.getHours();
	    _this.minute = _this.date.getMinutes();
	    _this.dayMin = 8;
	    _this.dayMax = 22;
	    _this.dayTotal = _this.dayMax - _this.dayMin + 1;
	    _this.initialAppDate = new Date();
	    _this.initialAppDay = new Date(_this.initialAppDate.getFullYear(), _this.initialAppDate.getMonth(), _this.initialAppDate.getDate()).valueOf();
	    _this.dateValue = new Date(_this.date.getFullYear(), _this.date.getMonth(), _this.date.getDate()).valueOf();
	    _this.IS_INPUT_DATE_EQUAL_INITIAL_APP_DATE = _this.dateValue === _this.initialAppDay;
	    return _this;
	  }
	
	  _createClass(MeetingRoomsView, [{
	    key: 'diagramCellMarkup',
	    value: function diagramCellMarkup(cellMarkup, time) {
	      var cell = cellMarkup !== undefined ? cellMarkup : '';
	      var dataTime = '' + (time !== undefined ? 'data-time=' + time : '');
	      return '<div class="diagram__cell" ' + dataTime + '>' + cell + '</div>';
	    }
	  }, {
	    key: 'getCellList',
	    value: function getCellList(inputMarkup) {
	      var cellList = '';
	      for (var time = this.dayMin; time <= this.dayMax; time++) {
	        cellList += this.diagramCellMarkup(inputMarkup, time);
	      }
	      return cellList;
	    }
	  }, {
	    key: 'diagramTimeMarkup',
	    value: function diagramTimeMarkup(time, isNow, isCurrentTime) {
	      var now = isNow ? ' diagram__time--now' : '';
	      var minute = this.minute < 10 ? '0' + this.minute : this.minute;
	      var currentTime = this.hour + ':' + minute;
	      return '<span class="diagram__time' + now + '">' + (isCurrentTime !== undefined ? currentTime : time) + '</span>';
	    }
	  }, {
	    key: 'diagramTimelineTimeMarkup',
	    value: function diagramTimelineTimeMarkup() {
	      var diagramTimeMarkup = this.diagramTimeMarkup(false, true, true);
	      var diagramDayMarkup = '';
	      for (var time = this.dayMin; time <= this.dayMax; time++) {
	        diagramDayMarkup += this.diagramCellMarkup(this.diagramTimeMarkup(time));
	      }
	      return '<div class="diagram__day">' + diagramTimeMarkup + diagramDayMarkup + '</div>';
	    }
	  }, {
	    key: 'updateTime',
	    value: function updateTime(inputDate) {
	      var date = inputDate || new Date();
	      this.date = date;
	      this.hour = date.getHours();
	      this.minute = date.getMinutes();
	    }
	  }, {
	    key: 'clock',
	    value: function clock() {
	      var _this2 = this;
	
	      this.updateTime();
	      var timeNowEl = this.element.querySelector('.diagram__time--now');
	      var dayEl = this.element.querySelector('.diagram__day');
	      var diagramTimeArr = this.element.querySelectorAll('.diagram__time');
	      var dayElWidth = getComputedStyle(dayEl).width.slice(0, -2);
	      var minuteInSec = 60 * 1000;
	      var date = new Date();
	      var dayStart = date.setHours(8, 0, 0);
	      var now = Date.now();
	      var currentMinute = (now - dayStart) / minuteInSec;
	      var minuteStep = dayElWidth / (this.dayTotal * 60);
	      var minute = this.minute < 10 ? '0' + this.minute : this.minute;
	
	      timeNowEl.classList.add('show');
	      timeNowEl.style.left = currentMinute * minuteStep + 'px';
	      timeNowEl.innerHTML = this.hour + ':' + minute;
	      if (currentMinute < 0 || currentMinute > this.dayTotal * 60) {
	        timeNowEl.style.opacity = 0;
	      }
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = Array.from(diagramTimeArr)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var diagramTime = _step.value;
	
	          var timeCellValue = +diagramTime.innerHTML;
	          if (timeCellValue <= this.date.getHours()) {
	            diagramTime.classList.add('diagram__time--passed');
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      setInterval(function () {
	        _this2.clock();
	      }, minuteInSec);
	    }
	  }, {
	    key: 'diagramRowMarkup',
	    value: function diagramRowMarkup(_diagramSidebarMarkup, _diagramRowBodyMarkup, _rowClass) {
	      var rowClass = _rowClass || 'diagram__row';
	      var diagramSidebarMarkup = _diagramSidebarMarkup || '';
	      var diagramRowBodyMarkup = _diagramRowBodyMarkup || '';
	      return '<div class="' + rowClass + '">\n              <div class="diagram__sidebar">' + diagramSidebarMarkup + '</div>\n              <div class="diagram__row-body">' + diagramRowBodyMarkup + '</div>\n            </div>';
	    }
	  }, {
	    key: 'getRoomMarkup',
	    value: function getRoomMarkup(name, capacity) {
	      return '<div class="diagram__room-name">' + name + '</div>\n            <div class="diagram__room-capacity">' + capacity + ' \u0447\u0435\u043B\u043E\u0432\u0435\u043A</div>';
	    }
	  }, {
	    key: 'getRoomCellList',
	    value: function getRoomCellList(roomId) {
	      var cellList = '';
	      outer: for (var time = this.dayMin; time <= this.dayMax; time++) {
	        var cellHourValue = new Date(this.year, this.month, this.day, time).valueOf();
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	          for (var _iterator2 = this.events[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var event = _step2.value;
	
	            var eventDateStart = new Date(event.dateStart);
	            var eventDateEnd = new Date(event.dateEnd);
	            var eventDateStartValue = new Date(eventDateStart.getFullYear(), eventDateStart.getMonth(), eventDateStart.getDate(), eventDateStart.getHours(), eventDateStart.getMinutes()).valueOf();
	            var eventDateEndValue = new Date(eventDateEnd.getFullYear(), eventDateEnd.getMonth(), eventDateEnd.getDate(), eventDateEnd.getHours(), eventDateEnd.getMinutes()).valueOf();
	
	            if (roomId === event.id) {
	              var eventStartDiff = (eventDateStartValue - cellHourValue) / 60000;
	              var eventEndDiff = (eventDateEndValue - cellHourValue) / 60000;
	              if (eventStartDiff >= 0 && eventStartDiff <= 60) {
	                //Если дата и время события собвпадают с датай и временем ячейки
	                cellList += '<div class="diagram__cell" data-time="' + time + '" data-event-started="' + eventStartDiff + '"></div>';
	                continue outer;
	              } else if (eventStartDiff <= 0 && eventEndDiff <= 60 && eventEndDiff > 0) {
	                //Если событие началось до ячейки и продолжается в ней
	                cellList += '<div class="diagram__cell" data-time="' + time + '" data-event-ended="' + eventEndDiff + '"></div>';
	                continue outer;
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError2 = true;
	          _iteratorError2 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	              _iterator2.return();
	            }
	          } finally {
	            if (_didIteratorError2) {
	              throw _iteratorError2;
	            }
	          }
	        }
	
	        cellList += '<div class="diagram__cell" data-time="' + time + '"></div>';
	      }
	      return cellList;
	    }
	  }, {
	    key: 'getRoomList',
	    value: function getRoomList(floor) {
	      var roomList = '';
	
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = this.rooms[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var room = _step3.value;
	
	          if (room.floor === floor) {
	            var roomMarkup = this.getRoomMarkup(room.title, room.capacity);
	            roomList += '<div class="diagram__room" data-room-id="' + room.id + '">\n                        ' + this.diagramRowMarkup(roomMarkup, this.getRoomCellList(room.id)) + '\n                      </div>';
	          }
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	
	      return roomList;
	    }
	  }, {
	    key: 'getFloorListMarkup',
	    value: function getFloorListMarkup() {
	      var floors = [];
	
	      var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;
	
	      try {
	        for (var _iterator4 = this.rooms[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          var room = _step4.value;
	
	          if (floors.indexOf(room.floor) === -1) {
	            floors.push(room.floor);
	          }
	        }
	      } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion4 && _iterator4.return) {
	            _iterator4.return();
	          }
	        } finally {
	          if (_didIteratorError4) {
	            throw _iteratorError4;
	          }
	        }
	      }
	
	      floors.sort(function (a, b) {
	        if (a > b) return 1;
	        if (a < b) return -1;
	      });
	
	      var floorList = '';
	
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;
	
	      try {
	        for (var _iterator5 = floors[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var floor = _step5.value;
	
	          floorList += '<div class="diagram__floor" data-floor="' + floor + '">\n                      <div class="diagram__floor-title">\n                            ' + this.diagramRowMarkup(floor + ' \u044D\u0442\u0430\u0436') + '\n                      </div>\n                      ' + this.getRoomList(floor) + '\n                    </div>';
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }
	
	      return floorList;
	    }
	  }, {
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var header = '<header class="header">\n                      <div class="logo"></div>\n                      <a href="event-new.html" class="button header__button button--blue" data-event-new-trigger>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0443</a>\n                  </header>';
	
	      var diagram = '<div class="diagram">\n                      <div class="diagram__body">\n                        <div class="diagram__body-cnt">\n                            <div class="diagram__time-line">' + this.diagramRowMarkup((0, _calendar.calendarMarkup)(), this.diagramTimelineTimeMarkup()) + '</div>\n                            <div class="diagram__content-wrapper">\n                              <div class="diagram__content">\n                                ' + this.diagramRowMarkup(null, this.getCellList(), 'diagram__cell-grid') + '\n                                ' + this.getFloorListMarkup() + '\n                              </div>\n                            </div>\n                        </div>\n                      </div>\n                    </div>';
	
	      return '<div class="inpex-page" id="app">\n              ' + header + ' \n              ' + diagram + '\n            </div>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      var _this3 = this;
	
	      var eventNewTrigger = this.element.querySelector('[data-event-new-trigger]');
	
	      eventNewTrigger.addEventListener('click', function (e) {
	        e.preventDefault();
	        alert('times on');
	        // Application.showEventCreate();
	      });
	
	      var windowResizeHandler = function windowResizeHandler() {
	        _this3.clock();
	      };
	
	      window.addEventListener('resize', (0, _helpers.debounce)(windowResizeHandler, 66));
	    }
	  }, {
	    key: 'viewRendered',
	    value: function viewRendered() {
	      if (this.IS_INPUT_DATE_EQUAL_INITIAL_APP_DATE) {
	        this.clock();
	      }
	
	      (0, _renderEvents2.default)(this.events, this.date);
	      (0, _calendar.openCalendar)();
	      (0, _activateRoomName2.default)();
	      console.log(this.events);
	      var renderCalendarWidget = new _renderCalendarWidget2.default(this.date);
	      renderCalendarWidget.render();
	    }
	  }]);
	
	  return MeetingRoomsView;
	}(_abstractView2.default);
	
	exports.default = MeetingRoomsView;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AbstractView = function () {
	  function AbstractView(inputData) {
	    _classCallCheck(this, AbstractView);
	
	    this.inputData = inputData;
	  }
	
	  /**
	   * returns a DOM element created from getMarkup()
	   * and binds event handlers to it
	   * @return {Element}
	   */
	
	
	  _createClass(AbstractView, [{
	    key: 'renderView',
	    value: function renderView() {
	      var appElement = document.getElementById('app');
	      appElement.parentNode.replaceChild(this.element, appElement);
	      this.viewRendered();
	    }
	  }, {
	    key: 'getMarkup',
	    value: function getMarkup() {
	      throw new Error('Abstract method should be implemented');
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {}
	  }, {
	    key: 'clearHandlers',
	    value: function clearHandlers() {}
	  }, {
	    key: 'viewRendered',
	    value: function viewRendered() {}
	  }, {
	    key: 'element',
	    get: function get() {
	      if (!this._element) {
	        var domElement = document.createElement('div');
	        domElement.innerHTML = this.getMarkup();
	        this._element = domElement.firstChild;
	        this.bindHandlers();
	      }
	      return this._element;
	    }
	  }]);
	
	  return AbstractView;
	}();
	
	exports.default = AbstractView;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.openCalendar = exports.calendarMarkup = undefined;
	
	var _hideOnClickOutside = __webpack_require__(10);
	
	var _hideOnClickOutside2 = _interopRequireDefault(_hideOnClickOutside);
	
	var _helpers = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var calendarMarkup = function calendarMarkup() {
	  return '<div class="calendar" id="calendar">\n              <div class="calendar__header">\n                  <span class="calendar__header-trigger calendar__header-trigger--left circle-icon circle-icon--left" data-calendar-trigger data-direction="left">\n                      <i>\n                          <svg width="12" height="12">\n                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use>\n                          </svg>\n                      </i>\n                  </span>\n                  <span class="calendar__header-date-title" id="calendarTrigger">\n                  </span>\n                  <div class="calendar__header-trigger calendar__header-trigger--right circle-icon" data-calendar-trigger data-direction="right">\n                      <i>\n                          <svg width="12" height="12">\n                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use>\n                          </svg>\n                      </i>\n                  </div>\n              </div>\n              <div class="calendar__body" id="calendarBody">\n                  <div class="calendar-widget">\n                      <div class="calendar-widget__body" id="calendarWidget" data-quarter="1"></div>\n                  </div>\n              </div>\n              <div class="calendar__overlay"></div>\n          </div>';
	};
	
	var openCalendar = function openCalendar() {
	  var calendarTrigger = document.getElementById('calendarTrigger');
	  var calendar = document.getElementById('calendar');
	  var body = document.querySelector('body');
	  var classToAdd = 'opened';
	  var classToBody = 'calendar-opened';
	
	  if (calendarTrigger === null) {
	    return false;
	  }
	
	  var calendarOverlay = calendar.querySelector('.calendar__overlay');
	
	  calendarTrigger.addEventListener('click', function (e) {
	    e.preventDefault();
	    if (calendar.classList.contains(classToAdd)) {
	      removeAction();
	    } else {
	      calendar.classList.add(classToAdd);
	      body.classList.add(classToBody);
	    }
	
	    (0, _hideOnClickOutside2.default)('#calendar', removeAction);
	
	    (0, _helpers.addListenerMulti)(calendarOverlay, 'click touchstart', removeAction);
	  });
	
	  var removeAction = function removeAction() {
	    calendar.classList.remove(classToAdd);
	    body.classList.remove(classToBody);
	  };
	
	  return true;
	};
	
	exports.calendarMarkup = calendarMarkup;
	exports.openCalendar = openCalendar;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(11);
	
	exports.default = function (selector, callback) {
	  var outsideClickListener = function outsideClickListener(event) {
	    var elem = document.querySelector(selector);
	    var elemChildIsTarget = checkEventTarget(event, selector);
	    var clickCallback = callback || function () {};
	
	    if (event.target !== elem && !elemChildIsTarget) {
	      clickCallback();
	      removeClickListener();
	    }
	  };
	
	  var removeClickListener = function removeClickListener() {
	    (0, _helpers.removeListenerMulti)(document, 'click touchstart', outsideClickListener);
	  };
	
	  (0, _helpers.addListenerMulti)(document, 'click touchstart', outsideClickListener);
	};
	
	function checkEventTarget(event, selector) {
	  var elem = document.querySelector(selector);
	  var isTarget = false;
	
	  for (var i = 0; i < elem.childNodes.length; i++) {
	    var children = elem.childNodes[i];
	
	    if (event.target === children) {
	      isTarget = true;
	      return isTarget;
	    } else {
	      checkNode(children);
	    }
	  }
	
	  function checkNode(node) {
	    if (node.hasChildNodes()) {
	      for (var _i = 0; _i < node.childNodes.length; _i++) {
	        var recuChildren = node.childNodes[_i];
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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getCoords = function getCoords(elem) {
	  var box = elem.getBoundingClientRect();
	
	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	};
	
	var getNodeFromMarkup = function getNodeFromMarkup(markupTemplate) {
	  var div = document.createElement('div');
	  div.innerHTML = markupTemplate;
	  return div.firstChild;
	};
	
	var getDay = function getDay(date) {
	  // получить номер дня недели, от 0(пн) до 6(вс)
	  var day = date.getDay();
	  if (day === 0) {
	    day = 7;
	  }
	  return day - 1;
	};
	
	var addListenerMulti = function addListenerMulti(el, s, fn) {
	  s.split(' ').forEach(function (e) {
	    el.addEventListener(e, fn, false);
	  });
	};
	var removeListenerMulti = function removeListenerMulti(el, s, fn) {
	  s.split(' ').forEach(function (e) {
	    el.removeEventListener(e, fn, false);
	  });
	};
	
	var debounce = function debounce(f, ms) {
	  var timer = null;
	
	  return function () {
	    var _this = this;
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var onComplete = function onComplete() {
	      f.apply(_this, args);
	      timer = null;
	    };
	
	    if (timer) {
	      clearTimeout(timer);
	    }
	
	    timer = setTimeout(onComplete, ms);
	  };
	};
	
	exports.getCoords = getCoords;
	exports.getNodeFromMarkup = getNodeFromMarkup;
	exports.getDay = getDay;
	exports.addListenerMulti = addListenerMulti;
	exports.removeListenerMulti = removeListenerMulti;
	exports.debounce = debounce;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _helpers = __webpack_require__(11);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RenderCalendarWidget = function () {
	  function RenderCalendarWidget(date) {
	    _classCallCheck(this, RenderCalendarWidget);
	
	    this.date = date;
	    this.calendarWidget = document.getElementById('calendarWidget');
	    this.calendar = document.getElementById('calendar');
	    this._monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
	    this._monthNamesShortcuts = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
	  }
	
	  _createClass(RenderCalendarWidget, [{
	    key: 'getMonth',
	    value: function getMonth(year, month) {
	      var d = new Date(year, month);
	      var today = this.date.getDate();
	      var currentMonth = this.date.getMonth();
	      var now = new Date();
	      var nowDay = now.getDate();
	      var nowMonth = now.getMonth();
	
	      var daysView = '';
	
	      for (var i = 0; i < (0, _helpers.getDay)(d); i++) {
	        daysView += '<div class="month__day empty"></div>';
	      }
	
	      while (d.getMonth() === month) {
	        var todayClass = '';
	        if (d.getDate() === today && currentMonth === month) {
	          todayClass = 'today';
	        } else if (d.getDate() === nowDay && nowMonth === month) {
	          todayClass = 'still-today';
	        }
	
	        daysView += '<div class="month__day ' + todayClass + '" data-shortcut="' + month + '">' + d.getDate() + '</div>';
	
	        d.setDate(d.getDate() + 1);
	      }
	
	      if ((0, _helpers.getDay)(d) !== 0) {
	        for (var _i = (0, _helpers.getDay)(d); _i < 7; _i++) {
	          daysView += '<div class="month__day empty"></div>';
	        }
	      }
	
	      var monthView = '<div class="calendar-widget__month month">\n                          <div class="month__name" data-motnh="' + currentMonth + '">' + this._monthNames[month] + '</div>\n                          <div class="month__week">\n                              <div class="month__day">\u041F\u043D</div>\n                              <div class="month__day">\u0412\u0442</div>\n                              <div class="month__day">\u0421\u0440</div>\n                              <div class="month__day">\u0427\u0442</div>\n                              <div class="month__day">\u041F\u0442</div>\n                              <div class="month__day">\u0421\u0431</div>\n                              <div class="month__day">\u0412\u0441</div>\n                          </div>\n  \n                          <div class="month__days">\n                              ' + daysView + '\n                          </div>\n                      </div>';
	
	      return monthView;
	    }
	  }, {
	    key: 'moveCalendarWidget',
	    value: function moveCalendarWidget() {
	      var yearQuarter = this.calendarWidget.getAttribute('data-quarter');
	
	      this.calendarWidget.style.transform = 'translateX(-' + 100 * (+yearQuarter - 1) + '%)';
	    }
	  }, {
	    key: 'activateCalendarSlide',
	    value: function activateCalendarSlide() {
	      var _this = this;
	
	      var calendarTriggerArr = this.calendar.querySelectorAll('[data-calendar-trigger]');
	      var self = this;
	
	      var yearQuarter = this.calendarWidget.getAttribute('data-quarter');
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        var _loop = function _loop() {
	          var calendarTrigger = _step.value;
	
	          calendarTrigger.addEventListener('click', function () {
	            var calendarTriggerDirection = calendarTrigger.getAttribute('data-direction');
	            var windowWidth = window.innerWidth;
	            var quarterMaxValue = void 0;
	
	            if (!_this.calendar.classList.contains('opened')) {
	              return false;
	            }
	
	            quarterMaxValue = windowWidth < 1280 ? 12 : 4;
	
	            if (calendarTriggerDirection === 'left' && yearQuarter > 1) {
	              --yearQuarter;
	              _this.calendarWidget.setAttribute('data-quarter', yearQuarter);
	              self.moveCalendarWidget();
	            } else if (calendarTriggerDirection === 'right' && yearQuarter < quarterMaxValue) {
	              yearQuarter++;
	              _this.calendarWidget.setAttribute('data-quarter', yearQuarter);
	              self.moveCalendarWidget();
	            }
	            return true;
	          });
	        };
	
	        for (var _iterator = Array.from(calendarTriggerArr)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          _loop();
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'dayHandler',
	    value: function dayHandler() {
	      var _this2 = this;
	
	      var dayArr = this.calendarWidget.querySelectorAll('.month__days .month__day:not(.empty)');
	      var calendarHeaderTitle = this.calendar.querySelector('.calendar__header-date-title');
	
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        var _loop2 = function _loop2() {
	          var day = _step2.value;
	
	          var yearValue = _this2.date.getFullYear();
	          var monthValue = day.getAttribute('data-shortcut');
	          var dayValue = day.innerHTML;
	          var hourValue = _this2.date.getHours();
	          var minutesValue = _this2.date.getMinutes();
	          var secondsValue = _this2.date.getSeconds();
	
	          var dateChangeEvent = new CustomEvent("dateChange", {
	            detail: {
	              date: new Date(yearValue, monthValue, dayValue, hourValue, minutesValue, secondsValue)
	            }
	          });
	
	          day.addEventListener('click', function () {
	            _this2.calendarWidget.querySelector('.month__day.today').classList.remove('today');
	            day.classList.add('today');
	            calendarHeaderTitle.innerHTML = day.innerHTML + ' ' + _this2._monthNamesShortcuts[monthValue];
	
	            document.dispatchEvent(dateChangeEvent);
	          });
	        };
	
	        for (var _iterator2 = Array.from(dayArr)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          _loop2();
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var now = new Date();
	      var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
	      var inputDate = this.date;
	      var inputDateValue = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()).valueOf();
	      var day = this.date.getDate();
	      var currentYear = this.date.getFullYear();
	      var currentMonth = this.date.getMonth() + 1;
	
	      if (this.calendar === null) {
	        return false;
	      }
	
	      var dayTitle = inputDateValue === today ? '· Сегодня' : '';
	
	      var calendarHeaderTitle = this.calendar.querySelector('.calendar__header-date-title');
	      calendarHeaderTitle.innerHTML = day + ' ' + this._monthNamesShortcuts[currentMonth - 1] + ' ' + dayTitle;
	
	      for (var i = 0; i <= 11; i++) {
	        var monthView = this.getMonth(currentYear, i);
	        var monthViewNode = (0, _helpers.getNodeFromMarkup)(monthView);
	
	        this.calendarWidget.appendChild(monthViewNode);
	      }
	
	      if (window.innerWidth < 1280) {
	        this.calendarWidget.setAttribute('data-quarter', currentMonth);
	      } else {
	        this.calendarWidget.setAttribute('data-quarter', Math.floor((currentMonth + 2) / 3));
	      }
	
	      this.activateCalendarSlide();
	
	      this.moveCalendarWidget();
	
	      this.dayHandler();
	
	      return true;
	    }
	  }]);
	
	  return RenderCalendarWidget;
	}();
	
	exports.default = RenderCalendarWidget;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(11);
	
	exports.default = function () {
	  var diagramBody = document.querySelector('.diagram__body');
	  var diagramBodyCnt = document.querySelector('.diagram__body-cnt');
	
	  if (diagramBody === null) {
	    return;
	  }
	  var diagramRoomArr = diagramBodyCnt.querySelectorAll('.diagram__room');
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = Array.from(diagramRoomArr)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var diagramRoom = _step.value;
	
	      var diagramRoomName = diagramRoom.querySelector('.diagram__room-name');
	      var roomNameTag = '<div class="room-name-tag">' + diagramRoomName.innerHTML + '</div>';
	      var roomNameTagNode = (0, _helpers.getNodeFromMarkup)(roomNameTag);
	      if (diagramRoom.classList.contains('diagram__room--filled')) {
	        roomNameTagNode.classList.add('filled');
	      }
	      diagramRoom.appendChild(roomNameTagNode);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  diagramBody.addEventListener('scroll', function () {
	    var elCoordsLeft = -1 * (0, _helpers.getCoords)(diagramBodyCnt).left;
	    var roomNameTagArr = document.querySelectorAll('.room-name-tag');
	    var diagramRowBody = document.querySelector('.diagram__row-body');
	    var diagramRowBodyLeftCoords = (0, _helpers.getCoords)(diagramRowBody).left;
	
	    if (elCoordsLeft > 180) {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = Array.from(roomNameTagArr)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var roomNameTag = _step2.value;
	
	          roomNameTag.classList.add('taged');
	          roomNameTag.style.transform = 'translateX(' + (-1 * diagramRowBodyLeftCoords + 180) + 'px)';
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    } else {
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = Array.from(roomNameTagArr)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var _roomNameTag = _step3.value;
	
	          _roomNameTag.classList.remove('taged');
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	    }
	  });
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(11);
	
	var getEventMarkup = function getEventMarkup(createEventId, isFilled, inputRoomId, _dateCreateEventFrom, _dateCreateEventTo) {
	  var eventId = createEventId !== null ? 'data-event-id="' + createEventId + '"' : '';
	  var roomId = inputRoomId !== undefined ? 'data-room-parent-id="' + inputRoomId + '"' : '';
	  var dateCreateEventFrom = _dateCreateEventFrom !== undefined ? 'data-create-event-from="' + _dateCreateEventFrom + '"' : '';
	  var dateCreateEventTo = _dateCreateEventTo !== undefined ? 'data-create-event-to="' + _dateCreateEventTo + '"' : '';
	  var extraClass = isFilled ? 'time-slot--filled' : 'time-slot--empty';
	  var extraAttr = isFilled ? 'data-event-edit-trigger' : 'data-event-new-trigger';
	  return '<span class="time-slot ' + extraClass + '" ' + eventId + ' ' + extraAttr + ' ' + dateCreateEventFrom + ' ' + dateCreateEventTo + ' ' + roomId + '></span>';
	};
	
	var getEventNode = function getEventNode(createEventId, eventMarkupState, left, width, inputRoomId, dateCreateEventFrom, dateCreateEventTo) {
	  var eventMarkup = getEventMarkup(createEventId, eventMarkupState, inputRoomId, dateCreateEventFrom, dateCreateEventTo);
	  var eventNode = (0, _helpers.getNodeFromMarkup)(eventMarkup);
	
	  eventNode.style.cssText = 'left: ' + left + 'px; \n            width: ' + width + 'px';
	
	  return eventNode;
	};
	
	exports.default = function (inputEvents, inputDate) {
	  var eventContainerArr = document.querySelectorAll('.diagram__room .diagram__cell');
	  var inputDateDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()).valueOf();
	  var now = new Date();
	  var currentHour = now.getHours();
	  var currentMinute = now.getMinutes();
	  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = Array.from(eventContainerArr)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var eventContainer = _step.value;
	
	      var MINUTE = 60 * 1000;
	      var diagramRowBody = eventContainer.parentNode;
	      var diagramRowBodyCoordsLeft = (0, _helpers.getCoords)(diagramRowBody).left;
	      var containerTimeStart = +eventContainer.getAttribute('data-time');
	      var containerEventTimeStart = +eventContainer.getAttribute('data-event-started');
	      var containerEventTimeEnd = +eventContainer.getAttribute('data-event-ended');
	      var containerWidth = getComputedStyle(eventContainer).width.slice(0, -2);
	      var minuteLength = containerWidth / 60; //Длина минуты в пикселях
	      var containerCoordsLeft = (0, _helpers.getCoords)(eventContainer).left;
	      var insertValue = containerCoordsLeft - diagramRowBodyCoordsLeft;
	      var containerRoomId = diagramRowBody.parentNode.parentNode.getAttribute('data-room-id');
	      var leftMoovingValue = void 0;
	      var eventWidth = void 0;
	      var eventCreateDateTo = void 0; //Дата для создания события
	      var eventCreateDateForm = void 0; //Дата для создания события
	
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = inputEvents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var event = _step2.value;
	
	          var dateStart = new Date(event.dateStart);
	          var dateEnd = new Date(event.dateEnd);
	          var eventStartDay = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate()).valueOf();
	          var hourEventStart = dateStart.getHours();
	          var minuteEventStart = dateStart.getMinutes();
	          var eventRoomId = event.room.id;
	          var eventDuration = (dateEnd.valueOf() - dateStart.valueOf()) / MINUTE; //Длительность события
	
	          var IS_THE_RIGHT_ROOM = containerRoomId === eventRoomId;
	          var IS_THE_RIGHT_HOUR = hourEventStart === containerTimeStart;
	
	          if (eventStartDay === inputDateDay) {
	            //Если событие происходит в этот день
	            if (IS_THE_RIGHT_ROOM && IS_THE_RIGHT_HOUR) {
	              leftMoovingValue = insertValue + minuteLength * minuteEventStart;
	              eventWidth = minuteLength * eventDuration;
	              diagramRowBody.appendChild(getEventNode(event.id, true, leftMoovingValue, eventWidth));
	            }
	          } else if (eventStartDay > inputDateDay) {//Если событие происходит в будущем
	
	          } else if (eventStartDay < inputDateDay) {//Если событие происходит в прошлом
	
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      if (today <= inputDateDay) {
	        if (containerTimeStart === currentHour) {
	          //Если время контейнера соответствует текущему времени
	          eventWidth = minuteLength * (60 - currentMinute);
	          leftMoovingValue = insertValue + minuteLength * currentMinute;
	
	          if (containerEventTimeStart > 0) {
	            //Если в контейнере есть время начала события
	            eventWidth = (containerEventTimeStart - currentMinute) * minuteLength;
	          } else if (containerEventTimeEnd > 0) {
	            eventWidth = (60 - containerEventTimeEnd - (currentMinute - containerEventTimeEnd)) * minuteLength;
	            leftMoovingValue = insertValue + containerEventTimeEnd * minuteLength;
	            leftMoovingValue = insertValue + currentMinute * minuteLength;
	          }
	
	          eventCreateDateTo = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate(), containerTimeStart, currentMinute);
	          diagramRowBody.appendChild(getEventNode(null, false, leftMoovingValue, eventWidth, containerRoomId, eventCreateDateTo));
	        } else if (containerTimeStart > currentHour) {
	          leftMoovingValue = insertValue;
	          eventWidth = containerWidth;
	          eventCreateDateTo = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate(), containerTimeStart);
	
	          if (containerEventTimeEnd > 0) {
	            //Если в контейнере есть время окончания события
	            eventWidth = (60 - containerEventTimeEnd) * minuteLength;
	            leftMoovingValue = insertValue + containerEventTimeEnd * minuteLength;
	
	            eventCreateDateTo = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate(), containerTimeStart, containerEventTimeEnd);
	          } else if (containerEventTimeStart > 0) {
	            eventWidth = containerEventTimeStart * minuteLength;
	            leftMoovingValue = insertValue;
	            eventCreateDateTo = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate(), containerTimeStart);
	          }
	
	          diagramRowBody.appendChild(getEventNode(null, false, leftMoovingValue, eventWidth, containerRoomId, eventCreateDateTo));
	        }
	        // } else if (today < inputDateDay) {
	        //   leftMoovingValue = insertValue;
	        //   eventWidth = containerWidth;
	        //   eventCreateDateTo = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate(), containerTimeStart);
	        //   diagramRowBody.appendChild(getEventNode(null, false, leftMoovingValue, eventWidth, containerRoomId, eventCreateDateTo));
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(16);
	
	var _queries = __webpack_require__(17);
	
	var _helpers = __webpack_require__(20);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ApiService = function () {
	  function ApiService() {
	    _classCallCheck(this, ApiService);
	  }
	
	  _createClass(ApiService, [{
	    key: 'getRooms',
	    value: function getRooms() {
	      return (0, _helpers.grapnhQlRequest)(_queries.query.rooms);
	    }
	  }, {
	    key: 'getEvents',
	    value: function getEvents() {
	      return (0, _helpers.grapnhQlRequest)(_queries.query.events);
	    }
	  }, {
	    key: 'getUsers',
	    value: function getUsers() {
	      return (0, _helpers.grapnhQlRequest)(_queries.query.users);
	    }
	  }, {
	    key: 'getAll',
	    value: function getAll() {
	      var _this = this;
	
	      var responseData = {};
	      var getAllRequest = new Promise(function (resolve, reject) {
	        resolve(_this.getRooms());
	      });
	      return getAllRequest.then(function (res) {
	        responseData.rooms = res.data.rooms;
	        return _this.getEvents();
	      }).then(function (res) {
	        responseData.events = res.data.events;
	        return _this.getUsers();
	      }).then(function (res) {
	        responseData.users = res.data.users;
	        return responseData;
	      }).catch(function (error) {
	        throw new Error('Rejected: ' + error);
	      });
	    }
	  }]);
	
	  return ApiService;
	}();
	
	exports.default = new ApiService();

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	(function (self) {
	  'use strict';
	
	  if (self.fetch) {
	    return;
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };
	
	  if (support.arrayBuffer) {
	    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];
	
	    var isDataView = function isDataView(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj);
	    };
	
	    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
	    };
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function next() {
	        var value = items.shift();
	        return { done: value === undefined, value: value };
	      }
	    };
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function () {
	        return iterator;
	      };
	    }
	
	    return iterator;
	  }
	
	  function Headers(headers) {
	    this.map = {};
	
	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (Array.isArray(headers)) {
	      headers.forEach(function (header) {
	        this.append(header[0], header[1]);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }
	
	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var oldValue = this.map[name];
	    this.map[name] = oldValue ? oldValue + ',' + value : value;
	  };
	
	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };
	
	  Headers.prototype.get = function (name) {
	    name = normalizeName(name);
	    return this.has(name) ? this.map[name] : null;
	  };
	
	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };
	
	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value);
	  };
	
	  Headers.prototype.forEach = function (callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this);
	      }
	    }
	  };
	
	  Headers.prototype.keys = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push(name);
	    });
	    return iteratorFor(items);
	  };
	
	  Headers.prototype.values = function () {
	    var items = [];
	    this.forEach(function (value) {
	      items.push(value);
	    });
	    return iteratorFor(items);
	  };
	
	  Headers.prototype.entries = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push([name, value]);
	    });
	    return iteratorFor(items);
	  };
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsArrayBuffer(blob);
	    return promise;
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsText(blob);
	    return promise;
	  }
	
	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf);
	    var chars = new Array(view.length);
	
	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i]);
	    }
	    return chars.join('');
	  }
	
	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0);
	    } else {
	      var view = new Uint8Array(buf.byteLength);
	      view.set(new Uint8Array(buf));
	      return view.buffer;
	    }
	  }
	
	  function Body() {
	    this.bodyUsed = false;
	
	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (!body) {
	        this._bodyText = '';
	      } else if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString();
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer);
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer]);
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body);
	      } else {
	        throw new Error('unsupported BodyInit type');
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	      }
	    };
	
	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };
	
	      this.arrayBuffer = function () {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer);
	        }
	      };
	    }
	
	    this.text = function () {
	      var rejected = consumed(this);
	      if (rejected) {
	        return rejected;
	      }
	
	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob);
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text');
	      } else {
	        return Promise.resolve(this._bodyText);
	      }
	    };
	
	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }
	
	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };
	
	    return this;
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }
	
	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;
	
	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = String(input);
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }
	
	  Request.prototype.clone = function () {
	    return new Request(this, { body: this._bodyInit });
	  };
	
	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }
	
	  function parseHeaders(rawHeaders) {
	    var headers = new Headers();
	    rawHeaders.split(/\r?\n/).forEach(function (line) {
	      var parts = line.split(':');
	      var key = parts.shift().trim();
	      if (key) {
	        var value = parts.join(':').trim();
	        headers.append(key, value);
	      }
	    });
	    return headers;
	  }
	
	  Body.call(Request.prototype);
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }
	
	    this.type = 'default';
	    this.status = 'status' in options ? options.status : 200;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = 'statusText' in options ? options.statusText : 'OK';
	    this.headers = new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }
	
	  Body.call(Response.prototype);
	
	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };
	
	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };
	
	  var redirectStatuses = [301, 302, 303, 307, 308];
	
	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }
	
	    return new Response(null, { status: status, headers: { location: url } });
	  };
	
	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;
	
	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request = new Request(input, init);
	      var xhr = new XMLHttpRequest();
	
	      xhr.onload = function () {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        };
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };
	
	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };
	
	      xhr.ontimeout = function () {
	        reject(new TypeError('Network request failed'));
	      };
	
	      xhr.open(request.method, request.url, true);
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }
	
	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mutation = exports.query = undefined;
	
	var _query = __webpack_require__(18);
	
	var _query2 = _interopRequireDefault(_query);
	
	var _mutation = __webpack_require__(19);
	
	var _mutation2 = _interopRequireDefault(_mutation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.query = _query2.default;
	exports.mutation = _mutation2.default;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  users: "\n  {\n    users {\n      id,\n      login,\n      homeFloor,\n      avatarUrl\n    }\n  }",
	  rooms: "\n  {\n    rooms {\n      id,\n      title,\n      capacity,\n      floor\n    }\n  }",
	  events: "\n  {\n    events {\n      id,\n      title,\n      dateStart,\n      dateEnd,\n      users {\n        id\n      },\n      room {\n        id\n      }\n    }\n  }"
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  createEvent: function createEvent(eventInput, usersIds, roomId) {
	    return "\n    mutation {\n      createEvent(input: " + eventInput + ", usersIds: " + usersIds + ", roomId: " + roomId + ") {\n        id,\n        title,\n        dateStart,\n        dateEnd,\n        users {\n          id\n        },\n        room {\n          id\n        }\n      }\n    }";
	  }
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var checkStatus = exports.checkStatus = function checkStatus(response) {
	  if (response.status >= 200 && response.status < 300) {
	    return response;
	  } else {
	    throw new Error(response.status + ': ' + response.statusText);
	  }
	};
	
	var parseJSON = exports.parseJSON = function parseJSON(response) {
	  return response.json();
	};
	
	var grapnhQlRequest = exports.grapnhQlRequest = function grapnhQlRequest(request) {
	  return window.fetch('/graphql', {
	    method: 'POST',
	    headers: { 'Content-Type': 'application/json' },
	    body: JSON.stringify({ query: request })
	  }).then(checkStatus).then(parseJSON);
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var file = 'img/icons/sprite.svg'; // путь к файлу спрайта
	  var revision = 1; // версия спрайта
	  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) {
	    return true;
	  }
	  var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null;
	  var request = void 0;
	  var data = void 0;
	  var insertIT = function insertIT() {
	    document.body.insertAdjacentHTML('afterbegin', data);
	  };
	  var insert = function insert() {
	    if (document.body) {
	      insertIT();
	    } else {
	      document.addEventListener('DOMContentLoaded', insertIT);
	    }
	  };
	
	  if (isLocalStorage && localStorage.getItem('inlineSVGrev') === revision) {
	    data = localStorage.getItem('inlineSVGdata');
	    if (data) {
	      insert();
	      return true;
	    }
	  }
	  try {
	    request = new XMLHttpRequest();
	    request.open('GET', file, true);
	    request.onload = function () {
	      if (request.status >= 200 && request.status < 400) {
	        data = request.responseText;
	        insert();
	        if (isLocalStorage) {
	          localStorage.setItem('inlineSVGdata', data);
	          localStorage.setItem('inlineSVGrev', revision);
	        }
	      }
	    };
	    request.send();
	  } catch (e) {
	    throw new Error(e);
	  }
	  return true;
	};

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map