import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home/Home'
import Charts from '@/pages/Charts/Charts'
import Article from '@/pages/Article/Article'
import Comments from '@/pages/Comments/Comments'
import AddArticle from '@/pages/Article/subpages/AddArticle/AddArticle'
import Login from '@/pages/Login/Login'
import EditArticle from '@/pages/Article/subpages/EditArticle/EditArticle'
import NotFound from '@/pages/NotFound/NotFound'
import UserManage from '@/pages/UserManage/UserManage'
import ImgConfig from '@/pages/ImgConfig/ImgConfig'

Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
      	  path: '',
      	  component: Charts,
        },
        {
          path: '/article/add',
          component: AddArticle,
          meta: {
              requireAuth: true
          }
        },{
          path: '/article/edit/:id',
          component: EditArticle,
          meta: {
              requireAuth: true
          }
        },{
        	 path: '/article',
           component: Article,
           meta: {
              requireAuth: true
           }
        },{
           path: '/login',
           component: Login
        },{
        	 path: '/comment',
        	 component: Comments,
           meta: {
              requireAuth: true
           }
        },{
           path: '/userManage',
           component: UserManage,
           meta: {
              requireAuth: true
           }
        },{
           path: '/imgConfig',
           component: ImgConfig,
           meta: {
              requireAuth: true
           }
        }]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})