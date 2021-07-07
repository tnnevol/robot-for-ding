"use strict";

require("core-js/modules/es6.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.to-string.js");

require("core-js/modules/es6.promise.js");

require("regenerator-runtime/runtime.js");

var _hmacSha = _interopRequireDefault(require("crypto-js/hmac-sha256"));

var _encBase = _interopRequireDefault(require("crypto-js/enc-base64"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var TEXT = "text";
var LINE = "link";
var MARKDOWN = "markdown";
var ACTIONCARD = "actionCard";
var FEEDCARD = "feedCard";

function createSign(timestamp, secret) {
  var stringToSign = "".concat(timestamp, "\n").concat(secret);
  var hash = (0, _hmacSha["default"])(stringToSign, secret);

  var signData = _encBase["default"].stringify(hash);

  return encodeURIComponent(signData);
}

function sendService(_x, _x2, _x3, _x4) {
  return _sendService.apply(this, arguments);
}

function _sendService() {
  _sendService = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(webhook, postData, timestamp, sign) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _axios["default"].post(webhook, postData, {
              params: {
                timestamp: timestamp,
                sign: sign
              }
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
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

function sendDingRobot(_x6, _x7, _x8) {
  return _sendDingRobot.apply(this, arguments);
}

function _sendDingRobot() {
  _sendDingRobot = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(webhook, secret, postData) {
    var timestamp, sign, sendBody;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            timestamp = new Date().getTime();
            sign = createSign(timestamp, secret);
            sendBody = createSend(webhook, timestamp, sign);
            _context3.next = 5;
            return sendBody(postData);

          case 5:
            return _context3.abrupt("return", _context3.sent);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _sendDingRobot.apply(this, arguments);
}

var _default = sendDingRobot;
exports["default"] = _default;