<template>
  <div class="signin_container my-7">
    <VeeForm @submit="Login" :validation-schema="formSchema">
      <h1>Sign in</h1>

      <div class="form-group">
        <Field name="email" v-slot="{ field, errors, errorMessage }">
          <label for="email">Email</label>
          <InputText
            type="text"
            id="email"
            class="form-control"
            placeholder="Enter your email"
            v-bind="field"
            :class="{ 'p-invalid': errors.length }"
          />
          <small v-if="errors.length" id="email-help" class="p-error">
            {{ errorMessage }}
          </small>
        </Field>
      </div>

      <div class="form-group">
        <Field name="password" v-slot="{ field, errors, errorMessage }">
          <label for="password">Password</label>
          <InputText
            type="password"
            id="password"
            class="form-control"
            placeholder="Enter your password"
            v-bind="field"
            :class="{ 'p-invalid': errors.length }"
          />
          <small v-if="errors.length" id="password-help" class="p-error">
            {{ errorMessage }}
          </small>
        </Field>
      </div>

      <PrimeButton
        type="submit"
        class="btn mb-3 btn-block"
        :label="'Sign in'"
      />
      <div class="flex justify-content-center mb-4 gap-1">
        <h4>Is this your first time here?</h4>
        <h4>
          <router-link class="text-blue-600" to="/registerForm"
            >Sing up!</router-link
          >
        </h4>
      </div>
    </VeeForm>
  </div>
</template>

<script>
import { Field, Form as VeeForm } from "vee-validate";
import * as yup from "yup";
import InputText from "primevue/inputtext";

export default {
  components: {
    Field,
    VeeForm,
    InputText,
  },
  data() {
    return {
      formSchema: {
        email: yup
          .string()
          .required("Email is required")
          .email("Not a valid email"),
        password: yup.string().required("Password is required"),
      },
    };
  },
  methods: {
    randomUserToken() {
      return Math.random().toString(36).substr(2);
    },
    setUserToken() {
      const token = this.randomUserToken() + this.randomUserToken();
      this.$store.commit("user/setToken", token);
    },
    // values = { email, password } can be set in store
    Login(values, { resetForm }) {
      this.setUserToken();
      resetForm();
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
@import "./SignInForm.css";
</style>
