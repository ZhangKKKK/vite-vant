import { BasicLayout } from '@/components/Layout';
// import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router';

export const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    children: [
      {
        path: '',
        name: '',
        meta: { title: '首页' },
        component: () => import('@/pages/index.vue')
      },
      {
        path: '/account',
        name: 'account',
        meta: { title: 'JSX' },
        component: () => import('@/pages/demo/account')
      },
      {
        path: '/list',
        name: 'list',
        meta: { title: '列表' },
        component: () => import('@/pages/demo/list.vue')
      },
      {
        path: '/about',
        name: 'about',
        meta: { title: '关于' },
        component: () => import('@/pages/about.vue')
      },
      {
        path: '/edit-resume',
        name: 'edit-resume',
        meta: { title: '编辑简历' },
        component: () => import('@/pages/resume/edit-resume.vue')
      }
    ]
    
  }
]

// export const notFound: Array<RouteRecordRaw> = [
//   {
//     path: '/404',
//     name: 'notFound',
//     meta: { title: 404 },
//     component: () => import('@/pages/404.vue')
//   },
//   {
//     path: '/:catchAll(.*)',
//     meta: { title: 404 },
//     redirect: '/404'
//   }
// ]

// export const asyncRoutes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'home',
//     meta: {
//       title: '首页',
//       isMenu: true
//     },
//     redirect: '/account/index'
//   },
//   {
//     path: '/account',
//     name: 'account',
//     // component: BasicLayout,
//     component: shallowRef(BasicLayout),
//     meta: { title: '客户', isMenu: true },
//     children: [
//       {
//         path: '/account/index',
//         name: 'account-index',
//         meta: { title: '客户列表', isMenu: true },
//         component: () => import('@/pages/account/index.vue')
//       },
//       {
//         path: '/account/details',
//         name: 'account-details',
//         meta: { title: '客户详情', isMenu: true },
//         component: () => import('@/pages/account/details.vue')
//       }
//     ]
//   },
//   {
//     path: '/form',
//     name: 'form',
//     // component: BasicLayout,
//     component: shallowRef(BasicLayout),
//     meta: { title: '表单', isMenu: true },
//     children: [
//       {
//         path: '/form/basic',
//         name: 'form-basic',
//         meta: { title: '基础表单', isMenu: true },
//         component: () => import('@/pages/form/basic.vue')
//       },
//       {
//         path: '/form/height',
//         name: 'form-height',
//         meta: { title: '客户详情', isMenu: true },
//         component: () => import('@/pages/form/height.vue')
//       }
//     ]
//   }
// ]