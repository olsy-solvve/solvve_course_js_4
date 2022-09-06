<template>
  <div class="page-wrapper mx-auto my-0">
    <div class="flex gap-2 mb-4">
      <MyDashboardMenu />
      <div class="flex-auto">
        <h2 class="text-center">My Pets</h2>
        <div class="flex justify-content-center gap-1">
          <form id="form">
            <PrimeDialog v-model:visible="display1">
              <template #header>
                <h3>Add a pet</h3>
              </template>
              <div>
                <h5>Pet Name</h5>
                <InputText
                  type="text"
                  v-model="name"
                  placeholder="Enter pet name"
                />
              </div>
              <div>
                <h5>Pet Status</h5>
                <FormDropdown
                  v-model="status"
                  :options="changeStatus"
                  optionLabel="name"
                  placeholder="Select a status"
                />
              </div>
              <div>
                <h5>Pet Gender</h5>
                <FormDropdown
                  v-model="gender"
                  :options="changeGender"
                  optionLabel="name"
                  placeholder="Select a gender"
                />
              </div>
              <div>
                <h5>Animal</h5>
                <FormDropdown
                  v-model="animal"
                  :options="changeAnimal"
                  optionLabel="name"
                  placeholder="Select animal"
                />
              </div>
              <div>
                <h5>Date</h5>
                <FormCalendar
                  v-model="periodInfo"
                  autocomplete="off"
                  placeholder="When a pet is lost"
                />
              </div>
              <template #footer>
                <PrimeButton
                  label="Add"
                  icon="pi pi-check"
                  class="flex justify-content-center w-full"
                  @click="
                    () =>
                      addToList({
                        periodInfo,
                        animal,
                        gender,
                        name,
                        status,
                      })
                  "
                />
              </template>
            </PrimeDialog>
          </form>
          <div class="text-center mt-4">
            <PrimeButton @click="addPet()" label="Add a pet" />
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-4 border-round-md p-5 bg-white">
      <OrderList v-model="pets" listStyle="height:auto">
        <template #header> A list of my pets </template>
        <template #item="slotProps">
          <div class="product-item flex align-items-center w-full p-2">
            <div class="image-container w-3">
              <img
                class="w-full mr-1"
                :src="slotProps.item.img"
                :alt="slotProps.item.status"
              />
            </div>
            <div class="flex flex-column gap-1 ml-2 mb-2">
              <small>
                <span class="font-bold">Name: </span>{{ slotProps.item.name }}
              </small>
              <small>
                <span class="font-bold">Status: </span
                >{{ slotProps.item.status.name }}
              </small>
              <small>
                <span class="font-bold">Animal:</span>
                {{ slotProps.item.animal.name }}
              </small>
              <small>
                <span class="font-bold">Gender:</span>
                {{ slotProps.item.gender.name }}
              </small>
              <small>
                <span class="font-bold">Period:</span>
                {{ slotProps.item.periodInfo }}
              </small>
              <small>
                <span class="font-bold">ID:</span>
                {{ slotProps.item.id }}
              </small>
            </div>
            <div class="flex-auto">
              <div class="flex justify-content-end">
                <div class="text-center mt-4 mb-4">
                  <PrimeButton
                    @click="
                      () =>
                        deleteFromList({
                          id,
                        })
                    "
                    label="Delete Pet"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
      </OrderList>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import MyPetsList from "@/my_pets_list/MyPetsList";
import MyDashboardMenu from "../components/MyDashboardMenu/MyDashboardMenu.vue";
import uniqueid from "uniqueid";

let id = uniqueid(null, "suffix");

export default {
  components: {
    MyDashboardMenu,
  },

  data() {
    return {
      display1: false,
      periodInfo: null,
      name: null,
      status: null,
      gender: null,
      animal: null,

      changeStatus: [{ name: "Lost Pet" }, { name: "Found Pet" }],
      changeGender: [{ name: "Male" }, { name: "Female" }],
      changeAnimal: [{ name: "Dog" }, { name: "Cat" }],
    };
  },

  methods: {
    async deleteFromList(data) {
      await this.petsList.deleteFromList(data);
      this.showList();
    },

    showList() {
      this.petsList.getPetsList().then((data) => (this.pets = data));
    },

    async addToList(data) {
      data.id = id();
      await this.petsList.addToList(data);
      this.showList();
      this.status = "";
      this.periodInfo = "";
      this.animal = "";
      this.gender = "";
      this.name = "";
      this.display1 = false;
    },

    addPet() {
      this.display1 = true;
    },
    closeBasic() {
      this.display1 = false;
    },
  },

  setup() {
    onMounted(() => {
      petsList.value.getPetsList().then((data) => (pets.value = data));
    });

    const pets = ref(null);
    const petsList = ref(new MyPetsList());

    return { pets, petsList };
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 900px;
}
.card {
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
}
.product-item {
  img {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
}

p {
  margin: 0;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-dialog .p-button {
  min-width: 6rem;
}
</style>
