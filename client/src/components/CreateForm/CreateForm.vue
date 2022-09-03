<template>
  <div>
    <form @submit.prevent="onSubmit" class="form">
      <div class="form-type">
        <div
          v-for="item of types"
          :key="item.key"
          class="field-radiobutton"
          style="margin-right: 5px"
        >
          <FormRadioButton
            :inputId="item.key"
            @change="onChange()"
            name="item"
            :value="item.name"
            v-model="selectedType"
          />
          <label :for="item.key">{{ "  " + item.name }}</label>
        </div>
      </div>
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
      <PrimeButton
        class="form-btn"
        label="Submit"
        type="submit"
        :disabled="isButtonDisabled"
      />
    </form>
  </div>
</template>

<script>
import PhotoUploader from "./PhotoUploader.vue";
import { useRouter, useRoute } from "vue-router";
import { computed, ref } from "vue";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    const info = ref("");
    const date = ref();
    const gender = ref();
    const files = ref([]);

    const isButtonDisabled = computed(() =>
      files.value.length <= 3 ? false : true
    );

    const types = ref([
      { name: "Found", key: "F" },
      { name: "Lost", key: "L" },
    ]);

    // const selectedType = ref(types.value[0].name);
    const selectedType = computed(() => {
      if (route.path === "/found") {
        return types.value[0].name;
      } else if (route.path === "/lostPet") {
        return types.value[1].name;
      }
      return "";
    });

    const genders = ref([
      { name: "Male", code: "Male" },
      { name: "Female", code: "Female" },
    ]);

    const onSubmit = () => {
      const formData = new FormData();
      formData.append("files", files.value);
      formData.append("date", date.value);
      formData.append("gender", gender.value);
      formData.append("info", info.value);
      formData.append("type", selectedType.value);

      for (var value of formData.values()) {
        console.log(value);
      }

      router.push("/");
    };

    const onChange = () => {
      if (route.path === "/found") {
        router.push("/lostPet");
      } else if (route.path === "/lostPet") {
        router.push("/found");
      }
    };

    return {
      types,
      selectedType,
      files,
      info,
      date,
      gender,
      genders,
      isButtonDisabled,
      onSubmit,
      onChange,
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

  &-type {
    display: flex;
    justify-content: start;
    width: 100%;
    margin-bottom: 10px;
  }

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
