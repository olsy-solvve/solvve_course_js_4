import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Register from "../views/Register.vue";
import LostPet from "../views/LostPet.vue";
import FormIFoundPet from "../views/FormIFoundPet.vue";
import FormILostPet from "../views/FormILostPet.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/lost",
    name: "LostPet",
    component: LostPet,
  },

  {
    path: "/found",
    name: "iFoundAPet",
    component: FormIFoundPet,
  },

  {
    path: "/lostPet",
    name: "iLostAPet",
    component: FormILostPet,
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
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
