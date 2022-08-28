<template>
  <div class="page-wrapper">
    <div class="section-content">
      <div class="menu-dash">
        <h5><router-link to="/myDashboard">Pets</router-link></h5>
        <h5><router-link to="/mySettings">Settings</router-link></h5>
        <h5><router-link to="/myPassword">Change Password</router-link></h5>
      </div>
      <div class="settings-form">
        <div class="container-password-form">
          <div>
            <h2 class="sett-text">Change Password</h2>
          </div>
          <div class="field col-12 md:col-4 first-name">
            <h5>Current Password</h5>
            <span class="p-float-label">
              <InputText id="inputtext" type="password" v-model="value1" />
            </span>
          </div>
          <div class="field col-12 md:col-4 last-name">
            <h5>New Password</h5>
            <span class="p-float-label">
              <InputText id="inputtext" type="password" v-model="value1" />
            </span>
          </div>
          <div class="field col-12 md:col-4 email-line">
            <h5>Reenter New Password</h5>
            <span class="p-float-label">
              <InputText id="inputtext" type="password" v-model="value1" />
            </span>
          </div>
          <div class="sett-button">
            <MyButton label="Change Password" class="p-button"> </MyButton>
          </div>
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
}

.container-password-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.settings-form {
  flex: 1 1 auto;
}

.p-button {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
}

.menu-dash {
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 0 0 160px;
  background-color: #fff;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: green;
}
</style>
