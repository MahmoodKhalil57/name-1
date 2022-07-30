const routes = [
  {
    path: "/",
    meta: { current: "Home" },
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
  },
  {
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
    path: "/refund",
    meta: { root: "Home", current: "Refund" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/refundPolicy.vue") }],
  },
  {
    path: "/privacy",
    meta: { root: "Home", current: "Privacy" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/privacyPolicy.vue") },
    ],
  },
  {
    path: "/shipping",
    meta: { root: "Home", current: "Shipping" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/shippingPolicy.vue") },
    ],
  },
  {
    path: "/shop",
    meta: { root: "Home", current: "Shop" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/shopPage.vue") }],
  },
  {
    path: "/alphonso",
    meta: { root: "Home", current: "Alphonso" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/defaultProducts.vue") },
    ],
  },
  {
    path: "/rajgira-lalbagh-mango",
    meta: { root: "Home", current: "Rajgira Lalbagh Mango" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/defaultProducts.vue") },
    ],
  },
  {
    path: "/totapuri",
    meta: { root: "Home", current: "Totapuri" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/defaultProducts.vue") },
    ],
  },
  {
    path: "/romania-apple-mango",
    meta: { root: "Home", current: "Romania Apple Mango" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/defaultProducts.vue") },
    ],
  },
  {
    path: "/neelam",
    meta: { root: "Home", current: "Neelam" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/defaultProducts.vue") },
    ],
  },
  {
    path: "/malika",
    meta: { root: "Home", current: "Malika" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/defaultProducts.vue") },
    ],
  },
  {
    path: "/mulgoba",
    meta: { root: "Home", current: "Mulgoba" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/defaultProducts.vue") },
    ],
  },
  {
    path: "/banganapalli",
    meta: { root: "Home", current: "Banganapalli" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/defaultProducts.vue") },
    ],
  },
  {
    path: "/mallika",
    meta: { root: "Home", current: "Mallika" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/defaultProducts.vue") },
    ],
  },
  {
    path: "/dev",
    meta: { root: "Home", current: "Dev" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [
      { path: "", component: () => import("pages/testPage.vue") },
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
    meta: { root: "Home", current: "Gallery" },
    component: () => import("layouts/defaultLayout.vue"),
    children: [{ path: "", component: () => import("pages/galleryPage.vue") }],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
