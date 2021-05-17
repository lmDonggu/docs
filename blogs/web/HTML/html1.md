---
title: WEB 标准
description: "能够写出基本的html页面（里面包含图片、链接、文字等网页元素标签）"
date: 2021-05-01
categories:
 - 前端基础
tags:
 - html
# sidebar: 'auto'
# subSidebar: false
# autoPrev: other-filename
# autoNext: other-filename
sidebarDepth: 2
# autoIgnore: false
# autoGroup-2: 数组方法
# autoGroup+10: group10
---

## 1.认识网页
网页主要由文字、图像和超链接等元素构成。当然，除了这些元素，网页中还可以包含音频、视频以及Flash等。
::: tip
网页有图片、链接、文字等元素组成，我们后面的任务就是要把这部分网页元素用代码写出来。
:::
## 2. 浏览器（显示代码）
浏览器是网页显示、运行的平台，常用的浏览器有IE、火狐（Firefox）、谷歌（Chrome）、Safari和Opera等。我们平时称为五大浏览器。
::: tip
Rendering Engine，中文翻译很多，排版引擎、解释引擎、渲染引擎，现在流行称为浏览器内核.
:::

| 浏览器  |      内核      | 备注                                                         |
| :------ | :------------: | :----------------------------------------------------------- |
| IE      |    Trident     | IE、猎豹安全、360极速浏览器、百度浏览器                      |
| firefox |     Gecko      | 可惜这几年已经没落了，打开速度慢、升级频繁、猪一样的队友flash、神一样的对手chrome。 |
| Safari  |     webkit     | 现在很多人错误地把 webkit 叫做 chrome内核（即使 chrome内核已经是 blink 了）。苹果感觉像被别人抢了媳妇，都哭晕再厕所里面了。 |
| chrome  | Chromium/Blink | 在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。Blink 其实是 WebKit 的分支。大部分国产浏览器最新版都采用Blink内核。二次开发 |
| Opera   |     blink      | 现在跟随chrome用blink内核。                                  |
## 3. Web标准（重点）
+ Web标准不是某一个标准，而是由W3C组织和其他标准化组织制定的一系列标准的集合。
+ W3C 万维网联盟是国际最著名的标准化组织。1994年成立后，至今已发布近百项相关万维网的标准，对万维网发展做出了杰出的贡献。
### 1. 遵循WEB标准

因为浏览器不同内核不同，显示页面或排版有些许差异

### 2. Web 标准的好处

> 让Web的发展前景更广阔 
>
> 内容能被更广泛的设备访问
>
> 更容易被搜寻引擎搜索
>
> 降低网站流量费用
>
> 使网站更易于维护
>
> 提高页面浏览速度

### 3. Web 标准构成

**构成：** 主要包括结构（Structure）、表现（Presentation）和行为（Behavior）三个方面。

## web标准小结
* web标准有三层结构，分别是结构（html）、表现（css）和行为（javascript）  
* 结构类似人的身体， 表现类似人的着装， 行为类似人的行为动作
* 理想状态下，他们三层都是独立的， 放到不同的文件里面

::: warning
浏览器内核包括两部分，渲染引擎和js引擎。
+ 渲染引擎负责读取网页内容，整理讯息，计算网页的显示方式并显示页面,后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎
+ js引擎是解析执行js获取网页的动态效果
:::

:peach::peach::peach: