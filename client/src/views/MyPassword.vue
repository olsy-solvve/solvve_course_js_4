<template>
  <div class="page-wrapper mx-auto my-0">
    <div class="flex gap-2 mb-4 mt-3">
      <MyDashboardMenu />
      <div class="my-password-content flex-auto">
        <div class="form-wrapper w-full mx-auto my-0">
          <form @submit.prevent="onSubmit">
            <div class="flex flex-column gap-2 w-full">
              <div class="ml-5">
                <h2>Change Password Form</h2>
              </div>
              <div>
                <h5>Current Password</h5>
                <PrimePassword
                  v-model="v$.form.currentPassword.$model"
                  :feedback="false"
                  :class="{
                    'p-invalid': v$.form.currentPassword.$errors.length,
                  }"
                />
                <small
                  class="p-error"
                  v-for="(error, index) of v$.form.currentPassword.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </small>
              </div>
              <div>
                <!-- Password and Confirm Password Row -->
                <h5>New Password</h5>
                <PrimePassword
                  v-model="v$.form.password.$model"
                  :feedback="false"
                  :class="{
                    'p-invalid': v$.form.password.$errors.length,
                  }"
                />
                <small
                  class="p-error"
                  v-for="(error, index) of v$.form.password.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </small>
              </div>
              <div>
                <h5>Reenter New Password</h5>
                <PrimePassword
                  @input="checkPassword()"
                  v-model="v$.form.confirmPassword.$model"
                  :feedback="false"
                  :class="{
                    'p-invalid': v$.form.confirmPassword.$errors.length,
                  }"
                />
                <small
                  class="p-error"
                  v-for="(error, index) of v$.form.confirmPassword.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </small>
              </div>
              <!-- Submit Button -->
              <div>
                <PrimeButton
                  :disabled="v$.form.$invalid"
                  label="Change Password"
                  class="flex justify-content-center w-full mt-4 mb-2"
                >
                </PrimeButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";
import MyDashboardMenu from "@/components/MyDashboardMenu/MyDashboardMenu.vue";

export default {
  components: {
    MyDashboardMenu,
  },

  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        currentPassword: "",
        password: "",
        confirmPassword: "",
      },
    };
  },

  validations() {
    return {
      form: {
        currentPassword: { required },
        password: { required, min: minLength(6) },
        confirmPassword: { required, sameAs: sameAs(this.form.password) },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 900px;
  .my-password-content {
    .form-wrapper {
      max-width: 300px;
      .p-inputwrapper {
        display: flex;
      }
    }
  }
}
</style>

<style lang="scss">
.page-wrapper {
  .my-password-content {
    .form-wrapper {
      input {
        width: 100%;
      }
    }
  }
}
</style>
