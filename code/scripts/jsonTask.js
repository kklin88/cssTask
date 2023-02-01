const list = [
    {
        "title": "数据结构与算法之美",
        "subTitle": "为工程师量身打造的数据结构与算法私教课",
        "count": 262206,
        "priceMarket": 19900,
        "price": 13900,
        "backAmount": 2000,
        "pic": "https://static001.geekbang.org/resource/image/11/5b/11a3a5aa2f5879ec88b284044bacd55b.jpg"
    },
    {
        "title": "MySQL实战45讲",
        "subTitle": "从原理到实战，丁奇带你搞懂MySQL",
        "count": 196901,
        "priceMarket": 19900,
        "price": 13900,
        "backAmount": 2000,
        "pic": "https://static001.geekbang.org/resource/image/59/db/598593a4da4fd7ea898711cc623292db.jpg"
    },
    {
        "title": "左耳听风",
        "subTitle": "洞悉技术的本质，享受科技的乐趣",
        "count": 159401,
        "priceMarket": 39900,
        "price": 27900,
        "backAmount": 2900,
        "pic": "https://static001.geekbang.org/resource/image/21/da/216b472de3f9027371576e107601c2da.jpg"
    },
    {
        "title": "从0开始学架构",
        "subTitle": "前阿里P9技术专家的实战架构心法",
        "count": 133054,
        "priceMarket": 19900,
        "price": 13900,
        "backAmount": 2000,
        "pic": "https://static001.geekbang.org/resource/image/a9/ed/a96b163e2d9bf19cdfc0f5d0d69e13ed.jpg"
    },
    {
        "title": "Java核心技术面试精讲",
        "subTitle": "前Oracle首席工程师带你修炼Java内功",
        "count": 120074,
        "priceMarket": 12900,
        "price": 9000,
        "backAmount": 1800,
        "pic": "https://static001.geekbang.org/resource/image/6f/51/6f1829aeae4e740e949340c663834551.jpg"
    },
    {
        "title": "趣谈网络协议",
        "subTitle": "像小说一样的网络协议入门课",
        "count": 115355,
        "priceMarket": 19900,
        "price": 13900,
        "backAmount": 2000,
        "pic": "https://static001.geekbang.org/resource/image/99/57/99f9772bb4ff0d815bb75f6812d24f57.jpg"
    },
    {
        "title": "设计模式之美",
        "subTitle": "前Google工程师手把手教你写高质量代码",
        "count": 112949,
        "priceMarket": 29900,
        "price": 19900,
        "backAmount": 2900,
        "pic": "https://static001.geekbang.org/resource/image/37/47/37db2297526f625866b66cee9aea0547.jpg"
    },
    {
        "title": "深入剖析Kubernetes",
        "subTitle": "Kubernetes原来可以如此简单",
        "count": 98127,
        "priceMarket": 19900,
        "price": 13900,
        "backAmount": 2000,
        "pic": "https://static001.geekbang.org/resource/image/3d/a3/3d7751a2844e063b00125c017bf360a3.jpg"
    },
    {
        "title": "重学前端",
        "subTitle": "每天10分钟，重构你的前端知识体系",
        "count": 91887,
        "priceMarket": 12900,
        "price": 9000,
        "backAmount": 1800,
        "pic": "https://static001.geekbang.org/resource/image/80/e2/80293b21a2cc9c02ccde5cec6838efe2.jpg"
    },
    {
        "title": "玩转Spring全家桶",
        "subTitle": "一站通关Spring、Spring Boot与Spring Cloud",
        "count": 84774,
        "priceMarket": 19900,
        "price": 13900,
        "backAmount": 2000,
        "pic": "https://static001.geekbang.org/resource/image/b1/bd/b16a3f21e6e615b3403deef8decc7cbd.jpg"
    }
]


let creatObj = function(){

}

let consoleinfo = function(list){
    for(let i in list){
        console.log(list[i].title);
        console.log(list[i].backAmount);
        creatEle1(list[i].title,list[i].subTitle,list[i].count,list[i].priceMarket,list[i].price,list[i].backAmount,list[i].pic)

    }
}

consoleinfo(list);

function creatEle() {
    // 创建标签
    var para = document.createElement("p");
    // 添加 id 名 panel1
    para.id = "id1"
    // panel1.setAttribute("id","panel1");
    // 添加类名
    para.classList.add("class1");
    para.classList.add("class2");
    // 创建div的css样式
    para.style.cssText="width:200px;height:200px;background:#CC3399;text-align:center;line-height:220px"
    // 创建文本
    var node = document.createTextNode("添加元素");
    // 标签追加文本
    para.appendChild(node);
    // 获取元素
    var element = document.getElementById("div1");
    // element追加para
    element.appendChild(para);
}

function creatEle1(title,subTitle,count,priceMarket,price,backAmount,pic) {
    // 创建标签
    let box = document.createElement("box");
    box.classList.add("card");
    let divLeft = document.createElement("div");
    divLeft.classList.add("left");
    let img = document.createElement("img");
    img.setAttribute("src",pic)
    console.log(pic)
    divLeft.appendChild(img);
    box.appendChild(divLeft);
    let divMiddle = document.createElement("div");
    divMiddle.classList.add("middle");
    box.appendChild(divMiddle);
    let divRight = document.createElement("div");
    divRight.classList.add('right');
    let h1 = document.createElement("h1");
    h1.innerText = title;
    h1.classList.add("title");
    divRight.appendChild(h1);
    let h2 = document.createElement('h2');
    h2.innerText = subTitle;
    h2.classList.add('subtitle');
    divRight.appendChild(h2);
    let p = document.createElement('p');
    p.classList.add("people_num");
    p.innerText = count + "人已经学习"
    divRight.appendChild(p);
    let foot = document.createElement("div");
    foot.classList.add("foot");
    let divPrice = document.createElement("div");
    divPrice.classList.add("price");
    let price_box = document.createElement("div");
    price_box.classList.add("price_box");
    divPrice.appendChild(price_box);
    let get_money = document.createElement("div");
    get_money.classList.add("get_money");
    get_money.innerText = "成功购买后可得红包¥ " + backAmount/100;
    
    divPrice.appendChild(get_money);
    let price_now = document.createElement("p");
    price_now.classList.add("price_now");
    price_now.innerText ="特惠：¥ "+ priceMarket/100;
    let price_ori = document.createElement("s");
    price_ori.classList.add("price_ori");
    price_ori.innerText = "订阅价：¥ "+price/100;
    price_box.appendChild(price_now)
    price_box.appendChild(price_ori);
    foot.appendChild(divPrice);
    let foot_middle = document.createElement("div");
    foot_middle.classList.add("foot_middle");
    foot.appendChild(foot_middle);
    let promote = document.createElement("div");
    promote.classList.add("promote");
    let buttom = document.createElement("p");
    buttom.classList.add("buttom");
    promote.appendChild(buttom);
    foot.appendChild(promote);
    divRight.appendChild(foot);
    box.appendChild(divRight);
    

    // 创建文本
    var node = document.createTextNode("添加元素");
    // 标签追加文本
    // box.appendChild(node);
    // 获取元素
    var element = document.getElementById("div1");
    // element追加para
    element.appendChild(box);
}
// creatEle1();
