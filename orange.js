/*
============================================
*  Description: 觅诚项目组件库
*  Author: 张功睿
*  Version: 1.0.4
*  Edit: 2019-08-12 10:49
*  LastEdit: 2019-08-13 18:16
============================================
*/
var templates = {}

templates.oHeader = ['\
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
']
templates.oTabCard = ['\
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
']
templates.oButton = ['\
  <button\
    class="o-button"\
    :class="[\'o-button--\' + color, \'o-button--\' + size, {\
      \'o-button-disabled\': disabled,\
      \'o-button-plain\': plain\
    }]"\
    @click="handleClick"\
    :disabled="disabled"\
  >\
    <span class="o-button-icon" v-if="icon || $slots.icon">\
      <slot name="icon">\
        <i v-if="icon" class="iconfont" :class="icon"></i>\
      </slot >\
    </span>\
    <lable class="o-button-text"><slot></slot></lable>\
  </button>\
']
templates.oField = ['\
  <div\
    class="o-field"\
    :class="[{\
      \'is-textarea\': type === \'textarea\',\
      \'is-nolabel\': !label\
    }]"\
  >\
    <label v-if="label">{{ label }}</label>\
    <div class="o-field-value">\
      <textarea\
        class="o-field-core o-field-textarea"\
        @change="$emit(\'change\', currentValue)"\
        :value="currentValue"\
        ref="textarea"\
        :placeholder="placeholder"\
        :disabled="disabled"\
        :readonly="readonly"\
        :rows="rows"\
        v-model="currentValue"\
        v-if="type === \'textarea\'"\
      ></textarea >\
      <input\
        class="o-field-core"\
        @change="$emit(\'change\', currentValue)"\
        @input="handleInput"\
        ref="input"\
        :value="currentValue"\
        :type="type"\
        :placeholder="placeholder"\
        :disabled="disabled"\
        :readonly="readonly"\
        v-else>\
      <div\
        class="o-field-clear"\
        @click="handleClear"\
        v-if="!disableClear"\
        v-show="currentValue && type !== \'textarea\'"\
      >\
        <i class="iconfont icon-guanbi"></i>\
      </div >\
      <span\
        class="o-field-state"\
        :class="[\'is-\' + state]"\
        v-if="state"\
      >\
        <i class="iconfont" :class="[{\
          \'icon-wuuiconxuan\': state === \'success\',\
          \'icon-guanbi\': state === \'error\',\
          \'icon-jinggao\': state === \'warning\'\
        }]"></i>\
      </span>\
      <div class="o-field-other"><slot></slot></div>\
    </div>\
  </div >\
']

Vue.component('o-header', {
  template: templates.oHeader[0],
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
  template: templates.oTabCard[0],
  props: {
    tabs: Object
  }
})

Vue.component('o-button', {
  template: templates.oButton[0],
  props: {
    disabled: Boolean,
    icon: String,
    plain: Boolean,
    color: {
      type: String,
      default: 'blue',
      validator: function (value) {
        return [
          'light-red',
          'blue'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator: function (value) {
        return [
          'large',
          'normal',
          'small'
        ].indexOf(value) > -1
      }
    }
  },
  methods: {
    handleClick: function (event) {
      this.$emit('click', event)
    }
  }
})

Vue.component('o-field', {
  template: templates.oField[0],
  data: function () {
    return {
      currentValue: this.value
    }
  },
  props: {
    label: String,
    rows: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: Boolean,
    state: {
      type: String,
      default: 'default',
      validator: function (value) {
        return [
          'success',
          'error',
          'warning'
        ].indexOf(value) > -1
      }
    },
    value: String,
    attr: Object
  },
  methods: {
    handleInput: function (event) {
      this.currentValue = event.target.value
    },
    handleClear: function () {
      if (this.disabled || this.readonly) return
      this.currentValue = ''
    }
  },
  watch: {
    value: function (val) {
      this.currentValue = val
    },
    currentValue: function (val) {
      this.$emit('input', val)
    },
    attr: {
      immediate: true,
      handler: function (attrs) {
        this.$nextTick(function () {
          var target = [this.$refs.input, this.$refs.textarea]
          target.forEach(function (el) {
            if (!el || !attrs) return
            Object.keys(attrs).map(function (name) {
              return el.setAttribute(name, attrs[name])
            })
          })
        })
      }
    }
  }
})
