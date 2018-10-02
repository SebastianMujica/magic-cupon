import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import PostView from '@/components/PostView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    }
  ]
})