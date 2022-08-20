<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer>
    <div>
      <p>Use of this service, website, or application constitutes acceptance of all terms listed above</p>
      <p>Copyright &copy; {{ year }}</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #f5f5f5;
  padding: 20px;
}

p {
  text-align: center;
}


</style>
