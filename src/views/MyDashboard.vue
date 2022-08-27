<template>
  <div class="page-wrapper">
    <div class="section-content">
      <div class="menu-dash">
        <h5><router-link to="/myDashboard">Pets</router-link></h5>
        <h5><router-link to="/mySettings">Settings</router-link></h5>
        <h5><router-link to="/myPassword">Change Password</router-link></h5>
      </div>
      <div class="container-pets">
        <h2 class="pets-text">My Pets</h2>
        <div class="button-dash">
          <MyButton label="+Add a lost pet" class="p-button"></MyButton>
        </div>
        <div class="button-dash">
          <MyButton label="+Add a found pet" class="p-button"></MyButton>
        </div>
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
}

.button-dash {
  text-align: center;
  margin-top: 20px;
}

.menu-dash {
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 0 0 160px;
  background-color: #fff;
}

.pets-text {
  text-align: center;
}

.container-pets {
  flex: 1 1 auto;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: green;
}
</style>
