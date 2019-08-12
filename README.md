# Orange
项目组件库

## 引入
在项目里引入 orange.css 和 orange.js 文件即可

## 组件
### header 导航栏
#### 基础用法
`<o-header :header="header"></o-header>`
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
Props

|参数|说明|类型|默认值|
|---|---|---|---|
|header|数据对象|Object|-|
|back|是否打开返回按钮|Boolean|false|

### tab-card 标签卡片
#### 基础用法
```
<o-tab-card 
  :tabs="tabs"
  @change-tab="func"
></o-tab-card>
```
```
new Vue({
  el: '#app',
  data: {
    tabs: [
      { 
        title: '意向客户', 
        icon: 'icon-nav_promoter', 
        color: '--blue', 
        isActive: true 
       },
    ]
  },
  methods: {
    func: function(obj) {
      // obj 是被点击的 tab 对象
      // your code
    }
  }
})
```
#### API
Props

|参数|说明|类型|默认值|
|---|---|---|---|
|tabs|包含所有tab的数组|Array|-|
|tab.title|tab标题|String|-|
|tab.icon|tab的iconfont类名|String|-|
|tab.color|tab的CSS颜色变量名|String|-|
|tab.isActive|tab的激活状态|Boolean|false|

Events

|事件名|说明|参数|
|---|---|---|
|change-tab|点击tab时触发|tab对象|
