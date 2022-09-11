<script>
import images from "@/assets/images.js";

export default {
  data() {
    return {
      main_logo: images.main_logo,
    };
  },
  computed: {
    isAuthUser() {
      return this.$store.getters["user/isAuthUser"];
    },
    menuItems() {
      return [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
        { label: "I Found a Pet", to: "/found" },
        { label: "I Lost a Pet", to: "/lostPet" },
        {
          label: "Animals",
          to: "listPage",
        },
        {
          label: "MyDashboard",
          icon: "pi pi-fw pi-star",
          to: "/myDashboard",
          visible: this.isAuthUser,
        },
        {
          label: "Sing in",
          icon: "pi pi-fw pi-sign-in",
          to: "/Register",
          visible: !this.isAuthUser,
        },
      ];
    },
  },
};
</script>

<template>
  <header class="bg-white p-4">
    <div class="container">
      <div class="flex justify-content-between">
        <div class="main-logo w-3">
          <img class="w-4rem h-auto" :src="main_logo" />
        </div>
        <div class="main-menu w-7">
          <nav class="flex justify-content-end">
            <PrimeMenu :model="menuItems"> </PrimeMenu>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.container {
  box-sizing: border-box;
  margin: auto;
  padding: 0;
  max-width: 1170px !important;
  min-width: 320px !important;
}
</style>
