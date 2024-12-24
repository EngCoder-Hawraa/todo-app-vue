import { createRouter, createWebHistory } from "vue-router";

// Define routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "../views/HomeView.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/show-todos",
    name: "ShowTodos",
    component: () =>
      import(/* webpackChunkName: "ShowTodos" */ "../views/ShowTodos.vue"),
    meta: {
      title: "Show Todos",
    },
  },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard (Optional: Set Page Title Dynamically)
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
