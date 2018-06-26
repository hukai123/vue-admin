import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'



Vue.use(Router)

export default new Router({
  routes: [
    // {
    //     path: '/',
    //     redirect: '/login'     
    // },
    {
  		path: '/',
  		name: 'HelloWorld',
  		component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: resolve => require(['@/components/HelloWorld.vue'], resolve)
    },
    {
      path: '/ceshi',
      name: 'Ceshi',
      component: resolve => require(['@/pages/ceshi.vue'], resolve)
    },
  ]
})
