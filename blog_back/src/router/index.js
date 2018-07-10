import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/pages/Main/main.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    }
  ]
})
