---
title: 盒子模型
description: ""
date: 2021-05-15
categories:
 - 前端基础
tags:
 - css
# sidebar: 'auto'
# subSidebar: false
# autoPrev: html1
# autoNext: other-filename
sidebarDepth: 1
# autoIgnore: false
# autoGroup-2: 数组方法
# autoGroup+10: group10
---

## 盒子模型（CSS重点）
css学习三大重点： css 盒子模型、浮动、  定位  

## 1.看透网页布局的本质

- 看透网页布局的本质：
  -  首先利用CSS设置好盒子的大小，然后摆放盒子的位置。
  -  最后把网页元素比如文字图片等等，放入盒子里面。

## 2. 盒子模型（Box Model）

- 所谓盒子模型：
  - 就是把HTML页面中的布局元素看作是一个矩形的盒子，也就是一个盛装内容的容器。

::: tip
**总结：**
* 盒子模型有元素的内容、边框（border）、内边距（padding）、和外边距（margin）组成。
* 盒子里面的文字和图片等元素是 内容区域
* 盒子的厚度，我们称为盒子的边框 
* 盒子内容与边框的距离是内边距（类似单元格的 cellpadding)
* 盒子与盒子之间的距离是外边距（类似单元格的 cellspacing）
:::

## 3. 盒子边框（border） 

- 语法：

```css
border : border-width || border-style || border-color 
```

| 属性         |          作用          |
| ------------ | :--------------------: |
| border-width | 定义边框粗细，单位是px |
| border-style |       边框的样式       |
| border-color |        边框颜色        |

- 边框的样式：
  - none：没有边框即忽略所有边框的宽度（默认值）
  - solid：边框为单实线(最为常用的)
  - dashed：边框为虚线  
  - dotted：边框为点线

### 3.1 边框综合设置

```css
// border : border-width || border-style || border-color 
// 没有顺序  
 border: 1px solid red; 
```

### 3.2 盒子边框写法总结表

很多情况下，我们不需要指定4个边框，我们是可以单独给4个边框分别指定的。

| 上边框                     | 下边框                        | 左边框                      | 右边框                       |
| :------------------------- | :---------------------------- | :-------------------------- | :--------------------------- |
| border-top-style:样式;     | border-bottom-style:样式;     | border-left-style:样式;     | border-right-style:样式;     |
| border-top-width:宽度;     | border- bottom-width:宽度;    | border-left-width:宽度;     | border-right-width:宽度;     |
| border-top-color:颜色;     | border- bottom-color:颜色;    | border-left-color:颜色;     | border-right-color:颜色;     |
| border-top:宽度 样式 颜色; | border-bottom:宽度 样式 颜色; | border-left:宽度 样式 颜色; | border-right:宽度 样式 颜色; |

### 3.3 表格的细线边框


- 通过表格的`cellspacing="0"`,将单元格与单元格之间的距离设置为0，
- 但是两个单元格之间的边框会出现重叠，从而使边框变粗
- 通过css属性：

```css
// collapse 单词是合并的意思
// border-collapse:collapse; 表示相邻边框合并在一起。
table{ border-collapse:collapse; }  
```

```css
<style>
	table {
		width: 500px;
		height: 300px;
		border: 1px solid red;
	}
	td {
		border: 1px solid red;
		text-align: center;
	}
	table, td {
		border-collapse: collapse;  /*合并相邻边框*/
	}
</style>
```

## 4. 内边距（padding）
### 4.1 内边距：
​padding属性用于设置内边距。 **是指 边框与内容之间的距离。**
### 4.2 设置

| 属性           | 作用     |
| -------------- | :------- |
| padding-left   | 左内边距 |
| padding-right  | 右内边距 |
| padding-top    | 上内边距 |
| padding-bottom | 下内边距 |

当我们给盒子指定padding值之后， 发生了2件事情：
1. 内容和边框 有了距离，添加了内边距。
2. 盒子会变大了。

**注意：  后面跟几个数值表示的意思是不一样的。**

| 值的个数 | 表达意思                                        |
| -------- | ----------------------------------------------- |
| 1个值    | padding：上下左右内边距;                        |
| 2个值    | padding: 上下内边距    左右内边距 ；            |
| 3个值    | padding：上内边距   左右内边距   下内边距；     |
| 4个值    | padding: 上内边距 右内边距 下内边距 左内边距 ； |

:bell:逆时针方向，top=>right=>bottom=>left

### 4.3 内盒尺寸计算（元素实际大小）

- 宽度
  Element Height = content height + padding + border （Height为内容高度）
- 高度
  Element Width = content width + padding + border （Width为内容宽度）
- 盒子的实际的大小 =   内容的宽度和高度 +  内边距   +  边框   

### 4.4 padding不影响盒子大小情况

::: tip
如果没有给一个盒子指定宽度， 此时，如果给这个盒子指定padding， 则不会撑开盒子。
:::

## 5. 外边距（margin）

### 5.1 外边距
margin属性用于设置外边距。  margin就是控制**盒子和盒子之间的距离**
### 5.2 设置：

| 属性          | 作用     |
| ------------- | :------- |
| margin-left   | 左外边距 |
| margin-right  | 右外边距 |
| margin-top    | 上外边距 |
| margin-bottom | 下外边距 |

margin值的简写 （复合写法）代表意思  跟 padding 完全相同。

### 5.3 块级盒子水平居中
可以让一个块级盒子实现水平居中必须：
- 盒子必须指定了宽度（width）
- 然后就给**左右的外边距都设置为auto**，

