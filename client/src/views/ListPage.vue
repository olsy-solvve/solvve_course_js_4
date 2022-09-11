<template>
  <section class="section-list mt-6">
    <div class="page-wrapper">
      <ListOfAllPets :value="pets" :layout="layout" :paginator="true" :rows="4">
        <template #header>
          <h1>My Pets</h1>
          <PrimeButton @click="addPet()" label="Add a pet" />
        </template>

        <template #list="slotProps">
          <div class="col-12">
            <div
              class="pets-list-item"
              @click.self="openDescriptWindow(slotProps.data)"
            >
              <div class="img-block">
                <img :src="slotProps.data.img" :alt="slotProps.data.name" />
              </div>
              <div class="pets-list-detail">
                <div class="type-info">
                  Name :
                  <span class="pets-name">{{ slotProps.data.name }}</span>
                </div>
                <div class="type-info">
                  Status :
                  <span class="status">{{ slotProps.data.status }}</span>
                </div>
              </div>
              <div class="pets-list-action">
                <PrimeButton
                  label="Delete pet"
                  icon="pi pi-trash"
                  class="p-button-raised p-button-rounded"
                  @click="deleteAnimal(slotProps.data.id)"
                />
              </div>
            </div>
          </div>
        </template>
      </ListOfAllPets>

      <PrimeDialog
        v-model:visible="displayDescriptWindow"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }"
      >
        <img
          class="img-descpipt"
          :src="currentData.img"
          :alt="currentData.name"
        />
        <div class="type-info">
          Name : <span class="pets-name">{{ currentData.name }}</span>
        </div>
        <div class="type-info">
          Status : <span class="status">{{ currentData.status }}</span>
        </div>
        <div class="type-info">
          Animal : <span class="animal">{{ currentData.animal }}</span>
        </div>
        <div class="type-info">
          Gender : <span class="gender">{{ currentData.gender }}</span>
        </div>
        <div class="type-info">
          Period : <span class="gender">{{ currentData.periodInfo }}</span>
        </div>
        <div class="type-info">
          ID : <span class="id">{{ currentData.id }}</span>
        </div>
        <div class="type-info">
          Description : <span class="id">{{ currentData.description }}</span>
        </div>
        <template #footer>
          <PrimeButton
            label="Change information of an pet"
            icon="pi pi-pensil"
            @click="openChangeWindow(currentData)"
          />
        </template>
      </PrimeDialog>

      <PrimeDialog
        v-model:visible="displayChangeWindow"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }"
      >
          <div class="field col-12 md:col-4">
            <label class="type-info">Pet Name</label>
            <FormDropdown
              v-model="selectedName"
              :options="pets"
              optionLabel="name"
              :editable="true"
              placeholder="Enter a name"
            />
          </div>

          <div class="field col-12 md:col-4">
            <label class="type-info">Pet Status</label>
            <FormDropdown
              v-model="selectedStatus"
              :options="status"
              optionLabel="valueStatus"
              placeholder="Select a Status"
            ></FormDropdown>
          </div>

          <div class="field col-12 md:col-4">
            <label class="type-info">Animal</label>
            <FormDropdown
              v-model="selectedAnimal"
              :options="animal"
              optionLabel="type"
              placeholder="Select a type of Animal"
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
            <label for="description" class="type-info">Description: </label>
            <span class="p-float-label">
              <InputText id="date" v-model="description" type="text" />
              <label for="date"></label>
            </span>
          </div>

          <div class="date">
            <div class="field col-12 md:col-4">
              <label for="dateformat" class="type-info">Date Information</label>
              <label for="dateformat">Date</label>
              <FormCalendar
                v-model="day"
                inputId="time12"
                dateFormat="mm-dd-yy"
                hourFormat="12"
                :showIcon="true"
              />
              <label for="dateformat">Time</label>
              <FormCalendar
                v-model="time"
                inputId="time12"
                :timeOnly="true"
                hourFormat="12"
              />
            </div>
          </div>
       
        <template #footer>
          <PrimeButton
            label="Cancel"
            icon="pi pi-times"
            @click="closeChangeWindow"
            class="p-button-text"
          />
          <PrimeButton
            label="Submit"
            icon="pi pi-check"
            @click="closeChangeWindow"
            autofocus
          />
        </template>
      </PrimeDialog>
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
          description: "Black little",
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
          description: "Fluffy gray cat",
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
          description: "Bid ginger cat",
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
          description: "Little gray cat",
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
          description: "Big fluffy cat",
          link: "/lost",
        },
      ],
      status: [{ valueStatus: "Found" }, { valueStatus: "Lost" }],
      animal: [{ type: "Cat" }, { type: "Dog" }],
      genders: [{ gen: "Female" }, { gen: "Male" }],
      layout: "list",
      displayDescriptWindow: false,
      displayChangeWindow: false,
      selectedName: null,
      selectedStatus: null,
      selectedAnimal: null,
      selectedGender: null,
      day: null,
      time: null,
      //data od period
      Description: null,
    };
  },
  methods: {
    openDescriptWindow(data) {
      this.currentData = data;
      this.displayDescriptWindow = true;
    },
    closeDescriptWindow()  {
      this.displayDescriptWindow = false;
    },

    openChangeWindow(data) {
      this.currentData = data;
      this.displayChangeWindow = true;
    },
    closeChangeWindow() {
      this.displayChangeWindow = false;
    },

    submit() {
      ///////////////////////////////
    },

    deleteAnimal(id) {
      //last element???
      this.pets.splice(id - 1, 1);
      this.showList();
    },

    showList() {
      this.$router.push("/listPage");
    },

    addPet() {
      this.$router.push("/found");
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
.img-descpipt  {
  width: 400px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-right: 2rem;
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
</style>
