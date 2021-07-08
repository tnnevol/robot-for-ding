import HmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";
import $axios from "axios";

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
      typeof define === 'function' && define.amd ? define(factory) :
          (global = global || self, global.Vue = factory());
}(this, function () { 'use strict';
  const TEXT = "text";
  const LINk = "link";
  const MARKDOWN = "markdown";
  const ACTIONCARD = "actionCard";
  const FEEDCARD = "feedCard";

  /**
   * @description 生成签名
   * @param timestamp
   * @param secret
   * @returns {string}
   */
  function createSign(timestamp, secret) {
    const stringToSign = `${timestamp}\n${secret}`;
    const hash = HmacSHA256(stringToSign, secret);
    const signData = Base64.stringify(hash);
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
  async function sendService(webhook, postData, timestamp, sign) {
    return await $axios.post(webhook, postData, {
      params: {
        timestamp,
        sign,
      },
    });
  }
  function createSend(webhook, timestamp, sign) {
    return async function (postData) {
      return await sendService(webhook, postData, timestamp, sign);
    };
  }

  /**
   * @description 向钉钉发送数据
   * @param webhook
   * @param secret
   * @param postData
   * @returns {Promise}
   */
  async function sendDingRobot(webhook, secret, postData) {
    const timestamp = new Date().getTime();
    const sign = createSign(timestamp, secret);
    const sendBody = createSend(webhook, timestamp, sign);
    return await sendBody(postData);
  }

  /**
   *
   * @param webhook
   * @param secret
   * @param msgtype
   * @returns {function(*=): *}
   */
  function sendDingClothes (webhook, secret, msgtype){
    switch (msgtype){
      case LINk:
        return async function (format = {
          title: "",
          text: "",
          messageUrl: "",
          picUrl: ""
        }){
          const {title, text, messageUrl, picUrl} = format;
          return await sendDingRobot(webhook, secret, {
            msgtype,
            link: {
              title,
              text,
              messageUrl,
              picUrl
            }
          })
        }
      case MARKDOWN:
        return async function (format = {
          title: "",
          text: "",
          atMobiles: [],
          atUserIds: [],
          isAtAll: false
        }){
          const {title, text,  atMobiles, atUserIds, isAtAll} = format;
          return await sendDingRobot(webhook, secret, {
            msgtype,
            markdown: {
              title,
              text
            },
            at: {
              atMobiles,
              atUserIds,
              isAtAll
            }
          })
        }
      case ACTIONCARD:
        return async function (format = {
          title: "",
          text: "",
          singleTitle: "",
          singleURL: "",
          btnOrientation: "1",
          btns: []
        }){
          const {title, text, btnOrientation, singleTitle, singleURL, btns} = format;
          return await sendDingRobot(webhook, secret, {
            msgtype,
            actionCard: {
              title,
              text,
              btnOrientation,
              singleTitle,
              singleURL,
              btns
            }
          })
        }
      case FEEDCARD:
        return async function (format = {
          links: []
        }){
          const {links} = format;
          return await sendDingRobot(webhook, secret, {
            msgtype,
            feedCard: {
              links
            }
          })
        }
      case TEXT:
      default:
        return async function (format = {
          content: '',
          atMobiles: [],
          atUserIds: [],
          isAtAll: false
        }){
          const {content, atMobiles, atUserIds, isAtAll} = format;
          return await sendDingRobot(webhook, secret, {
            msgtype: "text",
            text: {
              content
            },
            at: {
              atMobiles,
              atUserIds,
              isAtAll
            }
          })
        }
    }
  }

  /**
   *
   * @param params
   * @constructor
   */
  function RobotDing(params = {
    webhook: '',
    secret: ''
  }){
    const {webhook, secret} = params
    if (!(webhook && secret)){
      throw '未定义机器人'
    }
    this.init(webhook, secret)
  }

  /**
   *
   * @param RobotDing
   */
  function initRobotDing(RobotDing){
    RobotDing.prototype.init = function (webhook, secret){
      this.sendText = sendDingClothes(webhook, secret);
      this.sendLink = sendDingClothes(webhook, secret, LINk);
      this.sendMarkdown = sendDingClothes(webhook, secret, MARKDOWN);
      this.sendActionCard = sendDingClothes(webhook, secret, ACTIONCARD);
      this.sendFeedCard = sendDingClothes(webhook, secret, FEEDCARD);
    }
  }
  initRobotDing(RobotDing)
  return RobotDing;
}));

