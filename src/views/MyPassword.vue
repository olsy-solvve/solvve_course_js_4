<template>
  <div class="page-wrapper">
    <div class="flex gap-2 mb-4">
      <div class="flex flex-column gap-3 flex-initial p-2 bg-white">
        <h5>
          <router-link class="text-black-alpha-90" to="/myDashboard"
            >Pets</router-link
          >
        </h5>
        <h5>
          <router-link class="text-black-alpha-90" to="/mySettings"
            >Settings</router-link
          >
        </h5>
        <h5>
          <router-link class="text-black-alpha-90" to="/myPassword"
            >Change Password</router-link
          >
        </h5>
      </div>
      <div class="flex-auto">
        <div class="flex flex-column align-items-center gap-2">
          <div>
            <h2>Change Password</h2>
          </div>
          <div>
            <h5>Current Password</h5>
            <span>
              <InputText id="inputtext" type="password" v-model="value1" />
            </span>
          </div>
          <div>
            <h5>New Password</h5>
            <span>
              <InputText id="inputtext" type="password" v-model="value1" />
            </span>
          </div>
          <div>
            <h5>Reenter New Password</h5>
            <span>
              <InputText id="inputtext" type="password" v-model="value1" />
            </span>
          </div>
          <div>
            <MyButton
              label="Change Password"
              class="flex align-items-start mt-4 mb-2"
            >
            </MyButton>
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
</style>
