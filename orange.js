/*
============================================
*  Description: 觅诚项目组件库
*  Author: 张功睿
*  Version: 1.0.0
*  Edit: 2019-08-12 10:49
*  LastEdit: 2019-08-12 17:42
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
templates.oTabCard = '\
  <div class="tab-card flex-x-a">\
    <div\
      class="tab-card-tab flex-y-c"\
      v-for="tab in tabs"\
      @click="$emit(\'change-tab\', tab)"\
    >\
      <div\
        class="tab-card-tab-icon flex-c" \
        :style="{\'background-color\': tab.isActive ? \'var(\' + tab.color + \')\' : \'#fff\'}"\
      >\
        <i \
          class="iconfont" \
          :class="tab.icon" \
          :style="{\'color\': tab.isActive ? \'#fff\' : \'var(\' + tab.color + \')\'}"\
        ></i>\
      </div>\
      <div \
        class="tab-card-tab-title" :style="{\'color\': tab.isActive ? \'var(\' + tab.color + \')\' : \'#000\'}"\
      >\
        {{ tab.title }}\
      </div >\
    </div>\
  </div>\
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

Vue.component('o-tab-card', {
  template: templates.oTabCard,
  props: {
    tabs: Object
  }
})
