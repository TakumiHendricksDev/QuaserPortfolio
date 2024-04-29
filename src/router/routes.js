const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "/", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/contact",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "/contact", component: () => import("pages/ContactPage.vue") }],
  },
  {
    path: "/posts",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "/posts", component: () => import("pages/PostsPage.vue") }],
  },
  {
    path: "/posts/:id",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "/posts/:id", component: () => import("pages/PostPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
