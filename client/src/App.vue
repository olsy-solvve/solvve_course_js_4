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
  <div class="wrapper">
    <ComponentHeader></ComponentHeader>
    <router-view class="wrapper__main"></router-view>
    <ComponentFooter></ComponentFooter>
    <PrimeToast />
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    &__main {
      flex: 1 1 auto;
    }
  }
</style>
