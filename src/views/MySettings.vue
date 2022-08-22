<template>
  <div class="page-wrapper">
    <div class="section-content">
      <div class="menu-dash">
        <h5><router-link to="/myDashboard">Pets</router-link></h5>
        <h5><router-link to="/mySettings">Settings</router-link></h5>
      </div>
      <div class="settings-form">
        <div class="card">
          <div class="p-fluid grid">
            <div class="field col-12 md:col-4">
              <span class="p-float-label">
                <InputText id="inputtext" type="text" v-model="value1" />
                <label for="inputtext">First Name</label>
              </span>
            </div>
            <div class="field col-12 md:col-4">
              <span class="p-float-label">
                <InputText id="inputtext" type="text" v-model="value1" />
                <label for="inputtext">Last Name</label>
              </span>
            </div>
            <div class="field col-12 md:col-4">
              <span class="p-float-label">
                <InputText id="inputtext" type="text" v-model="value1" />
                <label for="inputtext">Email</label>
              </span>
            </div>
            <div class="field col-12 md:col-4">
              <span class="p-float-label">
                <InputText id="inputtext" type="text" v-model="value1" />
                <label for="inputtext">Phone Number</label>
              </span>
            </div>
          </div>
        </div>
        <div>
          <MyButton label="Save Settings" class="p-button-rounded"> </MyButton>
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

.menu-dash {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
