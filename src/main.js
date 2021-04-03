import Vue from 'vue'
import Cookies from 'js-cookie'

import Element from 'element-ui'
import '@/assets/sass/element-variables.scss'
import '@/assets/sass/index.scss' // global css

import App from './App'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2'
import './registerServiceWorker'

/**
 * Uses
 */
Vue.use(VueSweetalert2)

Vue.use(Element, {
	size: Cookies.get('size') || 'medium', // set element-ui default size
	// i18n: (key, value) => i18n.t(key, value)
})

/**
 * Config
 */
Vue.config.productionTip = false
Vue.config.optionMergeStrategies.subscriptions = function (parent, child, vm) {
	if (!vm) {
		return function () {
			return Object.assign({}, typeof parent === 'function' ? parent.call(this, this) : parent, typeof child === 'function' ? child.call(this, this) : child)
		}
	} else {
		return function () {
			return Object.assign({}, typeof parent === 'function' ? parent.call(vm, vm) : parent, typeof child === 'function' ? child.call(vm, vm) : child)
		}
	}
}

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
