/**
 * desc: 组件-page
 * use:
 */
import PageWrap from './src/page.vue'

PageWrap.install = function (Vue) {
  Vue.component(PageWrap.name, PageWrap)
}

export default PageWrap
