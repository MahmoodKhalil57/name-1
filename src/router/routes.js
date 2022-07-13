const routes = [
  {
    path: "/",
    meta: { root: "Home" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/homePage/homeWrapper.vue"),
      },
    ],
  },
  {
    path: "/about",
    meta: { root: "Home", current: "About" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/about.vue") }],
  },
  {
    path: "/mango-picking",
    meta: { root: "Home", current: "Mango Picking" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/mangoPicking.vue") }],
  },
  {
    path: "/your-reviews",
    meta: { root: "Home", current: "Testimonials" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/yourReviews.vue") }],
  },
  {
    path: "/contact",
    meta: { root: "Home", current: "Contact" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/contactUs.vue") }],
  },
  {
    path: "/terms",
    meta: { root: "Home", current: "Terms" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/terms.vue") }],
  },
  {
    path: "/login",
    meta: { root: "Home", current: "Login" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/login.vue") }],
    path: "/ripening-tips",
    meta: { root: "Home", current: "ripening-tips" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/ripeningTips.vue") },
    ],
  },
  {
    path: "/harvesting-process",
    meta: { root: "Home", current: "Harvesting Process" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/harvestingProcess.vue") },
    ],
  },
  {
    path: "/mango-picking",
    meta: { root: "Home", current: "Mango Picking" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/mangoPicking.vue") }],
  },
  {
    path: "/dev",
    meta: { root: "Home", current: "dev" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/homePage/homeWrapper.vue"),
      },
    ],
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
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
