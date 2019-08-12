/*
============================================
*  Description: 觅诚项目组件库
*  Author: 张功睿
*  Version: 1.0.0
*  Edit: 2019-08-12 10:49
*  LastEdit: 2019-08-12 13:52
============================================
*/
var templates = {}

templates.oHeader = '\
  <header>\
    <div class="o-header-left">\
      <span\
        class="o-header-btn iconfont"\
        v-for= "btn in header.left"\
        :class="btn.icon"\
        @click="btn.handler"\
      >\
      </span>\
      <span class="o-header-btn iconfont icon-fanhui" v-if="back" @click="closeWin"></span>\
    </div >\
    <div class="o-header-title">{{ header.title }}</div>\
    <div class="o-header-right">\
      <span\
        class="o-header-btn iconfont"\
        v-for= "btn in header.right"\
        :class="btn.icon"\
        @click="btn.handler"\
      >\
      </span>\
    </div>\
  </header>\
'

Vue.component('o-header', {
  template: templates.oHeader,
  props: {
    header: Object,
    back: Boolean
  },
  methods: {
    closeWin: function () {
      api.closeWin()
    }
  }
})
