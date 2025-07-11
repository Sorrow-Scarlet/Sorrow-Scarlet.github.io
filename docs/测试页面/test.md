<!--来自 https://note.weizwz.com/vitepress/extend/markdown-examples#title-link -->
# 此为测试页


## EL按钮测试
 
<div class="ui-button">
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">绿色按钮</el-button>
  <el-button type="info">灰色按钮</el-button>
  <el-button type="warning">黄色按钮</el-button>
  <el-button type="danger">红色按钮</el-button>
</div>
 
<details>
  <summary>查看代码</summary>
 
``` vue
<template>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">绿色按钮</el-button>
  <el-button type="info">灰色按钮</el-button>
  <el-button type="warning">黄色按钮</el-button>
  <el-button type="danger">红色按钮</el-button>
</template>
```
 
</details>
 
 
### plain用法
 
<div class="ui-button">
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>绿色按钮</el-button>
  <el-button type="info" plain>灰色按钮</el-button>
  <el-button type="warning" plain>黄色按钮</el-button>
  <el-button type="danger" plain>红色按钮</el-button>
</div>
 
::: details CODE
 
``` vue
<el-button type="primary" plain>主要按钮</el-button>
<el-button type="success" plain>绿色按钮</el-button>
<el-button type="info" plain>灰色按钮</el-button>
<el-button type="warning" plain>黄色按钮</el-button>
<el-button type="danger" plain>红色按钮</el-button>
```
:::

## 表格
| 默认居左对齐 | 居中对齐 | 居右对齐 |
| ---------- | :-----: | -----: |
| 内容1       | 内容2   | 内容3   |
| 内容4       | 内容5   | 内容6   |
## 折叠

::: details
This is a details block.
:::

## 徽章与引用

VitePress <Badge type="info" text="default" />

VitePress <Badge type="tip" text="^1.5.0" />

VitePress <Badge type="warning" text="beta" />

VitePress <Badge type="danger" text="caution" />  

### Title <Badge type="info">custom element</Badge>

> 这是一个引用 `VitePress`

## 比示例中更好的提示容器
::: info 信息
这是一条信息，格式为：`info+空格+自定义文字`
:::

::: tip 建议
这是一个建议，格式为：`tip+空格+自定义文字`
:::

::: warning 警告
这是一条警告，格式为：`warning+空格+自定义文字`
:::

::: danger 危险
这是一个危险警告，格式为：`danger+空格+自定义文字`
:::

## Github提示

> [!NOTE] 提示
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP] 建议
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT] 重要
> 对用户达成目标至关重要的信息。

> [!WARNING] 警告
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION] 危险
> 行为可能带来的负面影响。

## 行聚焦
```js
export default {
  data () {
    return {
      title: '唯知笔记', // [!code focus:2]
      desc: '高效的知识分享网站',
      tagline: '知之为知之，不知为不知'
    }
  }
}
```

## diff差异
```js
export default {
  data () {
    return {
      title: '唯知笔记',
      desc: '一个有趣的的知识分享网站', // [!code --]
      desc: '高效的知识分享网站', // [!code ++]
    }
  }
}
```

## 代码块组
::: code-group
```sh [pnpm]
#查询pnpm版本
pnpm -v
```
```sh [yarn]
#查询yarn版本
yarn -v
```
:::


# 参考文档
https://vitepress.dev/zh/reference/default-theme-home-page  
https://aiyo.space/VPDocs/%E6%A0%B7%E5%BC%8F%E7%BE%8E%E5%8C%96.html  
https://vitejs.cn/vitepress/guide/markdown.html#%E5%86%85%E9%83%A8%E9%93%BE%E6%8E%A5