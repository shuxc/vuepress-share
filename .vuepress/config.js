module.exports = {
  title: '学习笔记',
  description: '学习笔记分享，1+1 > 2',
  base: "/dist/",
  port: 8088,
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './assets/'
      }
    }
  },
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: 'VuePress', link: '/vuepress/'},
      {text: 'spring', link: '/spring/'},
      {
        text: 'TODO',
        items: [
          {text: 'Docker', link: 'http://www.runoob.com/docker/docker-command-manual.html'},
          {text: 'Spring', link: 'https://www.spring.io'},
          {text: 'Flink', link: 'https://flink.apache.org/zh/flink-architecture.html'}
        ]
      },
      {text: 'Github', link: 'https://github.com/shuxc/vuepress-share'},
      {text: '时间线', link: '/timeline/'},
      {text: '关于', link: '/about/'},
    ],
    sidebarDepth: 3,
    sidebar: {
      '/vuepress/': [
        'local.md',
        'deploy.md',
        {
          title: 'Markdown语法',
          collapsable: true,
          children: [
            'markdown/markdown_title.md',
            'markdown/markdown_link.md',
            'markdown/markdown_pic.md'
          ]

        }
      ],
      '/spring/': [
          {
            title: 'spring title',
            collapsable: false,
            children: [
              'first.md',
              'second.md'
             ]
            },
        'first.md',
        'second.md'
      ],
      '/timeline/': [
        'first.md'
      ]
    }
  }
};
