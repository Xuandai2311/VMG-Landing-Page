// // import Vue from 'vue'
// // import ElementUI from 'element-ui'
// // import 'element-ui/lib/theme-chalk/index.css'
// // import locale from 'element-ui/lib/locale/lang/vi'
// // import '~/styles/element-variables.scss'
// // Vue.use(ElementUI, { locale })
// import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/vi'
// Vue.component('ElForm', () => import(/* webpackChunkName: 'element-ui-form' */ 'element-ui/lib/form'))
// Vue.component('ElFormItem', () => import(/* webpackChunkName: 'element-ui-form-item' */ 'element-ui/lib/form-item'))
// // configure default language
// Vue.use(ElementUI, { locale })
// // export const eventBus = new Vue()
// // import dynamic components

import Vue from 'vue'
import vietnameseLang from 'element-ui/lib/locale/lang/vi'
import { Loading, MessageBox, Message } from 'element-ui'
import locale from 'element-ui/lib/locale'

/**
 * Element UI CSS
 */
import 'element-ui/lib/theme-chalk/form.css'
import 'element-ui/lib/theme-chalk/form-item.css'
import 'element-ui/lib/theme-chalk/menu.css'
import 'element-ui/lib/theme-chalk/menu-item.css'
import 'element-ui/lib/theme-chalk/menu-item-group.css'
import 'element-ui/lib/theme-chalk/radio.css'
import 'element-ui/lib/theme-chalk/radio-group.css'

import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/image.css'
import 'element-ui/lib/theme-chalk/dialog.css'
import 'element-ui/lib/theme-chalk/upload.css'
import 'element-ui/lib/theme-chalk/loading.css'

import 'element-ui/lib/theme-chalk/table-column.css'
import 'element-ui/lib/theme-chalk/table.css'
import 'element-ui/lib/theme-chalk/checkbox.css'
import 'element-ui/lib/theme-chalk/checkbox-group.css'
import 'element-ui/lib/theme-chalk/dropdown.css'
import 'element-ui/lib/theme-chalk/dropdown-menu.css'
import 'element-ui/lib/theme-chalk/dropdown-item.css'
import 'element-ui/lib/theme-chalk/message.css'
import 'element-ui/lib/theme-chalk/message-box.css'
import 'element-ui/lib/theme-chalk/tab-pane.css'
import 'element-ui/lib/theme-chalk/tabs.css'

// configure default language
locale.use(vietnameseLang)
export const eventBus = new Vue()
// import dynamic components
Vue.component('ElForm', () => import(/* webpackChunkName: 'element-ui-form' */ 'element-ui/lib/form'))
Vue.component('ElFormItem', () => import(/* webpackChunkName: 'element-ui-form-item' */ 'element-ui/lib/form-item'))

Vue.component('ElMenu', () => import(/* webpackChunkName: 'element-ui-form-tab-pane' */ 'element-ui/lib/menu'))
Vue.component('ElMenuItem', () => import(/* webpackChunkName: 'element-ui-form-tab-pane' */ 'element-ui/lib/menu-item'))
Vue.component('ElMenuItemGroup', () => import(/* webpackChunkName: 'element-ui-form-tab-pane' */ 'element-ui/lib/menu-item-group'))

Vue.component('ElRadio', () => import(/* webpackChunkName: 'element-ui-form-tab-pane' */ 'element-ui/lib/radio'))
Vue.component('ElGroup', () => import(/* webpackChunkName: 'element-ui-form-tab-pane' */ 'element-ui/lib/radio-group'))

Vue.component('ElTabPane', () => import(/* webpackChunkName: 'element-ui-form-tab-pane' */ 'element-ui/lib/tab-pane'))
Vue.component('ElTabs', () => import(/* webpackChunkName: 'element-ui-form-tabs' */ 'element-ui/lib/tabs'))

Vue.component('ElDialog', () => import(/* webpackChunkName: 'element-ui-dialog' */ 'element-ui/lib/dialog'))

Vue.component('ElCheckbox', () => import(/* webpackChunkName: 'element-ui-checkbox' */ 'element-ui/lib/checkbox'))
Vue.component('ElCheckboxGroup', () => import(/* webpackChunkName: 'element-ui-checkbox' */ 'element-ui/lib/checkbox-group'))

Vue.component('ElDropdown', () => import(/* webpackChunkName: 'element-ui-dropdown' */ 'element-ui/lib/dropdown'))
Vue.component('ElDropdownMenu', () => import(/* webpackChunkName: 'element-ui-dropdown-menu' */ 'element-ui/lib/dropdown-menu'))
Vue.component('ElDropdownItem', () => import(/* webpackChunkName: 'element-ui-dropdown-item' */ 'element-ui/lib/dropdown-item'))
Vue.component('ElTable', () => import(/* webpackChunkName: 'element-ui-form-table' */ 'element-ui/lib/table'))
Vue.component('ElTableColumn', () => import(/* webpackChunkName: 'element-ui-form-table-column' */ 'element-ui/lib/table-column'))
Vue.component('ElInput', () => import(/* webpackChunkName: 'element-ui-form' */ 'element-ui/lib/input'))
Vue.component('ElImage', () => import(/* webpackChunkName: 'element-ui-image' */ 'element-ui/lib/image'))

Vue.component('ElUpload', () => import(/* webpackChunkName: 'element-ui-form' */ 'element-ui/lib/upload'))

Vue.component('ElMessage', () => import(/* webpackChunkName: 'element-ui-dropdown-item' */ 'element-ui/lib/message'))

Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm

