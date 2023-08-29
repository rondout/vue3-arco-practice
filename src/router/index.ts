import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/arco',
      name: 'arco_test',
      component: () => import('@/views/ArcoTest.vue')
    },
    {
      path: '/arco-tables',
      name: 'arco_table',
      // 按照vue-router的官方介绍 这里不要使用异步组件 异步组件仍然可以在路由组件中使用 但是路由组件本身就是动态导入的
      // component: defineAsyncComponent(() => import('@/views/ArcoTableTest.vue'))
      component: () => import('@/views/ArcoTableTest.vue')
    },
    {
      path: '/arco-trees',
      name: 'arco_tree',
      component: () => import('@/views/ArcoTreeTest.vue')
    },
    {
      path: '/arco-forms',
      name: 'arco_form',
      component: () => import('@/views/ArcoFormsTest.vue')
    },
    {
      path: '/arco-custom-components',
      name: 'custom_components',
      component: () => import('@/views/CustomComponents.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not_found',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
