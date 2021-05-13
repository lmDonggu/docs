module.exports = {
  "title": "小冬菇",
  // 本地注释，编译取消注释
  "base": "/docs/",
  "description": "MyBlog",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "locales": {
    // 多语言配置处1
    "/": {
      lang: "zh-CN"
    }
  },
  "theme": "reco",
  "themeConfig": {
    // 代码主题
    // * support for
    // * 'default'
    // * 'funky'
    // * 'okaidia'
    // * 'solarizedlight'
    // * 'tomorrow'
    "codeTheme": "tomorrow",
    // 多语言配置处2
    "locales": {
      "/": {
        recoLocales: {
          homeBlog: {
            article: '美文', // 默认 文章
            tag: '标识', // 默认 标签
            category: '类别', // 默认 分类
            friendLink: '友链' // 默认 友情链接
          },
          pagetion: {
            prev: '上一页',
            next: '下一页',
            go: '前往',
            jump: '跳转至'
          }
        }
      }
    },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "说明",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "联系方式",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    // 手动侧边栏 启用自动侧边栏需将其注释掉避免冲突
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ],
    // },
    //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    "subSidebar": 'auto',
    "type": "blog",
    // 博客配置
    "blogConfig": {
      //  "location": 2 在导航栏菜单中所占的位置，默认2
      "category": {
        "location": 2, 
        "text": "分类"
      },
      //  "location": 3 在导航栏菜单中所占的位置，默认3
      "tag": {
        "location": 3, 
        "text": "标签"
      },
      // 信息栏展示社交信息
      socialLinks: [     
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    },
    // 添加友链
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    // 导航栏左侧可以显示logo
    "logo": "/greenLogo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    // 设置全局作者姓名和头像
    "author": "lmDonggu",
    "authorAvatar": "/light.png",
    // 备案
    "record": "ICP 备案文案",
    "recordLink": "ICP 备案指向链接",
    "cyberSecurityRecord": '公安部备案文案',
    "cyberSecurityLink": '公安部备案指向链接',
     // 项目开始时间，只填写年份
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    // 在您的 vuepress 中添加动态标题！
    [
      'dynamic-title',
      {
        showIcon: '/favicon.ico',
        showText: '(/≧▽≦/)咦！又好了！',
        hideIcon: '/failure.ico',
        hideText: '(●—●)喔哟，崩溃啦！',
        recoverTime: 2000,
      }
    ],
    // Vuepress 看板娘插件
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["wanko"],
        clean: false,
        messages: {
          welcome: '我是lmDonggu欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        }
      }
    ],
    // vuepress-plugin-go-top 悬挂喵作为返回顶部按钮
    [
      "go-top"
    ],
    // 自动侧边栏插件 先不用
    ["vuepress-plugin-auto-sidebar",
      {
        // sort(排序) `asc`、`desc`、`created_time_asc`、`created_time_desc`
        sort: {
          mode: "asc",
          readmeFirst: true,
        },
        title: {
          mode: "titlecase",
          map: {}
        },
        // sidebarDepth（标题深度）
        sidebarDepth: 1,
        // collapse（折叠）
        collapse: {
          open: false,
          collapseList: [],
          uncollapseList: []
        },
        // ignore（忽略）
        ignore: []
      }
    ],
    // 本选项开启了一个用于刷新内容的弹窗。这个弹窗将会在站点有内容更新时显示出来，并提供了一个 refresh 按钮，允许用户立即刷新内容。
    ['@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
      }
    ],
    // 复制弹窗插件
    ["vuepress-plugin-nuggets-style-copy", 
      {
        copyText: "复制",
        tip: {
            content: "复制代码成功!"
        }
      }
    ],
    // 在您的 Vuepress 中添加美丽的丝带！
    ["ribbon",
      {
         size: 90, // width of the ribbon, default: 90
         opacity: 0.2, // opacity of the ribbon, default: 0.3
         zIndex: -1, // z-index property of the background, default: -1
      },
    ],
    // 在您的 vuepress 中添加可爱的光标效果！
    ['cursor-effects',
      {
        // size of the particle, default: 2
        size: 2, 
        // shape of the particle, default: 'star'
        // shape: ['star' | 'circle'],
        shape: ['circle'],
        // z-index property of the canvas, default: 999999999
        zIndex: 999999999,
      },
    ]
  ]
}