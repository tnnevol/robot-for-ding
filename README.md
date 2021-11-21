# robot-ding

typescript 重构版本

## 说明

本项目是对接钉钉自定义小机器人，消息格式请[查阅文档](https://developers.dingtalk.com/document/app/custom-robot-access/title-72m-8ag-pqw), 主要将发送格式进行平铺

## 起步

```shell
npm i robot-for-ding
```

## 使用

```javascript
const RobotDing = require('../')

const ding = new RobotDing({
  webhook:
    'https://oapi.dingtalk.com/robot/send?access_token=936b77454465039fcfb01698a59d2d00ae52f431d9cb79d8492c1fa6c83b28ce',
  secret: 'SECad40f44b963f9e6deb8783bb5ac47f41c7ecbd1f3821dc62d123147e6a7b22c4'
})

// text
ding.sendDing({
  content: '从今天开始，拿起 TypeScript 做一个轮子的制造者'
  // atUserIds: []
})

// link
ding.sendDing(
  {
    title: '从今天开始，拿起 TypeScript 做一个轮子的制造者',
    text:
      '前端这些年发展非常迅速社区里涌现了一堆优秀的轮子比如Vue、React、Angular、jQuery、axios 等它们解决着不同领域下的问题。使用这些轮子能极大地帮助我们提升生产力有些人甚至基于这些轮子二次开发了一些轮子比如 element-ui、ant-design 等组件库。我们在享受这些轮子给我们带来的便利的时候有时候也需要面临一些问题某些轮子不能满足我们自己的特殊业务需求找不到合适的轮子等。因此我们不仅要会使用轮子也需要有造轮子的能力。',
    messageUrl: 'https://zhuanlan.zhihu.com/p/63668114',
    picUrl: 'https://pic3.zhimg.com/v2-7f0f7283248b0380a505cd22d820a9ec_1440w.jpg?source=172ae18b'
  },
  'link'
)

// markdown
ding.sendDing(
  {
    title: '从今天开始，拿起 TypeScript 做一个轮子的制造者',
    text:
      '## 前端 \n 前端这些年发展非常迅速社区里涌现了一堆优秀的轮子比如Vue、React、Angular、jQuery、axios 等它们解决着不同领域下的问题。使用这些轮子能极大地帮助我们提升生产力有些人甚至基于这些轮子二次开发了一些轮子比如 element-ui、ant-design 等组件库。我们在享受这些轮子给我们带来的便利的时候有时候也需要面临一些问题某些轮子不能满足我们自己的特殊业务需求找不到合适的轮子等。因此我们不仅要会使用轮子也需要有造轮子的能力。',
    isAtAll: true
    // atMobiles: []
  },
  'markdown'
)

// 一个按钮的actionCard
ding.sendDing(
  {
    title: '从今天开始，拿起 TypeScript 做一个轮子的制造者',
    text:
      '## 前端 \n 前端这些年发展非常迅速社区里涌现了一堆优秀的轮子比如Vue、React、Angular、jQuery、axios 等它们解决着不同领域下的问题。使用这些轮子能极大地帮助我们提升生产力有些人甚至基于这些轮子二次开发了一些轮子比如 element-ui、ant-design 等组件库。我们在享受这些轮子给我们带来的便利的时候有时候也需要面临一些问题某些轮子不能满足我们自己的特殊业务需求找不到合适的轮子等。因此我们不仅要会使用轮子也需要有造轮子的能力。',
    btnOrientation: 0,
    singleTitle: '查看详情',
    singleURL: 'https://zhuanlan.zhihu.com/p/63668114'
  },
  'actionCard'
)

// 多个按钮的actionCard
ding.sendDing(
  {
    title: '从今天开始，拿起 TypeScript 做一个轮子的制造者',
    text:
      '## 前端 \n 前端这些年发展非常迅速社区里涌现了一堆优秀的轮子比如Vue、React、Angular、jQuery、axios 等它们解决着不同领域下的问题。使用这些轮子能极大地帮助我们提升生产力有些人甚至基于这些轮子二次开发了一些轮子比如 element-ui、ant-design 等组件库。我们在享受这些轮子给我们带来的便利的时候有时候也需要面临一些问题某些轮子不能满足我们自己的特殊业务需求找不到合适的轮子等。因此我们不仅要会使用轮子也需要有造轮子的能力。',
    btnOrientation: 0,
    btns: [
      {
        title: '查看详情',
        actionURL: 'https://zhuanlan.zhihu.com/p/63668114'
      },
      {
        title: '百度一下',
        actionURL: 'https://www.baidu.com'
      }
    ]
  },
  'actionCard'
)

// feedCard
ding.sendDing(
  {
    links: [
      {
        title: '从今天开始，拿起 TypeScript 做一个轮子的制造者',
        messageURL: 'https://zhuanlan.zhihu.com/p/63668114',
        picURL:
          'https://pic3.zhimg.com/v2-7f0f7283248b0380a505cd22d820a9ec_1440w.jpg?source=172ae18b'
      },
      {
        title: '100个产业链全景图',
        messageURL: 'https://zhuanlan.zhihu.com/p/99140838',
        picURL: 'https://pic3.zhimg.com/80/v2-78ce5e9b7ead374ed62427a0445df3fa_720w.jpg'
      }
    ]
  },
  'feedCard'
)
```

## api

**text**

| 参数      | 参数类型 | 默认值 | 是否必填 | 必须                 |
| --------- | -------- | ------ | -------- | -------------------- |
| content   | String   | ''     | 是       | 消息内容。           |
| atMobiles | Array    | []     | 否       | 被@人的手机号。      |
| atUserIds | Array    | []     | 否       | 被@人的用户 userid。 |
| isAtAll   | Boolean  | false  | 否       | 是否@所有人。        |

**link**

| 参数       | 参数类型 | 默认值 | 是否必填 | 必须                             |
| ---------- | -------- | ------ | -------- | -------------------------------- |
| title      | String   | ''     | 是       | 消息标题。                       |
| text       | String   | ''     | 是       | 消息内容。如果太长只会部分展示。 |
| messageUrl | String   | ''     | 是       | 点击消息跳转的 URL。             |
| picUrl     | String   | ''     | 否       | 图片 URL。                       |

**markdown**

| 参数      | 参数类型 | 默认值 | 是否必填 | 必须                     |
| --------- | -------- | ------ | -------- | ------------------------ |
| title     | String   | ''     | 是       | 首屏会话透出的展示内容。 |
| text      | String   | ''     | 是       | markdown 格式的消息。    |
| atMobiles | Array    | []     | 否       | 被@人的手机号。          |
| atUserIds | Array    | []     | 否       | 被@人的用户 userid。     |
| isAtAll   | Boolean  | false  | 否       | 是否@所有人。            |

目前只支持 markdown 语法的子集，具体支持的元素如下：

```text
标题
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

引用
> A man who stands for nothing will fall for anything.

文字加粗、斜体
**bold**
*italic*

链接
[this is a link](http://name.com)

图片
![](http://name.com/pic.jpg)

无序列表
- item1
- item2

有序列表
1. item1
2. item2
```

**actionCard 单个按钮**

| 参数           | 参数类型 | 默认值 | 是否必填 | 必须                                   |
| -------------- | -------- | ------ | -------- | -------------------------------------- |
| title          | String   | ''     | 是       | 首屏会话透出的展示内容。               |
| text           | String   | ''     | 是       | markdown 格式的消息。                  |
| singleTitle    | String   | ''     | 是       | 单个按钮的标题。                       |
| singleURL      | String   | ''     | 是       | 点击 singleTitle 按钮触发的 URL。      |
| btnOrientation | String   | "1"    | 否       | 0：按钮竖直排列 <br /> 1：按钮横向排列 |

**actionCard 多个按钮**

| 参数             | 参数类型 | 默认值 | 是否必填 | 必须                                                     |
| ---------------- | -------- | ------ | -------- | -------------------------------------------------------- |
| title            | String   | ''     | 是       | 首屏会话透出的展示内容。                                 |
| text             | String   | ''     | 是       | markdown 格式的消息。                                    |
| btnOrientation   | String   | "1"    | 否       | 0：按钮竖直排列 <br /> 1：按钮横向排列                   |
| btns             | Array    | []     | 否       | 按钮。<br />独立跳转 ActionCard 类型时必填               |
| btns[].title     | String   | --     | 否       | 按钮标题。<br />独立跳转 ActionCard 类型时必填           |
| btns[].actionURL | String   | --     | 否       | 点击按钮触发的 URL。<br />独立跳转 ActionCard 类型时必填 |

**feedCard**

| 参数               | 参数类型 | 默认值 | 是否必填 | 必须                     |
| ------------------ | -------- | ------ | -------- | ------------------------ |
| links              | Array    | []     | 是       | --                       |
| links[].title      | String   | --     | 是       | 单条信息文本。           |
| links[].messageURL | String   | --     | 是       | 点击单条信息到跳转链接。 |
| links[].picURL     | String   | --     | 是       | 单条信息后面图片的 URL。 |

## 常见问题

当出现以下错误时，表示消息校验未通过，请查看机器人的安全设置。

```text
// 消息内容中不包含任何关键词
{
  "errcode":310000,
  "errmsg":"keywords not in content"
}

// timestamp 无效
{
  "errcode":310000,
  "errmsg":"invalid timestamp"
}

// 签名不匹配
{
  "errcode":310000,
  "errmsg":"sign not match"
}

// IP地址不在白名单
{
  "errcode":310000,
  "errmsg":"ip X.X.X.X not in whitelist"
}
```
