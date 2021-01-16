import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home')
  },
  {
    path: '/category/:catId',
    name: 'Category',
    component: () => import('@/views/category')
  },
  {
    path: '/product/:productId',
    name: 'Product',
    component: () => import('@/views/product')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
