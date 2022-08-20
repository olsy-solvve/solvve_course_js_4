<script>
export default {
    data() {
        return {
            items: [
                {
					label:'Home',
					icon:'pi pi-fw pi-home',
          routerLink:'/'
                },
                {
					label:'I Found a Pet',
					icon:'pi pi-fw pi-plus',
          routerLink:'/:catchAll(.*)'
                },
                {
					label:'I Lost a Pet',
					icon:'pi pi-fw pi-minus',
          routerLink:'/lost'
                },
                {
					label:'Search',
					icon:'pi pi-fw pi-search',
                },
                {
					label:'Log In',
					icon:'pi pi-fw pi-sign-in',
                }
            ]
        }
    }
}
</script>

<template>
  <header>
    <nav>
      <MyMenubar :model="items" />
    </nav>
  </header>
</template>

<style scoped>
  header {
    background-color: #eee;
    padding: 0.5rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  nav > * {
    margin: 0.5rem;
  }
</style>
