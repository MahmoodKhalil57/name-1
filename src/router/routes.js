
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {
    path: '/about',
    component: () => import('layouts/docLayout.vue'),
    children: [
      { path: '', component: () => import('pages/about.vue') }
    ]
  },

  {
    path: '/page4',
    component: () => import('layouts/docLayout.vue'),
    children: [
      { path: '', component: () => import('pages/page4.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
