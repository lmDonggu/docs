---
title: 文件配置模板
description: "模板文件"
date: 2021-05-13
categories:
 - 前端基础
tags:
 - html
sidebar: 'auto'
subSidebar: true
# autoPrev: other-filename
# autoNext: other-filename
sidebarDepth: 2
# autoIgnore: false
# autoGroup-2: 数组方法
# autoGroup+10: group10
---



# YAML front matter 页面配置



### title

+ description: 文章标题，放弃通过一级目录定义标题的方式，改在 `Front Matter` 中定义。

```yaml
  title: 文件配置模板
```

### description

+ 当前页面的描述。

```yaml
description: "模板文件"
```

###  lang

+ 当前页面的语言

```yaml
lang = "en-US"
```

### date

+ description: 文章创建日期，格式 `2019-08-08` 或 `2019-08-08 08:08:08`。
```yaml
date: 2021-05-13
```

### sidebar

+ description: 是否开启侧边栏。

```yaml
sidebar: 'auto'
```

### subSidebar

+ YAML front matter 来禁用指定页面的侧边栏

```yaml
subSidebar: false
```

### categories

+ description: 所属分类。
```yaml
categories:
 - 烹饪
 - 爱好
```

### tags

+ description: 所属标签。

```yaml
tags:
 - 烤
 - 鸭子
```

### author

+ 为单篇文章设置作者姓名

```yaml
---
title: 你还没真的努力过，就轻易输给了懒惰
date: 2015-04-23
categories: article
author: 渡渡
---
```



------



# [Vuepress Plugin Auto Sidebar](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/)插件文件的配置



### 上个文件链接

```yaml
autoPrev: other-filename 
```

### 下个文件链接

```yaml
autoNext: other-filename
```

### 提取二级标题

```yaml
sidebarDepth: 2
```

### 不显示侧边栏

```yaml
autoIgnore: false 
```

### 分组方法其中 `-` 和 `+` 二者选其一，`-` 代表在默认分组的下方，`+` 代表在默认分组的上方，符号后面的数字会进一步决定分组的排序。

```yaml
autoGroup-2: 数组方法 
// 或
autoGroup+10: group10
```



