
const routes = [
  {
    path: '/dev',
    meta: { root: 'Home', current: 'dev' },
    component: () => import('layouts/docLayout.vue'),
    children: [
      { path: '', component: () => import('pages/about.vue') }
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/coming-soon.vue')
  }
]

export default routes
