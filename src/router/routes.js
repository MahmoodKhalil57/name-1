
const routes = [
  {
    path: '/',
    meta: { root: 'Home' },
    component: () => import('layouts/homeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home.vue') }
    ]
  },
  {
    path: '/about',
    meta: { root: 'Home', current: 'about' },
    component: () => import('layouts/docLayout.vue'),
    children: [
      { path: '', component: () => import('pages/about.vue') }
    ]
  },
  {
    path: '/dev',
    meta: { root: 'Home', current: 'dev' },
    component: () => import('layouts/testLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home.vue') }
    ]
  },
  {
    path: '/dev2',
    meta: { root: 'Home', current: 'dev2' },
    component: () => import('layouts/testLayout.vue'),
    children: [
      { path: '', component: () => import('pages/about.vue') }
    ]
  },
  {
    path: '/test',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue') }
    ]
  },
  {
    path: '/test2',
    component: () => import('layouts/homeLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/testPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/shop',
    component: () => import('pages/coming-soon.vue')
  },
  {
    path: '/mango-picking',
    component: () => import('pages/coming-soon.vue')
  },
  {
    path: '/your-responses',
    component: () => import('pages/coming-soon.vue')
  },
  {
    path: '/contact',
    component: () => import('pages/coming-soon.vue')
  },
  {
    path: '/cart',
    component: () => import('pages/coming-soon.vue')
  },
  {
    path: '/blog',
    component: () => import('pages/coming-soon.vue')
  },
  {
    path: '/gallery',
    component: () => import('pages/coming-soon.vue')
  },
  {
    path: '/tips',
    component: () => import('pages/coming-soon.vue')
  },
  {
    path: '/harvesting-process',
    component: () => import('pages/coming-soon.vue')
  },
  {
    path: '/login',
    component: () => import('pages/coming-soon.vue')
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
