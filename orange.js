/*
============================================
*  Description: 觅诚项目组件库
*  Author: 张功睿
*  Version: 1.2.0
*  Edit: 2019-08-12 10:49
*  LastEdit: 2019-08-23 16:14
============================================
*/
var templates = {}

templates.oHeader = ['\
  <header\
    class="o-header"\
    :style="{\
      color: color,\
      background: background\
    }"\
  >\
    <div class="o-header-left">\
      <span\
        class="o-header-btn iconfont"\
        v-for= "btn in header.left"\
        :class="btn.icon"\
        @click="btn.handler"\
      >\
      </span>\
      <slot name="left"></slot>\
      <span class="o-header-btn iconfont icon-back" v-if="back" @click="closeWin"></span>\
    </div >\
    <div class="o-header-title">\
      <span v-if="header.title">{{ header.title }}</span>\
      <img :src="header.logo" v-if="header.logo">\
    </div>\
    <div class="o-header-right">\
      <span\
        class="o-header-btn iconfont"\
        v-for= "btn in header.right"\
        :class="btn.icon"\
        @click="btn.handler"\
      >\
      </span>\
      <slot name="right"></slot>\
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
          \'icon-check\': state === \'success\',\
          \'icon-guanbi\': state === \'error\',\
          \'icon-jinggao\': state === \'warning\'\
        }]"></i>\
      </span>\
      <div class="o-field-other"><slot></slot></div>\
    </div>\
  </div >\
']
templates.oCheckBox = ['\
  <div \
    class="o-checkbox"\
    @change="$emit(\'change\', currentValue)"\
  >\
    <label class="o-checkbox-label">\
      <input\
        class="o-checkbox-input"\
        type="checkbox"\
        v-model="currentValue"\
        :value="option.value"\
      >\
      <span class="o-checkbox-icon" :style="{\'margin-right\': margin + \'rem\'}">\
        <i class="iconfont icon-quan" v-show="currentValue.indexOf(option.value) === -1"></i>\
        <i class="iconfont icon-check" v-show="currentValue.indexOf(option.value) > -1"></i>\
      </span >\
      <span class="o-checkbox-label" v-text="option.label"></span>\
    </label>\
  </div >\
']
templates.oAvatar = ['\
  <div\
    class="o-avatar flex-c"\
    :class="\'o-avatar-\' + size"\
  >\
    <img\
      :src="src"\
      :class="\'o-avatar-\' + size"\
      v-if="src"\
    >\
    <div\
      class="o-avatar-default flex-c"\
      :class="\'o-avatar-\' + size"\
      :style="{color: color, background: bg}"\
      v-else\
    >\
      <i class="iconfont icon-avatar"></i>\
    </div>\
  </div>\
']
templates.oMask = ['\
  <div\
    class="o-mask"\
    :style="{\'z-index\': zIndex }"\
    v-show="show"\
    @click.self="$emit(\'close\')"\
  >\
    <slot></slot>\
  </div>\
']
templates.oPopup = ['\
  <o-mask\
    :show="show"\
    :class="{\
      \'flex-c\': position === \'center\',\
    }"\
    @close="$emit(\'close\')"\
  >\
    <div\
      class="o-popup"\
      :class="{\'o-popup-bottom\': position === \'bottom\'}"\
    >\
      <div\
        class="o-popup-close"\
        @click="$emit(\'close\')"\
      >\
        <i class="iconfont icon-close"></i>\
      </div>\
      <div class="o-popup-head" v-if="title">\
        <h3>{{ title }}</h3>\
      </div>\
      <slot></slot>\
    </div>\
  </o-mask>\
']
templates.oSwitch = ['\
  <label class="o-switch">\
    <input\
      class="o-switch-input"\
      :disabled="disabled"\
      @change="$emit(\'change\', currentValue)"\
      type="checkbox"\
      v-model="currentValue"\
    >\
    <span class="o-switch-core"></span>\
    <div class="o-switch-label><slot></slot></div>"\
  </label>\
']

Vue.component('o-header', {
  template: templates.oHeader[0],
  props: {
    header: Object,
    back: Boolean,
    color: {
      type: String,
      default: '#fff'
    },
    background: {
      type: String,
      default: 'var(--primary-color)'
    }
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

Vue.component('o-checkbox', {
  template: templates.oCheckBox[0],
  props: {
    option: {
      type: Object,
      required: true,
    },
    value: Array,
    margin: {
      type: Number,
      default: 0.1
    }
  },
  data: function () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value: function (val) {
      this.currentValue = val
    },
    currentValue: function (val) {
      this.$emit('input', val)
    }
  }
})

Vue.component('o-avatar', {
  template: templates.oAvatar[0],
  props: {
    src: String,
    size: {
      type: String,
      default: 'normal',
      validator: function (value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1
      },
    },
    color: {
      type: String,
      default: '#ccc'
    },
    bg: {
      type: String,
      default: '#fff'
    }
  },
})

Vue.component('o-mask', {
  template: templates.oMask[0],
  props: {
    zIndex: Number,
    show: Boolean
  },
})

Vue.component('o-popup', {
  template: templates.oPopup[0],
  props: {
    show: Boolean,
    position: {
      type: String,
      default: 'center',
      validator: function (value) {
        return [
          'center',
          'bottom'
        ].indexOf(value) > -1
      }
    },
    title: String
  }
})

Vue.component('o-switch', {
  template: templates.oSwitch[0],
  props: {
    value: Boolean,
    disabled: Boolean
  },
  computed: {
    currentValue: {
      get: function () {
        return this.value
      },
      set: function(val) {
        this.$emit('input', val)
      }
    }
  }
})
