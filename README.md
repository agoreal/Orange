# Orange
项目组件库

## 引入
在项目里引入 orange.css 和 orange.js 文件即可

## 组件
### header 导航栏
#### 基础用法
`<o-header :header="obj"></o-header>`
```
new Vue({
  el: '#app',
  data: {
    header: {
      title: '标题'，
      left: [
        {
          title: '按钮名',
          icon: 'icon-xxx', // iconfont 类名
          handler: function () {
            // 点击按钮事件
          }
        }
      ],
      right: []
    }
  }
})
```

#### API
|参数|说明|类型|默认值|
|---|---|---|---|
|header|数据对象|Object|-|
|back|是否打开返回按钮|Boolean|false|
