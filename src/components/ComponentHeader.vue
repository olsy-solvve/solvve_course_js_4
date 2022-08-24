<script>
export default {
  data() {
    return {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
        { label: "I Found a Pet", icon: "pi pi-fw pi-plus", to: "/found" },
        { label: "I Lost a Pet", icon: "pi pi-fw pi-minus", to: "/lostPet" },
        {
          label: "List With All Pets",
          icon: "pi pi-fw pi-list",
          to: "listPage",
        },
        { label: "Log In", icon: "pi pi-fw pi-sign-in", to: "/Register" },
      ],
    };
  },
};
</script>

<template>
  <header>
    <nav>
      <MyMenu :model="items" />
    </nav>
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
</style>
