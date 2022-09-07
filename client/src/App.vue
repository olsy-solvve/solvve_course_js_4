<script>
import ComponentHeader from "@/components/ComponentHeader.vue";
import ComponentFooter from "@/components/ComponentFooter.vue";

export default {
  components: {
    ComponentHeader,
    ComponentFooter,
  },
};
</script>

<template>
  <div>
    <ComponentHeader></ComponentHeader>
    <router-view></router-view>
    <ComponentFooter></ComponentFooter>
  </div>
</template>

<style scoped></style>
