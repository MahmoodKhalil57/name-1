const routes = [
  {
    path: "/",
    meta: { root: "Home" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/homePage/homeWrapper.vue") }],
  },
  {
    path: "/about",
    meta: { root: "Home", current: "about" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/about.vue") }],
  },
  {
    path: "/mango-picking",
    meta: { root: "Home", current: "mango-picking" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/mangoPicking.vue") }],
  },
  {
    path: "/your-reviews",
    meta: { root: "Home", current: "testimonials" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/yourReviews.vue") }],
  },
  {
    path: "/contact",
    meta: { root: "Home", current: "contact" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/contactUs.vue") }],
  },
  {
    path: "/dev",
    meta: { root: "Home", current: "dev" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/homePage/homeWrapper.vue") }],
  },
  {
    path: "/dev2",
    meta: { root: "Home", current: "dev2" },
    component: () => import("layouts/testLayout.vue"),
    children: [{ path: "", component: () => import("pages/about.vue") }],
  },
  {
    path: "/test",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/IndexPage.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/shop",
    component: () => import("pages/coming-soon.vue"),
  },
  {
    path: "/your-responses",
    component: () => import("pages/coming-soon.vue"),
  },
  {
    path: "/cart",
    component: () => import("pages/coming-soon.vue"),
  },
  {
    path: "/blog",
    component: () => import("pages/coming-soon.vue"),
  },
  {
    path: "/gallery",
    component: () => import("pages/coming-soon.vue"),
  },
  {
    path: "/tips",
    component: () => import("pages/coming-soon.vue"),
  },
  {
    path: "/harvesting-process",
    component: () => import("pages/coming-soon.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/coming-soon.vue"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
