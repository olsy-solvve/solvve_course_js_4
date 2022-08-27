<template>
  <div class="page-wrapper">
    <div class="section-content">
      <div class="menu-dash">
        <h5><router-link to="/myDashboard">Pets</router-link></h5>
        <h5><router-link to="/mySettings">Settings</router-link></h5>
        <h5><router-link to="/myPassword">Change Password</router-link></h5>
      </div>
      <div class="settings-form">
        <div class="container-settings-form">
          <div>
            <h2 class="sett-text">Contact Info Settings</h2>
          </div>
          <div class="field col-12 md:col-4 first-name">
            <h5>First Name</h5>
            <span class="p-float-label">
              <InputText id="inputtext" type="text" v-model="value1" />
            </span>
          </div>
          <div class="field col-12 md:col-4 last-name">
            <h5>Last Name</h5>
            <span class="p-float-label">
              <InputText id="inputtext" type="text" v-model="value1" />
            </span>
          </div>
          <div class="field col-12 md:col-4 email-line">
            <h5>Email</h5>
            <span class="p-float-label">
              <InputText id="inputtext" type="text" v-model="value1" />
            </span>
          </div>
          <div class="field col-12 md:col-4 phone-number">
            <h5>Phone Number</h5>
            <span class="p-float-label">
              <InputText id="inputtext" type="text" v-model="value1" />
            </span>
          </div>
          <div class="sett-button">
            <MyButton label="Save Settings" class="p-button"> </MyButton>
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
  margin-bottom: 20px;
}

.container-settings-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.p-button {
  display: flex;
  align-items: flex-start;
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

.settings-form {
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
