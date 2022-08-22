<template>
  <div class="page-wrapper">
    <div class="section-content">
      <div class="menu-dash">
        <h5><router-link to="/myDashboard">Pets</router-link></h5>
        <h5><router-link to="/mySettings">Settings</router-link></h5>
      </div>
      <div class="button-dash">
        <MyButton label="+Add a Pet" class="p-button-rounded"></MyButton>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
.section-content {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  > * {
    flex: 1 1 50%;
  }
}

.p-button-rounded {
  display: flex;
  align-items: flex-start;
  margin-left: -100px;
}

.menu-dash {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
