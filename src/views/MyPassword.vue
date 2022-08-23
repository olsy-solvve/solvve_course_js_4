<template>
  <div class="page-wrapper">
    <div class="section-content">
      <div class="menu-dash">
        <h5><router-link to="/myDashboard">Pets</router-link></h5>
        <h5><router-link to="/mySettings">Settings</router-link></h5>
        <h5><router-link to="/myPassword">Change Password</router-link></h5>
      </div>
      <div class="settings-form">
        <div class="card">
          <div>
            <h2 class="sett-text">Change Password</h2>
          </div>
          <div>
            <h5 class="pass-text-top">Current Password</h5>
            <PrimePassword
              v-model="value1"
              :feedback="false"
              class="pass-center"
            />
            <h5 class="pass-text">New Password</h5>
            <PrimePassword
              v-model="value1"
              :feedback="false"
              class="pass-center"
            />
            <h5 class="pass-text">Reenter New Password</h5>
            <PrimePassword
              v-model="value1"
              :feedback="false"
              class="pass-center"
            />
          </div>
        </div>
        <div class="sett-button">
          <MyButton label="Change Password" class="p-button-rounded">
          </MyButton>
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

  > * {
    flex: 1 1 50%;
  }
}

.p-button-rounded {
  display: flex;
  align-items: flex-start;
  margin-left: -100px;
}

.p-button {
  margin-top: 50px;
  margin-left: -120px;
}

.menu-dash {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sett-text {
  margin-left: -135px;
}

.pass-center {
  display: flex;
  margin-bottom: 10px;
  margin-left: -140px;
}

.pass-text {
  display: flex;
  margin-left: -130px;
  margin-top: 10px;
}
.pass-text-top {
  display: flex;
  margin-left: -130px;
  margin-top: 30px;
}
</style>
