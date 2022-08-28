<template>
  <div>
    <form @submit.prevent="onSubmit" class="form">
      <div class="form-gender">
        <FormDropdown
          v-model="gender"
          :options="genders"
          optionLabel="name"
          optionValue="code"
          placeholder="Gender (Optional)"
        />
      </div>
      <div class="form-date field col-12 md:col-4">
        <FormCalendar
          v-model="date"
          :showTime="true"
          dateFormat="dd.mm.yy"
          placeholder="Found Date"
        />
      </div>
      <div class="form-area">
        <FormTextarea
          v-model="info"
          :autoResize="true"
          rows="5"
          cols="100"
          placeholder="Add any character traits (shy, friendly, etc.) or important information that would help someone find a pet."
        />
      </div>
      <PhotoUploader v-model="files" />
      <MyButton
        class="form-btn"
        label="Submit"
        type="submit"
        :disabled="isButtonDisabled"
      />
    </form>
  </div>
</template>

<script>
import PhotoUploader from "../components/PhotoUploader.vue";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";

export default {
  setup() {
    const router = useRouter();

    const info = ref("");
    const date = ref();
    const gender = ref();
    const files = ref([]);
    const data = ref({});

    const isButtonDisabled = computed(() =>
      files.value.length <= 3 ? false : true
    );

    const genders = ref([
      { name: "Male", code: "Male" },
      { name: "Female", code: "Female" },
    ]);

    const onSubmit = () => {
      data.value = {
        date: date.value,
        gender: gender.value,
        info: info.value,
        files: files.value,
      };

      console.log(files.value);
      console.log(data.value);
      console.log(data.value.date);
      console.log(data.value.gender);
      console.log(data.value.info);
      console.log(data.value.files);
      router.push("/");
    };

    return {
      files,
      info,
      date,
      gender,
      genders,
      isButtonDisabled,
      onSubmit,
    };
  },
  components: {
    PhotoUploader,
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 770px;
  margin: 0 auto 20px;

  &-date {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    margin-bottom: 10px;
  }

  &-gender {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    margin-bottom: 10px;
  }

  &-btn {
    min-width: 200px;
  }
}
</style>
