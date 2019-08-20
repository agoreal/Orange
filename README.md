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
|color|header 的字体颜色|String|#fff|
|background|header 的背景颜色|String|var(--primary-color)|

Slot

|name|描述|
|---|---|
|left|左边按钮|
|right|右边按钮|

Event

|事件名|说明|
|---|---|
|left|左插槽事件|
|right|右插槽事件|

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
![image](https://github.com/agoreal/Orange/blob/master/asset/button.jpg?raw=true)
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

### Field 输入框
![image](https://github.com/agoreal/Orange/blob/master/asset/field.jpg?raw=true)
#### 例子
基础用法
```
<o-field label="用户名" placeholder="请输入用户名" v-model="username"></o-field>
<o-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></o-field>
<o-field label="密码" placeholder="请输入密码" type="password" v-model="password"></o-field>
<o-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></o-field>
<o-field label="网站" placeholder="请输入网址" type="url" v-model="website"></o-field>
<o-field label="数字" placeholder="请输入数字" type="number" v-model="number"></o-field>
<o-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></o-field>
<o-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></o-field>
```
设置校验状态
```
<o-field label="邮箱" state="success" v-model="email"></o-field>
<o-field label="邮箱" state="error" v-model="email"></o-field>
<o-field label="邮箱" state="warning" v-model="email"></o-field>
```
自定义内容（例如添加验证码、icon、图片）
```
<o-field label="验证码" v-model="captcha">
  <img src="../assets/100x100.png" height="45px" width="100px">
</o-field>
```
#### API
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|type|输入框类型|String|text, number, email, url, tel, date, datetime, password, textarea|text|
|label|标签|String|-|-|
|value|绑定表单输入值|String|-|-|
|rows|类型为 textarea 时可指定高度（显示行数）|Number|-|-|
|placeholder|占位内容|String|-|-|
|disableClear|禁用 clear 按钮|Booean|-|false|
|readonly|只读|Booean|-|false|
|disabled|禁用|Booean|-|false|
|state|校验状态|String|error, success, warning|-|
|attr|设置原生属性，例如 :attr="{ maxlength: 10 }"|Object|-|-|
#### Slot
|name|描述|
|---|---|
|-|显示HTML内容|
### Checkbox 复选框
#### 基本用法
```
<o-checkbox
  :option="option"
  v-model="value">
</o-checkbox>
```
```
new Vue({
  el: '#app',
  data: {
    option: {
      label: '标签名',
      value: '选中时的值'
    }
  }
})
```
#### API
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|option|复选框配置对象|Object|-|-|
|option.label|复选框标签|String|-|-|
|option.value|复选框选中时的值|String|-|-|
|value|绑定值|Array|-|-|
|margin|按钮与标签之间的距离，单位rem|Number|-|0.1|
### Avatar 头像
![image](https://github.com/agoreal/Orange/blob/master/asset/avatar.jpg?raw=true)
#### 基本用法
```
<o-avatar src="图片地址"></o-avatar>
```
#### API
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|src|图片地址|String|-|-|
|bg|默认头像的背景色，CSS值|-|#fff|
|color|默认头像的颜色，CSS值|-|#ccc|
|size|头像尺寸|String|large,normal,small|normal|

### Popup
#### 基本用法
```
<o-popup
  :show="show"
  title="标题"
  @close="close"
></o-popup>
```
```
data: {
  show: true
},
methods: {
  close: function () {
    // your code
  }
}
```
由于 apicloud 的 window + frame 开发模式，弹窗只能新打开一个 frame 实现，需要调用 util.js 里面的 `openPopup(_popup, _title, _position, _obj)`方法 

|参数|说明|类型|默认值|
|---|---|---|---|
|`_popup`|弹窗内容名|String|必须|
|`_title`|弹窗标题|String|-|
|`_position`|弹窗位置|String|center|
|`_obj`|自定义参数|Object|-|

#### API
Props

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|show|是否展示弹出窗|Boolean|true, false|false|
|positon|弹出窗位置|String|center,bottom|
|title|弹出层标题|String|-|-|

Events

|事件名|说明|
|---|---|
|close|关闭弹窗与遮罩层|
