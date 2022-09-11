<template>
  <div class="page-wrapper mx-auto my-0">
    <div class="flex gap-2 mb-4 mt-3">
      <MyDashboardMenu />
      <div class="my-settings-content flex-auto">
        <div class="form-wrapper w-full mx-auto my-0">
          <form @submit.prevent="onSubmit">
            <div class="flex flex-column gap-2 w-full">
              <div class="ml-6">
                <h2>Contact Info Settings</h2>
              </div>
              <div>
                <h5>First Name</h5>
                <span>
                  <InputText
                    id="inputtext"
                    type="text"
                    v-model="v$.form.firstName.$model"
                    :class="{
                      'p-invalid': v$.form.firstName.$errors.length,
                    }"
                  />
                  <small
                    class="p-error"
                    v-for="(error, index) of v$.form.firstName.$errors"
                    :key="index"
                  >
                    <div class="error-msg">{{ error.$message }}</div>
                  </small>
                </span>
              </div>
              <div>
                <h5>Last Name</h5>
                <span>
                  <InputText
                    id="inputtext"
                    type="text"
                    v-model="v$.form.lastName.$model"
                    :class="{
                      'p-invalid': v$.form.lastName.$errors.length,
                    }"
                  />
                  <small
                    class="input-errors"
                    v-for="(error, index) of v$.form.lastName.$errors"
                    :key="index"
                  >
                    <div class="p-error">{{ error.$message }}</div>
                  </small>
                </span>
              </div>
              <div>
                <h5>Email</h5>
                <span>
                  <InputText
                    id="inputtext"
                    type="text"
                    v-model="v$.form.email.$model"
                    :class="{
                      'p-invalid': v$.form.email.$errors.length,
                    }"
                  />
                  <small
                    class="p-error"
                    v-for="(error, index) of v$.form.email.$errors"
                    :key="index"
                  >
                    <div class="p-error">{{ error.$message }}</div>
                  </small>
                </span>
              </div>
              <div>
                <h5>Phone Number</h5>
                <span>
                  <InputMask
                    mask="+380(99) 999-9999"
                    v-model="v$.form.phone.$model"
                    :class="{
                      'p-invalid': v$.form.phone.$errors.length,
                    }"
                  />
                  <small
                    class="p-error"
                    v-for="(error, index) of v$.form.phone.$errors"
                    :key="index"
                  >
                    <div class="p-error">{{ error.$message }}</div>
                  </small>
                </span>
              </div>
              <div>
                <PrimeButton
                  :disabled="v$.form.$invalid"
                  label="Save Settings"
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
import { required, email, maxLength, minLength } from "@vuelidate/validators";
import MyDashboardMenu from "@/components/MyDashboardMenu/MyDashboardMenu.vue";

export function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
}

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
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    };
  },

  validations() {
    return {
      form: {
        firstName: {
          required,
          maxLength: maxLength(36),
          minLength: minLength(6),
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
        },
        lastName: {
          required,
          maxLength: maxLength(36),
          minLength: minLength(6),
          name_validation: {
            $validator: validName,
            $message:
              "Invalid Name. Valid name only contain letters, dashes (-) and spaces",
          },
        },
        email: {
          required,
          email,
          maxLength: maxLength(36),
          minLength: minLength(6),
        },
        phone: { required, maxLength: maxLength(17), minLength: minLength(17) },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 900px;
  .my-settings-content {
    .form-wrapper {
      max-width: 300px;
      .p-inputwrapper {
        display: flex;
      }
    }
  }
}
.p-inputtext {
  width: 300px;
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
