<template>
  <div class="page-wrapper mx-auto my-0">
    <div class="flex gap-2 mb-4">
      <MyDashboardMenu />
      <div class="flex-auto">
        <h2 class="text-center">My Pets</h2>
        <div class="flex justify-content-center gap-5">
          <div class="text-center mt-4">
            <PrimeButton label="+Add a lost pet" />
          </div>
          <div class="text-center mt-4 mb-2">
            <PrimeButton label="+Add a found pet" />
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-4 border-round-md p-5 bg-white">
      <OrderList v-model="pets" listStyle="height:auto" dataKey="id">
        <template #header> A list of my pets </template>
        <template #item="slotProps">
          <div class="product-item flex align-items-center w-full p-2">
            <div class="image-container">
              <img
                class="w-full mr-1"
                src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                :alt="slotProps.item.status"
              />
            </div>
            <div class="flex flex-column gap-1 ml-2 mb-2">
              <small>
                <span class="font-bold">Name: </span>{{ slotProps.item.name }}
              </small>
              <small>
                <span class="font-bold">Status: </span
                >{{ slotProps.item.status }}
              </small>
              <small>
                <span class="font-bold">Animal:</span>
                {{ slotProps.item.animal }}
              </small>
              <small>
                <span class="font-bold">Gender:</span>
                {{ slotProps.item.gender }}
              </small>
              <small>
                <span class="font-bold">Period:</span>
                {{ slotProps.item.periodInfo }}
              </small>
            </div>
            <div class="flex-auto">
              <div class="flex justify-content-end">
                <div class="text-center mt-4 mb-4">
                  <PrimeButton label="Delete Pet" />
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

export default {
  components: {
    MyDashboardMenu,
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
</style>
