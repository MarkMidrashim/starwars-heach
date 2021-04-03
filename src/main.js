import Vue from 'vue'

import Element from 'element-ui'
import './assets/sass/element-variables.scss'

import App from './App'
import router from './router'

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
