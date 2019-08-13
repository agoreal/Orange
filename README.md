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
### Button 按钮
![image](https://agoreal.github.io/asset/button.jpg)
#### 基础用法
改变颜色
```
<o-button color="blue">blue</o-button>
<o-button color="light-red">light-red</o-button>
```
改变大小
```
<o-button size="large">large</o-button>
<o-button size="normal">normal</o-button>
<o-button size="small">small</o-button>
```
禁用按钮
```
<o-button disabled>disabled</o-button>
```
线框按钮
```
<o-button plain>plain</o-button>
```
带图标
```
<o-button icon="icon-back">icon</o-button>
```
自定义图标
```
<o-button>
  <img src="picture.jpg" width="20" height="20" slot="icon">
  自定义图标
</o-button>
```
#### API
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|color|颜色|String|blue, light-red|blue|
|size|尺寸|String|large, normal, small|normal|
|plain|线框按钮|Boolean|true, false|false|
|disabled|禁用|Boolean|true, false|false|
|icon|图标，字体类名|String|icon-xxx|-|

#### Slot
|name|描述|
|---|---|
|-|按钮的文本内容|
|icon|自定义的图标|

