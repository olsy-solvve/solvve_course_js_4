import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import NotFound from "../views/NotFound.vue";
import RegisterForm from "../views/RegisterForm.vue";
import LostPet from "../views/LostPet.vue";
import FormIFoundPet from "../views/FormIFoundPet.vue";
import FormILostPet from "../views/FormILostPet.vue";
import ListPage from "../views/ListPage.vue";

const isAuth = () => {
  const isAuth = localStorage.getItem("token");
  if (isAuth) return "/";
  return true;
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
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

  {
    path: "/listPage",
    name: "ListPage",
    component: ListPage,
  },

  {
    path: "/register",
    name: "Register",
    component: RegisterForm,
    beforeEnter: [isAuth],
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
