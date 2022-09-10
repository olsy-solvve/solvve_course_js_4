<template>
  <div class="page-wrapper mx-auto my-0">
    <div class="flex gap-2 mb-4">
      <MyDashboardMenu />
      <div class="flex-auto">
        <h2 class="text-center">My Pets</h2>
        <div class="flex justify-content-center gap-1">
          <div class="text-center mt-4">
            <PrimeButton @click="addPet()" label="Add a pet" />
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-4 border-round-md p-5 bg-white">
      <!-- start pets list -->
      <OrderList v-model="pets" listStyle="height:auto">
        <template #header> A list of my pets </template>
        <template #item="slotProps">
          <div class="product-item flex align-items-center w-full p-2">
            <div class="image-container w-3">
              <img 
                @click="() => showPetCard(slotProps.item.id)"
                class="w-full mr-1"
                :src="slotProps.item.image ? slotProps.item.image[0] : '../src/assets/img/cat.png'"
                :alt="slotProps.item.status"
              />
            </div>
            <div class="flex flex-column gap-1 ml-2 mb-2">
              <small v-if="slotProps.item.name !== 'undefined'">
                <span class="font-bold">Name: </span>{{ slotProps.item.name }}
              </small>
              <small>
                <span class="font-bold">Status: </span
                >{{ slotProps.item.status }}
              </small>
              <small v-if="slotProps.item.petType !== 'undefined'">
                <span class="font-bold">Animal:</span>
                {{ slotProps.item.petType }}
              </small>
              <small v-if="slotProps.item.gender !== 'undefined'">
                <span class="font-bold">Gender:</span>
                {{ slotProps.item.gender }}
              </small>
              <small v-if="slotProps.item.date !== 'undefined'">
                <span class="font-bold">Period:</span>
                {{ slotProps.item.date }}
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
                    @click="() => deleteFromList(slotProps.item.id)"
                    label="Delete Pet"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
      </OrderList>
      <!-- end pets list -->
    </div>
  </div>
  <!-- start pets detailed card  -->
  <div>
    <PrimeDialog class="mb-7" v-model:visible="display2">
      <PrimeCard style="width: 25em">
        <template #header>
          <img v-for="img in pets[petIndex].image"
            class="w-full mr-1"
            :src="img"
            :alt="pets[petIndex].status"
            v-if="pets[petIndex].image"
          />
          <img
            class="w-full mr-1"
            src="../assets/img/cat.png"
            :alt="pets[petIndex].status"
            v-else
          />
        </template>
        <template #title> Detailed Pet Description </template>
        <template #content>
          <div class="flex flex-column gap-1 ml-2 mb-2">
            <small v-if="pets[petIndex].name !== 'undefined'">
              <span class="font-bold">Name: </span>{{ pets[petIndex].name }}
            </small>
            <small>
              <span class="font-bold">Status: </span
              >{{ pets[petIndex].status }}
            </small>
            <small v-if="pets[petIndex].petType !== 'undefined'">
              <span class="font-bold">Animal:</span>
              {{ pets[petIndex].petType }}
            </small>
            <small v-if="pets[petIndex].gender !== 'undefined'">
              <span class="font-bold">Gender:</span>
              {{ pets[petIndex].gender }}
            </small>
            <small v-if="pets[petIndex].date !== 'undefined'">
              <span class="font-bold">Period:</span>
              {{ pets[petIndex].date }}
            </small>
            <small>
              <span class="font-bold">ID:</span>
              {{ pets[petIndex].id }}
            </small>
            <small class="w-23rem white-space-normal" v-if="pets[petIndex].info">
              <span class="font-bold">Description:</span>
              {{ pets[petIndex].info }}
            </small>
          </div>
        </template>
        <template #footer>
          <PrimeButton icon="pi pi-check" label="Card Editing" />
        </template>
      </PrimeCard>
    </PrimeDialog>
  </div>
  <!-- end pets detailed card -->
</template>

<script>
import { ref, onMounted } from "vue";
import MyPetsList from "@/my_pets_list/MyPetsList";
import MyDashboardMenu from "@/components/MyDashboardMenu/MyDashboardMenu.vue";
import CreateForm from "@/components/CreateForm/CreateForm.vue";

export default {
  components: {
    MyDashboardMenu,
    CreateForm
  },

  data() {
    return {
      display2: false,
    };
  },

  methods: {
    async deleteFromList(id) {
      await this.petsList.deleteFromList(id);
      this.showList();
    },

    showList() {
      this.petsList.getPetsList().then((data) => (this.pets = data));
    },

    addPet() {
      this.$router.push("/found");
    },
    showPetCard(id) {
      this.display2 = true;
      const index = this.pets.findIndex((index) => index.id === id);
      this.petIndex = index;
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
