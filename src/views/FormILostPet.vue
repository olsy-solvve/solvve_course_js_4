<template>
  <Chips v-model="value" />
</template>

<script>
export default {
  data() {
    return {
      value: [],
    };
  },
  methods: {
    onChange(e) {
      this.value = e.value;
    },
  },
};
</script>
