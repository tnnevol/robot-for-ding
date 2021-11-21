import { AxiosPromise } from 'axios'

export type DingMessageType = 'text' | 'link' | 'markdown' | 'actionCard' | 'feedCard'
export type DingAtMobilesType = string[]
export type DingAtUserIds = string[]
export type BtnOrientationType = 0 | 1
export type ActionCardBtnType = {
  /** 按钮标题 */
  title: string
  /** 点击按钮触发的URL */
  actionURL: string
}
export type FeedCardLinkType = {
  title: string
  messageURL: string
  picURL: string
}

export interface DintSendAt {
  /** 被@人的手机号。 */
  atMobiles?: DingAtMobilesType
  /** 被@人的用户userid。 */
  atUserIds?: DingAtUserIds
  /** 是否@所有人。 */
  isAtAll?: boolean
}
/* text */
export interface DingSendText {
  content: string
}
export interface DingSendTextParams {
  at: DintSendAt
  text: DingSendText
  msgtype: DingMessageType
}
export interface DingTextConfig extends DintSendAt, DingSendText {}
/*  */

/* link */
export interface DingSendLink {
  /** 消息标题 (required) */
  title: string
  /** 消息内容。如果内容太长只会部分展示 (required) */
  text: string
  /** 点击消息跳转的URL (required) */
  messageUrl: string
  /** 图片URL */
  picUrl?: string
}
export interface DingSendLinkParams {
  msgtype: DingMessageType
  link: DingSendLink
}
export interface DingLinkConfig extends DingSendLink {}
/*  */

/* markdown */
export interface DingSendMarkdown {
  /** 首屏会话透出的展示内容。 (required) */
  title: string
  /** markdown格式的消息 (required) */
  text: string
  at?: DintSendAt
}
export interface DingSendMarkdownParams {
  msgtype: DingMessageType
  markdown: DingSendMarkdown
}
export interface DingMarkdownConfig extends DintSendAt {
  /** 首屏会话透出的展示内容。 (required) */
  title: string
  /** markdown格式的消息 (required) */
  text: string
}
/*  */

/* actionAcrd */
export interface DingSendActionCard {
  /** 首屏会话透出的展示内容。 (required) */
  title: string
  /** markdown格式的消息 (required) */
  text: string
  /** 0：按钮竖直排列 1：按钮横向排列 */
  btnOrientation?: BtnOrientationType
}
export interface DingSendSingleBtnActionCard extends DingSendActionCard {
  /** 单个按钮的标题 */
  singleTitle: string
  /** 点击消息跳转的URL */
  singleURL: string
}
export interface DingSendMoreBtnActionCard extends DingSendActionCard {
  /** 按钮 */
  btns: ActionCardBtnType[]
}
export interface DingSendActionCardParams {
  msgtype: DingMessageType
  actionCard: DingSendSingleBtnActionCard | DingSendMoreBtnActionCard
}
export interface DingSingleBtnActionCardConfig extends DingSendSingleBtnActionCard {}
export interface DingMoreBtnActionCardConfig extends DingSendMoreBtnActionCard {}
/*  */

/* feedCard */
export interface DingSendFeedCard {
  links: FeedCardLinkType[]
}
export interface DingSendFeedCardParams {
  msgtype: DingMessageType
  feedCard: DingSendFeedCard
}
export interface DingFeedCardConfig extends DingSendFeedCard {}
/*  */

export interface RobotDingConfig {
  webhook: string
  secret: string
}
// 用去
export type DingConfig =
  | DingTextConfig
  | DingLinkConfig
  | DingMarkdownConfig
  | DingSingleBtnActionCardConfig
  | DingMoreBtnActionCardConfig
  | DingFeedCardConfig

export type DingSendParams =
  | DingSendTextParams
  | DingSendLinkParams
  | DingSendMarkdownParams
  | DingSendActionCardParams
  | DingSendFeedCardParams

export interface SendDing {
  sendDing(params: DingConfig): AxiosPromise
}
