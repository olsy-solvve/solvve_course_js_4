<template>
  <section class="section-list">
    <div class="page-wrapper">
      <ListOfAllPets
        :value="pets"
        :layout="layout"
        :paginator="true"
        :rows="9"
        :sortOrder="sortOrder"
        :sortField="sortField"
      >
        <template #header>
          <h1>My Pets</h1>
          <div class="grid grid-nogutter">
            <div class="col-6" style="text-align: right"></div>
          </div>
        </template>

        <template #list="slotProps">
          <div class="col-12">
            <div class="pets-list-item">
              <div class="img-block">
                <img :src="slotProps.data.img" :alt="slotProps.data.name" />
              </div>
              <div class="pets-list-detail">
                <div class="type-info">Name:</div>
                <div class="pets-name">{{ slotProps.data.name }}</div>

                <div class="status-info">
                  <p class="type-info">Status:</p>
                  {{ slotProps.data.status }}
                </div>

                <div class="type-info">
                  Animal:
                  <div class="animal">{{ slotProps.data.animal }}</div>
                </div>

                <div class="type-info">
                  Gender:
                  <div class="gender">{{ slotProps.data.gender }}</div>
                </div>

                <div class="type-info">Period:</div>
                <div class="period-info">{{ slotProps.data.periodInfo }}</div>
              </div>

              <div class="pets-list-action">
                <PrimeButton
                  label="Change Pet"
                  class="p-button-raised p-button-rounded but"
                  icon="pi pi-pencil"
                  @click="openModuleWindow"
                />
                <PrimeDialog
                  v-model:visible="displayModuleWindow"
                  header="Change Pet"
                  :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
                  :style="{ width: '50vw' }"
                >
                  <div class="field col-12 md:col-4">
                    <label class="type-info">Name</label>
                    <FormDropdown
                      v-model="selectedName"
                      :options="pets"
                      optionLabel="name"
                      :editable="true"
                    />
                  </div>

                  <div class="field col-12 md:col-4">
                    <label class="type-info">Pet Status</label>
                    <FormDropdown
                      v-model="selectedStatus"
                      :options="status"
                      optionLabel="status"
                      placeholder="Select a Status"
                    ></FormDropdown>
                  </div>

                  <div class="field col-12 md:col-4">
                    <label class="type-info">Animal</label>
                    <FormDropdown
                      v-model="selectedAnimal"
                      :options="animal"
                      optionLabel="type"
                      placeholder="Select a typr of Animal"
                    ></FormDropdown>
                  </div>

                  <div class="field col-12 md:col-4">
                    <label class="type-info">Pet Gender</label>
                    <FormDropdown
                      v-model="selectedGender"
                      :options="genders"
                      optionLabel="gen"
                      placeholder="Select a Genger"
                    ></FormDropdown>
                  </div>

                  <div class="field col-12 md:col-4">
                    <label for="date" class="type-info">Date</label>
                    <span class="p-float-label">
                      <InputText id="date" v-model="value2" type="text" />
                      <label for="date">When was pet losted</label>
                    </span>
                  </div>

                  <template #footer>
                    <PrimeButton
                      label="Cancel"
                      icon="pi pi-times"
                      @click="closeModuleWindow"
                      class="p-button-text"
                    />
                    <PrimeButton
                      label="Submit"
                      icon="pi pi-check"
                      @click="submit"
                      autofocus
                    />
                  </template>
                </PrimeDialog>
              </div>
            </div>
          </div>
        </template>
      </ListOfAllPets>
    </div>
  </section>
</template>

<script>
import images from "@/assets/images.js";
export default {
  data() {
    return {
      pets: [
        {
          id: 1,
          img: images.car01,
          name: "Lora",
          status: "Found Pet",
          animal: "Cat",
          gender: "Female",
          periodInfo: "Found 5 days ago",
          link: "/found",
        },
        {
          id: 2,
          img: images.car02,
          name: "Barsik",
          status: "Lost pet",
          animal: "Cat",
          gender: "Male",
          periodInfo: "Found 12 hours ago",
          link: "/found",
        },
        {
          id: 3,
          img: images.car03,
          name: "Sema",
          status: "Found pet",
          animal: "Cat",
          gender: "Male",
          periodInfo: "Found 7 days ago",
          link: "/lost",
        },
        {
          id: 4,
          img: images.car04,
          name: "Alisha",
          status: "Found pet",
          animal: "Cat",
          gender: "Female",
          periodInfo: "Found 3 days ago",
          link: "/found",
        },
        {
          id: 5,
          img: images.car05,
          name: "Tom",
          status: "Lost pet",
          animal: "Cat",
          gender: "Male",
          periodInfo: "Found 2 days ago",
          link: "/lost",
        },
      ],
      status: [{ status: "Found" }, { status: "Lost" }],
      animal: [{ type: "Cat" }, { type: "Dog" }],
      genders: [{ gen: "Female" }, { gen: "Male" }],
      layout: "list",
      displayModuleWindow: false,
      selectedName: null,
      selectedStatus: null,
      selectedAnimal: null,
      selectedGender: null,
    };
  },
  methods: {
    openModuleWindow() {
      this.displayModuleWindow = true;
    },
    closeModuleWindow() {
      this.displayModuleWindow = false;
    },
    submit() {
      this.pets.name = "New Name";
      this.pets.status = "New Name";
      this.pets.animal = "New Name";
      this.pets.gender = "New Name";
      this.pets.periodInfo = "New Name";
      this.closeModuleWindow();
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
.type-info {
  font-size: 1.2rem;
  font-weight: 500;
}
.pets-name {
  font-weight: 700;
}
::v-deep(.pets-list-item) {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  img {
    width: 150px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 2rem;
  }
  .pets-list-detail {
    flex: 1 1 0;
  }
  .pets-list-action {
    display: flex;
    flex-direction: column;
  }
  .p-button {
    margin-bottom: 0.5rem;
  }
}
// ::v-deep(.pets-grid-item) {
//   margin: 0.5rem;
//   border: 1px solid var(--surface-border);
//   .pets-grid-item-top,
//   .pets-grid-item-bottom {
//     display: flex;
//     align-items: center;
//   }
//   .but {
//     left: 45%;
//     margin-top: 20px;
//     margin-bottom: 20px;
//   }
//   img {
//     width: 75%;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//     margin: 2rem 0;
//   }
//   .pets-grid-item-content {
//     text-align: center;
//   }
// }
</style>
