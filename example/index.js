const RobotDing = require('../lib')

const ding = new RobotDing({
    webhook: 'https://oapi.dingtalk.com/robot/send?access_token=b4b57dc291ded97c6ebcffefab41b6fedb3db1f3f20aa0fec574ca3aa6024eea',
    secret: 'SECfe688ccb963c3292a96052fdd95930eed16a429ef1c6b512273cb7e8199e15aa'
})

// 文本
ding.sendText({
    content: '封装成功',
    isAtAll: true
})

// 链接
ding.sendLink({
    title: '武松打虎',
    text: '武松打虎，出自施耐庵所著《水浒传》中的第二十三回《横海郡柴进留宾 景阳冈武松打虎》，主要讲述梁山好汉武松回家探望哥哥，途中路过景阳冈。在冈下酒店喝了十八碗酒，踉跄着向冈上走去。行不多时，只见一棵树上写着：“近因景阳冈猛虎伤人，但有过往客商，应结伙成队过冈，请勿自误。”武松认为，这是酒家写来吓人的，为的是让过客住他的店，没有理它，继续往前走。太阳快落山时，武松来到一破庙前，见庙门贴了一张官府告示，武松读后，方知山上真有虎，待要回去住店，怕店家笑话，又继续向前走。由于酒力发作，便找了一块大青石，仰身躺下，刚要入睡，忽听一阵狂风呼啸，一只眼睛上翘，额头白色的老虎朝武松扑了过来，武松急忙一闪身，躲在老虎背后。老虎一纵身，武松又躲了过去。老虎急了，大吼一声，用尾巴向武松打来，武松又急忙跳开，并趁猛虎转身的那一霎间，举起哨棒，运足力气，朝虎头猛打下去。只听"咔嚓"一声，哨棒打在树枝上。老虎兽性大发，又向武松扑过来，武松扔掉半截棒，顺势骑在虎背上，左手揪住老虎头上的皮，右手猛击虎头，没多久就把老虎打得眼、嘴、鼻、耳到处流血，趴在地上不能动弹。武松怕老虎装死，举起半截哨棒又打了一阵，见那老虎确实没气了，才住手。从此武松威名大震。',
    messageUrl: "https://baike.baidu.com/item/%E6%AD%A6%E6%9D%BE%E6%89%93%E8%99%8E/10966239?fr=aladdin",
    picUrl: "https://bkimg.cdn.bcebos.com/pic/b7003af33a87e9507d51d32011385343fbf2b433?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg"
})

// markdown
ding.sendMarkdown({
    title: '武松打虎',
    text: `### 武松打虎 \n 武松打虎，出自[施耐庵](https://baike.baidu.com/item/%E6%96%BD%E8%80%90%E5%BA%B5)所著[《水浒传》](https://baike.baidu.com/item/%E6%B0%B4%E6%B5%92%E4%BC%A0)中的第二十三回《横海郡柴进留宾 景阳冈武松打虎》，主要讲述梁山好汉武松回家探望哥哥，途中路过景阳冈。在冈下酒店喝了十八碗酒，踉跄着向冈上走去。行不多时，只见一棵树上写着：“近因景阳冈猛虎伤人，但有过往客商，应结伙成队过冈，请勿自误。”武松认为，这是酒家写来吓人的，为的是让过客住他的店，没有理它，继续往前走。太阳快落山时，武松来到一破庙前，见庙门贴了一张官府告示，武松读后，方知山上真有虎，待要回去住店，怕店家笑话，又继续向前走。由于酒力发作，便找了一块大青石，仰身躺下，刚要入睡，忽听一阵狂风呼啸，一只眼睛上翘，额头白色的老虎朝武松扑了过来，武松急忙一闪身，躲在老虎背后。老虎一纵身，武松又躲了过去。老虎急了，大吼一声，用尾巴向武松打来，武松又急忙跳开，并趁猛虎转身的那一霎间，举起哨棒，运足力气，朝虎头猛打下去。只听"咔嚓"一声，哨棒打在树枝上。老虎兽性大发，又向武松扑过来，武松扔掉半截棒，顺势骑在虎背上，左手揪住老虎头上的皮，右手猛击虎头，没多久就把老虎打得眼、嘴、鼻、耳到处流血，趴在地上不能动弹。武松怕老虎装死，举起半截哨棒又打了一阵，见那老虎确实没气了，才住手。从此武松威名大震。![武松打虎](https://bkimg.cdn.bcebos.com/pic/b7003af33a87e9507d51d32011385343fbf2b433?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg)`,
    isAtAll: true
})
// ActionCard
ding.sendActionCard({
    title: "武松打虎",
    text: `### 武松打虎 \n 武松打虎，出自[施耐庵](https://baike.baidu.com/item/%E6%96%BD%E8%80%90%E5%BA%B5)所著[《水浒传》](https://baike.baidu.com/item/%E6%B0%B4%E6%B5%92%E4%BC%A0)中的第二十三回《横海郡柴进留宾 景阳冈武松打虎》，主要讲述梁山好汉武松回家探望哥哥，途中路过景阳冈。在冈下酒店喝了十八碗酒，踉跄着向冈上走去。行不多时，只见一棵树上写着：“近因景阳冈猛虎伤人，但有过往客商，应结伙成队过冈，请勿自误。”武松认为，这是酒家写来吓人的，为的是让过客住他的店，没有理它，继续往前走。太阳快落山时，武松来到一破庙前，见庙门贴了一张官府告示，武松读后，方知山上真有虎，待要回去住店，怕店家笑话，又继续向前走。由于酒力发作，便找了一块大青石，仰身躺下，刚要入睡，忽听一阵狂风呼啸，一只眼睛上翘，额头白色的老虎朝武松扑了过来，武松急忙一闪身，躲在老虎背后。老虎一纵身，武松又躲了过去。老虎急了，大吼一声，用尾巴向武松打来，武松又急忙跳开，并趁猛虎转身的那一霎间，举起哨棒，运足力气，朝虎头猛打下去。只听"咔嚓"一声，哨棒打在树枝上。老虎兽性大发，又向武松扑过来，武松扔掉半截棒，顺势骑在虎背上，左手揪住老虎头上的皮，右手猛击虎头，没多久就把老虎打得眼、嘴、鼻、耳到处流血，趴在地上不能动弹。武松怕老虎装死，举起半截哨棒又打了一阵，见那老虎确实没气了，才住手。从此武松威名大震。![武松打虎](https://bkimg.cdn.bcebos.com/pic/b7003af33a87e9507d51d32011385343fbf2b433?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg)`,
    btnOrientation: '0',
    singleTitle: '阅读全文',
    singleURL: 'https://baike.baidu.com/item/%E6%AD%A6%E6%9D%BE%E6%89%93%E8%99%8E/10966239?fr=aladdin'
})

// FeedCard
ding.sendFeedCard({
    links: [
        {
            "title": "武松打虎",
            "messageURL": "https://baike.baidu.com/item/%E6%AD%A6%E6%9D%BE%E6%89%93%E8%99%8E/10966239?fr=aladdin",
            "picURL": "https://bkimg.cdn.bcebos.com/pic/b7003af33a87e9507d51d32011385343fbf2b433?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg"
        }
    ]
})