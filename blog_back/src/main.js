// 语法支持
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
// Vuex
import store from './store/main'
import router from './router'
// 解决点击延迟
import fastclick from 'fastclick'
import 'api/constant/constant'
import axios from 'axios'
global.axios = axios

import './router/carry'

import 'font-awesome/css/font-awesome.css'
import '@/base/style/constant.scss'
import '@/base/style/base.css'

fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

