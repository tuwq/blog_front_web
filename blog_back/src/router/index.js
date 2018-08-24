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
import Firend from '@/pages/Firend/Firend'
import AddFirend from '@/pages/Firend/subpages/AddFirend/AddFirend'
import EditFirend from '@/pages/Firend/subpages/EditFirend/EditFirend'
import Music from '@/pages/Music/Music'
import AddMusic from '@/pages/Music/subpages/AddMusic/AddMusic'
import EditMusic from '@/pages/Music/subpages/EditMusic/EditMusic'

Vue.use(Router)
export default new Router({
  mode: 'history',
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
        },{
           path: '/firend',
           component: Firend,
           meta: {
              requireAuth: true
           }
        },{
           path: '/firend/add',
           component: AddFirend,
           meta: {
              requireAuth: true
           }
        },{
           path: '/firend/edit/:id',
           component: EditFirend,
           meta: {
              requireAuth: true
           }
        },{
           path: '/music',
           component: Music,
           meta: {
              requireAuth: true
           }
        },{
           path: '/music/add',
           component: AddMusic,
           meta: {
              requireAuth: true
           }
        },{
           path: '/music/edit/:id',
           component: EditMusic,
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