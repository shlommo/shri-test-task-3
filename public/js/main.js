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
	
	var _apiService = __webpack_require__(22);
	
	var _apiService2 = _interopRequireDefault(_apiService);
	
	var _createSvgSprite = __webpack_require__(28);
	
	var _createSvgSprite2 = _interopRequireDefault(_createSvgSprite);
	
	var _helpers = __webpack_require__(11);
	
	var _router = __webpack_require__(16);
	
	var _router2 = _interopRequireDefault(_router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import createMeetingRoom from './views/meeting-rooms-view';
	
	// const createEvent = mutation.createEvent(
	//   `{
	//     title: "Тестовый запрос",
	//     dateStart: "${new Date().toISOString()}",
	//     dateEnd: "${new Date().toISOString()}"}
	//   `, `"${[1]}"`, 6);
	
	(0, _createSvgSprite2.default)();
	
	var appInit = function appInit() {
	  return _apiService2.default.getAll().then(function (data) {
	    _application2.default.data = data;
	    _application2.default.showMeetingRooms();
	
	    document.addEventListener('dateChange', function (e) {
	      var newData = Object.assign(data, {
	        date: e.detail.date
	      });
	
	      _application2.default.data = newData;
	      _application2.default.showMeetingRooms();
	    });
	  });
	};
	
	_router2.default.on(/event\/(\w+=\d+&\w+=\d+&\w+=\d+)\/(\w+)\/?/, function (hash, action) {
	  var encodeData = (0, _helpers.encodeObjFromHash)(hash);
	  if (action === 'create') {
	    _application2.default.showEventCreate(encodeData);
	  } else if (action === 'edit') {}
	}).on(/event\/(\w+)\/?/, function (action) {
	  if (action === 'create') {
	    _application2.default.showEventCreate();
	  } else if (action === 'edit') {}
	}).on('*', function () {
	  appInit();
	}).resolve();

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
	    value: function showEventEdit() {
	      (0, _view2.default)(_data.TYPES.EVENT_CREATE, meetingRoomsData);
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
	
	var RENDERS = (_RENDERS = {}, _defineProperty(_RENDERS, _data.TYPES.MEETING_ROOMS, _meetingRoomsView2.default), _defineProperty(_RENDERS, _data.TYPES.EVENT_CREATE, _eventView.eventNewView), _RENDERS);
	
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
	
	var _router = __webpack_require__(16);
	
	var _router2 = _interopRequireDefault(_router);
	
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
	        // Application.showEventCreate();
	        _router2.default.navigate('/event/create');
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
	
	var _router2 = _interopRequireDefault(_router);
	
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
	
	          eventNewTrigger.addEventListener('click', function () {
	            startTime = eventNewTrigger.getAttribute('data-start-time');
	            endTime = eventNewTrigger.getAttribute('data-end-time');
	            roomId = eventNewTrigger.parents('.diagram__room')[0].getAttribute('data-room-id');
	            eventCreateInputData = {
	              roomId: roomId,
	              startTime: startTime,
	              endTime: endTime
	            };
	
	            _router2.default.navigate('/event/' + (0, _helpers.parseObjToHash)(eventCreateInputData) + '/create');
	          });
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
	
	  return '<div class="time-slot-info" id="timeSlotInfoModal">\n    <i class="time-slot-info__marker"></i>\n    <div class="time-slot-info__cnt">\n        <a href="event-edit.html" class="time-slot-info__trigger">\n            <i>\n                <svg width="12" height="12">\n                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-edit"></use>\n                </svg>\n            </i>\n        </a>\n\n        <div class="time-slot-info__title">\n            ' + event.title + '\n        </div>\n\n        <div class="time-slot-info__descr">\n            ' + dateStart.getDate() + ' ' + inclineMonths[dateStart.getMonth()] + ', ' + time + '&nbsp;\xB7&nbsp;' + roomName + '\n        </div>\n        <div class="time-slot-info__users">\n            <div class="user">\n                <div class="user__icon">\n                    <img src="' + userAvatarUrl + '" alt="">\n                </div>\n                ' + userLogin + '\n            </div>&nbsp;\u0438&nbsp;' + members + '\n        </div>\n    </div>\n  </div>';
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
	
	      timeSlot.addEventListener('click', function (event) {
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
	            body.removeChild(timeSlotInfoNode);
	            timeSlot.classList.remove('focused');
	          });
	        }, 10);
	      });
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
	
	var _navigo = __webpack_require__(17);
	
	var _navigo2 = _interopRequireDefault(_navigo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var root = null;
	var useHash = true;
	var hash = '#';
	var router = new _navigo2.default(root, useHash, hash);
	
	exports.default = router;
	// router.navigate('/event');

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
	exports.eventNewView = undefined;
	
	var _eventNewView = __webpack_require__(20);
	
	var _eventNewView2 = _interopRequireDefault(_eventNewView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var eventNewView = exports.eventNewView = function eventNewView(data) {
	  return new _eventNewView2.default(data);
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
	
	var _getEventFormMarkup = __webpack_require__(21);
	
	var _getEventFormMarkup2 = _interopRequireDefault(_getEventFormMarkup);
	
	var _application = __webpack_require__(1);
	
	var _application2 = _interopRequireDefault(_application);
	
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
	    return _this;
	  }
	
	  _createClass(EventNewView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var header = '<header class="header"><div class="logo"></div></header>';
	
	      var eventForm = (0, _getEventFormMarkup2.default)(false);
	
	      console.log(this.eventInputData, _application2.default.data);
	
	      return '<div class="event-page" id="app">\n              ' + header + ' \n              ' + eventForm + '\n            </div>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {}
	  }]);
	
	  return EventNewView;
	}(_abstractView2.default);
	
	exports.default = EventNewView;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (isEdit) {
	    var editClass = isEdit ? ' event-form--edit' : '';
	    var eventHeader = '<h3 class="event-form__title">' + (isEdit ? 'Редактирование встречи' : 'Новая встреча') + '</h3>\n        <a href="#" class="event-form__close circle-icon">\n            <i>\n                <svg width="10" height="10">\n                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>\n                </svg>\n            </i>\n        </a>';
	    var eventFooter = isEdit ? '<button class="button button--gray" data-close>\u041E\u0442\u043C\u0435\u043D\u0430</button>\n      <button class="button button--gray">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>' : '<button class="button button--gray">\u041E\u0442\u043C\u0435\u043D\u0430</button>\n    <button class="button button--blue button--disabled">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0443</button>';
	
	    return '<div class="event-form' + editClass + '">\n              <div class="event-form__header">' + eventHeader + '</div>\n              <div class="event-form__body"></div>\n              <div class="event-form__footer">' + eventFooter + '</div>\n          </div>';
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(23);
	
	var _queries = __webpack_require__(24);
	
	var _grapnhQlRequest = __webpack_require__(27);
	
	var _grapnhQlRequest2 = _interopRequireDefault(_grapnhQlRequest);
	
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
	      return (0, _grapnhQlRequest2.default)(_queries.query.rooms);
	    }
	  }, {
	    key: 'getEvents',
	    value: function getEvents() {
	      return (0, _grapnhQlRequest2.default)(_queries.query.events);
	    }
	  }, {
	    key: 'getUsers',
	    value: function getUsers() {
	      return (0, _grapnhQlRequest2.default)(_queries.query.users);
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mutation = exports.query = undefined;
	
	var _query = __webpack_require__(25);
	
	var _query2 = _interopRequireDefault(_query);
	
	var _mutation = __webpack_require__(26);
	
	var _mutation2 = _interopRequireDefault(_mutation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.query = _query2.default;
	exports.mutation = _mutation2.default;

/***/ }),
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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