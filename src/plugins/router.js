import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import NotFound from "../views/NotFound.vue";
import RegisterForm from "../views/RegisterForm.vue";
import LostPet from "../views/LostPet.vue";
import FormCreatePet from "../views/FormCreatePet.vue";
import ListPage from "../views/ListPage.vue";
import MyDashboard from "../views/MyDashboard.vue";
import MySettings from "../views/MySettings.vue";
import MyPassword from "../views/MyPassword.vue";
import MyRegister from "../views/MyRegister.vue";

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
    component: FormCreatePet,
  },

  {
    path: "/lostPet",
    name: "iLostAPet",
    component: FormCreatePet,
  },

  {
    path: "/listPage",
    name: "ListPage",
    component: ListPage,
  },
  {
    path: "/myDashboard",
    name: "MyDashboard",
    component: MyDashboard,
  },

  {
    path: "/mySettings",
    name: "MySettings",
    component: MySettings,
  },

  {
    path: "/myPassword",
    name: "MyPassword",
    component: MyPassword,
  },
  // catch 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/register",
    name: "RegisterForm",
    component: RegisterForm,
    beforeEnter: [isAuth],
  },
  {
    path: "/chage",
    name: "MyRegister",
    component: MyRegister,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
