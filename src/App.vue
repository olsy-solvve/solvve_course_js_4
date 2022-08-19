<script>
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentMain from "./components/ComponentMain.vue";
import ComponentFooter from "./components/ComponentFooter.vue";

export default {
  components: {
    ComponentHeader,
    ComponentMain,
    ComponentFooter,
  },
};
</script>

<template>
  <div>
    <ComponentHeader></ComponentHeader>
    <ComponentMain></ComponentMain>
    <ComponentFooter></ComponentFooter>

    <router-view></router-view>
  </div>
</template>

<style scoped></style>
