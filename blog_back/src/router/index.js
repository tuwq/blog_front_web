import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home/Home'
import Charts from '@/pages/Charts/Charts'
import Article from '@/pages/Article/Article'
import Comments from '@/pages/Comments/Comments'
import AddArticle from '@/pages/Article/subpages/AddArticle/AddArticle'

Vue.use(Router)
export default new Router({
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
      },{
      	 path: '/article',
         component: Article,
      },,{
      	 path: '/comments',
      	 component: Comments
      }]
    }
  ]
})
