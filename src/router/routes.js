
const routes = [
  {
    path: '/dev',
    component: () => import('layouts/docLayout.vue'),
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
