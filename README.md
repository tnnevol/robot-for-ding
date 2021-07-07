# robot-for-ding

## 说明
本项目是对接钉钉自定义小机器人，消息格式请[查阅文档](https://developers.dingtalk.com/document/app/custom-robot-access/title-72m-8ag-pqw)
## 起步
```shell
npm i robot-for-ding -S
```

## 使用
```javascript
import sendDingRobot from "robot-for-ding"
await sendDingRobot(Webhook, secret, msgFormat)
```
