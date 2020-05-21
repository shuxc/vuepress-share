# 本地快速开发
***
## 前期环境配置
+ [Node.js][1]
+ [Yarn][2]
::: warning 
请确保你的 Node.js 版本 >= 8
:::

## Hello World
+ 工程`git`至本地,工程名`vuepress-share`
+ 在`vuepress-share`目录下 执行命令`yarn add -D vuepress`
+ 本地运行命令 `yarn docs:dev`
+ 生成静态页面命令 `yarn docs:build`
::: tip 
本地运行时，修改代码保存后可在页面实时查看页面效果，无需重新启动
:::

## 工程配置介绍
```shell
├── .vuepress
│   ├── config.js
│   └── public
├── README.md
├── package.json
├── spring
│   └── readme.md
└── zookeeper
    └── readme.md
```
+ `vuepress-share/.vuepress` 用于存放全局的配置、组件、静态资源等
+ `vuepress-share/.vuepress/config.js` 配置文件的入口文件，也可以是`YML`或`toml`
+ `vuepress-share/.vuepress/public` 静态资源目录
+ `vuepress-share/README.md` 配置首页信息
+ `vuepress-share/package.json` 配置工程名称，快捷打包命令，license等信息
+ `vuepress-share/spring` 
+ `vuepress-share/spring/readme.md` 
+ `vuepress-share/spring/***.md` 
+ `vuepress-share/zookeeper` 
+ `vuepress-share/zookeeper/readme.md`
+  `vuepress-share/zookeeper/***.md` 
::: warning 
1. `config.js`负责页面布局，故添加文章时会经常使用它
2. 文章目录下需要创建`readme.md` 文件
:::  

[1]: https://nodejs.org/zh-cn/ "Node.js"
[2]: https://yarnpkg.com "Yarn"



