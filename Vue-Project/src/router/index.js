import Vue from 'vue'
import Router from 'vue-router'
import oneThing from '@/components/onething'
import All from '@/components/all'
import addBtn from '@/components/addBtn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'onething',
      component: oneThing
    },
    {
      path: '/onething',
      name: 'oneThing',
      component: oneThing
    },
    {
      path: '/all',
      name: 'All',
      component: All
    },
    {
      path: '/addBtn',
      name: 'addBtn',
      component: addBtn
    }
  ]
})
