module.exports = {
  base: '/webpress', 
  title: '前端技术文档',
  description: ' ',
  plugins: ['fulltext-search', '@vuepress/back-to-top'],
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    //   头部导航
    nav: [
      { text: '基础', link: '/base/html', activeMatch: '^/$|^/base/' },
      { text: 'HTTP', link: '/http/versions', activeMatch: '^/http/' },
      { text: 'Vue', link: '/vue/communication', activeMatch: '^/vue/' },
      {
        text: '其他',
        items: [
          {
            text: 'vue admin开发模板',
            link: 'https://github.com/LwcReber/vue-admin'
          },
          {
            text: 'sender工具',
            link: 'https://github.com/LwcReber/sender'
          },
          {
            text: '移动端调试技巧',
            link: 'https://lwcreber.github.io/2021/09/22/%E7%A7%BB%E5%8A%A8%E7%AB%AFH5%E9%A1%B5%E9%9D%A2%E8%B0%83%E8%AF%95%E6%8A%80%E5%B7%A7'
          },
          {
            text: 'Github',
            link: 'https://github.com/LwcReber'
          }
        ]
      }
    ],
    //   侧边导航
    sidebar: {
      '/base/': [
        {
          text: 'HTML',
          link: '/base/html'
        },
        {
          text: 'CSS',
          link: '/base/css'
        },
        {
          text: 'JS',
          children: [
            {text: '数据类型', link: '/base/js/data'},
            {text: '面向对象', link: '/base/js/object'},
            {text: 'this', link: '/base/js/this'},
            {text: 'new', link: '/base/js/new'}
          ]
        }
      ],
      '/http': [
        {
          text: '版本',
          link: '/http/versions'
        },
        {
          text: '缓存',
          link: '/http/cache'
        },
        {text: 'link', link: '/http/link'},
      ],
      '/vue': [
        {
          text: '组件通讯',
          link: '/vue/communication'
        },
        {
          text: '技巧',
          link: '/vue/skill'
        },
        {
          text: '源码',
          link: '/vue/source'
        },
      ]
    }
  }
}