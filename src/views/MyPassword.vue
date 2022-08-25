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
            <PasswordForm v-model="value1" :feedback="false" toggleMask />
          </div>
          <div>
            <h5>New Password</h5>
            <PasswordForm v-model="value4" toggleMask>
              <template #header>
                <h6>Pick a password</h6>
              </template>
              <template #footer="sp">
                {{ sp.level }}
                <FormDivider />
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                  <li>At least one lowercase</li>
                  <li>At least one uppercase</li>
                  <li>At least one numeric</li>
                  <li>Minimum 8 characters</li>
                </ul>
              </template>
            </PasswordForm>
          </div>
          <div>
            <h5>Reenter New Password</h5>
            <PasswordForm v-model="value2" :feedback="false" toggleMask />
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

<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      value4: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
