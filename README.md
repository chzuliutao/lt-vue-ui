## lt-vue-ui

> A Vue.js 2.0 UI Toolkit for Web.

## Installation
```sh
# Locally in your project
npm i lt-vue-ui --save -dev

# Or globally (not recommended)
npm i lt-vue-ui -g
```
## Usage

## 组件-Alert
---
##### <font color='#7370ff'>按需加载</font>
```js
// main.js
import {Alert} from 'lt-vue-ui'

Vue.use(Alert)
```

##### <font color='#7370ff'>使用方式</font>
```js
export default {
  methods: {
    fn() {
      const self = this
      this.$alert.show({                // 显示alert
        title: 'title',                 // 提示标题
        msg: 'alert',                   // 提示信息
        btn: ['cancle', 'confirm'],     // 按钮 数组 最多两个
        cancleFn() {
          self.$alert.hide()            // 取消按钮回调   隐藏alert
        },
        confirmFn() {
          self.$alert.hide()            // 确认按钮回调
        }
      })
    }
  }
}
```


## 组件-CountDown
---
##### <font color='#7370ff'>使用方式</font>
```js
import {CountDown} from 'lt-vue-ui'
export default {
  components: {
    CountDown
  },
}
```

```html
<count-down :time='time' :state='state' @change='change'>
  <p>验证码</p>
</count-down>
```

content|type|desc|def
--- |:--:|:--:|:--:|
time|props|倒计时|默认60s
state|props|是否开启倒计时|默认false
change|event|点击事件|--
p标签|slot|占位|默认获取验证码


## 插件-Load
---
##### <font color='#7370ff'>按需加载</font>
```js
// main.js
import {Load} from 'lt-vue-ui'

Vue.use(Load)
```

##### <font color='#7370ff'>使用方式</font>
```js
export default {
  methods: {
    fn() {
      const self = this
      this.$load.show({                // 显示alert
        title: '加载中'
      })
    }
  }
}
```
content|type|desc|默认值
--- |:--:|:--:|:--:|
title|data|提示语|-
stroke|data|loading颜色|#fff
color|data|提示语颜色|#fff
bg|data|中间load的背景色|rgba(0,0,0,0.3)
bgWrap|data|全屏背景色|rgba(0,0,0,0)


## 组件-ModelPane
---
##### <font color='#7370ff'>使用方式</font>
```js
import {ModelPane} from 'lt-vue-ui'
export default {
  components: {
    ModelPane
  },
}
```

```html
<model-pane v-model='show'>
  <div>
    hello
  </div>
</model-pane>
```

content|type|desc|默认值
--- |:--:|:--:|:--:|
v-model|input|是否显示蒙版|false
name|props|动画效果|fade
div标签|slot|内容占位|-


## 插件-Toast
--- 
##### <font color='#7370ff'>按需加载</font>
```js
// main.js
import {Toast} from 'lt-vue-ui'

Vue.use(Toast)
```

##### <font color='#7370ff'>使用方式</font>
```js
export default {
  methods: {
    fn() {
      const self = this
      this.$toast.show({                // 显示alert
        msg: 'alert',                   // 提示信息
        position: 'middle',
        type: 'success',
        duration: 3000,
        bg: '#fff'
      })
    }
  }
}
```

## 插件-Tip
--- 
用法同Toast，引入名称不同，样式略有不同



## 插件-VReg
--- 
##### <font color='#7370ff'>按需加载</font>
```js
// main.js
import {VReg} from 'lt-vue-ui'

VReg(Vue)
```

##### <font color='#7370ff'>使用方式</font>
```html
<div v-reg:basic="{rule: 'c', msg: 'error3', tag: 'c', test: c}"></div>
<input  v-model="a" v-reg:basic="{rule: 'a', msg: 'error1', tag: 'a', test: a}">
<button  v-reg:basic.check="{check: switch}" @click="ck">click me</button>
```
```js
import {check} from 'cycleUI/packages/VReg/src/rule.js'
export default {
  methods: {
    ck() {
      this.switch = true
      if(check('basic')) {
        console.log('ok');
      }else {
        setTimeout(()=> {
          this.switch = false
        }, 50)
      }
    }
  }
}
// basic   分组若同一个页面里面有多个组别需要分别校验
// rule    规则
// msg     提示信息
// tag     分组下的子项 可以认为是该组下的唯一识别
// test    需校验的字段
// check   表示这个是触发校验的开关的识别
// switch  true / false  实时监听的开关
```
##### <font color='#7370ff'>注意事项</font>
check方法需要引用正确
switch注意关闭，因为一旦开启就意味着实时监听检验，也会实时匹配报错（不正确时）

## History
### 0.0.5 / 2019-06-10

  - updata doc

### 0.0.4 / 2018-12-24

  - Bugclose Tips plugin

### 0.0.3 / 2018-12-18

  - Update README.md
  - Add online doc

### 0.0.2 / 2018-12-14

  - Add Tip plugin
  - Update package ,publish to npm

### 0.0.1 / 2018-12-14

  - Init project
  - Publish first version

## License

MIT