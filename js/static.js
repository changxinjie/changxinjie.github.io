var menu = {
	"introduce": {
		"name": "简介",
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
	"test": {
		"name": "浏览设备检测",
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
			"name": "房租租赁管理系统",
			"click": handler.openLink,
			"url": "html/resent.html"
		},
		"btn3": {
			"name": "智能语音管家",
			"click": handler.openLink,
			"url": "html/smart-home.html"
		}
	},
	"group2": {
		"name": "合伙吧",
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
	content: "理念"
}, {
	name: "我的创意",
	content: "理念"
}, {
	name: "产品运营",
	content: "理念"
}, {
	name: "投资方式",
	content: "理念"
}, {
	name: "盈利分成",
	content: "fencheng"
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
"能承受较强的工作压力."];
