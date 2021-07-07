import HmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";
import $axios from "axios";

const TEXT = "text";
const LINE = "link";
const MARKDOWN = "markdown";
const ACTIONCARD = "actionCard";
const FEEDCARD = "feedCard";

function createSign(timestamp, secret) {
  const stringToSign = `${timestamp}\n${secret}`;
  const hash = HmacSHA256(stringToSign, secret);
  const signData = Base64.stringify(hash);
  return encodeURIComponent(signData);
}

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

async function sendDingRobot(webhook, secret, postData) {
  const timestamp = new Date().getTime();
  const sign = createSign(timestamp, secret);
  const sendBody = createSend(webhook, timestamp, sign);
  return await sendBody(postData);
}
