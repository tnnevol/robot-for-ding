import HmacSHA256 from 'crypto-js/hmac-sha256'
import Base64 from 'crypto-js/enc-base64'
import $axios, { AxiosPromise } from 'axios'
import {
  SendDing,
  RobotDingConfig,
  DingConfig,
  DingMessageType,
  DingTextConfig,
  DingLinkConfig,
  DingMarkdownConfig,
  DingSingleBtnActionCardConfig,
  DingMoreBtnActionCardConfig,
  DingFeedCardConfig,
  DingSendParams,
  DingSendTextParams,
  DingSendMarkdownParams,
  DingSendLinkParams,
  DingSendActionCardParams,
  DingSendFeedCardParams
} from '.'

function createSign(timestamp: number, secret: string): string {
  const stringToSign: string = `${timestamp}\n${secret}`
  const hash = HmacSHA256(stringToSign, secret)
  const signData: string = Base64.stringify(hash)
  return encodeURIComponent(signData)
}

export default class RobotDing implements SendDing {
  protected webhook: string
  protected secret: string

  constructor(config: RobotDingConfig) {
    this.webhook = config.webhook
    this.secret = config.secret
  }
  public sendDing(config: DingConfig, msgtype?: DingMessageType): AxiosPromise {
    const timestamp: number = new Date().getTime()
    const sign: string = createSign(timestamp, this.secret)
    let postData: DingSendParams
    switch (msgtype) {
      case 'text':
      default:
        const dingTextConfig = config as DingTextConfig
        postData = {
          msgtype: msgtype || 'text',
          at: {
            atMobiles: dingTextConfig.atMobiles,
            atUserIds: dingTextConfig.atUserIds,
            isAtAll: dingTextConfig.isAtAll
          },
          text: {
            content: dingTextConfig.content
          }
        } as DingSendTextParams
        break
      case 'link':
        const dingLinkConfig = config as DingLinkConfig
        postData = {
          msgtype,
          link: dingLinkConfig
        } as DingSendLinkParams
        break
      case 'markdown':
        const dingMarkdownConfig = config as DingMarkdownConfig
        postData = {
          msgtype,
          markdown: {
            title: dingMarkdownConfig.title,
            text: dingMarkdownConfig.text,
            at: {
              atUserIds: dingMarkdownConfig.atUserIds,
              atMobiles: dingMarkdownConfig.atMobiles,
              isAtAll: dingMarkdownConfig.isAtAll
            }
          }
        } as DingSendMarkdownParams
        break
      case 'actionCard':
        const dingSingleBtnActionCardConfig = config as DingSingleBtnActionCardConfig
        const dingMoreBtnActionCardConfig = config as DingMoreBtnActionCardConfig
        postData = {
          msgtype,
          actionCard: dingMoreBtnActionCardConfig.btns
            ? dingMoreBtnActionCardConfig
            : dingSingleBtnActionCardConfig
        } as DingSendActionCardParams
        break
      case 'feedCard':
        const dingFeedCardConfig = config as DingFeedCardConfig
        postData = {
          msgtype,
          feedCard: dingFeedCardConfig
        } as DingSendFeedCardParams
        break
    }
    return this.sendService(postData, timestamp, sign)
  }

  protected sendService(postData: DingSendParams, timestamp: number, sign: string): AxiosPromise {
    return $axios.post(this.webhook, postData, {
      params: {
        timestamp,
        sign
      }
    })
  }
}
