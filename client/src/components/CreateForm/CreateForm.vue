<template>
  <div class="my-7">
    <form
      @submit.prevent="onSubmit"
      class="solvve-form flex flex-column justify-content-center align-items-center"
    >
      <div class="solvve-form-type flex w-full">
        <div
          v-for="item of status"
          :key="item.key"
          class="field-radiobutton"
          style="margin-right: 5px"
        >
          <FormRadioButton
            :inputId="item.key"
            @change="onChange()"
            name="item"
            :value="item.name"
            v-model="selectedStatus"
          />
          <label :for="item.key">{{ "  " + item.name }}</label>
        </div>
      </div>
      <div class="solvve-form-name flex flex-column w-full mb-3">
        <InputText type="text" v-model="name" placeholder="Name (Optional)" />
      </div>
      <div class="solvve-form-pet flex flex-column w-full mb-3">
        <FormDropdown
          v-model="petType"
          :options="petTypes"
          optionLabel="name"
          optionValue="code"
          placeholder="Type (Optional)"
        />
      </div>
      <div class="solvve-form-gender flex flex-column w-full mb-3">
        <FormDropdown
          v-model="gender"
          :options="genders"
          optionLabel="name"
          optionValue="code"
          placeholder="Gender (Optional)"
        />
      </div>
      <div class="solvve-form-date flex flex-column w-full mb-3">
        <FormCalendar
          v-model="date"
          :showTime="true"
          dateFormat="dd.mm.yy"
          placeholder="Found Date"
        />
      </div>
      <div class="solvve-form-area flex flex-column w-full mb-3">
        <FormTextarea
          v-model="info"
          :autoResize="true"
          rows="5"
          placeholder="Add any character traits (shy, friendly, etc.) or important information that would help someone find a pet."
        />
      </div>
      <PhotoUploader v-model="files" />
      <PrimeButton
        class="solvve-form-btn w-full max-w-12rem"
        label="Create"
        type="submit"
        :disabled="isButtonDisabled"
      />
    </form>
    <PrimeToast />
  </div>
</template>

<script>
import PhotoUploader from "./PhotoUploader.vue";
import { useRouter, useRoute } from "vue-router";
import { computed, ref } from "vue";
import myAxios from "../../axios";
import { useToast } from "primevue/usetoast";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const toast = useToast();

    const info = ref("");
    const date = ref();
    const gender = ref();
    const name = ref();
    const files = ref([]);
    const petType = ref();

    const status = ref([
      { name: "Found", key: "F" },
      { name: "Lost", key: "L" },
    ]);

    const genders = ref([
      { name: "Male", code: "Male" },
      { name: "Female", code: "Female" },
    ]);

    const petTypes = ref([
      { name: "Cat", code: "Cat" },
      { name: "Dog", code: "Dog" },
      { name: "Bird", code: "Bird" },
      { name: "Rodent", code: "Rodent" },
      { name: "Other", code: "Other" },
    ]);

    //this property returns the desired value of the radio button depending on the route
    const selectedStatus = computed(() => {
      if (route.path === "/found") {
        return status.value[0].name;
      } else if (route.path === "/lostPet") {
        return status.value[1].name;
      }
      return "";
    });

    //this function switches to the desired route depending on the selected radio button
    const onChange = () => {
      if (route.path === "/found") {
        router.push("/lostPet");
      } else if (route.path === "/lostPet") {
        router.push("/found");
      }
    };

    //this property disable submit button if pic more than 3
    const isButtonDisabled = computed(() =>
      files.value.length <= 3 ? false : true
    );

    const showMessage = (type, text) => {
      toast.add({
        severity: type,
        summary: "Error Message",
        detail: text,
        life: 3000,
      });
    };

    //this function creates a new pet, creates an object from the input and sends it to the back
    const onSubmit = async () => {
      try {
        const formData = new FormData();
        formData.append("date", date.value);
        formData.append("gender", gender.value);
        formData.append("info", info.value);
        formData.append("name", name.value);
        formData.append("petType", petType.value);
        formData.append("status", selectedStatus.value);
        files.value.forEach((item) => {
          formData.append("photos", item);
          formData.append("image", item.name);
        });

        await myAxios.post("createPet", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        showMessage("success", "Created");
        setTimeout(() => {
          router.push("/myDashboard");
        }, 1000);
      } catch (e) {
        if ((e.response.status = 500)) {
          showMessage("error", "It's not an image");
          files.value = [];
        }
      }
    };

    return {
      //variables
      info,
      date,
      gender,
      name,
      files,
      petType,
      status,
      genders,
      petTypes,
      //computed
      selectedStatus,
      isButtonDisabled,
      //functions
      onChange,
      onSubmit,
    };
  },
  components: {
    PhotoUploader,
  },
};
</script>

<style lang="scss" scoped>
.solvve-form {
  max-width: 48rem;
  margin: 0 auto 1.25rem;
}

@media (max-width: 49rem) {
  .solvve-form {
    margin: 0 0.625rem 1.25rem;
  }
}
</style>
