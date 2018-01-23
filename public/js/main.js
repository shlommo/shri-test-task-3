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
	
	var _apiService = __webpack_require__(32);
	
	var _apiService2 = _interopRequireDefault(_apiService);
	
	var _createSvgSprite = __webpack_require__(38);
	
	var _createSvgSprite2 = _interopRequireDefault(_createSvgSprite);
	
	var _router = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import createMeetingRoom from './views/meeting-rooms-view';
	
	// const createEvent = mutation.createEvent(
	//   `{
	//     title: "Тестовый запрос",
	//     dateStart: "${new Date().toISOString()}",
	//     dateEnd: "${new Date().toISOString()}"}
	//   `, `"${[1]}"`, 6);
	
	(0, _createSvgSprite2.default)();
	
	_apiService2.default.getAll().then(function (data) {
	  _application2.default.data = data;
	
	  (0, _router.activateRouter)();
	
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
	    value: function showEventCreate(eventInputData) {
	      (0, _view2.default)(_data.TYPES.EVENT_CREATE, eventInputData);
	    }
	  }, {
	    key: 'showEventEdit',
	    value: function showEventEdit(eventInputData) {
	      (0, _view2.default)(_data.TYPES.EVENT_EDIT, eventInputData);
	    }
	  }, {
	    key: 'data',
	    set: function set(data) {
	      meetingRoomsData = data;
	    },
	    get: function get() {
	      return meetingRoomsData;
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
	
	var monthNames = exports.monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _RENDERS;
	
	var _data = __webpack_require__(4);
	
	var _meetingRoomsView = __webpack_require__(6);
	
	var _meetingRoomsView2 = _interopRequireDefault(_meetingRoomsView);
	
	var _eventView = __webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var RENDERS = (_RENDERS = {}, _defineProperty(_RENDERS, _data.TYPES.MEETING_ROOMS, _meetingRoomsView2.default), _defineProperty(_RENDERS, _data.TYPES.EVENT_CREATE, _eventView.eventNewView), _defineProperty(_RENDERS, _data.TYPES.EVENT_EDIT, _eventView.eventEditView), _RENDERS);
	
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
	
	var _calendar = __webpack_require__(9);
	
	var _renderCalendarWidget = __webpack_require__(12);
	
	var _renderCalendarWidget2 = _interopRequireDefault(_renderCalendarWidget);
	
	var _helpers = __webpack_require__(11);
	
	var _activateRoomName = __webpack_require__(13);
	
	var _activateRoomName2 = _interopRequireDefault(_activateRoomName);
	
	var _renderEvents = __webpack_require__(14);
	
	var _renderEvents2 = _interopRequireDefault(_renderEvents);
	
	var _router = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var globalTimeout = void 0;
	
	var MeetingRoomsView = function (_AbstractView) {
	  _inherits(MeetingRoomsView, _AbstractView);
	
	  function MeetingRoomsView(inputData) {
	    _classCallCheck(this, MeetingRoomsView);
	
	    var _this = _possibleConstructorReturn(this, (MeetingRoomsView.__proto__ || Object.getPrototypeOf(MeetingRoomsView)).call(this, inputData));
	
	    _this.rooms = inputData.rooms;
	    _this.users = inputData.users;
	    _this.date = inputData.date || new Date();
	    _this.year = _this.date.getFullYear();
	    _this.month = _this.date.getMonth();
	    _this.day = _this.date.getDate();
	    _this.hour = _this.date.getHours();
	    _this.minute = _this.date.getMinutes();
	    _this.dayMin = 8;
	    _this.dayMax = 22;
	    _this.MINUTE = 60 * 1000;
	    _this.dayTotal = _this.dayMax - _this.dayMin + 1;
	    _this.initialAppDate = new Date();
	    _this.initialAppDay = (0, _helpers.getDateValue)(_this.initialAppDate).day;
	    _this.dateValue = (0, _helpers.getDateValue)(_this.date).day;
	    _this.IS_INPUT_DATE_EQUAL_INITIAL_APP_DATE = _this.dateValue === _this.initialAppDay;
	    _this.IS_PAST = _this.dateValue < _this.initialAppDay;
	    _this.events = inputData.events[_this.dateValue] || [];
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
	        diagramDayMarkup += this.diagramCellMarkup(this.diagramTimeMarkup(time), time);
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
	    key: 'changeFreeTime',
	    value: function changeFreeTime() {
	      var freeTimeSlotArr = document.querySelectorAll('.time-slot--empty');
	      var startTime = void 0,
	          endTime = void 0,
	          duration = void 0,
	          width = void 0,
	          left = void 0,
	          startDate = void 0;
	
	      if (freeTimeSlotArr !== undefined) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = Array.from(freeTimeSlotArr)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var freeTimeSlot = _step.value;
	
	            startTime = +freeTimeSlot.getAttribute('data-start-time');
	            endTime = +freeTimeSlot.getAttribute('data-end-time');
	            startDate = (0, _helpers.getDateValue)(new Date(startTime)).minute;
	            duration = Math.floor((endTime - startTime) / this.MINUTE);
	            left = +getComputedStyle(freeTimeSlot).left.slice(0, -2);
	
	            if (duration < 2) {
	              freeTimeSlot.parentNode.removeChild(freeTimeSlot);
	            }
	
	            if ((0, _helpers.getDateValue)(this.date).minute > startDate) {
	              width = (duration - 1) * this.minuteStep;
	              left += this.minuteStep;
	
	              freeTimeSlot.setAttribute('data-start-time', startTime + this.MINUTE);
	              freeTimeSlot.style.cssText = 'left: ' + left + 'px; width: ' + width + 'px';
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
	      }
	    }
	  }, {
	    key: 'responsiveTimeSlot',
	    value: function responsiveTimeSlot() {
	      var timeSlotArr = document.querySelectorAll('.time-slot');
	      var startTime = void 0,
	          endTime = void 0,
	          duration = void 0,
	          width = void 0,
	          left = void 0,
	          startDate = void 0;
	
	      if (timeSlotArr !== undefined) {
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	          for (var _iterator2 = Array.from(timeSlotArr)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var timeSlot = _step2.value;
	
	            startTime = +timeSlot.getAttribute('data-start-time');
	            endTime = +timeSlot.getAttribute('data-end-time');
	            startDate = (0, _helpers.getDateValue)(new Date(startTime)).minute;
	            duration = Math.floor((endTime - startTime) / this.MINUTE);
	
	            left = (startDate - this.dayStart) / this.MINUTE * this.minuteStep;
	            width = duration * this.minuteStep;
	
	            timeSlot.style.cssText = 'left: ' + left + 'px; width: ' + width + 'px';
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
	    }
	  }, {
	    key: 'renderClockLine',
	    value: function renderClockLine() {
	      var timeNowEl = this.element.querySelector('.diagram__time--now');
	      var dayEl = this.element.querySelector('.diagram__time-line .diagram__day');
	      var timelineCellArr = this.element.querySelectorAll('.diagram__time-line .diagram__cell');
	      var dayElWidth = getComputedStyle(dayEl).width.slice(0, -2);
	      var now = this.date.valueOf();
	      var date = new Date(now);
	      this.dayStart = date.setHours(8, 0, 0);
	      var currentMinute = (now - this.dayStart) / this.MINUTE;
	      this.minuteStep = dayElWidth / (this.dayTotal * 60);
	      var minute = this.minute < 10 ? '0' + this.minute : this.minute;
	
	      if (this.IS_INPUT_DATE_EQUAL_INITIAL_APP_DATE) {
	        timeNowEl.classList.add('show');
	
	        timeNowEl.style.left = currentMinute * this.minuteStep + 'px';
	        timeNowEl.innerHTML = this.hour + ':' + minute;
	
	        if (currentMinute < 0 || currentMinute > this.dayTotal * 60) {
	          timeNowEl.style.opacity = 0;
	        }
	
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;
	
	        try {
	          for (var _iterator3 = Array.from(timelineCellArr)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var timelineCell = _step3.value;
	
	            var timelineCellValue = timelineCell.getAttribute('data-time');
	            if (timelineCellValue <= this.date.getHours()) {
	              timelineCell.classList.add('past');
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
	      } else if (this.IS_PAST) {
	        var _iteratorNormalCompletion4 = true;
	        var _didIteratorError4 = false;
	        var _iteratorError4 = undefined;
	
	        try {
	          for (var _iterator4 = Array.from(timelineCellArr)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	            var _timelineCell = _step4.value;
	
	            _timelineCell.classList.add('past');
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
	      }
	    }
	  }, {
	    key: 'clock',
	    value: function clock(isNewDate) {
	      var _this2 = this;
	
	      if (isNewDate) {
	        this.updateTime();
	      } else {
	        this.updateTime(this.date);
	      }
	
	      this.changeFreeTime();
	      this.renderClockLine();
	
	      // Clear all timeouts
	      while (globalTimeout--) {
	        window.clearTimeout(globalTimeout);
	      }
	
	      globalTimeout = setTimeout(function () {
	        _this2.clock(true);
	      }, 60000);
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
	    key: 'getRoomList',
	    value: function getRoomList(floor) {
	      var roomList = '';
	      var diagramDayTemp = '<div class="diagram__day"></div>';
	
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;
	
	      try {
	        for (var _iterator5 = this.rooms[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var room = _step5.value;
	
	          if (room.floor === floor) {
	            var roomMarkup = this.getRoomMarkup(room.title, room.capacity);
	            roomList += '<div class="diagram__room" data-room-id="' + room.id + '">\n                        ' + this.diagramRowMarkup(roomMarkup, diagramDayTemp) + '\n                      </div>';
	          }
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
	
	      return roomList;
	    }
	  }, {
	    key: 'getFloorListMarkup',
	    value: function getFloorListMarkup() {
	      var floors = [];
	
	      var _iteratorNormalCompletion6 = true;
	      var _didIteratorError6 = false;
	      var _iteratorError6 = undefined;
	
	      try {
	        for (var _iterator6 = this.rooms[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	          var room = _step6.value;
	
	          if (floors.indexOf(room.floor) === -1) {
	            floors.push(room.floor);
	          }
	        }
	      } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion6 && _iterator6.return) {
	            _iterator6.return();
	          }
	        } finally {
	          if (_didIteratorError6) {
	            throw _iteratorError6;
	          }
	        }
	      }
	
	      floors.sort(function (a, b) {
	        if (a > b) return 1;
	        if (a < b) return -1;
	      });
	
	      var floorList = '';
	
	      var _iteratorNormalCompletion7 = true;
	      var _didIteratorError7 = false;
	      var _iteratorError7 = undefined;
	
	      try {
	        for (var _iterator7 = floors[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	          var floor = _step7.value;
	
	          floorList += '<div class="diagram__floor" data-floor="' + floor + '">\n                      <div class="diagram__floor-title">\n                            ' + this.diagramRowMarkup(floor + ' \u044D\u0442\u0430\u0436') + '\n                      </div>\n                      ' + this.getRoomList(floor) + '\n                    </div>';
	        }
	      } catch (err) {
	        _didIteratorError7 = true;
	        _iteratorError7 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion7 && _iterator7.return) {
	            _iterator7.return();
	          }
	        } finally {
	          if (_didIteratorError7) {
	            throw _iteratorError7;
	          }
	        }
	      }
	
	      return floorList;
	    }
	  }, {
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var header = '<header class="header">\n                      <div class="logo"></div>\n                      <a href="event-new.html" class="button header__button button--blue" id="newEventTrigger">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0443</a>\n                  </header>';
	
	      var diagram = '<div class="diagram">\n                      <div class="diagram__body">\n                        <div class="diagram__body-cnt">\n                            <div class="diagram__time-line">' + this.diagramRowMarkup((0, _calendar.calendarMarkup)(), this.diagramTimelineTimeMarkup()) + '</div>\n                            <div class="diagram__content-wrapper">\n                              <div class="diagram__content">\n                                ' + this.diagramRowMarkup(null, this.getCellList(), 'diagram__cell-grid') + '\n                                ' + this.getFloorListMarkup() + '\n                              </div>\n                            </div>\n                        </div>\n                      </div>\n                    </div>';
	
	      return '<div class="index-page" id="app">\n              ' + header + ' \n              ' + diagram + '\n            </div>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      var _this3 = this;
	
	      var eventNewTrigger = this.element.querySelector('#newEventTrigger');
	
	      eventNewTrigger.addEventListener('click', function (e) {
	        e.preventDefault();
	        _router.router.navigate('/event/create');
	      });
	
	      var windowResizeHandler = function windowResizeHandler() {
	        _this3.renderClockLine();
	        _this3.responsiveTimeSlot();
	      };
	
	      window.addEventListener('resize', (0, _helpers.debounce)(windowResizeHandler, 66));
	    }
	  }, {
	    key: 'viewRendered',
	    value: function viewRendered() {
	      (0, _calendar.openCalendar)();
	      (0, _activateRoomName2.default)();
	      var renderCalendarWidget = new _renderCalendarWidget2.default(this.date);
	      renderCalendarWidget.render();
	
	      this.clock();
	
	      var renderEvents = new _renderEvents2.default(this.element, this.events, this.date, this.rooms, this.users, this.minuteStep);
	      renderEvents.renderView();
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
	    var clickCallback = callback || function () {};
	    var elemChildIsTarget = false;
	    if (elem !== null) {
	      elemChildIsTarget = (0, _helpers.checkEventTarget)(event, elem);
	    }
	
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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getCoords = exports.getCoords = function getCoords(elem) {
	  var box = elem.getBoundingClientRect();
	
	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	};
	
	var getNodeFromMarkup = exports.getNodeFromMarkup = function getNodeFromMarkup(markupTemplate) {
	  var div = document.createElement('div');
	  div.innerHTML = markupTemplate;
	  return div.firstChild;
	};
	
	var getDay = exports.getDay = function getDay(date) {
	  // получить номер дня недели, от 0(пн) до 6(вс)
	  var day = date.getDay();
	  if (day === 0) {
	    day = 7;
	  }
	  return day - 1;
	};
	
	var addListenerMulti = exports.addListenerMulti = function addListenerMulti(el, s, fn) {
	  s.split(' ').forEach(function (e) {
	    el.addEventListener(e, fn, false);
	  });
	};
	var removeListenerMulti = exports.removeListenerMulti = function removeListenerMulti(el, s, fn) {
	  s.split(' ').forEach(function (e) {
	    el.removeEventListener(e, fn, false);
	  });
	};
	
	var debounce = exports.debounce = function debounce(f, ms) {
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
	
	var getDateValue = exports.getDateValue = function getDateValue(inputDate) {
	  var date = inputDate || new Date();
	  var year = new Date(date.getFullYear());
	  var month = new Date(date.getFullYear(), date.getMonth());
	  var day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	  var hour = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
	  var minute = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());
	
	  return {
	    year: year.valueOf(),
	    month: month.valueOf(),
	    day: day.valueOf(),
	    hour: hour.valueOf(),
	    minute: minute.valueOf()
	  };
	};
	
	Element.prototype.parents = function (selector) {
	  var elements = [];
	  var elem = this;
	  var ishaveselector = selector !== undefined;
	
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
	
	var parseObjToHash = exports.parseObjToHash = function parseObjToHash(inputObj) {
	  var hashPartBuffer = [];
	  for (var k in inputObj) {
	    hashPartBuffer.push(encodeURIComponent(k), '=', encodeURIComponent(inputObj[k]), '&');
	  }
	  if (hashPartBuffer.length) {
	    // Remove the last element from the string buffer
	    // which is '&'.
	    hashPartBuffer.pop();
	  }
	  var hashPartString = hashPartBuffer.join('');
	
	  return hashPartString;
	};
	
	var encodeObjFromHash = exports.encodeObjFromHash = function encodeObjFromHash(hashPartString) {
	  var pairs = hashPartString.split(/&/);
	  var object = {};
	  for (var i = 0; i < pairs.length; i++) {
	    var keyValue = pairs[i].split(/=/);
	    // Validate that this has the right structure.
	    if (keyValue.length == 2) {
	      object[keyValue[0]] = keyValue[1];
	    }
	  }
	  return object;
	};
	
	var checkEventTarget = exports.checkEventTarget = function checkEventTarget(event, elem) {
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
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _helpers = __webpack_require__(11);
	
	var _data = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RenderCalendarWidget = function () {
	  function RenderCalendarWidget(date) {
	    _classCallCheck(this, RenderCalendarWidget);
	
	    this.date = date;
	    this.calendarWidget = document.getElementById('calendarWidget');
	    this.calendar = document.getElementById('calendar');
	    this.monthNamesShortcuts = _data.monthNames.map(function (month) {
	      return month.toLowerCase().slice(0, 3);
	    });
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
	
	      var monthView = '<div class="calendar-widget__month month">\n                          <div class="month__name" data-motnh="' + currentMonth + '">' + _data.monthNames[month] + '</div>\n                          <div class="month__week">\n                              <div class="month__day">\u041F\u043D</div>\n                              <div class="month__day">\u0412\u0442</div>\n                              <div class="month__day">\u0421\u0440</div>\n                              <div class="month__day">\u0427\u0442</div>\n                              <div class="month__day">\u041F\u0442</div>\n                              <div class="month__day">\u0421\u0431</div>\n                              <div class="month__day">\u0412\u0441</div>\n                          </div>\n  \n                          <div class="month__days">\n                              ' + daysView + '\n                          </div>\n                      </div>';
	
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
	          var now = new Date();
	          var hourValue = now.getHours();
	          var minutesValue = now.getMinutes();
	          var secondsValue = now.getSeconds();
	
	          var dateChangeEvent = new CustomEvent("dateChange", {
	            detail: {
	              date: new Date(yearValue, monthValue, dayValue, hourValue, minutesValue, secondsValue)
	            }
	          });
	
	          day.addEventListener('click', function () {
	            _this2.calendarWidget.querySelector('.month__day.today').classList.remove('today');
	            day.classList.add('today');
	            calendarHeaderTitle.innerHTML = day.innerHTML + ' ' + _this2.monthNamesShortcuts[monthValue];
	
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
	      var today = (0, _helpers.getDateValue)(now).day;
	      var inputDate = this.date;
	      var inputDateValue = (0, _helpers.getDateValue)(inputDate).day;
	      var day = this.date.getDate();
	      var currentYear = this.date.getFullYear();
	      var currentMonth = this.date.getMonth() + 1;
	
	      if (this.calendar === null) {
	        return false;
	      }
	
	      var dayTitle = inputDateValue === today ? '· Сегодня' : '';
	
	      var calendarHeaderTitle = this.calendar.querySelector('.calendar__header-date-title');
	      calendarHeaderTitle.innerHTML = day + ' ' + this.monthNamesShortcuts[currentMonth - 1] + ' ' + dayTitle;
	
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _helpers = __webpack_require__(11);
	
	var _renderTimeSlotInfo = __webpack_require__(15);
	
	var _renderTimeSlotInfo2 = _interopRequireDefault(_renderTimeSlotInfo);
	
	var _router = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RenderEvents = function () {
	  function RenderEvents(parent, inputEvents, inputDate, inputRooms, inputUsers, minuteStep) {
	    _classCallCheck(this, RenderEvents);
	
	    this.parent = parent;
	    this.roomArr = this.parent.querySelectorAll('.diagram__room');
	    this.MINUTE = 60 * 1000;
	    this.HOUR = 60 * this.MINUTE;
	    this.inputEvents = inputEvents;
	    this.inputDate = inputDate;
	    this.inputRooms = inputRooms;
	    this.inputUsers = inputUsers;
	    this.minuteStep = minuteStep;
	    this.now = new Date();
	    this.today = (0, _helpers.getDateValue)(this.now).day;
	    this.inputDay = (0, _helpers.getDateValue)(this.inputDate).day;
	    this.inputDayStart = this.inputDay + 8 * this.HOUR;
	    this.inputDayEnd = this.inputDay + 23 * this.HOUR;
	    this.roomsWithBusyTime = {};
	    this.eventLeft;
	    this.eventWidth;
	  }
	
	  _createClass(RenderEvents, [{
	    key: 'getEventMarkup',
	    value: function getEventMarkup(isFilled, inputEventId, start, end) {
	      var extraClass = isFilled ? 'time-slot--filled' : 'time-slot--empty';
	      var timeSlotType = isFilled ? 'data-event-edit-trigger' : 'data-event-new-trigger';
	      var eventId = inputEventId !== null ? 'data-event-id="' + inputEventId + '"' : '';
	      var startTime = start !== undefined ? 'data-start-time = "' + start + '"' : '';
	      var endTime = end !== undefined ? 'data-end-time = "' + end + '"' : '';
	
	      return '<span class="time-slot ' + extraClass + '" \n              ' + eventId + '\n              ' + timeSlotType + ' \n              ' + startTime + ' \n              ' + endTime + '></span>';
	    }
	  }, {
	    key: 'getTimeNode',
	    value: function getTimeNode(isFilled, inputEventId, start, end, left, width) {
	      var timeNode = (0, _helpers.getNodeFromMarkup)(this.getEventMarkup(isFilled, inputEventId, start, end));
	      timeNode.style.cssText = 'left: ' + left + 'px; width: ' + width + 'px';
	      return timeNode;
	    }
	  }, {
	    key: 'renderPlannedEvent',
	    value: function renderPlannedEvent() {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = this.inputEvents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var event = _step.value;
	
	          var eventDateStart = new Date(event.dateStart);
	          var eventDateEnd = new Date(event.dateEnd);
	          var eventDateStartValue = eventDateStart.valueOf();
	          var eventDateEndValue = eventDateEnd.valueOf();
	          var eventStartMinuteFromDateStart = Math.round((eventDateStartValue - this.inputDayStart) / this.MINUTE);
	          var eventEndMinuteFromDateStart = Math.round((eventDateEndValue - this.inputDayStart) / this.MINUTE);
	          var eventDuration = Math.round((eventDateEndValue - eventDateStartValue) / this.MINUTE);
	
	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;
	
	          try {
	            for (var _iterator2 = Array.from(this.roomArr)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var room = _step2.value;
	
	              var roomId = room.getAttribute('data-room-id');
	              var timeContainer = room.querySelector('.diagram__day');
	
	              if (event.room.id === roomId) {
	                //Событие происходит в нужной комнате
	                this.eventLeft = (eventDateStartValue - this.inputDayStart) * this.minuteStep / this.MINUTE;
	                this.eventWidth = eventDuration * this.minuteStep;
	
	                var busyTimeNode = this.getTimeNode(true, event.id, eventDateStartValue, eventDateEndValue, this.eventLeft, this.eventWidth);
	
	                timeContainer.appendChild(busyTimeNode);
	
	                for (var minute = eventStartMinuteFromDateStart; minute <= eventEndMinuteFromDateStart; minute++) {
	                  var timeStampMinute = this.inputDayStart + minute * this.MINUTE;
	                  if (this.roomsWithBusyTime.hasOwnProperty(roomId)) {
	                    this.roomsWithBusyTime[roomId][timeStampMinute] = event.id;
	                  } else {
	                    this.roomsWithBusyTime[roomId] = _defineProperty({}, timeStampMinute, event.id);
	                  }
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
	    key: 'renderUnplannedEvents',
	    value: function renderUnplannedEvents() {
	      var IS_TODAY_EQUAL_TO_THE_INPUT_DAY = this.today === this.inputDay;
	      var minutesFromHourStarted = 0;
	
	      var startMinute = (this.inputDayStart - this.inputDay) / this.MINUTE;
	      var endMinute = (this.inputDayEnd - this.inputDay) / this.MINUTE;
	
	      if (IS_TODAY_EQUAL_TO_THE_INPUT_DAY && this.now.getHours() >= 8) {
	        startMinute += ((0, _helpers.getDateValue)(this.now).minute - this.inputDayStart) / this.MINUTE;
	        minutesFromHourStarted = this.now.getMinutes();
	      }
	
	      if (this.today <= this.inputDay) {
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;
	
	        try {
	          for (var _iterator3 = Array.from(this.roomArr)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var room = _step3.value;
	
	            var roomId = room.getAttribute('data-room-id');
	            var timeContainer = room.querySelector('.diagram__day');
	
	            var roomArrWithFreeTime = [];
	            var roomWithFreeTime = {};
	            var hour = 60 - minutesFromHourStarted;
	            var eventDuration = 0;
	
	            minuteLoop: for (var minute = startMinute; minute <= endMinute; minute++) {
	              var timeStampMinute = this.inputDay + minute * this.MINUTE;
	
	              if (hour === 1) {
	                hour = 60;
	                roomWithFreeTime.end = timeStampMinute + this.MINUTE;
	
	                roomArrWithFreeTime.push(roomWithFreeTime);
	                roomWithFreeTime = {};
	                continue minuteLoop;
	              }
	
	              if (this.roomsWithBusyTime.hasOwnProperty(roomId)) {
	                if (this.roomsWithBusyTime[roomId].hasOwnProperty(timeStampMinute)) {
	                  if (roomWithFreeTime.hasOwnProperty('start')) {
	                    //Если свободное время уже было
	                    roomWithFreeTime.end = timeStampMinute;
	
	                    roomArrWithFreeTime.push(roomWithFreeTime);
	                    roomWithFreeTime = {};
	                    continue minuteLoop;
	                  }
	
	                  eventDuration++;
	                  roomWithFreeTime = {};
	                  continue minuteLoop;
	                } else if (eventDuration > 0) {
	                  roomWithFreeTime.start = timeStampMinute - this.MINUTE;
	
	                  if (hour - eventDuration > 0) {
	                    hour = hour - eventDuration - 1;
	                  } else if (hour - eventDuration == 0) {
	                    hour = 60;
	                  } else if (hour - eventDuration < 0) {
	                    hour = 60 - (eventDuration - hour - Math.floor((eventDuration - hour) / 60) * 60);
	                  }
	
	                  eventDuration = 0;
	                }
	              }
	
	              if (!roomWithFreeTime.hasOwnProperty('start')) {
	                roomWithFreeTime.start = timeStampMinute;
	              }
	
	              if (minute === endMinute - 1) {
	                roomWithFreeTime.end = timeStampMinute;
	                roomArrWithFreeTime.push(roomWithFreeTime);
	              }
	
	              hour--;
	            }
	
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	              for (var _iterator4 = roomArrWithFreeTime[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                var freeTime = _step4.value;
	
	                var freeTimeStart = freeTime.start;
	                var freeTimeDuration = (freeTime.end - freeTime.start) / this.MINUTE;
	
	                this.eventLeft = (freeTimeStart - this.inputDayStart) * this.minuteStep / this.MINUTE;
	                this.eventWidth = freeTimeDuration * this.minuteStep;
	
	                var freeTimeNode = this.getTimeNode(false, null, freeTimeStart, freeTime.end, this.eventLeft, this.eventWidth);
	
	                timeContainer.appendChild(freeTimeNode);
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
	    }
	  }, {
	    key: 'freeTimeSlotHandler',
	    value: function freeTimeSlotHandler() {
	      var eventNewTriggerArr = document.querySelectorAll('[data-event-new-trigger]');
	      var roomId = void 0,
	          startTime = void 0,
	          endTime = void 0,
	          eventCreateInputData = {};
	
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;
	
	      try {
	        var _loop = function _loop() {
	          var eventNewTrigger = _step5.value;
	
	          var eventNewClickHandler = function eventNewClickHandler() {
	            startTime = eventNewTrigger.getAttribute('data-start-time');
	            endTime = eventNewTrigger.getAttribute('data-end-time');
	            roomId = eventNewTrigger.parents('.diagram__room')[0].getAttribute('data-room-id');
	            eventCreateInputData = {
	              roomId: roomId,
	              startTime: startTime,
	              endTime: endTime
	            };
	
	            _router.router.navigate('/event/' + (0, _helpers.parseObjToHash)(eventCreateInputData) + '/create');
	            eventNewTrigger.removeEventListener('click', eventNewClickHandler);
	          };
	          eventNewTrigger.addEventListener('click', eventNewClickHandler);
	        };
	
	        for (var _iterator5 = eventNewTriggerArr[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          _loop();
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
	    }
	  }, {
	    key: 'renderView',
	    value: function renderView() {
	      this.renderPlannedEvent();
	      this.renderUnplannedEvents();
	
	      (0, _renderTimeSlotInfo2.default)(this.parent, this.inputEvents, this.inputRooms, this.inputUsers);
	      this.freeTimeSlotHandler();
	    }
	  }]);
	
	  return RenderEvents;
	}();
	
	exports.default = RenderEvents;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(11);
	
	var _data = __webpack_require__(4);
	
	var _hideOnClickOutside = __webpack_require__(10);
	
	var _hideOnClickOutside2 = _interopRequireDefault(_hideOnClickOutside);
	
	var _router = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getTimeSlotInfoTemplate = function getTimeSlotInfoTemplate(event, rooms, users) {
	  var dateStart = new Date(event.dateStart);
	  var dateEnd = new Date(event.dateEnd);
	  var getMinutes = function getMinutes(date) {
	    return date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	  };
	  var inclineMonths = _data.monthNames.map(function (month) {
	    var lastLetterCharCode = month.toLowerCase().charCodeAt(month.length - 1);
	    var inclineMonth = void 0;
	
	    if (lastLetterCharCode === 1100 || lastLetterCharCode === 1081) {
	      inclineMonth = month.slice(0, -1) + 'я';
	    } else if (lastLetterCharCode === 1090) {
	      inclineMonth = month + 'а';
	    }
	    return inclineMonth.toLowerCase();
	  });
	
	  var roomName = void 0;
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = rooms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var room = _step.value;
	
	      if (room.id === event.room.id) {
	        roomName = room.title;
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
	
	  var userLogin = void 0,
	      userAvatarUrl = void 0;
	
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	
	  try {
	    for (var _iterator2 = users[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var user = _step2.value;
	
	      if (user.id === event.users[0].id) {
	        userLogin = user.login;
	        userAvatarUrl = user.avatarUrl;
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
	
	  var members = void 0;
	  var usersLength = event.users.length;
	
	  if (usersLength === 1) {
	    members = '';
	  } else if (usersLength === 2) {
	    members = usersLength - 1 + ' \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A';
	  } else if (usersLength > 2 && event.users.length < 5) {
	    members = usersLength - 1 + ' \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430';
	  } else {
	    members = usersLength - 1 + ' \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432';
	  }
	
	  var time = dateStart.getHours() + ':' + getMinutes(dateStart) + '\u2014' + dateEnd.getHours() + ':' + getMinutes(dateEnd);
	  var eventEditInputData = {
	    eventId: event.id,
	    startTime: dateStart.getTime(),
	    endTime: dateEnd.getTime()
	  };
	
	  return '<div class="time-slot-info" id="timeSlotInfoModal">\n    <i class="time-slot-info__marker"></i>\n    <div class="time-slot-info__cnt">\n        <a href="/event/' + (0, _helpers.parseObjToHash)(eventEditInputData) + '/edit" class="time-slot-info__trigger">\n            <i>\n                <svg width="12" height="12">\n                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-edit"></use>\n                </svg>\n            </i>\n        </a>\n\n        <div class="time-slot-info__title">\n            ' + event.title + '\n        </div>\n\n        <div class="time-slot-info__descr">\n            ' + dateStart.getDate() + ' ' + inclineMonths[dateStart.getMonth()] + ', ' + time + '&nbsp;\xB7&nbsp;' + roomName + '\n        </div>\n        <div class="time-slot-info__users">\n            <div class="user">\n                <div class="user__icon">\n                    <img src="' + userAvatarUrl + '" alt="">\n                </div>\n                ' + userLogin + '\n            </div>&nbsp;\u0438&nbsp;' + members + '\n        </div>\n    </div>\n  </div>';
	};
	
	exports.default = function (parent, events, rooms, users) {
	  // const parent = context;
	  var timeSlotArr = parent.querySelectorAll('[data-event-edit-trigger]');
	
	  var _iteratorNormalCompletion3 = true;
	  var _didIteratorError3 = false;
	  var _iteratorError3 = undefined;
	
	  try {
	    var _loop = function _loop() {
	      var timeSlot = _step3.value;
	
	      var timeSlotClickHandler = function timeSlotClickHandler(event) {
	        event.preventDefault();
	
	        var timeSlotComputedStyle = getComputedStyle(timeSlot);
	        var timeSlotHeight = +timeSlotComputedStyle.height.slice(0, -2);
	        var timeSlotWidth = +timeSlotComputedStyle.width.slice(0, -2);
	        var timeSlotCoords = (0, _helpers.getCoords)(timeSlot);
	        var timeSlotTop = timeSlotCoords.top;
	        var timeSlotLeft = timeSlotCoords.left;
	        var body = document.querySelector('body');
	        var windowWidth = window.innerWidth;
	        var timeSlotEventId = timeSlot.getAttribute('data-event-id');
	        var timeSlotInfoTemplate = void 0;
	        var timeSlotInfoNode = void 0;
	
	        var _iteratorNormalCompletion4 = true;
	        var _didIteratorError4 = false;
	        var _iteratorError4 = undefined;
	
	        try {
	          for (var _iterator4 = events[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	            var _event = _step4.value;
	
	            if (_event.id === timeSlotEventId) {
	              timeSlotInfoTemplate = getTimeSlotInfoTemplate(_event, rooms, users);
	              timeSlotInfoNode = (0, _helpers.getNodeFromMarkup)(timeSlotInfoTemplate);
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
	
	        timeSlot.classList.add('focused');
	        body.appendChild(timeSlotInfoNode);
	
	        setTimeout(function () {
	          if (windowWidth < 1280) {
	            var timeSlotInfoMarker = document.querySelector('.time-slot-info__marker');
	            var timeSlotInfoMarkerWidth = +getComputedStyle(timeSlotInfoMarker).width.slice(0, -2);
	            timeSlotInfoNode.style.cssText = 'top: ' + (timeSlotTop + timeSlotHeight) + 'px;';
	            timeSlotInfoMarker.style.left = timeSlotLeft + timeSlotWidth / 2 - timeSlotInfoMarkerWidth / 2 + 'px';
	          } else {
	            var timeSlotNodeWidth = getComputedStyle(timeSlotInfoNode).width.slice(0, -2);
	            var leftMoveValue = timeSlotLeft + timeSlotWidth / 2 - timeSlotNodeWidth / 2;
	            timeSlotInfoNode.style.cssText = 'top: ' + (timeSlotTop + timeSlotHeight) + 'px; left: ' + leftMoveValue + 'px';
	          }
	          timeSlotInfoNode.classList.add('showed');
	        }, 100);
	
	        setTimeout(function () {
	          (0, _hideOnClickOutside2.default)('#timeSlotInfoModal', function () {
	            timeSlot.classList.remove('focused');
	            if (body.contains(timeSlotInfoNode)) {
	              body.removeChild(timeSlotInfoNode);
	            }
	          });
	        }, 10);
	
	        var timeSlotInfoTrigger = body.querySelector('.time-slot-info__trigger');
	
	        timeSlotInfoTrigger.addEventListener('click', function (e) {
	          e.preventDefault();
	          var eventHref = timeSlotInfoTrigger.getAttribute('href');
	
	          body.removeChild(timeSlotInfoNode);
	          timeSlot.removeEventListener('click', timeSlotClickHandler);
	          _router.router.navigate(eventHref);
	        });
	      };
	
	      timeSlot.addEventListener('click', timeSlotClickHandler);
	    };
	
	    for (var _iterator3 = Array.from(timeSlotArr)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	      _loop();
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
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.activateRouter = exports.router = undefined;
	
	var _navigo = __webpack_require__(17);
	
	var _navigo2 = _interopRequireDefault(_navigo);
	
	var _application = __webpack_require__(1);
	
	var _application2 = _interopRequireDefault(_application);
	
	var _helpers = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var root = null;
	var useHash = true;
	var hash = '#';
	var router = new _navigo2.default(root, useHash, hash);
	
	var activateRouter = function activateRouter() {
	  return router.on(/event\/(\w+=\d+&\w+=\d+&\w+=\d+)\/(\w+)\/?/, function (hash, action) {
	    var encodeData = (0, _helpers.encodeObjFromHash)(hash);
	    if (action === 'create') {
	      _application2.default.showEventCreate(encodeData);
	    } else if (action === 'edit') {
	      _application2.default.showEventEdit(encodeData);
	    }
	  }).on(/event\/(\w+)\/?/, function (action) {
	    if (action === 'create') {
	      _application2.default.showEventCreate();
	    } else if (action === 'edit') {}
	  }).on('*', function () {
	    _application2.default.showMeetingRooms();
	  }).resolve();
	};
	
	exports.router = router;
	exports.activateRouter = activateRouter;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	!function (e, t) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Navigo = t() : e.Navigo = t();
	}(undefined, function () {
	  return function (e) {
	    function t(o) {
	      if (n[o]) return n[o].exports;var i = n[o] = { exports: {}, id: o, loaded: !1 };return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
	    }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
	  }([function (e, t) {
	    "use strict";
	    function n(e) {
	      if (Array.isArray(e)) {
	        for (var t = 0, n = Array(e.length); t < e.length; t++) {
	          n[t] = e[t];
	        }return n;
	      }return Array.from(e);
	    }function o() {
	      return !("undefined" == typeof window || !window.history || !window.history.pushState);
	    }function i(e, t, n) {
	      this.root = null, this._routes = [], this._useHash = t, this._hash = "undefined" == typeof n ? "#" : n, this._paused = !1, this._destroyed = !1, this._lastRouteResolved = null, this._notFoundHandler = null, this._defaultHandler = null, this._usePushState = !t && o(), this._onLocationChange = this._onLocationChange.bind(this), this._genericHooks = null, this._historyAPIUpdateMethod = "pushState", e ? this.root = t ? e.replace(/\/$/, "/" + this._hash) : e.replace(/\/$/, "") : t && (this.root = this._cLoc().split(this._hash)[0].replace(/\/$/, "/" + this._hash)), this._listen(), this.updatePageLinks();
	    }function s(e) {
	      return e instanceof RegExp ? e : e.replace(/\/+$/, "").replace(/^\/+/, "^/");
	    }function r(e, t) {
	      return 0 === t.length ? null : e ? e.slice(1, e.length).reduce(function (e, n, o) {
	        return null === e && (e = {}), e[t[o]] = decodeURIComponent(n), e;
	      }, null) : null;
	    }function a(e) {
	      var t,
	          n = [];return t = e instanceof RegExp ? e : new RegExp(e.replace(i.PARAMETER_REGEXP, function (e, t, o) {
	        return n.push(o), i.REPLACE_VARIABLE_REGEXP;
	      }).replace(i.WILDCARD_REGEXP, i.REPLACE_WILDCARD) + i.FOLLOWED_BY_SLASH_REGEXP, i.MATCH_REGEXP_FLAGS), { regexp: t, paramNames: n };
	    }function u(e) {
	      return e.replace(/\/$/, "").split("/").length;
	    }function h(e, t) {
	      return u(t) - u(e);
	    }function l(e) {
	      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];return t.map(function (t) {
	        var n = a(s(t.route)),
	            o = n.regexp,
	            i = n.paramNames,
	            u = e.replace(/^\/+/, "/").match(o),
	            h = r(u, i);return !!u && { match: u, route: t, params: h };
	      }).filter(function (e) {
	        return e;
	      });
	    }function d(e, t) {
	      return l(e, t)[0] || !1;
	    }function c(e, t) {
	      var n = t.map(function (t) {
	        return "" === t.route || "*" === t.route ? e : e.split(new RegExp(t.route + "($|/)"))[0];
	      }),
	          o = s(e);return n.length > 1 ? n.reduce(function (e, t) {
	        return e.length > t.length && (e = t), e;
	      }, n[0]) : 1 === n.length ? n[0] : o;
	    }function f() {
	      return !!("undefined" != typeof window && "onhashchange" in window);
	    }function _(e) {
	      return e.split(/\?(.*)?$/).slice(1).join("");
	    }function p(e, t, n) {
	      var i,
	          s = e,
	          r = function r(e) {
	        return e.split(/\?(.*)?$/)[0];
	      };return "undefined" == typeof n && (n = "#"), o() && !t ? s = r(e).split(n)[0] : (i = e.split(n), s = r(i.length > 1 ? i[1] : i[0])), s;
	    }function v(e, t, n) {
	      if (t && "object" === ("undefined" == typeof t ? "undefined" : g(t))) {
	        if (t.before) return void t.before(function () {
	          var o = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];o && (e(), t.after && t.after(n));
	        }, n);if (t.after) return e(), void (t.after && t.after(n));
	      }e();
	    }function R(e, t, n) {
	      if (o() && !t) return !1;if (!e.match(n)) return !1;var i = e.split(n);return i.length < 2 || "" === i[1];
	    }Object.defineProperty(t, "__esModule", { value: !0 });var g = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	      return typeof e === "undefined" ? "undefined" : _typeof(e);
	    } : function (e) {
	      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
	    };i.prototype = { helpers: { match: d, root: c, clean: s, getOnlyURL: p }, navigate: function navigate(e, t) {
	        var n;return e = e || "", this._usePushState ? (n = (t ? "" : this._getRoot() + "/") + e.replace(/^\/+/, "/"), n = n.replace(/([^:])(\/{2,})/g, "$1/"), history[this._historyAPIUpdateMethod]({}, "", n), this.resolve()) : "undefined" != typeof window && (e = e.replace(new RegExp("^" + this._hash), ""), window.location.href = window.location.href.replace(/#$/, "").replace(new RegExp(this._hash + ".*$"), "") + this._hash + e), this;
	      }, on: function on() {
	        for (var e = this, t = arguments.length, n = Array(t), o = 0; o < t; o++) {
	          n[o] = arguments[o];
	        }if ("function" == typeof n[0]) this._defaultHandler = { handler: n[0], hooks: n[1] };else if (n.length >= 2) {
	          if ("/" === n[0]) {
	            var i = n[1];"object" === g(n[1]) && (i = n[1].uses), this._defaultHandler = { handler: i, hooks: n[2] };
	          } else this._add(n[0], n[1], n[2]);
	        } else if ("object" === g(n[0])) {
	          var s = Object.keys(n[0]).sort(h);s.forEach(function (t) {
	            e.on(t, n[0][t]);
	          });
	        }return this;
	      }, off: function off(e) {
	        return null !== this._defaultHandler && e === this._defaultHandler.handler ? this._defaultHandler = null : null !== this._notFoundHandler && e === this._notFoundHandler.handler && (this._notFoundHandler = null), this._routes = this._routes.reduce(function (t, n) {
	          return n.handler !== e && t.push(n), t;
	        }, []), this;
	      }, notFound: function notFound(e, t) {
	        return this._notFoundHandler = { handler: e, hooks: t }, this;
	      }, resolve: function resolve(e) {
	        var t,
	            o,
	            i = this,
	            s = (e || this._cLoc()).replace(this._getRoot(), "");this._useHash && (s = s.replace(new RegExp("^/" + this._hash), "/"));var r = _(e || this._cLoc()),
	            a = p(s, this._useHash, this._hash);return !this._paused && (this._lastRouteResolved && a === this._lastRouteResolved.url && r === this._lastRouteResolved.query ? (this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.already && this._lastRouteResolved.hooks.already(this._lastRouteResolved.params), !1) : (o = d(a, this._routes)) ? (this._callLeave(), this._lastRouteResolved = { url: a, query: r, hooks: o.route.hooks, params: o.params, name: o.route.name }, t = o.route.handler, v(function () {
	          v(function () {
	            o.route.route instanceof RegExp ? t.apply(void 0, n(o.match.slice(1, o.match.length))) : t(o.params, r);
	          }, o.route.hooks, o.params, i._genericHooks);
	        }, this._genericHooks, o.params), o) : this._defaultHandler && ("" === a || "/" === a || a === this._hash || R(a, this._useHash, this._hash)) ? (v(function () {
	          v(function () {
	            i._callLeave(), i._lastRouteResolved = { url: a, query: r, hooks: i._defaultHandler.hooks }, i._defaultHandler.handler(r);
	          }, i._defaultHandler.hooks);
	        }, this._genericHooks), !0) : (this._notFoundHandler && v(function () {
	          v(function () {
	            i._callLeave(), i._lastRouteResolved = { url: a, query: r, hooks: i._notFoundHandler.hooks }, i._notFoundHandler.handler(r);
	          }, i._notFoundHandler.hooks);
	        }, this._genericHooks), !1));
	      }, destroy: function destroy() {
	        this._routes = [], this._destroyed = !0, this._lastRouteResolved = null, this._genericHooks = null, clearTimeout(this._listeningInterval), "undefined" != typeof window && (window.removeEventListener("popstate", this._onLocationChange), window.removeEventListener("hashchange", this._onLocationChange));
	      }, updatePageLinks: function updatePageLinks() {
	        var e = this;"undefined" != typeof document && this._findLinks().forEach(function (t) {
	          t.hasListenerAttached || (t.addEventListener("click", function (n) {
	            var o = e.getLinkPath(t);e._destroyed || (n.preventDefault(), e.navigate(o.replace(/\/+$/, "").replace(/^\/+/, "/")));
	          }), t.hasListenerAttached = !0);
	        });
	      }, generate: function generate(e) {
	        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
	            n = this._routes.reduce(function (n, o) {
	          var i;if (o.name === e) {
	            n = o.route;for (i in t) {
	              n = n.toString().replace(":" + i, t[i]);
	            }
	          }return n;
	        }, "");return this._useHash ? this._hash + n : n;
	      }, link: function link(e) {
	        return this._getRoot() + e;
	      }, pause: function pause() {
	        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];this._paused = e, e ? this._historyAPIUpdateMethod = "replaceState" : this._historyAPIUpdateMethod = "pushState";
	      }, resume: function resume() {
	        this.pause(!1);
	      }, historyAPIUpdateMethod: function historyAPIUpdateMethod(e) {
	        return "undefined" == typeof e ? this._historyAPIUpdateMethod : (this._historyAPIUpdateMethod = e, e);
	      }, disableIfAPINotAvailable: function disableIfAPINotAvailable() {
	        o() || this.destroy();
	      }, lastRouteResolved: function lastRouteResolved() {
	        return this._lastRouteResolved;
	      }, getLinkPath: function getLinkPath(e) {
	        return e.getAttribute("href");
	      }, hooks: function hooks(e) {
	        this._genericHooks = e;
	      }, _add: function _add(e) {
	        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
	            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;return "string" == typeof e && (e = encodeURI(e)), "object" === ("undefined" == typeof t ? "undefined" : g(t)) ? this._routes.push({ route: e, handler: t.uses, name: t.as, hooks: n || t.hooks }) : this._routes.push({ route: e, handler: t, hooks: n }), this._add;
	      }, _getRoot: function _getRoot() {
	        return null !== this.root ? this.root : (this.root = c(this._cLoc().split("?")[0], this._routes), this.root);
	      }, _listen: function _listen() {
	        var e = this;if (this._usePushState) window.addEventListener("popstate", this._onLocationChange);else if (f()) window.addEventListener("hashchange", this._onLocationChange);else {
	          var t = this._cLoc(),
	              n = void 0,
	              _o = void 0;_o = function o() {
	            n = e._cLoc(), t !== n && (t = n, e.resolve()), e._listeningInterval = setTimeout(_o, 200);
	          }, _o();
	        }
	      }, _cLoc: function _cLoc() {
	        return "undefined" != typeof window ? "undefined" != typeof window.__NAVIGO_WINDOW_LOCATION_MOCK__ ? window.__NAVIGO_WINDOW_LOCATION_MOCK__ : s(window.location.href) : "";
	      }, _findLinks: function _findLinks() {
	        return [].slice.call(document.querySelectorAll("[data-navigo]"));
	      }, _onLocationChange: function _onLocationChange() {
	        this.resolve();
	      }, _callLeave: function _callLeave() {
	        this._lastRouteResolved && this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.leave && this._lastRouteResolved.hooks.leave(this._lastRouteResolved.params);
	      } }, i.PARAMETER_REGEXP = /([:*])(\w+)/g, i.WILDCARD_REGEXP = /\*/g, i.REPLACE_VARIABLE_REGEXP = "([^/]+)", i.REPLACE_WILDCARD = "(?:.*)", i.FOLLOWED_BY_SLASH_REGEXP = "(?:/$|$)", i.MATCH_REGEXP_FLAGS = "", t["default"] = i, e.exports = t["default"];
	  }]);
	});
	//# sourceMappingURL=navigo.min.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.eventEditView = exports.eventNewView = undefined;
	
	var _eventNewView = __webpack_require__(20);
	
	var _eventNewView2 = _interopRequireDefault(_eventNewView);
	
	var _eventEditView = __webpack_require__(31);
	
	var _eventEditView2 = _interopRequireDefault(_eventEditView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var eventNewView = exports.eventNewView = function eventNewView(data) {
	  return new _eventNewView2.default(data);
	};
	var eventEditView = exports.eventEditView = function eventEditView(data) {
	  return new _eventEditView2.default(data);
	};

/***/ }),
/* 20 */
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
	
	var _router = __webpack_require__(16);
	
	var _flatpickr = __webpack_require__(21);
	
	var _flatpickr2 = _interopRequireDefault(_flatpickr);
	
	var _ru = __webpack_require__(22);
	
	var _helpers = __webpack_require__(11);
	
	var _eventFormHeader = __webpack_require__(23);
	
	var _eventFormHeader2 = _interopRequireDefault(_eventFormHeader);
	
	var _eventFormFooter = __webpack_require__(24);
	
	var _eventFormFooter2 = _interopRequireDefault(_eventFormFooter);
	
	var _field = __webpack_require__(25);
	
	var _field2 = _interopRequireDefault(_field);
	
	var _getRecomendation = __webpack_require__(26);
	
	var _getRecomendation2 = _interopRequireDefault(_getRecomendation);
	
	var _getRecomendationTag = __webpack_require__(27);
	
	var _getRecomendationTag2 = _interopRequireDefault(_getRecomendationTag);
	
	var _fieldAutocomplete = __webpack_require__(28);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EventNewView = function (_AbstractView) {
	  _inherits(EventNewView, _AbstractView);
	
	  function EventNewView(eventInputData) {
	    _classCallCheck(this, EventNewView);
	
	    var _this = _possibleConstructorReturn(this, (EventNewView.__proto__ || Object.getPrototypeOf(EventNewView)).call(this, eventInputData));
	
	    _this.eventInputData = eventInputData || {};
	    _this.fieldsProps = {
	      'eventTitle': {
	        inputId: 'eventTitle',
	        label: 'Тема',
	        placeholder: 'О чём будете говорить?',
	        extraClass: null,
	        inputValue: null,
	        isDate: false
	      },
	      'eventDate': {
	        inputId: 'eventDate',
	        label: 'Дата',
	        placeholder: null,
	        extraClass: 'field--icon field--date',
	        inputValue: null,
	        isDate: true
	      },
	      'eventStartTime': {
	        inputId: 'eventStartTimeInput',
	        label: 'Начало',
	        placeholder: null,
	        extraClass: null,
	        inputValue: null,
	        isDate: false
	      },
	      'eventEndTime': {
	        inputId: 'eventEndTimeInput',
	        label: 'Конец',
	        placeholder: null,
	        extraClass: null,
	        inputValue: null,
	        isDate: false
	      },
	      'eventMembers': {
	        inputId: 'eventMembers',
	        label: 'Участники',
	        placeholder: 'Например, Тор Одинович',
	        extraClass: null,
	        inputValue: null,
	        isDate: false
	      }
	    };
	    _this.appData = _application2.default.data;
	    _this.users = _this.appData.users || {};
	    _this.rooms = _this.appData.rooms || {};
	
	    _this.eventStartDate = new Date(+_this.eventInputData.startTime);
	    _this.eventDateDay = (0, _helpers.getDateValue)(_this.eventStartDate).day; //день в который происходят все события
	
	    _this.initialAppDate = new Date();
	    _this.initialAppDay = (0, _helpers.getDateValue)(_this.initialAppDate).day; //день инициализации приложения
	    _this.eventUsers = [];
	    return _this;
	  }
	
	  _createClass(EventNewView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var header = '<header class="header"><div class="logo"></div></header>';
	      var events = this.appData.events[this.eventDateDay]; //события происходящие в этот день
	      var eventInputId = this.eventInputData.eventId; // id события переданное по url
	
	      if (this.eventInputData.hasOwnProperty('startTime')) {
	        this.eventStartDate = new Date(+this.eventInputData.startTime);
	        this.eventEndDate = new Date(+this.eventInputData.endTime);
	      } else {
	        this.eventStartDate = new Date();
	        this.eventEndDate = new Date(this.eventStartDate.getTime() + 30 * 60 * 1000); //+30 минут
	      }
	
	      this.eventDate = {
	        start: (0, _helpers.getDateValue)(this.eventStartDate).minute,
	        end: (0, _helpers.getDateValue)(this.eventEndDate).minute
	      };
	
	      return '<div class="event-page" id="app">\n              ' + header + ' \n              <div class="event-form">\n                <div class="event-form__header">' + (0, _eventFormHeader2.default)(false) + '</div>\n                <div class="event-form__body">\n                  <div class="event-form__col">\n                    ' + (0, _field2.default)(this.fieldsProps.eventTitle) + '\n                  </div>\n                  \n                  <div class="event-form__col event-form__col--flex">\n                    <div class="event-form__col-date">\n                      ' + (0, _field2.default)(this.fieldsProps.eventDate) + '\n                    </div>\n                    \n                    <div class="event-form__col-time">\n                      ' + (0, _field2.default)(this.fieldsProps.eventStartTime) + '\n                      <i class="event-form__col-time-separator"></i>\n                      ' + (0, _field2.default)(this.fieldsProps.eventEndTime) + '\n                    </div>\n                  </div>\n                  \n                  <div class="event-form__col">\n                    ' + (0, _fieldAutocomplete.getAutocompleteMarkup)(this.fieldsProps.eventMembers) + '                  \n                  </div>\n                  \n                  <div class="event-form__col">\n                    <div class="recommendations hidden" id="recomParent">\n                      <div class="recommendations__title">\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u043A\u0438</div>\n                      <div class="recomendations__cnt"></div>\n                    </div>\n                  </div>\n                </div>\n                <div class="event-form__footer">' + (0, _eventFormFooter2.default)(false) + '</div>\n            </div>\n            </div>';
	    }
	  }, {
	    key: 'cancelBtnHandler',
	    value: function cancelBtnHandler(event) {
	      event.preventDefault();
	      this.clearHandlers();
	      _router.router.navigate();
	    }
	  }, {
	    key: 'getAutocompleteHandler',
	    value: function getAutocompleteHandler(event) {
	      (0, _fieldAutocomplete.autocompleteHandler)(event, this.users);
	    }
	  }, {
	    key: 'recommendationTagClickHandler',
	    value: function recommendationTagClickHandler(recommendationTag) {
	      this.recomParentTitle.innerHTML = 'Ваша переговорка';
	      recommendationTag.classList.add('recommendation-tag--selected');
	
	      var recomTagArr = this.recomContainer.querySelectorAll('.recommendation-tag');
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = Array.from(recomTagArr)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var item = _step.value;
	
	          this.recomContainer.removeChild(item);
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
	
	      var deleteBtn = recommendationTag.querySelector('.recommendation-tag__delete');
	      deleteBtn.addEventListener('click', this.recommendationTagDeleteBtnHandler.bind(this));
	      this.recomContainer.appendChild(recommendationTag);
	
	      this.createBtn.classList.remove('button--disabled');
	    }
	  }, {
	    key: 'recommendationTagDeleteBtnHandler',
	    value: function recommendationTagDeleteBtnHandler(event) {
	      var recommendationTag = event.target.parents('.recommendation-tag')[0];
	      this.recomParent.classList.add('hidden');
	      recommendationTag.parentNode.removeChild(recommendationTag);
	      this.createBtn.classList.add('button--disabled');
	      this.handleRecommendation();
	    }
	  }, {
	    key: 'addUserHandler',
	    value: function addUserHandler(event) {
	      //Срабатывает при добавление участника события
	      var usersId = [];
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = this.eventUsers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var eventUser = _step2.value;
	
	          usersId.push(eventUser.id);
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
	
	      if (usersId.indexOf(event.detail.userId) === -1) {
	        this.eventUsers.push({ id: event.detail.userId });
	      }
	    }
	  }, {
	    key: 'removeUserHandler',
	    value: function removeUserHandler(event) {
	      //Срабатывает при удалении участника события
	      var newArr = [];
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = this.eventUsers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var eventUser = _step3.value;
	
	          if (eventUser.id !== event.detail.userId) {
	            newArr.push(eventUser);
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
	
	      this.eventUsers = newArr;
	    }
	  }, {
	    key: 'renderRecommendations',
	    value: function renderRecommendations(recommendations) {
	      var _this2 = this;
	
	      this.recomParentTitle.innerHTML = 'Рекомендованные переговорки';
	      this.recomParent.classList.remove('hidden');
	
	      if (recommendations.length === 0) {
	        this.recomContainer.innerHTML = 'Нет рекомендаций';
	      } else {
	        this.recomContainer.innerHTML = '';
	      }
	
	      var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;
	
	      try {
	        var _loop = function _loop() {
	          var recom = _step4.value;
	
	          var recomMarkup = (0, _getRecomendationTag2.default)(recom, false);
	          var recomNode = (0, _helpers.getNodeFromMarkup)(recomMarkup);
	
	          recomNode.addEventListener('click', function (event) {
	            var recomContent = recomNode.querySelector('.recommendation-tag__content');
	            var recomContentChildsIsTarget = (0, _helpers.checkEventTarget)(event, recomContent);
	            if (event.target === recomContent || recomContentChildsIsTarget) {
	              _this2.recommendationTagClickHandler(recomNode);
	            }
	          });
	          _this2.recomContainer.appendChild(recomNode);
	        };
	
	        for (var _iterator4 = recommendations[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          _loop();
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
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      this.cancelBtnArr = this.element.querySelectorAll('[data-cancel]');
	      this.autocomplete = this.element.querySelector('[data-autocomplete]');
	
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;
	
	      try {
	        for (var _iterator5 = Array.from(this.cancelBtnArr)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var cancelBtn = _step5.value;
	
	          cancelBtn.addEventListener('click', this.cancelBtnHandler.bind(this));
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
	
	      this.autocomplete.addEventListener('keyup', this.getAutocompleteHandler.bind(this));
	
	      this.recomParent = this.element.querySelector('#recomParent');
	      this.recomParentTitle = this.recomParent.querySelector('.recommendations__title');
	      this.recomContainer = this.recomParent.querySelector('.recomendations__cnt');
	
	      document.addEventListener('addUserToEvent', this.addUserHandler.bind(this));
	      document.addEventListener('removeUserFromEvent', this.removeUserHandler.bind(this));
	
	      this.createBtn = this.element.querySelector('#createBtn');
	    }
	  }, {
	    key: 'clearHandlers',
	    value: function clearHandlers() {
	      var _iteratorNormalCompletion6 = true;
	      var _didIteratorError6 = false;
	      var _iteratorError6 = undefined;
	
	      try {
	        for (var _iterator6 = Array.from(this.cancelBtnArr)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	          var cancelBtn = _step6.value;
	
	          cancelBtn.removeEventListener('click', this.cancelBtnHandler.bind(this));
	        }
	      } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion6 && _iterator6.return) {
	            _iterator6.return();
	          }
	        } finally {
	          if (_didIteratorError6) {
	            throw _iteratorError6;
	          }
	        }
	      }
	
	      this.eventDateDatepickr.destroy();
	      this.eventTimeStartDatepickr.destroy();
	      this.eventTimeEndDatepickr.destroy();
	      this.autocomplete.removeEventListener('keyup', this.getAutocompleteHandler.bind(this));
	
	      document.removeEventListener('addUserToEvent', this.addUserHandler.bind(this));
	      document.removeEventListener('removeUserFromEvent', this.removeUserHandler.bind(this));
	    }
	  }, {
	    key: 'handleRecommendation',
	    value: function handleRecommendation() {
	      this.members = [];
	      var person = {};
	
	      if ((this.eventDate.end - this.eventDate.start) / 60000 < 15) {
	        //Событие не может быть меньше 15 мин
	        throw new Error('Минимальная продолжительность события - 15 минут');
	      }
	
	      if (this.eventDateDay < this.initialAppDay) {
	        throw new Error('Нельзя редактировать события ушедших дней');
	      }
	
	      var _iteratorNormalCompletion7 = true;
	      var _didIteratorError7 = false;
	      var _iteratorError7 = undefined;
	
	      try {
	        for (var _iterator7 = this.eventUsers[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	          var eventUser = _step7.value;
	          //
	          var _iteratorNormalCompletion9 = true;
	          var _didIteratorError9 = false;
	          var _iteratorError9 = undefined;
	
	          try {
	            for (var _iterator9 = this.users[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	              var user = _step9.value;
	
	              if (eventUser.id === user.id) {
	                person = {
	                  login: user.login,
	                  floor: user.homeFloor,
	                  avatarUrl: user.avatarUrl
	                };
	                this.members.push(person);
	              }
	            }
	          } catch (err) {
	            _didIteratorError9 = true;
	            _iteratorError9 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion9 && _iterator9.return) {
	                _iterator9.return();
	              }
	            } finally {
	              if (_didIteratorError9) {
	                throw _iteratorError9;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError7 = true;
	        _iteratorError7 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion7 && _iterator7.return) {
	            _iterator7.return();
	          }
	        } finally {
	          if (_didIteratorError7) {
	            throw _iteratorError7;
	          }
	        }
	      }
	
	      if (this.members.length === 0) {
	        throw new Error('Выберите участников события');
	      }
	
	      // Удалить редактируемое событие из списка событий
	      var newEventsArr = [];
	      var _iteratorNormalCompletion8 = true;
	      var _didIteratorError8 = false;
	      var _iteratorError8 = undefined;
	
	      try {
	        for (var _iterator8 = this.appData.events[this.eventDateDay][Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	          var event = _step8.value;
	
	          if (event.id !== this.currentId) {
	            newEventsArr.push(event);
	          }
	        }
	      } catch (err) {
	        _didIteratorError8 = true;
	        _iteratorError8 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion8 && _iterator8.return) {
	            _iterator8.return();
	          }
	        } finally {
	          if (_didIteratorError8) {
	            throw _iteratorError8;
	          }
	        }
	      }
	
	      var db = {
	        events: newEventsArr,
	        rooms: this.appData.rooms,
	        persons: this.appData.users
	      };
	
	      this.recommendationArr = (0, _getRecomendation2.default)(this.eventDate, this.members, db);
	
	      this.renderRecommendations(this.recommendationArr);
	    }
	  }, {
	    key: 'viewRendered',
	    value: function viewRendered() {
	      var _this3 = this;
	
	      this.eventDateDatepickr = new _flatpickr2.default('#date', {
	        locale: _ru.Russian,
	        altInput: true,
	        altFormat: 'j F, Y',
	        defaultDate: this.eventStartDate,
	        wrap: true,
	        disableMobile: 'true',
	        onChange: function onChange(selectedDates) {
	          var newDay = (0, _helpers.getDateValue)(new Date(selectedDates)).day;
	          var eventDayMinute = (0, _helpers.getDateValue)(_this3.eventStartDate).minute - (0, _helpers.getDateValue)(_this3.eventStartDate).day;
	          var eventEndDayMinute = (0, _helpers.getDateValue)(_this3.eventEndDate).minute - (0, _helpers.getDateValue)(_this3.eventStartDate).day;
	          _this3.eventStartDate = new Date(newDay + eventDayMinute);
	          _this3.eventEndDate = new Date(newDay + eventEndDayMinute);
	          _this3.eventTimeStartDatepickr.setDate(_this3.eventStartDate);
	          _this3.eventTimeEndDatepickr.setDate(_this3.eventEndDate);
	        }
	      });
	      this.eventTimeStartDatepickr = new _flatpickr2.default('#eventStartTimeInput', {
	        enableTime: true,
	        noCalendar: true,
	        dateFormat: 'H:i',
	        time_24hr: true,
	        defaultDate: this.eventStartDate,
	        onChange: function onChange(selectedDates) {
	          var start = new Date(selectedDates);
	          _this3.eventDate.start = start.getTime();
	          _this3.handleRecommendation();
	        }
	      });
	      this.eventTimeEndDatepickr = new _flatpickr2.default('#eventEndTimeInput', {
	        enableTime: true,
	        noCalendar: true,
	        dateFormat: 'H:i',
	        time_24hr: true,
	        defaultDate: this.eventEndDate,
	        onChange: function onChange(selectedDates) {
	          var end = new Date(selectedDates);
	          _this3.eventDate.end = end.getTime();
	          _this3.handleRecommendation();
	        }
	
	      });
	    }
	  }]);
	
	  return EventNewView;
	}(_abstractView2.default);
	
	exports.default = EventNewView;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/* flatpickr v4.1.4, @license MIT */
	(function (global, factory) {
	    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.flatpickr = factory();
	})(undefined, function () {
	    'use strict';
	
	    /*! *****************************************************************************
	    Copyright (c) Microsoft Corporation. All rights reserved.
	    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	    this file except in compliance with the License. You may obtain a copy of the
	    License at http://www.apache.org/licenses/LICENSE-2.0
	    
	    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	    MERCHANTABLITY OR NON-INFRINGEMENT.
	    
	    See the Apache Version 2.0 License for specific language governing permissions
	    and limitations under the License.
	    ***************************************************************************** */
	    /* global Reflect, Promise */
	
	    var __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) {
	                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	            }
	        }
	        return t;
	    };
	
	    function compareDates(date1, date2, timeless) {
	        if (timeless !== false) {
	            return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
	        }
	        return date1.getTime() - date2.getTime();
	    }
	    var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
	        return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
	    };
	    var getWeek = function getWeek(givenDate) {
	        var onejan = new Date(givenDate.getFullYear(), 0, 1);
	        return Math.ceil(((givenDate.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7);
	    };
	    var duration = {
	        DAY: 86400000
	    };
	
	    var defaults = {
	        _disable: [],
	        _enable: [],
	        allowInput: false,
	        altFormat: "F j, Y",
	        altInput: false,
	        altInputClass: "form-control input",
	        animate: (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
	        ariaDateFormat: "F j, Y",
	        clickOpens: true,
	        closeOnSelect: true,
	        conjunction: ", ",
	        dateFormat: "Y-m-d",
	        defaultHour: 12,
	        defaultMinute: 0,
	        defaultSeconds: 0,
	        disable: [],
	        disableMobile: false,
	        enable: [],
	        enableSeconds: false,
	        enableTime: false,
	        errorHandler: console.warn,
	        getWeek: getWeek,
	        hourIncrement: 1,
	        ignoredFocusElements: [],
	        inline: false,
	        locale: "default",
	        minuteIncrement: 5,
	        mode: "single",
	        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
	        noCalendar: false,
	        onChange: [],
	        onClose: [],
	        onDayCreate: [],
	        onDestroy: [],
	        onKeyDown: [],
	        onMonthChange: [],
	        onOpen: [],
	        onParseConfig: [],
	        onReady: [],
	        onValueUpdate: [],
	        onYearChange: [],
	        plugins: [],
	        position: "auto",
	        positionElement: undefined,
	        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
	        shorthandCurrentMonth: false,
	        static: false,
	        time_24hr: false,
	        weekNumbers: false,
	        wrap: false
	    };
	
	    var english = {
	        weekdays: {
	            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	            longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	        },
	        months: {
	            shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	            longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	        },
	        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
	        firstDayOfWeek: 0,
	        ordinal: function ordinal(nth) {
	            var s = nth % 100;
	            if (s > 3 && s < 21) return "th";
	            switch (s % 10) {
	                case 1:
	                    return "st";
	                case 2:
	                    return "nd";
	                case 3:
	                    return "rd";
	                default:
	                    return "th";
	            }
	        },
	        rangeSeparator: " to ",
	        weekAbbreviation: "Wk",
	        scrollTitle: "Scroll to increment",
	        toggleTitle: "Click to toggle",
	        amPM: ["AM", "PM"]
	    };
	
	    var pad = function pad(number) {
	        return ("0" + number).slice(-2);
	    };
	    var int = function int(bool) {
	        return bool === true ? 1 : 0;
	    };
	    function debounce(func, wait, immediate) {
	        if (immediate === void 0) {
	            immediate = false;
	        }
	        var timeout;
	        return function () {
	            var context = this,
	                args = arguments;
	            timeout !== null && clearTimeout(timeout);
	            timeout = window.setTimeout(function () {
	                timeout = null;
	                if (!immediate) func.apply(context, args);
	            }, wait);
	            if (immediate && !timeout) func.apply(context, args);
	        };
	    }
	    var arrayify = function arrayify(obj) {
	        return obj instanceof Array ? obj : [obj];
	    };
	    function mouseDelta(e) {
	        var delta = e.wheelDelta || -e.deltaY;
	        return delta >= 0 ? 1 : -1;
	    }
	
	    function toggleClass(elem, className, bool) {
	        if (bool === true) return elem.classList.add(className);
	        elem.classList.remove(className);
	    }
	    function createElement(tag, className, content) {
	        var e = window.document.createElement(tag);
	        className = className || "";
	        content = content || "";
	        e.className = className;
	        if (content !== undefined) e.textContent = content;
	        return e;
	    }
	    function clearNode(node) {
	        while (node.firstChild) {
	            node.removeChild(node.firstChild);
	        }
	    }
	    function findParent(node, condition) {
	        if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
	        return undefined;
	    }
	    function createNumberInput(inputClassName) {
	        var wrapper = createElement("div", "numInputWrapper"),
	            numInput = createElement("input", "numInput " + inputClassName),
	            arrowUp = createElement("span", "arrowUp"),
	            arrowDown = createElement("span", "arrowDown");
	        numInput.type = "text";
	        numInput.pattern = "\\d*";
	        wrapper.appendChild(numInput);
	        wrapper.appendChild(arrowUp);
	        wrapper.appendChild(arrowDown);
	        return wrapper;
	    }
	
	    var do_nothing = function do_nothing() {
	        return undefined;
	    };
	    var revFormat = {
	        D: do_nothing,
	        F: function F(dateObj, monthName, locale) {
	            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
	        },
	        G: function G(dateObj, hour) {
	            dateObj.setHours(parseFloat(hour));
	        },
	        H: function H(dateObj, hour) {
	            dateObj.setHours(parseFloat(hour));
	        },
	        J: function J(dateObj, day) {
	            dateObj.setDate(parseFloat(day));
	        },
	        K: function K(dateObj, amPM, locale) {
	            dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
	        },
	        M: function M(dateObj, shortMonth, locale) {
	            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
	        },
	        S: function S(dateObj, seconds) {
	            dateObj.setSeconds(parseFloat(seconds));
	        },
	        U: function U(_, unixSeconds) {
	            return new Date(parseFloat(unixSeconds) * 1000);
	        },
	        W: function W(dateObj, weekNum) {
	            var weekNumber = parseInt(weekNum);
	            return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
	        },
	        Y: function Y(dateObj, year) {
	            dateObj.setFullYear(parseFloat(year));
	        },
	        Z: function Z(_, ISODate) {
	            return new Date(ISODate);
	        },
	        d: function d(dateObj, day) {
	            dateObj.setDate(parseFloat(day));
	        },
	        h: function h(dateObj, hour) {
	            dateObj.setHours(parseFloat(hour));
	        },
	        i: function i(dateObj, minutes) {
	            dateObj.setMinutes(parseFloat(minutes));
	        },
	        j: function j(dateObj, day) {
	            dateObj.setDate(parseFloat(day));
	        },
	        l: do_nothing,
	        m: function m(dateObj, month) {
	            dateObj.setMonth(parseFloat(month) - 1);
	        },
	        n: function n(dateObj, month) {
	            dateObj.setMonth(parseFloat(month) - 1);
	        },
	        s: function s(dateObj, seconds) {
	            dateObj.setSeconds(parseFloat(seconds));
	        },
	        w: do_nothing,
	        y: function y(dateObj, year) {
	            dateObj.setFullYear(2000 + parseFloat(year));
	        }
	    };
	    var tokenRegex = {
	        D: "(\\w+)",
	        F: "(\\w+)",
	        G: "(\\d\\d|\\d)",
	        H: "(\\d\\d|\\d)",
	        J: "(\\d\\d|\\d)\\w+",
	        K: "",
	        M: "(\\w+)",
	        S: "(\\d\\d|\\d)",
	        U: "(.+)",
	        W: "(\\d\\d|\\d)",
	        Y: "(\\d{4})",
	        Z: "(.+)",
	        d: "(\\d\\d|\\d)",
	        h: "(\\d\\d|\\d)",
	        i: "(\\d\\d|\\d)",
	        j: "(\\d\\d|\\d)",
	        l: "(\\w+)",
	        m: "(\\d\\d|\\d)",
	        n: "(\\d\\d|\\d)",
	        s: "(\\d\\d|\\d)",
	        w: "(\\d\\d|\\d)",
	        y: "(\\d{2})"
	    };
	    var formats = {
	        Z: function Z(date) {
	            return date.toISOString();
	        },
	        D: function D(date, locale, options) {
	            return locale.weekdays.shorthand[formats.w(date, locale, options)];
	        },
	        F: function F(date, locale, options) {
	            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
	        },
	        G: function G(date, locale, options) {
	            return pad(formats.h(date, locale, options));
	        },
	        H: function H(date) {
	            return pad(date.getHours());
	        },
	        J: function J(date, locale) {
	            return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
	        },
	        K: function K(date, locale) {
	            return locale.amPM[int(date.getHours() > 11)];
	        },
	        M: function M(date, locale) {
	            return monthToStr(date.getMonth(), true, locale);
	        },
	        S: function S(date) {
	            return pad(date.getSeconds());
	        },
	        U: function U(date) {
	            return date.getTime() / 1000;
	        },
	        W: function W(date, _, options) {
	            return options.getWeek(date);
	        },
	        Y: function Y(date) {
	            return date.getFullYear();
	        },
	        d: function d(date) {
	            return pad(date.getDate());
	        },
	        h: function h(date) {
	            return date.getHours() % 12 ? date.getHours() % 12 : 12;
	        },
	        i: function i(date) {
	            return pad(date.getMinutes());
	        },
	        j: function j(date) {
	            return date.getDate();
	        },
	        l: function l(date, locale) {
	            return locale.weekdays.longhand[date.getDay()];
	        },
	        m: function m(date) {
	            return pad(date.getMonth() + 1);
	        },
	        n: function n(date) {
	            return date.getMonth() + 1;
	        },
	        s: function s(date) {
	            return date.getSeconds();
	        },
	        w: function w(date) {
	            return date.getDay();
	        },
	        y: function y(date) {
	            return String(date.getFullYear()).substring(2);
	        }
	    };
	
	    if (typeof Object.assign !== "function") {
	        Object.assign = function (target) {
	            var args = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                args[_i - 1] = arguments[_i];
	            }
	            if (!target) {
	                throw TypeError("Cannot convert undefined or null to object");
	            }
	            var _loop_1 = function _loop_1(source) {
	                if (source) {
	                    Object.keys(source).forEach(function (key) {
	                        return target[key] = source[key];
	                    });
	                }
	            };
	            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
	                var source = args_1[_a];
	                _loop_1(source);
	            }
	            return target;
	        };
	    }
	
	    function FlatpickrInstance(element, instanceConfig) {
	        var self = {};
	        self.parseDate = parseDate;
	        self.formatDate = formatDate;
	        self._animationLoop = [];
	        self._handlers = [];
	        self._bind = bind;
	        self._setHoursFromDate = setHoursFromDate;
	        self.changeMonth = changeMonth;
	        self.changeYear = changeYear;
	        self.clear = clear;
	        self.close = close;
	        self._createElement = createElement;
	        self.destroy = destroy;
	        self.isEnabled = isEnabled;
	        self.jumpToDate = jumpToDate;
	        self.open = open;
	        self.redraw = redraw;
	        self.set = set;
	        self.setDate = setDate;
	        self.toggle = toggle;
	        function setupHelperFunctions() {
	            self.utils = {
	                getDaysInMonth: function getDaysInMonth(month, yr) {
	                    if (month === void 0) {
	                        month = self.currentMonth;
	                    }
	                    if (yr === void 0) {
	                        yr = self.currentYear;
	                    }
	                    if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
	                    return self.l10n.daysInMonth[month];
	                }
	            };
	        }
	        function init() {
	            self.element = self.input = element;
	            self.isOpen = false;
	            parseConfig();
	            setupLocale();
	            setupInputs();
	            setupDates();
	            setupHelperFunctions();
	            if (!self.isMobile) build();
	            bindEvents();
	            if (self.selectedDates.length || self.config.noCalendar) {
	                if (self.config.enableTime) {
	                    setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : undefined);
	                }
	                updateValue(false);
	            }
	            self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;
	            if (self.weekWrapper !== undefined && self.daysContainer !== undefined) {
	                self.calendarContainer.style.width = self.daysContainer.offsetWidth + self.weekWrapper.offsetWidth + "px";
	            }
	            if (!self.isMobile) positionCalendar();
	            triggerEvent("onReady");
	        }
	        function bindToInstance(fn) {
	            return fn.bind(self);
	        }
	        function updateTime(e) {
	            if (self.config.noCalendar && self.selectedDates.length === 0) {
	                var minDate = self.config.minDate;
	                self.setDate(new Date().setHours(!minDate ? self.config.defaultHour : minDate.getHours(), !minDate ? self.config.defaultMinute : minDate.getMinutes(), !minDate || !self.config.enableSeconds ? self.config.defaultSeconds : minDate.getSeconds()), false);
	                setHoursFromInputs();
	                updateValue();
	            }
	            timeWrapper(e);
	            if (self.selectedDates.length === 0) return;
	            if (!self.minDateHasTime || e.type !== "input" || e.target.value.length >= 2) {
	                setHoursFromInputs();
	                updateValue();
	            } else {
	                setTimeout(function () {
	                    setHoursFromInputs();
	                    updateValue();
	                }, 1000);
	            }
	        }
	        function ampm2military(hour, amPM) {
	            return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
	        }
	        function military2ampm(hour) {
	            switch (hour % 24) {
	                case 0:
	                case 12:
	                    return 12;
	                default:
	                    return hour % 12;
	            }
	        }
	        function setHoursFromInputs() {
	            if (self.hourElement === undefined || self.minuteElement === undefined) return;
	            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
	                minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
	                seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
	            if (self.amPM !== undefined) hours = ampm2military(hours, self.amPM.textContent);
	            if (self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {
	                hours = Math.max(hours, self.config.minDate.getHours());
	                if (hours === self.config.minDate.getHours()) minutes = Math.max(minutes, self.config.minDate.getMinutes());
	            }
	            if (self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
	                hours = Math.min(hours, self.config.maxDate.getHours());
	                if (hours === self.config.maxDate.getHours()) minutes = Math.min(minutes, self.config.maxDate.getMinutes());
	            }
	            setHours(hours, minutes, seconds);
	        }
	        function setHoursFromDate(dateObj) {
	            var date = dateObj || self.latestSelectedDateObj;
	            if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
	        }
	        function setHours(hours, minutes, seconds) {
	            if (self.latestSelectedDateObj !== undefined) {
	                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
	            }
	            if (!self.hourElement || !self.minuteElement || self.isMobile) return;
	            self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
	            self.minuteElement.value = pad(minutes);
	            if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
	            if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
	        }
	        function onYearInput(event) {
	            var year = parseInt(event.target.value) + (event.delta || 0);
	            if (year.toString().length === 4 || event.key === "Enter") {
	                self.currentYearElement.blur();
	                if (!/[^\d]/.test(year.toString())) changeYear(year);
	            }
	        }
	        function bind(element, event, handler) {
	            if (event instanceof Array) return event.forEach(function (ev) {
	                return bind(element, ev, handler);
	            });
	            if (element instanceof Array) return element.forEach(function (el) {
	                return bind(el, event, handler);
	            });
	            element.addEventListener(event, handler);
	            self._handlers.push({ element: element, event: event, handler: handler });
	        }
	        function onClick(handler) {
	            return function (evt) {
	                evt.which === 1 && handler(evt);
	            };
	        }
	        function triggerChange() {
	            triggerEvent("onChange");
	        }
	        function bindEvents() {
	            if (self.config.wrap) {
	                ["open", "close", "toggle", "clear"].forEach(function (evt) {
	                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
	                        return bind(el, "click", self[evt]);
	                    });
	                });
	            }
	            if (self.isMobile) {
	                setupMobile();
	                return;
	            }
	            var debouncedResize = debounce(onResize, 50);
	            self._debouncedChange = debounce(triggerChange, 300);
	            if (self.config.mode === "range" && self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
	                return onMouseOver(e.target);
	            });
	            bind(window.document.body, "keydown", onKeyDown);
	            if (!self.config.static) bind(self._input, "keydown", onKeyDown);
	            if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
	            if (window.ontouchstart !== undefined) bind(window.document.body, "touchstart", documentClick);
	            bind(window.document.body, "mousedown", onClick(documentClick));
	            bind(self._input, "blur", documentClick);
	            if (self.config.clickOpens === true) {
	                bind(self._input, "focus", self.open);
	                bind(self._input, "mousedown", onClick(self.open));
	            }
	            if (self.daysContainer !== undefined) {
	                self.monthNav.addEventListener("wheel", function (e) {
	                    return e.preventDefault();
	                });
	                bind(self.monthNav, "wheel", debounce(onMonthNavScroll, 10));
	                bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
	                bind(self.monthNav, ["keyup", "increment"], onYearInput);
	                bind(self.daysContainer, "mousedown", onClick(selectDate));
	                if (self.config.animate) {
	                    bind(self.daysContainer, ["webkitAnimationEnd", "animationend"], animateDays);
	                    bind(self.monthNav, ["webkitAnimationEnd", "animationend"], animateMonths);
	                }
	            }
	            if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
	                var selText = function selText(e) {
	                    return e.target.select();
	                };
	                bind(self.timeContainer, ["wheel", "input", "increment"], updateTime);
	                bind(self.timeContainer, "mousedown", onClick(timeIncrement));
	                bind(self.timeContainer, ["wheel", "increment"], self._debouncedChange);
	                bind(self.timeContainer, "input", triggerChange);
	                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
	                if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
	                    return self.secondElement && self.secondElement.select();
	                });
	                if (self.amPM !== undefined) {
	                    bind(self.amPM, "mousedown", onClick(function (e) {
	                        updateTime(e);
	                        triggerChange();
	                    }));
	                }
	            }
	        }
	        function processPostDayAnimation() {
	            self._animationLoop.forEach(function (f) {
	                return f();
	            });
	            self._animationLoop = [];
	        }
	        function animateDays(e) {
	            if (self.daysContainer && self.daysContainer.childNodes.length > 1) {
	                switch (e.animationName) {
	                    case "fpSlideLeft":
	                        self.daysContainer.lastChild && self.daysContainer.lastChild.classList.remove("slideLeftNew");
	                        self.daysContainer.removeChild(self.daysContainer.firstChild);
	                        self.days = self.daysContainer.firstChild;
	                        processPostDayAnimation();
	                        break;
	                    case "fpSlideRight":
	                        self.daysContainer.firstChild && self.daysContainer.firstChild.classList.remove("slideRightNew");
	                        self.daysContainer.removeChild(self.daysContainer.lastChild);
	                        self.days = self.daysContainer.firstChild;
	                        processPostDayAnimation();
	                        break;
	                    default:
	                        break;
	                }
	            }
	        }
	        function animateMonths(e) {
	            switch (e.animationName) {
	                case "fpSlideLeftNew":
	                case "fpSlideRightNew":
	                    self.navigationCurrentMonth.classList.remove("slideLeftNew");
	                    self.navigationCurrentMonth.classList.remove("slideRightNew");
	                    var nav = self.navigationCurrentMonth;
	                    while (nav.nextSibling && /curr/.test(nav.nextSibling.className)) {
	                        self.monthNav.removeChild(nav.nextSibling);
	                    }while (nav.previousSibling && /curr/.test(nav.previousSibling.className)) {
	                        self.monthNav.removeChild(nav.previousSibling);
	                    }self.oldCurMonth = undefined;
	                    break;
	            }
	        }
	        function jumpToDate(jumpDate) {
	            var jumpTo = jumpDate !== undefined ? parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
	            try {
	                if (jumpTo !== undefined) {
	                    self.currentYear = jumpTo.getFullYear();
	                    self.currentMonth = jumpTo.getMonth();
	                }
	            } catch (e) {
	                e.message = "Invalid date supplied: " + jumpTo;
	                self.config.errorHandler(e);
	            }
	            self.redraw();
	        }
	        function timeIncrement(e) {
	            if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
	        }
	        function incrementNumInput(e, delta, inputElem) {
	            var target = e && e.target;
	            var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
	            var event = createEvent("increment");
	            event.delta = delta;
	            input && input.dispatchEvent(event);
	        }
	        function build() {
	            var fragment = window.document.createDocumentFragment();
	            self.calendarContainer = createElement("div", "flatpickr-calendar");
	            self.calendarContainer.tabIndex = -1;
	            if (!self.config.noCalendar) {
	                fragment.appendChild(buildMonthNav());
	                self.innerContainer = createElement("div", "flatpickr-innerContainer");
	                if (self.config.weekNumbers) {
	                    var _a = buildWeeks(),
	                        weekWrapper = _a.weekWrapper,
	                        weekNumbers = _a.weekNumbers;
	                    self.innerContainer.appendChild(weekWrapper);
	                    self.weekNumbers = weekNumbers;
	                    self.weekWrapper = weekWrapper;
	                }
	                self.rContainer = createElement("div", "flatpickr-rContainer");
	                self.rContainer.appendChild(buildWeekdays());
	                if (!self.daysContainer) {
	                    self.daysContainer = createElement("div", "flatpickr-days");
	                    self.daysContainer.tabIndex = -1;
	                }
	                buildDays();
	                self.rContainer.appendChild(self.daysContainer);
	                self.innerContainer.appendChild(self.rContainer);
	                fragment.appendChild(self.innerContainer);
	            }
	            if (self.config.enableTime) {
	                fragment.appendChild(buildTime());
	            }
	            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
	            toggleClass(self.calendarContainer, "animate", self.config.animate);
	            self.calendarContainer.appendChild(fragment);
	            var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType;
	            if (self.config.inline || self.config.static) {
	                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
	                if (self.config.inline) {
	                    if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
	                }
	                if (self.config.static) {
	                    var wrapper = createElement("div", "flatpickr-wrapper");
	                    if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
	                    wrapper.appendChild(self.element);
	                    if (self.altInput) wrapper.appendChild(self.altInput);
	                    wrapper.appendChild(self.calendarContainer);
	                }
	            }
	            if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
	        }
	        function createDay(className, date, dayNumber, i) {
	            var dateIsEnabled = isEnabled(date, true),
	                dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
	            dayElement.dateObj = date;
	            dayElement.$i = i;
	            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
	            if (compareDates(date, self.now) === 0) {
	                self.todayDateElem = dayElement;
	                dayElement.classList.add("today");
	            }
	            if (dateIsEnabled) {
	                dayElement.tabIndex = -1;
	                if (isDateSelected(date)) {
	                    dayElement.classList.add("selected");
	                    self.selectedDateElem = dayElement;
	                    if (self.config.mode === "range") {
	                        toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0]) === 0);
	                        toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1]) === 0);
	                    }
	                }
	            } else {
	                dayElement.classList.add("disabled");
	                if (self.selectedDates[0] && self.minRangeDate && date > self.minRangeDate && date < self.selectedDates[0]) self.minRangeDate = date;else if (self.selectedDates[0] && self.maxRangeDate && date < self.maxRangeDate && date > self.selectedDates[0]) self.maxRangeDate = date;
	            }
	            if (self.config.mode === "range") {
	                if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
	                if (self.selectedDates.length === 1 && self.minRangeDate !== undefined && self.maxRangeDate !== undefined && (date < self.minRangeDate || date > self.maxRangeDate)) dayElement.classList.add("notAllowed");
	            }
	            if (self.weekNumbers && className !== "prevMonthDay" && dayNumber % 7 === 1) {
	                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" + self.config.getWeek(date) + "</span>");
	            }
	            triggerEvent("onDayCreate", dayElement);
	            return dayElement;
	        }
	        function focusOnDay(currentIndex, offset) {
	            var newIndex = currentIndex + offset || 0,
	                targetNode = currentIndex !== undefined ? self.days.childNodes[newIndex] : self.selectedDateElem || self.todayDateElem || self.days.childNodes[0];
	            var focus = function focus() {
	                targetNode = targetNode || self.days.childNodes[newIndex];
	                targetNode.focus();
	                if (self.config.mode === "range") onMouseOver(targetNode);
	            };
	            if (targetNode === undefined && offset !== 0) {
	                if (offset > 0) {
	                    self.changeMonth(1, true, undefined, true);
	                    newIndex = newIndex % 42;
	                } else if (offset < 0) {
	                    self.changeMonth(-1, true, undefined, true);
	                    newIndex += 42;
	                }
	                return afterDayAnim(focus);
	            }
	            focus();
	        }
	        function afterDayAnim(fn) {
	            self.config.animate === true ? self._animationLoop.push(fn) : fn();
	        }
	        function buildDays(delta) {
	            if (self.daysContainer === undefined) {
	                return;
	            }
	            var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7,
	                isRangeMode = self.config.mode === "range";
	            var prevMonthDays = self.utils.getDaysInMonth((self.currentMonth - 1 + 12) % 12);
	            var daysInMonth = self.utils.getDaysInMonth(),
	                days = window.document.createDocumentFragment();
	            var dayNumber = prevMonthDays + 1 - firstOfMonth,
	                dayIndex = 0;
	            if (self.weekNumbers && self.weekNumbers.firstChild) self.weekNumbers.textContent = "";
	            if (isRangeMode) {
	                self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
	                self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - firstOfMonth) % daysInMonth);
	            }
	            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
	                days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber, dayIndex));
	            }
	            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
	                days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber, dayIndex));
	            }
	            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++, dayIndex++) {
	                days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum, dayIndex));
	            }
	            if (isRangeMode && self.selectedDates.length === 1 && days.childNodes[0]) {
	                self._hidePrevMonthArrow = self._hidePrevMonthArrow || !!self.minRangeDate && self.minRangeDate > days.childNodes[0].dateObj;
	                self._hideNextMonthArrow = self._hideNextMonthArrow || !!self.maxRangeDate && self.maxRangeDate < new Date(self.currentYear, self.currentMonth + 1, 1);
	            } else updateNavigationCurrentMonth();
	            var dayContainer = createElement("div", "dayContainer");
	            dayContainer.appendChild(days);
	            if (!self.config.animate || delta === undefined) clearNode(self.daysContainer);else {
	                while (self.daysContainer.childNodes.length > 1) {
	                    self.daysContainer.removeChild(self.daysContainer.firstChild);
	                }
	            }
	            if (delta && delta >= 0) self.daysContainer.appendChild(dayContainer);else self.daysContainer.insertBefore(dayContainer, self.daysContainer.firstChild);
	            self.days = self.daysContainer.childNodes[0];
	        }
	        function buildMonthNav() {
	            var monthNavFragment = window.document.createDocumentFragment();
	            self.monthNav = createElement("div", "flatpickr-month");
	            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
	            self.prevMonthNav.innerHTML = self.config.prevArrow;
	            self.currentMonthElement = createElement("span", "cur-month");
	            self.currentMonthElement.title = self.l10n.scrollTitle;
	            var yearInput = createNumberInput("cur-year");
	            self.currentYearElement = yearInput.childNodes[0];
	            self.currentYearElement.title = self.l10n.scrollTitle;
	            if (self.config.minDate) self.currentYearElement.min = self.config.minDate.getFullYear().toString();
	            if (self.config.maxDate) {
	                self.currentYearElement.max = self.config.maxDate.getFullYear().toString();
	                self.currentYearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
	            }
	            self.nextMonthNav = createElement("span", "flatpickr-next-month");
	            self.nextMonthNav.innerHTML = self.config.nextArrow;
	            self.navigationCurrentMonth = createElement("div", "flatpickr-current-month");
	            self.navigationCurrentMonth.appendChild(self.currentMonthElement);
	            self.navigationCurrentMonth.appendChild(yearInput);
	            monthNavFragment.appendChild(self.prevMonthNav);
	            monthNavFragment.appendChild(self.navigationCurrentMonth);
	            monthNavFragment.appendChild(self.nextMonthNav);
	            self.monthNav.appendChild(monthNavFragment);
	            Object.defineProperty(self, "_hidePrevMonthArrow", {
	                get: function get() {
	                    return self.__hidePrevMonthArrow;
	                },
	                set: function set(bool) {
	                    if (self.__hidePrevMonthArrow !== bool) self.prevMonthNav.style.display = bool ? "none" : "block";
	                    self.__hidePrevMonthArrow = bool;
	                }
	            });
	            Object.defineProperty(self, "_hideNextMonthArrow", {
	                get: function get() {
	                    return self.__hideNextMonthArrow;
	                },
	                set: function set(bool) {
	                    if (self.__hideNextMonthArrow !== bool) self.nextMonthNav.style.display = bool ? "none" : "block";
	                    self.__hideNextMonthArrow = bool;
	                }
	            });
	            updateNavigationCurrentMonth();
	            return self.monthNav;
	        }
	        function buildTime() {
	            self.calendarContainer.classList.add("hasTime");
	            if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
	            self.timeContainer = createElement("div", "flatpickr-time");
	            self.timeContainer.tabIndex = -1;
	            var separator = createElement("span", "flatpickr-time-separator", ":");
	            var hourInput = createNumberInput("flatpickr-hour");
	            self.hourElement = hourInput.childNodes[0];
	            var minuteInput = createNumberInput("flatpickr-minute");
	            self.minuteElement = minuteInput.childNodes[0];
	            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
	            self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? self.config.defaultHour : military2ampm(self.config.defaultHour));
	            self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
	            self.hourElement.step = self.config.hourIncrement.toString();
	            self.minuteElement.step = self.config.minuteIncrement.toString();
	            self.hourElement.min = self.config.time_24hr ? "0" : "1";
	            self.hourElement.max = self.config.time_24hr ? "23" : "12";
	            self.minuteElement.min = "0";
	            self.minuteElement.max = "59";
	            self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;
	            self.timeContainer.appendChild(hourInput);
	            self.timeContainer.appendChild(separator);
	            self.timeContainer.appendChild(minuteInput);
	            if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");
	            if (self.config.enableSeconds) {
	                self.timeContainer.classList.add("hasSeconds");
	                var secondInput = createNumberInput("flatpickr-second");
	                self.secondElement = secondInput.childNodes[0];
	                self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);
	                self.secondElement.step = self.minuteElement.step;
	                self.secondElement.min = self.minuteElement.min;
	                self.secondElement.max = self.minuteElement.max;
	                self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
	                self.timeContainer.appendChild(secondInput);
	            }
	            if (!self.config.time_24hr) {
	                self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
	                self.amPM.title = self.l10n.toggleTitle;
	                self.amPM.tabIndex = -1;
	                self.timeContainer.appendChild(self.amPM);
	            }
	            return self.timeContainer;
	        }
	        function buildWeekdays() {
	            if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");
	            var firstDayOfWeek = self.l10n.firstDayOfWeek;
	            var weekdays = self.l10n.weekdays.shorthand.slice();
	            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
	                weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
	            }
	            self.weekdayContainer.innerHTML = "\n    <span class=flatpickr-weekday>\n      " + weekdays.join("</span><span class=flatpickr-weekday>") + "\n    </span>\n    ";
	            return self.weekdayContainer;
	        }
	        function buildWeeks() {
	            self.calendarContainer.classList.add("hasWeeks");
	            var weekWrapper = createElement("div", "flatpickr-weekwrapper");
	            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
	            var weekNumbers = createElement("div", "flatpickr-weeks");
	            weekWrapper.appendChild(weekNumbers);
	            return {
	                weekWrapper: weekWrapper,
	                weekNumbers: weekNumbers
	            };
	        }
	        function changeMonth(value, is_offset, animate, from_keyboard) {
	            if (is_offset === void 0) {
	                is_offset = true;
	            }
	            if (animate === void 0) {
	                animate = self.config.animate;
	            }
	            if (from_keyboard === void 0) {
	                from_keyboard = false;
	            }
	            var delta = is_offset ? value : value - self.currentMonth;
	            if (delta < 0 && self._hidePrevMonthArrow || delta > 0 && self._hideNextMonthArrow) return;
	            self.currentMonth += delta;
	            if (self.currentMonth < 0 || self.currentMonth > 11) {
	                self.currentYear += self.currentMonth > 11 ? 1 : -1;
	                self.currentMonth = (self.currentMonth + 12) % 12;
	                triggerEvent("onYearChange");
	            }
	            buildDays(animate ? delta : undefined);
	            if (!animate) {
	                triggerEvent("onMonthChange");
	                return updateNavigationCurrentMonth();
	            }
	            var nav = self.navigationCurrentMonth;
	            if (delta < 0) {
	                while (nav.nextSibling && /curr/.test(nav.nextSibling.className)) {
	                    self.monthNav.removeChild(nav.nextSibling);
	                }
	            } else if (delta > 0) {
	                while (nav.previousSibling && /curr/.test(nav.previousSibling.className)) {
	                    self.monthNav.removeChild(nav.previousSibling);
	                }
	            }
	            self.oldCurMonth = self.navigationCurrentMonth;
	            self.navigationCurrentMonth = self.monthNav.insertBefore(self.oldCurMonth.cloneNode(true), delta > 0 ? self.oldCurMonth.nextSibling : self.oldCurMonth);
	            var daysContainer = self.daysContainer;
	            if (daysContainer.firstChild && daysContainer.lastChild) {
	                if (delta > 0) {
	                    daysContainer.firstChild.classList.add("slideLeft");
	                    daysContainer.lastChild.classList.add("slideLeftNew");
	                    self.oldCurMonth.classList.add("slideLeft");
	                    self.navigationCurrentMonth.classList.add("slideLeftNew");
	                } else if (delta < 0) {
	                    daysContainer.firstChild.classList.add("slideRightNew");
	                    daysContainer.lastChild.classList.add("slideRight");
	                    self.oldCurMonth.classList.add("slideRight");
	                    self.navigationCurrentMonth.classList.add("slideRightNew");
	                }
	            }
	            self.currentMonthElement = self.navigationCurrentMonth.firstChild;
	            self.currentYearElement = self.navigationCurrentMonth.lastChild.childNodes[0];
	            updateNavigationCurrentMonth();
	            if (self.oldCurMonth.firstChild) self.oldCurMonth.firstChild.textContent = monthToStr(self.currentMonth - delta, self.config.shorthandCurrentMonth, self.l10n);
	            afterDayAnim(function () {
	                return triggerEvent("onMonthChange");
	            });
	            if (from_keyboard && document.activeElement && document.activeElement.$i) {
	                var index_1 = document.activeElement.$i;
	                afterDayAnim(function () {
	                    focusOnDay(index_1, 0);
	                });
	            }
	        }
	        function clear(triggerChangeEvent) {
	            if (triggerChangeEvent === void 0) {
	                triggerChangeEvent = true;
	            }
	            self.input.value = "";
	            if (self.altInput) self.altInput.value = "";
	            if (self.mobileInput) self.mobileInput.value = "";
	            self.selectedDates = [];
	            self.latestSelectedDateObj = undefined;
	            self.showTimeInput = false;
	            self.redraw();
	            if (triggerChangeEvent) triggerEvent("onChange");
	        }
	        function close() {
	            self.isOpen = false;
	            if (!self.isMobile) {
	                self.calendarContainer.classList.remove("open");
	                self._input.classList.remove("active");
	            }
	            triggerEvent("onClose");
	        }
	        function destroy() {
	            if (self.config !== undefined) triggerEvent("onDestroy");
	            for (var i = self._handlers.length; i--;) {
	                var h = self._handlers[i];
	                h.element.removeEventListener(h.event, h.handler);
	            }
	            self._handlers = [];
	            if (self.mobileInput) {
	                if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
	                self.mobileInput = undefined;
	            } else if (self.calendarContainer && self.calendarContainer.parentNode) self.calendarContainer.parentNode.removeChild(self.calendarContainer);
	            if (self.altInput) {
	                self.input.type = "text";
	                if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
	                delete self.altInput;
	            }
	            if (self.input) {
	                self.input.type = self.input._type;
	                self.input.classList.remove("flatpickr-input");
	                self.input.removeAttribute("readonly");
	                self.input.value = "";
	            }
	            ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
	                try {
	                    delete self[k];
	                } catch (_) {}
	            });
	        }
	        function isCalendarElem(elem) {
	            if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
	            return self.calendarContainer.contains(elem);
	        }
	        function documentClick(e) {
	            if (self.isOpen && !self.config.inline) {
	                var isCalendarElement = isCalendarElem(e.target);
	                var isInput = e.target === self.input || e.target === self.altInput || self.element.contains(e.target) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
	                var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement;
	                if (lostFocus && self.config.ignoredFocusElements.indexOf(e.target) === -1) {
	                    self.close();
	                    if (self.config.mode === "range" && self.selectedDates.length === 1) {
	                        self.clear(false);
	                        self.redraw();
	                    }
	                }
	            }
	        }
	        function changeYear(newYear) {
	            if (!newYear || self.currentYearElement.min && newYear < parseInt(self.currentYearElement.min) || self.currentYearElement.max && newYear > parseInt(self.currentYearElement.max)) return;
	            var newYearNum = newYear,
	                isNewYear = self.currentYear !== newYearNum;
	            self.currentYear = newYearNum || self.currentYear;
	            if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
	                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
	            } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
	                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
	            }
	            if (isNewYear) {
	                self.redraw();
	                triggerEvent("onYearChange");
	            }
	        }
	        function isEnabled(date, timeless) {
	            if (timeless === void 0) {
	                timeless = true;
	            }
	            var dateToCheck = self.parseDate(date, undefined, timeless);
	            if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
	            if (!self.config.enable.length && !self.config.disable.length) return true;
	            if (dateToCheck === undefined) return false;
	            var bool = self.config.enable.length > 0,
	                array = bool ? self.config.enable : self.config.disable;
	            for (var i = 0, d = void 0; i < array.length; i++) {
	                d = array[i];
	                if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string" && dateToCheck !== undefined) {
	                    var parsed = self.parseDate(d, undefined, true);
	                    return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
	                } else if ((typeof d === 'undefined' ? 'undefined' : _typeof(d)) === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
	            }
	            return !bool;
	        }
	        function onKeyDown(e) {
	            var isInput = e.target === self._input;
	            var calendarElem = isCalendarElem(e.target);
	            var allowInput = self.config.allowInput;
	            var allowKeydown = self.isOpen && (!allowInput || !isInput);
	            var allowInlineKeydown = self.config.inline && isInput && !allowInput;
	            if (e.key === "Enter" && isInput) {
	                if (allowInput) {
	                    self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
	                    return e.target.blur();
	                } else self.open();
	            } else if (calendarElem || allowKeydown || allowInlineKeydown) {
	                var isTimeObj = !!self.timeContainer && self.timeContainer.contains(e.target);
	                switch (e.key) {
	                    case "Enter":
	                        if (isTimeObj) updateValue();else selectDate(e);
	                        break;
	                    case "Escape":
	                        e.preventDefault();
	                        self.close();
	                        break;
	                    case "Backspace":
	                    case "Delete":
	                        if (isInput && !self.config.allowInput) self.clear();
	                        break;
	                    case "ArrowLeft":
	                    case "ArrowRight":
	                        if (!isTimeObj) {
	                            e.preventDefault();
	                            if (self.daysContainer) {
	                                var delta_1 = e.key === "ArrowRight" ? 1 : -1;
	                                if (!e.ctrlKey) focusOnDay(e.target.$i, delta_1);else changeMonth(delta_1, true, undefined, true);
	                            }
	                        } else if (self.hourElement) self.hourElement.focus();
	                        break;
	                    case "ArrowUp":
	                    case "ArrowDown":
	                        e.preventDefault();
	                        var delta = e.key === "ArrowDown" ? 1 : -1;
	                        if (self.daysContainer && e.target.$i !== undefined) {
	                            if (e.ctrlKey) {
	                                changeYear(self.currentYear - delta);
	                                focusOnDay(e.target.$i, 0);
	                            } else if (!isTimeObj) focusOnDay(e.target.$i, delta * 7);
	                        } else if (self.config.enableTime) {
	                            if (!isTimeObj && self.hourElement) self.hourElement.focus();
	                            updateTime(e);
	                            self._debouncedChange();
	                        }
	                        break;
	                    case "Tab":
	                        if (e.target === self.hourElement) {
	                            e.preventDefault();
	                            self.minuteElement.select();
	                        } else if (e.target === self.minuteElement && (self.secondElement || self.amPM)) {
	                            e.preventDefault();
	                            if (self.secondElement !== undefined) self.secondElement.focus();else if (self.amPM !== undefined) self.amPM.focus();
	                        } else if (e.target === self.secondElement && self.amPM) {
	                            e.preventDefault();
	                            self.amPM.focus();
	                        }
	                        break;
	                    case self.l10n.amPM[0].charAt(0):
	                        if (self.amPM !== undefined && e.target === self.amPM) {
	                            self.amPM.textContent = self.l10n.amPM[0];
	                            setHoursFromInputs();
	                            updateValue();
	                        }
	                        break;
	                    case self.l10n.amPM[1].charAt(0):
	                        if (self.amPM !== undefined && e.target === self.amPM) {
	                            self.amPM.textContent = self.l10n.amPM[1];
	                            setHoursFromInputs();
	                            updateValue();
	                        }
	                        break;
	                    default:
	                        break;
	                }
	                triggerEvent("onKeyDown", e);
	            }
	        }
	        function onMouseOver(elem) {
	            if (self.selectedDates.length !== 1 || !elem.classList.contains("flatpickr-day") || self.minRangeDate === undefined || self.maxRangeDate === undefined) return;
	            var hoverDate = elem.dateObj,
	                initialDate = self.parseDate(self.selectedDates[0], undefined, true),
	                rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()),
	                rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()),
	                containsDisabled = false;
	            for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
	                if (!isEnabled(new Date(t))) {
	                    containsDisabled = true;
	                    break;
	                }
	            }
	            var _loop_1 = function _loop_1(i, date) {
	                var timestamp = date.getTime();
	                var outOfRange = timestamp < self.minRangeDate.getTime() || timestamp > self.maxRangeDate.getTime(),
	                    dayElem = self.days.childNodes[i];
	                if (outOfRange) {
	                    dayElem.classList.add("notAllowed");
	                    ["inRange", "startRange", "endRange"].forEach(function (c) {
	                        dayElem.classList.remove(c);
	                    });
	                    return "continue";
	                } else if (containsDisabled && !outOfRange) return "continue";
	                ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
	                    dayElem.classList.remove(c);
	                });
	                var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate),
	                    maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);
	                elem.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");
	                if (initialDate < hoverDate && timestamp === initialDate.getTime()) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate.getTime()) dayElem.classList.add("endRange");
	                if (timestamp >= minRangeDate && timestamp <= maxRangeDate) dayElem.classList.add("inRange");
	            };
	            for (var i = 0, date = self.days.childNodes[i].dateObj; i < 42; i++, date = self.days.childNodes[i] && self.days.childNodes[i].dateObj) {
	                _loop_1(i, date);
	            }
	        }
	        function onResize() {
	            if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
	        }
	        function open(e, positionElement) {
	            if (positionElement === void 0) {
	                positionElement = self._input;
	            }
	            if (self.isMobile) {
	                if (e) {
	                    e.preventDefault();
	                    e.target && e.target.blur();
	                }
	                setTimeout(function () {
	                    self.mobileInput !== undefined && self.mobileInput.click();
	                }, 0);
	                triggerEvent("onOpen");
	                return;
	            }
	            if (self._input.disabled || self.config.inline) return;
	            var wasOpen = self.isOpen;
	            self.isOpen = true;
	            positionCalendar(positionElement);
	            self.calendarContainer.classList.add("open");
	            self._input.classList.add("active");
	            !wasOpen && triggerEvent("onOpen");
	        }
	        function minMaxDateSetter(type) {
	            return function (date) {
	                var dateObj = self.config["_" + type + "Date"] = self.parseDate(date);
	                var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
	                if (dateObj !== undefined) {
	                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
	                }
	                if (self.selectedDates) {
	                    self.selectedDates = self.selectedDates.filter(function (d) {
	                        return isEnabled(d);
	                    });
	                    if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
	                    updateValue();
	                }
	                if (self.daysContainer) {
	                    redraw();
	                    if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
	                    self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
	                }
	            };
	        }
	        function parseConfig() {
	            var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
	            var hooks = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange"];
	            self.config = __assign({}, flatpickr.defaultConfig);
	            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
	            var formats$$1 = {};
	            Object.defineProperty(self.config, "enable", {
	                get: function get() {
	                    return self.config._enable || [];
	                },
	                set: function set(dates) {
	                    self.config._enable = parseDateRules(dates);
	                }
	            });
	            Object.defineProperty(self.config, "disable", {
	                get: function get() {
	                    return self.config._disable || [];
	                },
	                set: function set(dates) {
	                    self.config._disable = parseDateRules(dates);
	                }
	            });
	            if (!userConfig.dateFormat && userConfig.enableTime) {
	                formats$$1.dateFormat = userConfig.noCalendar ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : flatpickr.defaultConfig.dateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
	            }
	            if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
	                formats$$1.altFormat = userConfig.noCalendar ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : flatpickr.defaultConfig.altFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
	            }
	            Object.defineProperty(self.config, "minDate", {
	                get: function get() {
	                    return self.config._minDate;
	                },
	                set: minMaxDateSetter("min")
	            });
	            Object.defineProperty(self.config, "maxDate", {
	                get: function get() {
	                    return self.config._maxDate;
	                },
	                set: minMaxDateSetter("max")
	            });
	            Object.assign(self.config, formats$$1, userConfig);
	            for (var i = 0; i < boolOpts.length; i++) {
	                self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
	            }for (var i = hooks.length; i--;) {
	                if (self.config[hooks[i]] !== undefined) {
	                    self.config[hooks[i]] = arrayify(self.config[hooks[i]] || []).map(bindToInstance);
	                }
	            }
	            for (var i = 0; i < self.config.plugins.length; i++) {
	                var pluginConf = self.config.plugins[i](self) || {};
	                for (var key in pluginConf) {
	                    if (~hooks.indexOf(key)) {
	                        self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
	                    } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
	                }
	            }
	            self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	            triggerEvent("onParseConfig");
	        }
	        function setupLocale() {
	            if (_typeof(self.config.locale) !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
	            self.l10n = __assign({}, flatpickr.l10ns.default, _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
	            tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
	        }
	        function positionCalendar(positionElement) {
	            if (positionElement === void 0) {
	                positionElement = self._positionElement;
	            }
	            if (self.calendarContainer === undefined) return;
	            var calendarHeight = self.calendarContainer.offsetHeight,
	                calendarWidth = self.calendarContainer.offsetWidth,
	                configPos = self.config.position,
	                inputBounds = positionElement.getBoundingClientRect(),
	                distanceFromBottom = window.innerHeight - inputBounds.bottom,
	                showOnTop = configPos === "above" || configPos !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
	            var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
	            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
	            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
	            if (self.config.inline) return;
	            var left = window.pageXOffset + inputBounds.left;
	            var right = window.document.body.offsetWidth - inputBounds.right;
	            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
	            toggleClass(self.calendarContainer, "rightMost", rightMost);
	            if (self.config.static) return;
	            self.calendarContainer.style.top = top + "px";
	            if (!rightMost) {
	                self.calendarContainer.style.left = left + "px";
	                self.calendarContainer.style.right = "auto";
	            } else {
	                self.calendarContainer.style.left = "auto";
	                self.calendarContainer.style.right = right + "px";
	            }
	        }
	        function redraw() {
	            if (self.config.noCalendar || self.isMobile) return;
	            buildWeekdays();
	            updateNavigationCurrentMonth();
	            buildDays();
	        }
	        function selectDate(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            var isSelectable = function isSelectable(day) {
	                return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("disabled") && !day.classList.contains("notAllowed");
	            };
	            var t = findParent(e.target, isSelectable);
	            if (t === undefined) return;
	            var target = t;
	            var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
	            var shouldChangeMonth = selectedDate.getMonth() !== self.currentMonth && self.config.mode !== "range";
	            self.selectedDateElem = target;
	            if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
	                var selectedIndex = isDateSelected(selectedDate);
	                if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
	            } else if (self.config.mode === "range") {
	                if (self.selectedDates.length === 2) self.clear();
	                self.selectedDates.push(selectedDate);
	                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
	                    return a.getTime() - b.getTime();
	                });
	            }
	            setHoursFromInputs();
	            if (shouldChangeMonth) {
	                var isNewYear = self.currentYear !== selectedDate.getFullYear();
	                self.currentYear = selectedDate.getFullYear();
	                self.currentMonth = selectedDate.getMonth();
	                if (isNewYear) triggerEvent("onYearChange");
	                triggerEvent("onMonthChange");
	            }
	            buildDays();
	            if (self.config.minDate && self.minDateHasTime && self.config.enableTime && compareDates(selectedDate, self.config.minDate) === 0) setHoursFromDate(self.config.minDate);
	            updateValue();
	            if (self.config.enableTime) setTimeout(function () {
	                return self.showTimeInput = true;
	            }, 50);
	            if (self.config.mode === "range") {
	                if (self.selectedDates.length === 1) {
	                    onMouseOver(target);
	                    self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate !== undefined && self.minRangeDate > self.days.childNodes[0].dateObj;
	                    self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate !== undefined && self.maxRangeDate < new Date(self.currentYear, self.currentMonth + 1, 1);
	                } else updateNavigationCurrentMonth();
	            }
	            triggerEvent("onChange");
	            if (!shouldChangeMonth) focusOnDay(target.$i, 0);else afterDayAnim(function () {
	                return self.selectedDateElem && self.selectedDateElem.focus();
	            });
	            if (self.hourElement !== undefined) setTimeout(function () {
	                return self.hourElement !== undefined && self.hourElement.select();
	            }, 451);
	            if (self.config.closeOnSelect) {
	                var single = self.config.mode === "single" && !self.config.enableTime;
	                var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
	                if (single || range) self.close();
	            }
	        }
	        function set(option, value) {
	            if (option !== null && (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === "object") Object.assign(self.config, option);else self.config[option] = value;
	            self.redraw();
	            jumpToDate();
	        }
	        function setSelectedDate(inputDate, format) {
	            var dates = [];
	            if (inputDate instanceof Array) dates = inputDate.map(function (d) {
	                return self.parseDate(d, format);
	            });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
	                switch (self.config.mode) {
	                    case "single":
	                        dates = [self.parseDate(inputDate, format)];
	                        break;
	                    case "multiple":
	                        dates = inputDate.split(self.config.conjunction).map(function (date) {
	                            return self.parseDate(date, format);
	                        });
	                        break;
	                    case "range":
	                        dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
	                            return self.parseDate(date, format);
	                        });
	                        break;
	                    default:
	                        break;
	                }
	            } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
	            self.selectedDates = dates.filter(function (d) {
	                return d instanceof Date && isEnabled(d, false);
	            });
	            self.selectedDates.sort(function (a, b) {
	                return a.getTime() - b.getTime();
	            });
	        }
	        function setDate(date, triggerChange, format) {
	            if (triggerChange === void 0) {
	                triggerChange = false;
	            }
	            if (date !== 0 && !date) return self.clear(triggerChange);
	            setSelectedDate(date, format);
	            self.showTimeInput = self.selectedDates.length > 0;
	            self.latestSelectedDateObj = self.selectedDates[0];
	            self.redraw();
	            jumpToDate();
	            setHoursFromDate();
	            updateValue(triggerChange);
	            if (triggerChange) triggerEvent("onChange");
	        }
	        function parseDateRules(arr) {
	            return arr.map(function (rule) {
	                if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
	                    return self.parseDate(rule, undefined, true);
	                } else if (rule && (typeof rule === 'undefined' ? 'undefined' : _typeof(rule)) === "object" && rule.from && rule.to) return {
	                    from: self.parseDate(rule.from, undefined),
	                    to: self.parseDate(rule.to, undefined)
	                };
	                return rule;
	            }).filter(function (x) {
	                return x;
	            });
	        }
	        function setupDates() {
	            self.selectedDates = [];
	            self.now = new Date();
	            var preloadedDate = self.config.defaultDate || self.input.value;
	            if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
	            var initialDate = self.selectedDates.length ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
	            self.currentYear = initialDate.getFullYear();
	            self.currentMonth = initialDate.getMonth();
	            if (self.selectedDates.length) self.latestSelectedDateObj = self.selectedDates[0];
	            self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
	            self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
	            Object.defineProperty(self, "showTimeInput", {
	                get: function get() {
	                    return self._showTimeInput;
	                },
	                set: function set(bool) {
	                    self._showTimeInput = bool;
	                    if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
	                    positionCalendar();
	                }
	            });
	        }
	        function formatDate(dateObj, frmt) {
	            if (self.config !== undefined && self.config.formatDate !== undefined) return self.config.formatDate(dateObj, frmt);
	            return frmt.split("").map(function (c, i, arr) {
	                return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, self.l10n, self.config) : c !== "\\" ? c : "";
	            }).join("");
	        }
	        function parseDate(date, givenFormat, timeless) {
	            if (date !== 0 && !date) return undefined;
	            var parsedDate;
	            var date_orig = date;
	            if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
	                var format = givenFormat || (self.config || flatpickr.defaultConfig).dateFormat;
	                var datestr = String(date).trim();
	                if (datestr === "today") {
	                    parsedDate = new Date();
	                    timeless = true;
	                } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);else if (self.config && self.config.parseDate) parsedDate = self.config.parseDate(date, format);else {
	                    parsedDate = !self.config || !self.config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
	                    var matched = void 0,
	                        ops = [];
	                    for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
	                        var token = format[i];
	                        var isBackSlash = token === "\\";
	                        var escaped = format[i - 1] === "\\" || isBackSlash;
	                        if (tokenRegex[token] && !escaped) {
	                            regexStr += tokenRegex[token];
	                            var match = new RegExp(regexStr).exec(date);
	                            if (match && (matched = true)) {
	                                ops[token !== "Y" ? "push" : "unshift"]({
	                                    fn: revFormat[token],
	                                    val: match[++matchIndex]
	                                });
	                            }
	                        } else if (!isBackSlash) regexStr += ".";
	                        ops.forEach(function (_a) {
	                            var fn = _a.fn,
	                                val = _a.val;
	                            return parsedDate = fn(parsedDate, val, self.l10n) || parsedDate;
	                        });
	                    }
	                    parsedDate = matched ? parsedDate : undefined;
	                }
	            }
	            if (!(parsedDate instanceof Date)) {
	                self.config.errorHandler(new Error("Invalid date provided: " + date_orig));
	                return undefined;
	            }
	            if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
	            return parsedDate;
	        }
	        function setupInputs() {
	            self.input = self.config.wrap ? element.querySelector("[data-input]") : element;
	            if (!self.input) {
	                self.config.errorHandler(new Error("Invalid input element specified"));
	                return;
	            }
	            self.input._type = self.input.type;
	            self.input.type = "text";
	            self.input.classList.add("flatpickr-input");
	            self._input = self.input;
	            if (self.config.altInput) {
	                self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
	                self._input = self.altInput;
	                self.altInput.placeholder = self.input.placeholder;
	                self.altInput.disabled = self.input.disabled;
	                self.altInput.required = self.input.required;
	                self.altInput.type = "text";
	                self.input.type = "hidden";
	                if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
	            }
	            if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
	            self._positionElement = self.config.positionElement || self._input;
	        }
	        function setupMobile() {
	            var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
	            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
	            self.mobileInput.step = self.input.getAttribute("step") || "any";
	            self.mobileInput.tabIndex = 1;
	            self.mobileInput.type = inputType;
	            self.mobileInput.disabled = self.input.disabled;
	            self.mobileInput.placeholder = self.input.placeholder;
	            self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
	            if (self.selectedDates.length) {
	                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
	            }
	            if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
	            if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
	            self.input.type = "hidden";
	            if (self.altInput !== undefined) self.altInput.type = "hidden";
	            try {
	                if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
	            } catch (_a) {}
	            bind(self.mobileInput, "change", function (e) {
	                self.setDate(e.target.value, false, self.mobileFormatStr);
	                triggerEvent("onChange");
	                triggerEvent("onClose");
	            });
	        }
	        function toggle() {
	            if (self.isOpen) return self.close();
	            self.open();
	        }
	        function triggerEvent(event, data) {
	            var hooks = self.config[event];
	            if (hooks !== undefined && hooks.length > 0) {
	                for (var i = 0; hooks[i] && i < hooks.length; i++) {
	                    hooks[i](self.selectedDates, self.input.value, self, data);
	                }
	            }
	            if (event === "onChange") {
	                self.input.dispatchEvent(createEvent("change"));
	                self.input.dispatchEvent(createEvent("input"));
	            }
	        }
	        function createEvent(name) {
	            var e = document.createEvent("Event");
	            e.initEvent(name, true, true);
	            return e;
	        }
	        function isDateSelected(date) {
	            for (var i = 0; i < self.selectedDates.length; i++) {
	                if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
	            }
	            return false;
	        }
	        function isDateInRange(date) {
	            if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
	            return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
	        }
	        function updateNavigationCurrentMonth() {
	            if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
	            self.currentMonthElement.textContent = monthToStr(self.currentMonth, self.config.shorthandCurrentMonth, self.l10n) + " ";
	            self.currentYearElement.value = self.currentYear.toString();
	            self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
	            self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
	        }
	        function updateValue(triggerChange) {
	            if (triggerChange === void 0) {
	                triggerChange = true;
	            }
	            if (!self.selectedDates.length) return self.clear(triggerChange);
	            if (self.mobileInput !== undefined && self.mobileFormatStr) {
	                self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
	            }
	            var joinChar = self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator;
	            self.input.value = self.selectedDates.map(function (dObj) {
	                return self.formatDate(dObj, self.config.dateFormat);
	            }).join(joinChar);
	            if (self.altInput !== undefined) {
	                self.altInput.value = self.selectedDates.map(function (dObj) {
	                    return self.formatDate(dObj, self.config.altFormat);
	                }).join(joinChar);
	            }
	            if (triggerChange !== false) triggerEvent("onValueUpdate");
	        }
	        function onMonthNavScroll(e) {
	            e.preventDefault();
	            var isYear = self.currentYearElement.parentNode && self.currentYearElement.parentNode.contains(e.target);
	            if (e.target === self.currentMonthElement || isYear) {
	                var delta = mouseDelta(e);
	                if (isYear) {
	                    changeYear(self.currentYear + delta);
	                    e.target.value = self.currentYear.toString();
	                } else self.changeMonth(delta, true, false);
	            }
	        }
	        function onMonthNavClick(e) {
	            var isPrevMonth = self.prevMonthNav.contains(e.target);
	            var isNextMonth = self.nextMonthNav.contains(e.target);
	            if (isPrevMonth || isNextMonth) changeMonth(isPrevMonth ? -1 : 1);else if (e.target === self.currentYearElement) {
	                e.preventDefault();
	                self.currentYearElement.select();
	            } else if (e.target.className === "arrowUp") self.changeYear(self.currentYear + 1);else if (e.target.className === "arrowDown") self.changeYear(self.currentYear - 1);
	        }
	        function timeWrapper(e) {
	            e.preventDefault();
	            var isKeyDown = e.type === "keydown",
	                input = e.target;
	            if (self.amPM !== undefined && e.target === self.amPM) {
	                self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
	            }
	            var min = Number(input.min),
	                max = Number(input.max),
	                step = Number(input.step),
	                curValue = parseInt(input.value, 10),
	                delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0);
	            var newValue = curValue + step * delta;
	            if (typeof input.value !== "undefined" && input.value.length === 2) {
	                var isHourElem = input === self.hourElement,
	                    isMinuteElem = input === self.minuteElement;
	                if (newValue < min) {
	                    newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
	                    if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
	                } else if (newValue > max) {
	                    newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
	                    if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
	                }
	                if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
	                    self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
	                }
	                input.value = pad(newValue);
	            }
	        }
	        init();
	        return self;
	    }
	    function _flatpickr(nodeList, config) {
	        var nodes = Array.prototype.slice.call(nodeList);
	        var instances = [];
	        for (var i = 0; i < nodes.length; i++) {
	            var node = nodes[i];
	            try {
	                if (node.getAttribute("data-fp-omit") !== null) continue;
	                if (node._flatpickr !== undefined) {
	                    node._flatpickr.destroy();
	                    node._flatpickr = undefined;
	                }
	                node._flatpickr = FlatpickrInstance(node, config || {});
	                instances.push(node._flatpickr);
	            } catch (e) {
	                console.error(e);
	            }
	        }
	        return instances.length === 1 ? instances[0] : instances;
	    }
	    if (typeof HTMLElement !== "undefined") {
	        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
	            return _flatpickr(this, config);
	        };
	        HTMLElement.prototype.flatpickr = function (config) {
	            return _flatpickr([this], config);
	        };
	    }
	    var flatpickr;
	    flatpickr = function flatpickr(selector, config) {
	        if (selector instanceof NodeList) return _flatpickr(selector, config);else if (typeof selector === "string") return _flatpickr(window.document.querySelectorAll(selector), config);
	        return _flatpickr([selector], config);
	    };
	    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object") window.flatpickr = flatpickr;
	    flatpickr.defaultConfig = defaults;
	    flatpickr.l10ns = {
	        en: __assign({}, english),
	        default: __assign({}, english)
	    };
	    flatpickr.localize = function (l10n) {
	        flatpickr.l10ns.default = __assign({}, flatpickr.l10ns.default, l10n);
	    };
	    flatpickr.setDefaults = function (config) {
	        flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
	    };
	    if (typeof jQuery !== "undefined") {
	        jQuery.fn.flatpickr = function (config) {
	            return _flatpickr(this, config);
	        };
	    }
	    Date.prototype.fp_incr = function (days) {
	        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
	    };
	    var flatpickr$1 = flatpickr;
	
	    return flatpickr$1;
	});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/* flatpickr v4.1.4, @license MIT */
	(function (global, factory) {
	    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.ru = {});
	})(undefined, function (exports) {
	    'use strict';
	
	    var fp = typeof window !== "undefined" && window.flatpickr !== undefined ? window.flatpickr : {
	        l10ns: {}
	    };
	    var Russian = {
	        firstDayOfWeek: 1,
	        weekdays: {
	            shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
	            longhand: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
	        },
	        months: {
	            shorthand: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
	            longhand: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
	        },
	        rangeSeparator: " — ",
	        scrollTitle: "Прокрутите для увеличения",
	        toggleTitle: "Нажмите для переключения"
	    };
	    fp.l10ns.ru = Russian;
	    var ru = fp.l10ns;
	
	    exports.Russian = Russian;
	    exports['default'] = ru;
	
	    Object.defineProperty(exports, '__esModule', { value: true });
	});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (isEdit) {
	    return '<h3 class="event-form__title">' + (isEdit ? 'Редактирование встречи' : 'Новая встреча') + '</h3>\n        <a href="#" class="event-form__close circle-icon" data-cancel>\n            <i>\n                <svg width="10" height="10">\n                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>\n                </svg>\n            </i>\n        </a>';
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (isEdit) {
	  var eventFormContent = isEdit ? "<a href=\"#\" class=\"button button--gray\" data-cancel>\u041E\u0442\u043C\u0435\u043D\u0430</a>\n      <div class=\"event-form__delete-btn\">\n          <button class=\"button button--gray\" id=\"deleteEventPopupTrigger\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0443</button>\n      </div>\n      <button class=\"button button--blue\">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>" : "<a href=\"#\" class=\"button button--gray\" data-cancel>\u041E\u0442\u043C\u0435\u043D\u0430</a>\n      <button class=\"button button--blue button--disabled\" id=\"createBtn\">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0443</button>";
	
	  return eventFormContent;
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (fieldProps) {
	    var inputId = fieldProps.inputId;
	    var label = fieldProps.label;
	    var placeholder = fieldProps.placeholder !== null ? fieldProps.placeholder : '';
	    var extraClass = fieldProps.extraClass !== null ? ' ' + fieldProps.extraClass : '';
	    var inputValue = fieldProps.inputValue;
	    var filledClass = inputValue !== null ? ' filled' : '';
	    var isDate = fieldProps.isDate;
	
	    return '<div class="field' + extraClass + filledClass + '" id="' + (isDate ? 'date' : '') + '">\n                <label class="field__label" for="' + inputId + '">' + label + '</label>\n                <input type="text" \n                  name="fieldInput" \n                  id="' + inputId + '" \n                  placeholder="' + placeholder + '"\n                  value="' + (inputValue || '') + '"\n                  ' + (isDate ? 'data-input' : '') + '\n                  >\n                  \n                <a href="#" class="field__reset">\n                    <i>\n                        <svg width="12" height="12">\n                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>\n                        </svg>\n                    </i>\n                </a>\n                \n                ' + (isDate ? '<button class="field__trigger" id="dateTrigger" data-toggle></button>' : '') + '\n            </div>';
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _helpers = __webpack_require__(11);
	
	/**
	 * @typedef {Object} Person
	 * @property {String} login Идентификатор сотрудника.
	 * @property {Number} floor "Домашний" этаж сотрудника.
	 * @property {String} avatar Ссылка на аватар.
	 */
	
	/**
	 * @typedef {Object} Room
	 * @property {Number} id Идентификатор переговорки.
	 * @property {String} title Название переговорки.
	 * @property {Number} capacity Вместимость (количество человек).
	 * @property {Number} floor Этаж, на котором расположена переговорка.
	 */
	
	/**
	 * @typedef {Object} EventDate
	 * @property {Number} start Timestamp начала встречи.
	 * @property {Number} end Timestamp окончания встречи.
	 */
	
	/**
	 * @typedef {Object} Event
	 * @property {String} id Идентификатор встречи.
	 * @property {String} title Название встречи.
	 * @property {String[]} members Логины участников встречи.
	 * @property {EventDate} date Дата и время проведения встречи.
	 * @property {Number} room Идентификатор переговорки.
	 */
	
	/**
	 * @typedef {Object} RoomsSwap
	 * @property {string} event Идентификатор встречи.
	 * @property {String} room Новый идентификатор переговорки.
	 */
	
	/**
	 * @typedef {Object} Recommendation
	 * @property {EventDate} date Дата и время проведения встречи.
	 * @property {String} room Идентификатор переговорки.
	 * @property {RoomsSwap[]} [swap] Необходимые замены переговорк для реализации рекомендации.
	 */
	
	/**
	 * @param {EventDate} date Дата планируемой встречи.
	 * @param {Person[]} members Участники планируемой встречи.
	 * @param {Object} db
	 * @param {Event[]} db.events Список все встреч.
	 * @param {Room[]} db.rooms Список всех переговорок.
	 * @param {Person[]} db.persons Список всех сотрудников.
	 * @returns {Recommendation[]}
	 */
	
	function getRecommendation(date, members, db) {
	  var eventStart = date.start;
	  var eventEnd = date.end;
	  var eventDuration = eventEnd - eventStart;
	  var dayEnd = new Date(eventStart).setHours(23, 0, 0);
	  var dbEvents = db.events;
	  var dbRooms = db.rooms;
	  var dbPersons = db.persons;
	  var numberOfMembers = members.length;
	  var recommendation = {},
	      recommendationArr = [];
	
	  var now = new Date();
	  var today = (0, _helpers.getDateValue)(now).day;
	  var currentMinute = (0, _helpers.getDateValue)(now).minute;
	  var eventStartDate = new Date(date.start);
	  var eventStartDay = (0, _helpers.getDateValue)(eventStartDate).day;
	
	  var swapArr = [];
	
	  if (today === eventStartDay) {
	    if (currentMinute > eventStart || currentMinute > eventEnd) {
	      //если время предпологаемого события меньше текущего времени
	      return [];
	    }
	  } else if (today > eventStartDay) {
	    return [];
	  }
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    roomLoop: for (var _iterator = dbRooms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var dbRoom = _step.value;
	
	      var dbRoomId = dbRoom.id;
	      if (dbRoom.capacity < numberOfMembers) {
	        //если вместимость комнаты меньше участников события
	        continue roomLoop;
	      }
	
	      //Цикл который пробегается по всему дню, начиная со времени начала предпологаемого события, с шагом в продолжительность события
	      timeLoop: for (var t = eventStart; t <= dayEnd - eventDuration; t += eventDuration) {
	        var tStart = t,
	            //Время начала предпологаемого события
	        tEnd = tStart + eventDuration; //Время окончания предпологаемого события
	
	        var isTimeHasnotEvent = true;
	
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	          eventLoop: for (var _iterator2 = dbEvents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var dbEvent = _step2.value;
	
	            var dbEventStart = (0, _helpers.getDateValue)(new Date(dbEvent.dateStart)).minute,
	                dbEventEnd = (0, _helpers.getDateValue)(new Date(dbEvent.dateEnd)).minute;
	
	            if (currentMinute > dbEventEnd) {
	              continue eventLoop;
	            }
	
	            if (dbEvent.room.id === dbRoomId) {
	              //если в этой комнате есть события
	              if (dbEventStart < tStart && dbEventEnd < tStart) {
	                continue eventLoop;
	              }
	
	              if (tStart <= dbEventStart && tEnd > dbEventEnd || tStart <= dbEventStart && tEnd < dbEventEnd && tEnd > dbEventStart || tStart > dbEventStart && tEnd <= dbEventEnd) {
	                //если на этот промежуток времени запланировано событие
	                isTimeHasnotEvent = false;
	              }
	
	              if (tStart > dbEventStart && tEnd > dbEventEnd && tStart < dbEventEnd) {
	                t = dbEventEnd - eventDuration;
	                continue timeLoop;
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
	
	        if (isTimeHasnotEvent) {
	          recommendation = {
	            date: {
	              start: tStart,
	              end: tEnd
	            },
	            room: dbRoomId
	          };
	          recommendationArr.push(recommendation);
	          continue roomLoop;
	        }
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
	
	  return recommendationArr;
	}
	
	exports.default = getRecommendation;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _application = __webpack_require__(1);
	
	var _application2 = _interopRequireDefault(_application);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (inputData, isSelected) {
	  var appData = _application2.default.data;
	  var dbRooms = appData.rooms || {};
	  var eventDate = inputData.date;
	  var eventStartDate = new Date(eventDate.start);
	  var eventEndDate = new Date(eventDate.end);
	  var roomId = inputData.room;
	  var getMinutes = function getMinutes(date) {
	    return date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	  };
	  var time = eventStartDate.getHours() + ':' + getMinutes(eventStartDate) + '\u2014' + eventEndDate.getHours() + ':' + getMinutes(eventEndDate);
	  var roomTitle = void 0,
	      roomFloor = void 0;
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = dbRooms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var dbRoom = _step.value;
	
	      if (roomId === dbRoom.id) {
	        roomTitle = dbRoom.title;
	        roomFloor = dbRoom.floor;
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
	
	  return '<div class="recommendation-tag' + (isSelected ? ' recommendation-tag--selected' : '') + '" data-room-id="' + roomId + '">\n            <div class="recommendation-tag__content">\n              <span class="recommendation-tag__time">\n                ' + time + '\n              </span>\n              <span class="recommendation-tag__room">\n                ' + roomTitle + ' \xB7 ' + roomFloor + ' \u044D\u0442\u0430\u0436\n              </span>\n            </div>\n            <button class="recommendation-tag__delete">\n              <i>\n                  <svg width="10" height="10">\n                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>\n                  </svg>\n              </i>\n            </button>\n          </div>';
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.autocompleteHandler = exports.getAutocompleteMarkup = undefined;
	
	var _field = __webpack_require__(25);
	
	var _field2 = _interopRequireDefault(_field);
	
	var _getUser = __webpack_require__(29);
	
	var _getUser2 = _interopRequireDefault(_getUser);
	
	var _getUserTag = __webpack_require__(30);
	
	var _getUserTag2 = _interopRequireDefault(_getUserTag);
	
	var _hideOnClickOutside = __webpack_require__(10);
	
	var _hideOnClickOutside2 = _interopRequireDefault(_hideOnClickOutside);
	
	var _helpers = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getAutocompleteMarkup = function getAutocompleteMarkup(fieldProps) {
	  return '<div class="field-autocomplete" data-autocomplete>\n            ' + (0, _field2.default)(fieldProps) + '\n            \n            <i class="field-autocomplete__arrow">\n              <svg width="12" height="12">\n                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use>\n              </svg>\n            </i>\n            \n            <div class="field-autocomplete__dropdown"></div>\n            <div class="field-autocomplete__tags"></div>\n          </div>';
	};
	
	var dropdownItemHandler = function dropdownItemHandler(event, item, container) {
	  var dropdownItem = item;
	  var userId = dropdownItem.getAttribute('data-user-id');
	  var user = dropdownItem.querySelector('.user');
	  var login = user.getAttribute('data-login');
	  var avatarUrl = user.querySelector('img').getAttribute('src');
	  var userArrInContainer = container.querySelectorAll('.user-tag');
	  var userTag = (0, _getUserTag2.default)(userId, login, avatarUrl);
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = Array.from(userArrInContainer)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var userIn = _step.value;
	
	      var userInId = userIn.getAttribute('data-user-id');
	
	      if (userInId === userId) {
	        return false;
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
	
	  container.appendChild(userTag);
	};
	
	var autocompleteHandler = function autocompleteHandler(event, inputUsers) {
	  var input = event.target;
	  var autocomplete = input.parents('[data-autocomplete]')[0];
	  var autocompleteDropdown = autocomplete.querySelector('.field-autocomplete__dropdown');
	  var autocompleteTagsContainer = autocomplete.querySelector('.field-autocomplete__tags');
	  var clearAutocomplete = function clearAutocomplete() {
	    autocomplete.classList.remove('opened');
	    autocompleteDropdown.innerHTML = '';
	  };
	  var inputValue = input.value;
	  var autocompleteList = void 0,
	      autocompleteListItems = '',
	      autocompleteListItem = void 0,
	      autocompleteDropdownItemArr = void 0;
	
	  if (inputValue.length < 2) {
	    clearAutocomplete();
	    return false;
	  }
	
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	
	  try {
	    for (var _iterator2 = Array.from(inputUsers)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var user = _step2.value;
	
	      var login = user.login;
	
	      if (login.indexOf(inputValue) !== -1) {
	        autocompleteListItem = '<li class="field-autocomplete__dropdown-item" data-user-id="' + user.id + '" data-autocomplete-item>\n                                  ' + (0, _getUser2.default)(login, user.avatarUrl) + '\n                                  &nbsp;\xB7&nbsp;' + user.homeFloor + ' \u044D\u0442\u0430\u0436\n                              </li>';
	
	        autocompleteListItems += autocompleteListItem;
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
	
	  if (autocompleteListItems.length === 0) {
	    return false;
	  }
	
	  autocompleteList = '<ul>' + autocompleteListItems + '</ul>';
	  autocompleteDropdown.innerHTML = autocompleteList;
	  autocomplete.classList.add('opened');
	
	  autocompleteDropdownItemArr = autocompleteDropdown.querySelectorAll('.field-autocomplete__dropdown-item');
	
	  var getDropdownItemHandler = void 0,
	      dropdownItemRemoveClickListener = void 0;
	
	  var _iteratorNormalCompletion3 = true;
	  var _didIteratorError3 = false;
	  var _iteratorError3 = undefined;
	
	  try {
	    var _loop = function _loop() {
	      var autocompleteDropdownItem = _step3.value;
	
	      var addUserToEvent = new CustomEvent("addUserToEvent", {
	        detail: {
	          userId: autocompleteDropdownItem.getAttribute('data-user-id')
	        }
	      });
	
	      getDropdownItemHandler = function getDropdownItemHandler(event) {
	        dropdownItemHandler(event, autocompleteDropdownItem, autocompleteTagsContainer);
	        clearAutocomplete();
	
	        dropdownItemRemoveClickListener();
	        document.dispatchEvent(addUserToEvent);
	      };
	
	      dropdownItemRemoveClickListener = function dropdownItemRemoveClickListener() {
	        autocompleteDropdownItem.removeEventListener('click', getDropdownItemHandler);
	      };
	
	      autocompleteDropdownItem.addEventListener('click', getDropdownItemHandler);
	    };
	
	    for (var _iterator3 = Array.from(autocompleteDropdownItemArr)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	      _loop();
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
	
	  (0, _hideOnClickOutside2.default)('[data-autocomplete]', function () {
	    clearAutocomplete();
	    dropdownItemRemoveClickListener();
	  });
	};
	
	exports.getAutocompleteMarkup = getAutocompleteMarkup;
	exports.autocompleteHandler = autocompleteHandler;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (login, avatarUrl) {
	    return "<div class=\"user\" data-login=\"" + login + "\">\n              <div class=\"user__icon\">\n                  <img src=\"" + avatarUrl + "\" alt=\"\">\n              </div>\n              " + login + "\n          </div>";
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getUser = __webpack_require__(29);
	
	var _getUser2 = _interopRequireDefault(_getUser);
	
	var _helpers = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (userId, login, avatarUrl) {
	  var userTag = '<div class="user-tag" data-user-id="' + userId + '">\n                      ' + (0, _getUser2.default)(login, avatarUrl) + '\n                      <a class="user-tag__remove" href="#">\n                        <i>\n                          <svg width="10" height="10">\n                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>\n                          </svg>\n                        </i>\n                      </a>\n                  </div>';
	
	  var userTagElement = (0, _helpers.getNodeFromMarkup)(userTag);
	  var userTagRemoveBtn = userTagElement.querySelector('.user-tag__remove');
	
	  var removeUserFromEvent = new CustomEvent("removeUserFromEvent", {
	    detail: {
	      userId: userId
	    }
	  });
	
	  var userRemoveBtnHandler = function userRemoveBtnHandler(event) {
	    event.preventDefault();
	    userTagElement.parentNode.removeChild(userTagElement);
	    document.dispatchEvent(removeUserFromEvent);
	    removeClickListener();
	  };
	
	  var removeClickListener = function removeClickListener() {
	    userTagRemoveBtn.removeEventListener('click', userRemoveBtnHandler);
	  };
	
	  userTagRemoveBtn.addEventListener('click', userRemoveBtnHandler);
	
	  return userTagElement;
	};

/***/ }),
/* 31 */
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
	
	var _router = __webpack_require__(16);
	
	var _flatpickr = __webpack_require__(21);
	
	var _flatpickr2 = _interopRequireDefault(_flatpickr);
	
	var _ru = __webpack_require__(22);
	
	var _helpers = __webpack_require__(11);
	
	var _eventFormHeader = __webpack_require__(23);
	
	var _eventFormHeader2 = _interopRequireDefault(_eventFormHeader);
	
	var _eventFormFooter = __webpack_require__(24);
	
	var _eventFormFooter2 = _interopRequireDefault(_eventFormFooter);
	
	var _field = __webpack_require__(25);
	
	var _field2 = _interopRequireDefault(_field);
	
	var _getUserTag = __webpack_require__(30);
	
	var _getUserTag2 = _interopRequireDefault(_getUserTag);
	
	var _getRecomendation = __webpack_require__(26);
	
	var _getRecomendation2 = _interopRequireDefault(_getRecomendation);
	
	var _getRecomendationTag = __webpack_require__(27);
	
	var _getRecomendationTag2 = _interopRequireDefault(_getRecomendationTag);
	
	var _fieldAutocomplete = __webpack_require__(28);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EventNewView = function (_AbstractView) {
	  _inherits(EventNewView, _AbstractView);
	
	  function EventNewView(eventInputData) {
	    _classCallCheck(this, EventNewView);
	
	    var _this = _possibleConstructorReturn(this, (EventNewView.__proto__ || Object.getPrototypeOf(EventNewView)).call(this, eventInputData));
	
	    _this.eventInputData = eventInputData || {};
	    _this.fieldsProps = {
	      'eventDate': {
	        inputId: 'eventDate',
	        label: 'Дата',
	        placeholder: null,
	        extraClass: 'field--icon field--date',
	        inputValue: null,
	        isDate: true
	      },
	      'eventStartTime': {
	        inputId: 'eventStartTimeInput',
	        label: 'Начало',
	        placeholder: null,
	        extraClass: null,
	        inputValue: null,
	        isDate: false
	      },
	      'eventEndTime': {
	        inputId: 'eventEndTimeInput',
	        label: 'Конец',
	        placeholder: null,
	        extraClass: null,
	        inputValue: null,
	        isDate: false
	      },
	      'eventMembers': {
	        inputId: 'eventMembers',
	        label: 'Участники',
	        placeholder: 'Например, Тор Одинович',
	        extraClass: null,
	        inputValue: null,
	        isDate: false
	      }
	    };
	    _this.appData = _application2.default.data;
	    _this.users = _this.appData.users || {};
	    _this.rooms = _this.appData.rooms || {};
	
	    _this.eventStartDate = new Date(+_this.eventInputData.startTime);
	    _this.eventDateDay = (0, _helpers.getDateValue)(_this.eventStartDate).day; //день в который происходят все события
	
	    _this.initialAppDate = new Date();
	    _this.initialAppDay = (0, _helpers.getDateValue)(_this.initialAppDate).day; //день инициализации приложения
	    return _this;
	  }
	
	  _createClass(EventNewView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var header = '<header class="header"><div class="logo"></div></header>';
	      var events = this.appData.events[this.eventDateDay]; //события происходящие в этот день
	      var eventInputId = this.eventInputData.eventId; // id события переданное по url
	      this.eventStartDate = new Date(+this.eventInputData.startTime);
	      this.eventEndDate = new Date(+this.eventInputData.endTime);
	      this.eventDate = {
	        start: +this.eventInputData.startTime,
	        end: +this.eventInputData.endTime
	      };
	
	      var eventName = void 0;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var event = _step.value;
	
	          if (eventInputId === event.id) {
	            eventName = event.title;
	            this.currentId = event.id;
	            this.eventUsers = event.users;
	            this.eventRoomId = event.room.id;
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
	
	      this.fieldsProps.eventTitle = {
	        inputId: 'eventTitle',
	        label: 'Тема',
	        placeholder: 'О чём будете говорить?',
	        extraClass: null,
	        inputValue: eventName,
	        isDate: false
	      };
	
	      this.recommendation = {
	        date: this.eventDate,
	        room: this.eventRoomId
	      };
	
	      return '<div class="event-page" id="app">\n              ' + header + ' \n              <div class="event-form">\n                <div class="event-form__header">' + (0, _eventFormHeader2.default)(true) + '</div>\n                <div class="event-form__body">\n                  <div class="event-form__col">\n                    ' + (0, _field2.default)(this.fieldsProps.eventTitle) + '\n                  </div>\n                  \n                  <div class="event-form__col event-form__col--flex">\n                    <div class="event-form__col-date">\n                      ' + (0, _field2.default)(this.fieldsProps.eventDate) + '\n                    </div>\n                    \n                    <div class="event-form__col-time">\n                      ' + (0, _field2.default)(this.fieldsProps.eventStartTime) + '\n                      <i class="event-form__col-time-separator"></i>\n                      ' + (0, _field2.default)(this.fieldsProps.eventEndTime) + '\n                    </div>\n                  </div>\n                  \n                  <div class="event-form__col">\n                    ' + (0, _fieldAutocomplete.getAutocompleteMarkup)(this.fieldsProps.eventMembers) + '                  \n                  </div>\n                  \n                  <div class="event-form__col">\n                    <div class="recommendations" id="recomParent" data-type="room-selected">\n                      <div class="recommendations__title">\u0412\u0430\u0448\u0430 \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u043A\u0430</div>\n                      <div class="recomendations__cnt">\n                        ' + (0, _getRecomendationTag2.default)(this.recommendation, true) + '\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class="event-form__footer">' + (0, _eventFormFooter2.default)(true) + '</div>\n            </div>\n          </div>';
	    }
	  }, {
	    key: 'cancelBtnHandler',
	    value: function cancelBtnHandler(event) {
	      event.preventDefault();
	      this.clearHandlers();
	      _router.router.navigate();
	    }
	  }, {
	    key: 'getAutocompleteHandler',
	    value: function getAutocompleteHandler(event) {
	      (0, _fieldAutocomplete.autocompleteHandler)(event, this.users);
	    }
	  }, {
	    key: 'fieldResetHandler',
	    value: function fieldResetHandler(event) {
	      event.preventDefault();
	      var field = this.parentNode;
	      var input = field.querySelector('input');
	      field.classList.remove('filled');
	      input.value = '';
	      input.focus();
	    }
	  }, {
	    key: 'recommendationTagClickHandler',
	    value: function recommendationTagClickHandler(recommendationTag) {
	      this.recomParentTitle.innerHTML = 'Ваша переговорка';
	      recommendationTag.classList.add('recommendation-tag--selected');
	
	      var recomTagArr = this.recomContainer.querySelectorAll('.recommendation-tag');
	
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = Array.from(recomTagArr)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var item = _step2.value;
	
	          this.recomContainer.removeChild(item);
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
	
	      var deleteBtn = recommendationTag.querySelector('.recommendation-tag__delete');
	      deleteBtn.addEventListener('click', this.recommendationTagDeleteBtnHandler.bind(this));
	      this.recomContainer.appendChild(recommendationTag);
	    }
	  }, {
	    key: 'recommendationTagDeleteBtnHandler',
	    value: function recommendationTagDeleteBtnHandler(event) {
	      var recommendationTag = event.target.parents('.recommendation-tag')[0];
	      this.recomParent.classList.add('hidden');
	      recommendationTag.parentNode.removeChild(recommendationTag);
	      this.handleRecommendation();
	    }
	  }, {
	    key: 'addUserHandler',
	    value: function addUserHandler(event) {
	      //Срабатывает при добавление участника события
	      var usersId = [];
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = this.eventUsers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var eventUser = _step3.value;
	
	          usersId.push(eventUser.id);
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
	
	      if (usersId.indexOf(event.detail.userId) === -1) {
	        this.eventUsers.push({ id: event.detail.userId });
	      }
	    }
	  }, {
	    key: 'removeUserHandler',
	    value: function removeUserHandler(event) {
	      //Срабатывает при удалении участника события
	      var newArr = [];
	      var _iteratorNormalCompletion4 = true;
	      var _didIteratorError4 = false;
	      var _iteratorError4 = undefined;
	
	      try {
	        for (var _iterator4 = this.eventUsers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	          var eventUser = _step4.value;
	
	          if (eventUser.id !== event.detail.userId) {
	            newArr.push(eventUser);
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
	
	      this.eventUsers = newArr;
	    }
	  }, {
	    key: 'renderRecommendations',
	    value: function renderRecommendations(recommendations) {
	      var _this2 = this;
	
	      this.recomParentTitle.innerHTML = 'Рекомендованные переговорки';
	      this.recomParent.classList.remove('hidden');
	
	      if (recommendations.length === 0) {
	        this.recomContainer.innerHTML = 'Нет рекомендаций';
	      } else {
	        this.recomContainer.innerHTML = '';
	      }
	
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;
	
	      try {
	        var _loop = function _loop() {
	          var recom = _step5.value;
	
	          var recomMarkup = (0, _getRecomendationTag2.default)(recom, false);
	          var recomNode = (0, _helpers.getNodeFromMarkup)(recomMarkup);
	
	          recomNode.addEventListener('click', function (event) {
	            var recomContent = recomNode.querySelector('.recommendation-tag__content');
	            var recomContentChildsIsTarget = (0, _helpers.checkEventTarget)(event, recomContent);
	            if (event.target === recomContent || recomContentChildsIsTarget) {
	              _this2.recommendationTagClickHandler(recomNode);
	            }
	          });
	          _this2.recomContainer.appendChild(recomNode);
	        };
	
	        for (var _iterator5 = recommendations[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          _loop();
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
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      this.fieldResetBtn = this.element.querySelector('.field__reset');
	      this.cancelBtnArr = this.element.querySelectorAll('[data-cancel]');
	      this.autocomplete = this.element.querySelector('[data-autocomplete]');
	      this.fieldResetBtn.addEventListener('click', this.fieldResetHandler);
	
	      var _iteratorNormalCompletion6 = true;
	      var _didIteratorError6 = false;
	      var _iteratorError6 = undefined;
	
	      try {
	        for (var _iterator6 = Array.from(this.cancelBtnArr)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	          var cancelBtn = _step6.value;
	
	          cancelBtn.addEventListener('click', this.cancelBtnHandler.bind(this));
	        }
	      } catch (err) {
	        _didIteratorError6 = true;
	        _iteratorError6 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion6 && _iterator6.return) {
	            _iterator6.return();
	          }
	        } finally {
	          if (_didIteratorError6) {
	            throw _iteratorError6;
	          }
	        }
	      }
	
	      this.autocomplete.addEventListener('keyup', this.getAutocompleteHandler.bind(this));
	
	      this.recomParent = this.element.querySelector('#recomParent');
	      this.recomParentTitle = this.recomParent.querySelector('.recommendations__title');
	      this.recomContainer = this.recomParent.querySelector('.recomendations__cnt');
	      this.recommendationTagDeleteBtn = this.recomParent.querySelector('.recommendation-tag .recommendation-tag__delete');
	      this.recommendationTagDeleteBtn.addEventListener('click', this.recommendationTagDeleteBtnHandler.bind(this));
	
	      document.addEventListener('addUserToEvent', this.addUserHandler.bind(this));
	      document.addEventListener('removeUserFromEvent', this.removeUserHandler.bind(this));
	    }
	  }, {
	    key: 'clearHandlers',
	    value: function clearHandlers() {
	      this.fieldResetBtn.removeEventListener('click', this.fieldResetHandler);
	
	      var _iteratorNormalCompletion7 = true;
	      var _didIteratorError7 = false;
	      var _iteratorError7 = undefined;
	
	      try {
	        for (var _iterator7 = Array.from(this.cancelBtnArr)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	          var cancelBtn = _step7.value;
	
	          cancelBtn.removeEventListener('click', this.cancelBtnHandler.bind(this));
	        }
	      } catch (err) {
	        _didIteratorError7 = true;
	        _iteratorError7 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion7 && _iterator7.return) {
	            _iterator7.return();
	          }
	        } finally {
	          if (_didIteratorError7) {
	            throw _iteratorError7;
	          }
	        }
	      }
	
	      this.eventDateDatepickr.destroy();
	      this.eventTimeStartDatepickr.destroy();
	      this.eventTimeEndDatepickr.destroy();
	      this.autocomplete.removeEventListener('keyup', this.getAutocompleteHandler.bind(this));
	
	      document.removeEventListener('addUserToEvent', this.addUserHandler.bind(this));
	      document.removeEventListener('removeUserFromEvent', this.removeUserHandler.bind(this));
	      this.recommendationTagDeleteBtn.removeEventListener('click', this.recommendationTagDeleteBtnHandler.bind(this));
	    }
	  }, {
	    key: 'handleRecommendation',
	    value: function handleRecommendation() {
	      this.members = [];
	      var person = {};
	
	      if ((this.eventDate.end - this.eventDate.start) / 60000 < 15) {
	        //Событие не может быть меньше 15 мин
	        throw new Error('Минимальная продолжительность события - 15 минут');
	      }
	
	      if (this.eventDateDay < this.initialAppDay) {
	        throw new Error('Нельзя редактировать события ушедших дней');
	      }
	
	      var _iteratorNormalCompletion8 = true;
	      var _didIteratorError8 = false;
	      var _iteratorError8 = undefined;
	
	      try {
	        for (var _iterator8 = this.eventUsers[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	          var eventUser = _step8.value;
	          //
	          var _iteratorNormalCompletion10 = true;
	          var _didIteratorError10 = false;
	          var _iteratorError10 = undefined;
	
	          try {
	            for (var _iterator10 = this.users[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	              var user = _step10.value;
	
	              if (eventUser.id === user.id) {
	                person = {
	                  login: user.login,
	                  floor: user.homeFloor,
	                  avatarUrl: user.avatarUrl
	                };
	                this.members.push(person);
	              }
	            }
	          } catch (err) {
	            _didIteratorError10 = true;
	            _iteratorError10 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion10 && _iterator10.return) {
	                _iterator10.return();
	              }
	            } finally {
	              if (_didIteratorError10) {
	                throw _iteratorError10;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError8 = true;
	        _iteratorError8 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion8 && _iterator8.return) {
	            _iterator8.return();
	          }
	        } finally {
	          if (_didIteratorError8) {
	            throw _iteratorError8;
	          }
	        }
	      }
	
	      if (this.members.length === 0) {
	        throw new Error('Выберите участников события');
	      }
	
	      // Удалить редактируемое событие из списка событий
	      var newEventsArr = [];
	      var _iteratorNormalCompletion9 = true;
	      var _didIteratorError9 = false;
	      var _iteratorError9 = undefined;
	
	      try {
	        for (var _iterator9 = this.appData.events[this.eventDateDay][Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	          var event = _step9.value;
	
	          if (event.id !== this.currentId) {
	            newEventsArr.push(event);
	          }
	        }
	      } catch (err) {
	        _didIteratorError9 = true;
	        _iteratorError9 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion9 && _iterator9.return) {
	            _iterator9.return();
	          }
	        } finally {
	          if (_didIteratorError9) {
	            throw _iteratorError9;
	          }
	        }
	      }
	
	      var db = {
	        events: newEventsArr,
	        rooms: this.appData.rooms,
	        persons: this.appData.users
	      };
	
	      this.recommendationArr = (0, _getRecomendation2.default)(this.eventDate, this.members, db);
	
	      this.renderRecommendations(this.recommendationArr);
	    }
	  }, {
	    key: 'viewRendered',
	    value: function viewRendered() {
	      var _this3 = this;
	
	      this.eventDateDatepickr = new _flatpickr2.default('#date', {
	        locale: _ru.Russian,
	        altInput: true,
	        altFormat: 'j F, Y',
	        defaultDate: this.eventStartDate,
	        wrap: true,
	        disableMobile: 'true',
	        onChange: function onChange(selectedDates) {
	          var newDay = (0, _helpers.getDateValue)(new Date(selectedDates)).day;
	          var eventDayMinute = (0, _helpers.getDateValue)(_this3.eventStartDate).minute - (0, _helpers.getDateValue)(_this3.eventStartDate).day;
	          var eventEndDayMinute = (0, _helpers.getDateValue)(_this3.eventEndDate).minute - (0, _helpers.getDateValue)(_this3.eventStartDate).day;
	          _this3.eventStartDate = new Date(newDay + eventDayMinute);
	          _this3.eventEndDate = new Date(newDay + eventEndDayMinute);
	          _this3.eventTimeStartDatepickr.setDate(_this3.eventStartDate);
	          _this3.eventTimeEndDatepickr.setDate(_this3.eventEndDate);
	        }
	      });
	      this.eventTimeStartDatepickr = new _flatpickr2.default('#eventStartTimeInput', {
	        enableTime: true,
	        noCalendar: true,
	        dateFormat: 'H:i',
	        time_24hr: true,
	        defaultDate: this.eventStartDate,
	        onChange: function onChange(selectedDates) {
	          var start = new Date(selectedDates);
	          _this3.eventDate.start = start.getTime();
	          _this3.handleRecommendation();
	        }
	      });
	      this.eventTimeEndDatepickr = new _flatpickr2.default('#eventEndTimeInput', {
	        enableTime: true,
	        noCalendar: true,
	        dateFormat: 'H:i',
	        time_24hr: true,
	        defaultDate: this.eventEndDate,
	        onChange: function onChange(selectedDates) {
	          var end = new Date(selectedDates);
	          _this3.eventDate.end = end.getTime();
	          _this3.handleRecommendation();
	        }
	
	      });
	
	      this.autocompleteTagsContainer = this.element.querySelector('.field-autocomplete__tags');
	
	      var userTag = void 0;
	      var _iteratorNormalCompletion11 = true;
	      var _didIteratorError11 = false;
	      var _iteratorError11 = undefined;
	
	      try {
	        for (var _iterator11 = this.eventUsers[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
	          var eventUser = _step11.value;
	          var _iteratorNormalCompletion12 = true;
	          var _didIteratorError12 = false;
	          var _iteratorError12 = undefined;
	
	          try {
	            for (var _iterator12 = this.users[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
	              var user = _step12.value;
	
	              if (eventUser.id === user.id) {
	                userTag = (0, _getUserTag2.default)(user.id, user.login, user.avatarUrl);
	                this.autocompleteTagsContainer.appendChild(userTag);
	              }
	            }
	          } catch (err) {
	            _didIteratorError12 = true;
	            _iteratorError12 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion12 && _iterator12.return) {
	                _iterator12.return();
	              }
	            } finally {
	              if (_didIteratorError12) {
	                throw _iteratorError12;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError11 = true;
	        _iteratorError11 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion11 && _iterator11.return) {
	            _iterator11.return();
	          }
	        } finally {
	          if (_didIteratorError11) {
	            throw _iteratorError11;
	          }
	        }
	      }
	    }
	  }]);
	
	  return EventNewView;
	}(_abstractView2.default);
	
	exports.default = EventNewView;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(33);
	
	var _queries = __webpack_require__(34);
	
	var _grapnhqlRequest = __webpack_require__(37);
	
	var _grapnhqlRequest2 = _interopRequireDefault(_grapnhqlRequest);
	
	var _helpers = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ApiService = function () {
	  function ApiService() {
	    _classCallCheck(this, ApiService);
	  }
	
	  _createClass(ApiService, [{
	    key: 'getRooms',
	    value: function getRooms() {
	      return (0, _grapnhqlRequest2.default)(_queries.query.rooms);
	    }
	  }, {
	    key: 'getEvents',
	    value: function getEvents() {
	      return (0, _grapnhqlRequest2.default)(_queries.query.events);
	    }
	  }, {
	    key: 'getUsers',
	    value: function getUsers() {
	      return (0, _grapnhqlRequest2.default)(_queries.query.users);
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
	        /**
	         * @typedef {Object} EventsSortedByDate
	         * @property {Event[]} timestamp Встречи отсортированные по дате.
	         */
	        var eventsSortedByDate = {};
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = res.data.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var event = _step.value;
	
	            var dateStart = new Date(event.dateStart);
	            var dateStartDay = (0, _helpers.getDateValue)(dateStart).day;
	
	            if (!eventsSortedByDate.hasOwnProperty(dateStartDay)) {
	              eventsSortedByDate[dateStartDay] = [event];
	            } else {
	              eventsSortedByDate[dateStartDay].push(event);
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
	
	        responseData.events = eventsSortedByDate;
	
	        // console.log(eventsSortedByDate);
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mutation = exports.query = undefined;
	
	var _query = __webpack_require__(35);
	
	var _query2 = _interopRequireDefault(_query);
	
	var _mutation = __webpack_require__(36);
	
	var _mutation2 = _interopRequireDefault(_mutation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.query = _query2.default;
	exports.mutation = _mutation2.default;

/***/ }),
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var checkStatus = function checkStatus(response) {
	  if (response.status >= 200 && response.status < 300) {
	    return response;
	  } else {
	    throw new Error(response.status + ': ' + response.statusText);
	  }
	};
	
	var parseJSON = function parseJSON(response) {
	  return response.json();
	};
	
	exports.default = function (request) {
	  return window.fetch('/graphql', {
	    method: 'POST',
	    headers: { 'Content-Type': 'application/json' },
	    body: JSON.stringify({ query: request })
	  }).then(checkStatus).then(parseJSON);
	};

/***/ }),
/* 38 */
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