实际工作中常用这种方式进行网页布局，示例代码如下：
```css
.header{ width:960px; margin:0 auto;}
```
常见的写法，以下下三种都可以。
* margin-left: auto;   margin-right: auto;
* margin: auto;
* margin: 0 auto;

### 5.4 文字居中和盒子居中区别
1.  盒子内的文字水平居中是 text-align: center,  而且还可以让 行内元素和行内块居中对齐
2.  块级盒子水平居中,左右margin 改为 auto 

```css
text-align: center; /*  文字 行内元素 行内块元素水平居中 */
margin: 10px auto;  /* 块级盒子水平居中  左右margin 改为 auto 就阔以了 上下margin都可以 */
```

### 5.5 插入图片和背景图片区别

1. 插入图片,比如产品展示类,移动位置只能靠盒模型：padding、margin
2. 背景图片我们一般用于小图标背景或者超大背景图片，背景图片只能通过background-position

```css
 img {  
		width: 200px;/* 插入图片更改大小 width 和 height */
		height: 210px;
		margin-top: 30px;  /* 插入图片更改位置 可以用margin 或padding  盒模型 */
		margin-left: 50px; /* 插入当图片也是一个盒子 */
	}

 div {
		width: 400px;
		height: 400px;
		border: 1px solid purple;
		background: #fff url(images/sun.jpg) no-repeat;
		background-position: 30px 50px; /* 背景图片更改位置 我用 background-position */
	}
```

### 5.6 清除元素的默认内外边距(重要)
为了更灵活方便地控制网页中的元素，制作网页时，我们需要将元素的默认内外边距清除。

```css
* {
   padding:0;         /* 清除内边距 */
   margin:0;          /* 清除外边距 */
}
```
::: warning
注意：  
* 行内元素为了照顾兼容性， 尽量只设置左右内外边距， 不要设置上下内外边距。
:::

### 5.7 外边距合并

使用margin定义块元素的**垂直外边距**时，可能会出现外边距的合并。

#### (1). 相邻块元素垂直外边距的合并

- 当上下相邻的两个块元素相遇时，如果上面的元素有下外边距margin-bottom
- 下面的元素有上外边距margin-top，则他们之间的垂直间距不是margin-bottom与margin-top之和
- **取两个值中的较大者**这种现象被称为相邻块元素垂直外边距的合并（也称外边距塌陷）。

::: tip
**解决方案：尽量给只给一个盒子添加margin值**。
:::
#### (2). 嵌套块元素垂直外边距的合并（塌陷）

- 对于两个嵌套关系的块元素，如果父元素没有上内边距及边框
- 父元素的上外边距会与子元素的上外边距发生合并
- 合并后的外边距为两者中的较大者

::: tip
**解决方案：**
+ 可以为父元素定义上边框。
+ 可以为父元素定义上内边距
+ 可以为父元素添加overflow:hidden。
:::

## 6. 盒子模型布局稳定性
根据稳定性来分，建议如下：
按照优先使用宽度（width）,其次使用内边距（padding）,再次外边距（margin）。   

- 原因：
  - margin 会有外边距合并，还有ie6下面margin加倍的bug所以最后使用。
  - padding  会影响盒子大小，需要进行加减计算后使用。
  - width   没有问题,我们经常使用宽度剩余法、高度剩余法来做。


## 7. 拓展@
CSS3部分新属性， 但是我们遵循的原则是，以下内容，不会影响我们页面布局，只是样式更好看了而已。
### 1.圆角边框(CSS3)
- 语法：
```css
border-radius:length;  
```

其中每一个值可以为数值或百分比的形式。 
技巧： 让一个正方形  变成圆圈 
```css
border-radius: 50%;
```

### 2. 盒子阴影(CSS3)
::: tip
box-shadow:水平阴影 垂直阴影 模糊距离（虚实）  阴影尺寸（影子大小）  阴影颜色  内/外阴影；
:::
- 前两个属性是必须写的。其余的可以省略。
- 外阴影 (outset) 是默认的 但是不能写,想要内阴影可以写inset 

```css
div {
			width: 200px;
			height: 200px;
			border: 10px solid red;
			/* box-shadow: 5px 5px 3px 4px rgba(0, 0, 0, .4);  */
			/* box-shadow:水平位置 垂直位置 模糊距离 阴影尺寸（影子大小） 阴影颜色  内/外阴影； */
			box-shadow: 0 15px 30px  rgba(0, 0, 0, .4);
			
}
```

## 8. CSS书写规范
### 空格规范
:bell:【强制】 选择器 与 { 之间必须包含空格。
示例： 
```css
.selector {
}
```
:bell:【强制】 属性 与之后的 : 之间不允许包含空格， : 与 值 之间必须包含空格。
示例：
```css
font-size: 12px;
```

### 选择器规范

:bell:【强制】 并集选择器，每个选择器声明必须独占一行。
示例：
```css
/* good */
.post,
.page,
.comment {
    line-height: 1.5;
}

/* bad */
.post, .page, .comment {
    line-height: 1.5;
}
```

:bell:【建议】 一般情况情况下，选择器的嵌套层级应不大于 3 级，位置靠后的限定条件应尽可能精确。
示例：

```css
/* good */
#username input {}
.comment .avatar {}

/* bad */
.page .header .login  input {}
.comment div * {}
```

### 属性规范

:bell:【强制】属性定义必须另起一行。

示例：
```css
/* good */
.selector {
    margin: 0;
    padding: 0;
}

/* bad */
.selector { margin: 0; padding: 0; }
```
:bell:【强制】 属性定义后必须以分号结尾。
示例：

```css
/* good */
.selector {
    margin: 0;
}

/* bad */
.selector {
    margin: 0
}
```

:peach::peach::peach: