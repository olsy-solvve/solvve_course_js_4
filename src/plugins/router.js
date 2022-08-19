import { createRouter, createWebHistory } from "vue-router";
// Change ComponentMain to Home page when create it
import ComponentMain from "../components/ComponentMain.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ComponentMain,
  },
  // catch 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
