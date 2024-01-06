import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "login" */ '../views/IndexView.vue'),
    children: [
      {
        path: '/order',
        name: 'Order',
        meta: {
          isShow: true,
          title: '订单列表'
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/OrderView.vue'),
      },
      {
        path: '/userList',
        name: 'UserList',
        meta: {
          isShow: true,
          title: '用户列表'
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/UserList.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
