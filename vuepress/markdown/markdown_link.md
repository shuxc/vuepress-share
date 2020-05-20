# markdown 链接
## 外链接
***
代码块：

    本文档编写目的皆在快速开发部署VuePress，常用配置和使用心得可在此主题下维护。
    详细配置请参考 
    [VuePress官网][1]
    [Markdown][2]
    [1]: https://www.vuepress.cn/ "VuePress"
    [2]: https://www.runoob.com/markdown/md-tutorial.html "Markdown"
效果：
***
本文档编写目的皆在快速开发部署VuePress，常用配置和使用心得可在此主题下维护。
详细配置请参考 
[VuePress官网][1]
[Markdown][2]
***
[1]: https://www.vuepress.cn/ "VuePress"
[2]: https://www.runoob.com/markdown/md-tutorial.html "Markdown"

## 内链接
代码块
***
    [关于我们](/) <!-- 跳转到根部的 README.md -->
    [vuepress](/vuepress/) <!-- 跳转到 vuepress 文件夹的 index.html -->
    [foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
    [bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
    [bar - four](../bar/four.html) <!-- 也可以用 .html -->
效果：
***
[关于我们](/)<br/>
[VuePress](/vuepress/)<br/>
[Spring](/spring/second.md)