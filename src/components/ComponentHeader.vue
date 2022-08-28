<script>
import images from "../assets/images.js";

export default {
  data() {
    return {
      main_logo: images.main_logo,
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
        { label: "I Found a Pet", icon: "pi pi-fw pi-plus", to: "/found" },
        { label: "I Lost a Pet", icon: "pi pi-fw pi-minus", to: "/lostPet" },
        {
          label: "List With All Pets",
          icon: "pi pi-fw pi-list",
          to: "listPage",
        },
        { label: "MyDashboard", icon: "pi pi-fw pi-star", to: "/myDashboard" },
        { label: "Sing in", icon: "pi pi-fw pi-sign-in", to: "/Register" },
      ],
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="main-logo">
        <img :src="main_logo" />
      </div>
      <div class="main-menu">
        <nav>
          <MyMenu :model="items"> </MyMenu>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #f5f5f5;
  padding: 20px;
}

nav {
  display: flex;
  justify-content: center;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
