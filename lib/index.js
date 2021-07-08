"use strict";

require("core-js/modules/es6.promise.js");

require("core-js/modules/es6.symbol.js");

require("core-js/modules/es6.string.iterator.js");

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.array.iterator.js");

require("core-js/modules/web.dom.iterable.js");

require("regenerator-runtime/runtime.js");

var _hmacSha = _interopRequireDefault(require("crypto-js/hmac-sha256"));

var _encBase = _interopRequireDefault(require("crypto-js/enc-base64"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Vue = factory());
})(void 0, function () {
  'use strict';

  var TEXT = "text";
  var LINk = "link";
  var MARKDOWN = "markdown";
  var ACTIONCARD = "actionCard";
  var FEEDCARD = "feedCard";
  /**
   * @description 生成签名
   * @param timestamp
   * @param secret
   * @returns {string}
   */

  function createSign(timestamp, secret) {
    var stringToSign = "".concat(timestamp, "\n").concat(secret);
    var hash = (0, _hmacSha["default"])(stringToSign, secret);

    var signData = _encBase["default"].stringify(hash);

    return encodeURIComponent(signData);
  }
  /**
   * @description 请求层
   * @param webhook
   * @param postData
   * @param timestamp
   * @param sign
   * @returns {Promise}
   */


  function sendService(_x, _x2, _x3, _x4) {
    return _sendService.apply(this, arguments);
  }

  function _sendService() {
    _sendService = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(webhook, postData, timestamp, sign) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _axios["default"].post(webhook, postData, {
                params: {
                  timestamp: timestamp,
                  sign: sign
                }
              });

            case 2:
              return _context7.abrupt("return", _context7.sent);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return _sendService.apply(this, arguments);
  }

  function createSend(webhook, timestamp, sign) {
    return /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(postData) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return sendService(webhook, postData, timestamp, sign);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x5) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  /**
   * @description 向钉钉发送数据
   * @param webhook
   * @param secret
   * @param postData
   * @returns {Promise}
   */


  function sendDingRobot(_x6, _x7, _x8) {
    return _sendDingRobot.apply(this, arguments);
  }
  /**
   *
   * @param webhook
   * @param secret
   * @param msgtype
   * @returns {function(*=): *}
   */


  function _sendDingRobot() {
    _sendDingRobot = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(webhook, secret, postData) {
      var timestamp, sign, sendBody;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              timestamp = new Date().getTime();
              sign = createSign(timestamp, secret);
              sendBody = createSend(webhook, timestamp, sign);
              _context8.next = 5;
              return sendBody(postData);

            case 5:
              return _context8.abrupt("return", _context8.sent);

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    return _sendDingRobot.apply(this, arguments);
  }

  function sendDingClothes(webhook, secret, msgtype) {
    switch (msgtype) {
      case LINk:
        return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var format,
              title,
              text,
              messageUrl,
              picUrl,
              _args2 = arguments;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  format = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {
                    title: "",
                    text: "",
                    messageUrl: "",
                    picUrl: ""
                  };
                  title = format.title, text = format.text, messageUrl = format.messageUrl, picUrl = format.picUrl;
                  _context2.next = 4;
                  return sendDingRobot(webhook, secret, {
                    msgtype: msgtype,
                    link: {
                      title: title,
                      text: text,
                      messageUrl: messageUrl,
                      picUrl: picUrl
                    }
                  });

                case 4:
                  return _context2.abrupt("return", _context2.sent);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

      case MARKDOWN:
        return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var format,
              title,
              text,
              atMobiles,
              atUserIds,
              isAtAll,
              _args3 = arguments;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  format = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {
                    title: "",
                    text: "",
                    atMobiles: [],
                    atUserIds: [],
                    isAtAll: false
                  };
                  title = format.title, text = format.text, atMobiles = format.atMobiles, atUserIds = format.atUserIds, isAtAll = format.isAtAll;
                  _context3.next = 4;
                  return sendDingRobot(webhook, secret, {
                    msgtype: msgtype,
                    markdown: {
                      title: title,
                      text: text
                    },
                    at: {
                      atMobiles: atMobiles,
                      atUserIds: atUserIds,
                      isAtAll: isAtAll
                    }
                  });

                case 4:
                  return _context3.abrupt("return", _context3.sent);

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

      case ACTIONCARD:
        return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var format,
              title,
              text,
              btnOrientation,
              singleTitle,
              singleURL,
              btns,
              _args4 = arguments;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  format = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {
                    title: "",
                    text: "",
                    singleTitle: "",
                    singleURL: "",
                    btnOrientation: "1",
                    btns: []
                  };
                  title = format.title, text = format.text, btnOrientation = format.btnOrientation, singleTitle = format.singleTitle, singleURL = format.singleURL, btns = format.btns;
                  _context4.next = 4;
                  return sendDingRobot(webhook, secret, {
                    msgtype: msgtype,
                    actionCard: {
                      title: title,
                      text: text,
                      btnOrientation: btnOrientation,
                      singleTitle: singleTitle,
                      singleURL: singleURL,
                      btns: btns
                    }
                  });

                case 4:
                  return _context4.abrupt("return", _context4.sent);

                case 5:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

      case FEEDCARD:
        return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          var format,
              links,
              _args5 = arguments;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  format = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {
                    links: []
                  };
                  links = format.links;
                  _context5.next = 4;
                  return sendDingRobot(webhook, secret, {
                    msgtype: msgtype,
                    feedCard: {
                      links: links
                    }
                  });

                case 4:
                  return _context5.abrupt("return", _context5.sent);

                case 5:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

      case TEXT:
      default:
        return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          var format,
              content,
              atMobiles,
              atUserIds,
              isAtAll,
              _args6 = arguments;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  format = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {
                    content: '',
                    atMobiles: [],
                    atUserIds: [],
                    isAtAll: false
                  };
                  content = format.content, atMobiles = format.atMobiles, atUserIds = format.atUserIds, isAtAll = format.isAtAll;
                  _context6.next = 4;
                  return sendDingRobot(webhook, secret, {
                    msgtype: "text",
                    text: {
                      content: content
                    },
                    at: {
                      atMobiles: atMobiles,
                      atUserIds: atUserIds,
                      isAtAll: isAtAll
                    }
                  });

                case 4:
                  return _context6.abrupt("return", _context6.sent);

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));
    }
  }
  /**
   *
   * @param params
   * @constructor
   */


  function RobotDing() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      webhook: '',
      secret: ''
    };
    var webhook = params.webhook,
        secret = params.secret;

    if (!(webhook && secret)) {
      throw '未定义机器人';
    }

    this.init(webhook, secret);
  }
  /**
   *
   * @param RobotDing
   */


  function initRobotDing(RobotDing) {
    RobotDing.prototype.init = function (webhook, secret) {
      this.sendText = sendDingClothes(webhook, secret);
      this.sendLink = sendDingClothes(webhook, secret, LINk);
      this.sendMarkdown = sendDingClothes(webhook, secret, MARKDOWN);
      this.sendActionCard = sendDingClothes(webhook, secret, ACTIONCARD);
      this.sendFeedCard = sendDingClothes(webhook, secret, FEEDCARD);
    };
  }

  initRobotDing(RobotDing);
  return RobotDing;
});