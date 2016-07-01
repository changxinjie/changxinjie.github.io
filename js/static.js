var menu = {
	"introduce": {
		"name": "首页简介",
		"click": handler.openLink,
		"url": "html/introduce.html"
	},
	"cv": {
		"name": "查看简历",
		"click": handler.openLink,
		"url": "html/table1.html"
	},
	"investment": {
		"name": "入股投资",
		"click": handler.openLink,
		"url": "html/investment.html"
	},
	"mime": {
		"name": "创业项目",
		"click": handler.openLink,
		"url": "html/mime.html"
	},
	"test": {
		"name": "设备检测",
		"click": handler.openLink,
		"url": "html/browser.html"
	},
	"group": {
		"name": "自研项目",
		"btn1": {
			"name": "语音/短信营业厅",
			"click": handler.openLink,
			"url": "html/av-platform.html"
		},
		"btn2": {
			"name": "房租租赁管理平台",
			"click": handler.openLink,
			"url": "html/rent.html"
		},
		"btn3": {
			"name": "智能语音管家",
			"click": handler.openLink,
			"url": "html/smart-home.html"
		}
	},
	"group2": {
		"name": "承接项目",
		"btn1": {
			"name": "大中型企业网站",
			"click": handler.openLink,
			"url": "html/offical-site.html"
		},
		"btn2": {
			"name": "移动App",
			"click": handler.openLink,
			"url": "html/mobile-app.html"
		},
		"btn3": {
			"name": "电商平台",
			"click": handler.openLink,
			"url": "html/e-shop.html"
		},
		"btn4": {
			"name": "医疗平台",
			"click": handler.openLink,
			"url": "html/hospital.html"
		}
	}
};
var links = {
	"git": {
		"url": "http://github.com/changxinjie/changxinjie.github.io/"
	}
};
var tips = {
	"top": {
		"topic": "欢迎访问我的个人网站",
		"topic2": "welcome to my persional website",
	},
	"footer": {
		"description": "本站点由个人兴趣开发,源代码托管在github上. "
	}
};
var investement = [{
	name: "我的理念",
	content: ["始终基于中国先进生产力的发展要求.", "始终朝着中国先进文化的前进方向.", "始终为了中国最广大人民的根本利益"]
}, {
	name: "我的产品",
	content: ["悠悠乐购-电商平台", "悠悠乐医-医疗平台", "悠悠乐聊-社区平台", "悠悠乐学-知识共享平台", "悠悠乐善-慈善互助"]
}, {
	name: "产品运营",
	content: []
}, {
	name: "投资方式",
	content: ["员工持股", "风投赞助"]
}, {
	name: "盈利分成",
	content: ["待定"]
}];
var skills = [{
	type: "后端/服务端",
	content: ["熟练使用Java编程语言,Nio,Socket,反射机制和常用设计模式",
		"熟悉Java开源框架Struts2,Spring4套件,Hibernate,MyBaties,Netty等",
		"熟悉Tomcat,Jetty,WebLogic,Ngnix,Apache等Web服务器的安装配置和使用",
		"熟悉常用企业级组件JMS,Email,报表,工作流等的配置和使用",
		"熟悉常用web service,Restful api,处理跨域访问,安全控制等",
		"熟悉Java串口编程,通过TTL,WIFI等与硬件产品直接通讯",
		"熟悉Nodejs,可编写自动化测试脚本,网络爬虫",
		"熟悉常用项目构建工具Ant,Maven,Gradle",
		"了解常用企业级安全实现,如Oauth2,Cas,Https,证书及常用加密算法"
	]
}, {
	type: "数据库",
	content: ["熟练使用MySQL,Oracle,SQL-Server等关系型数据库,常用内置函数,时区处理等",
		"熟练编写存储过程Producure,触发器Trigger,函数Function,视图View等",
		"简单了解数据库性能优化,主从配置", "了解Mongodb,Redis等非关系型数据库"
	]
}, {
	type: "Linux,大数据,虚拟化",
	content: ["熟练使用基于Ubuntu(Debian)的linux操作系统",
		"熟悉Linux常用软件源码的编译,安装配置",
		"熟悉Linux环境下服务器运行环境搭建,网络配置,负载均衡,反向代理等",
		"简单了解Win和Linux下Docker的配置和使用"
	]
}, {
	type: "前端技术",
	content: ["熟练使用javascript编程语言,了解EC6新特性",
		"熟悉Html5,Css3,Json等标准以及TCP/IP等通讯协议",
		"熟悉基于Jquery的基本框架,如JqueryUI,easyUI及其常用插件",
		"熟练使用angular1,了解angular2,react等组件式编程",
		"熟悉NPM,Bower,Grunt等工具", "熟悉PC和移动端网站响应式编程,熟悉Bootstrap",
		"熟悉各内核浏览器的兼容性处理", "了解Extjs,Flex等富客户端技术", "了解android,ios和C#的winform编程"
	]
}];
var self = ["具有拥有较好的英文文档阅读和书写能力, 有利于较快的找到问题解决方案.",
	"自学能力较好, 知识面丰富.",
	"代码编写规范,逻辑清晰,上手快",
	"能承受较强的工作压力."
];
var avItems = [{
	k: "项目背景",
	v: ["尽管移动网络和WIFI的大量普及,微信,支付宝等服务号普及,极大的方便了客户,但仍有不少无法联网的情况。(如套餐流量超出,异地漫游,中老年用户手机无上网功能)",
		"目前网络几乎所有的App发送的验证码,优惠消息都来自1065XXX等杂乱号码,不容记忆,甚至为随机号码,这些号码极易被客户手机各种通讯软件拦截.无法引起用户重视。"
	]
}, {
	k: "特性",
	v: ["提供类似10086,10010和955XX等电信,银行语音营业厅,短信营业厅的完整功能,支持语音导航,自助查询办理。",
		"号码固定. 服务号即为手机号,方便记忆,同时也能提高用户忠实度。",
		"自助服务+人工客服. 自助服务可极大减少人工客服的工作量,也能减少客户等待时间.提高效率。",
		"内容完全可定制. 所有信息内容均可由文字转为语音提示,支持多国语言.也可真人语音录制。",
		"运营成本低. 适用于广大中小企业和商铺。",
		"更容易的与CMS系统，OA系统集成.",
		"随时监控. 一旦有任何异常情况,系统会通过电话,短信,邮件等方式通知。",
		"实时统计. 可随时掌握客户最关心的信息。"
	]
}, {
	k: "使用流程",
	v: ["语音: 客户拨打服务号(即手机号),系统提示欢迎信息,和数字导航,待用户输入指定数字,可查询相应的信息,办理业务,也可一键转接人工客服.",
		"短信: 客户发送指定格式的短信内容到服务号,即可随时查询信息,办理业务."
	]
}, {
	k: "盈利方式",
	v: ["待定"]
}];
var rentItems = [{
	k: "项目背景",
	v: ["租赁房屋过多,地点不一, 各个租户交租时间不一,难于记忆.",
		"房租家具家电过多,过杂,疲于管理.", "记账过多,统计困难.", "收租需携带大量现金,极不安全.", "水电煤,天然气使用情况难于掌控."
	]
}, {
	k: "特性",
	v: ["房屋交租,超期提醒.",
		"号码固定. 服务号即为手机号,方便记忆,同时也能提高用户忠实度。",
		"租金,水电煤,天然气等自动抄表，各项费用统一管理,清晰明了.",
		"房屋家具,家电统一标识,统一管理,方便调用",
		"内置留言功能,方便了解租客情况"
	]
}, {
	k: "使用流程",
	v: ["网站监控含仪表盘",
		"手机app含仪表盘"
	]
}, {
	k: "盈利方式",
	v: ["待定"]
}];
var homeItems = [{
	k: "项目背景",
	v: ["市面上几乎所有的智能产品(以小米智能硬件平台为例),使用方式单一,都需要通过手机app,或红外遥控控制,操作不便,限制过多.",
		"支持的产品种类少，大多鸡肋，且大多只支持自家产品",
		"使用人群覆盖面少.几乎所有的智能产品，只有好折腾的年轻人使用,中老年人,残障人士无法使用.", "重产品,轻服务。以产品销量为主",
		"营收模式单一，不可持续，售后服务严重欠缺"
	]
}, {
	k: "特性",
	v: ["在原有各项功能前提下,新增语音控制方式",
		"通过声纹识别来提高安全性.方便快捷.", "可通过各种设备,随时报告家庭环境."
	]
}, {
	k: "使用流程",
	v: ["房屋装修时，墙体安置录放机模块，接收语音指令，播放指定声音",
		"手机app作为录放机，可远程发送语音指令"
	]
}, {
	k: "盈利方式",
	v: ["一次安装，永久使用", "按年收取服务费用，免费升级"]
}];