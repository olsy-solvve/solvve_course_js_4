<template>
  <header class="bg-white p-4">
    <div class="container">
      <div class="flex justify-content-center">
        <PrimeMenubar class="main-menu-burger" :model="menuItems">
          <template #start>
            <img alt="logo" :src="main_logo" height="40" class="mr-2" />
          </template>
          <template #end> </template>
        </PrimeMenubar>
      </div>
    </div>
  </header>
</template>

<script>
import images from "@/assets/images.js";

export default {
  computed: {
    isAuthUser() {
      return this.$store.getters["user/isAuthUser"];
    },
    menuItems() {
      return [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
        {
          label: "I Found a Pet",
          to: this.isAuthUser ? "/found" : "/Register",
        },
        {
          label: "I Lost a Pet",
          to: this.isAuthUser ? "/lostPet" : "/Register",
        },
        {
          label: "Pets List",
          to: "listPage",
        },
        {
          label: "My Dashboard",
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
  data() {
    return {
      main_logo: images.main_logo,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  margin: auto;
  padding: 0;
  max-width: 1170px !important;
  min-width: 320px !important;
}
</style>

<style lang="scss">
.main-menu-burger {
  @media screen and (max-width: 960px) {
    width: 100%;
    display: grid !important;
    grid-template-columns: auto auto;
    justify-content: space-between;
  }

  .p-menubar-root-list {
    @media screen and (max-width: 960px) {
      width: 138px !important;
      left: auto !important;
      right: 0;
    }
  }
}
</style>
