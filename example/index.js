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
