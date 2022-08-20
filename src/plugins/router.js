import { createRouter, createWebHistory } from "vue-router";


import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // catch 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
