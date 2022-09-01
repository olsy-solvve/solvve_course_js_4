<template>
  <div class="page-wrapper mx-auto my-0">
    <div class="flex gap-2 mb-4">
      <div class="flex flex-column gap-3 flex-initial p-2 bg-white">
        <h5>
          <router-link class="text-black-alpha-90" to="/myDashboard"
            >Pets</router-link
          >
        </h5>
        <h5>
          <router-link class="text-black-alpha-90" to="/mySettings"
            >Settings</router-link
          >
        </h5>
        <h5>
          <router-link class="text-black-alpha-90" to="/myPassword"
            >Change Password</router-link
          >
        </h5>
      </div>
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
    <OrderList class="mb-5" v-model="pets" listStyle="height:auto">
      <template #header> My Pets List </template>
      <template #item="slotProps">
        <div class="flex flex-row">
          <div class="pets-img max-w-9rem">
            <img class="w-full" :src="slotProps.item.img" />
          </div>
          <div class="flex flex-column gap-1 mt-4 ml-2">
            <small
              ><span class="font-bold">Pet:</span>
              {{ slotProps.item.pet }}</small
            >
            <small
              ><span class="font-bold">Gender:</span>
              {{ slotProps.item.gender }}</small
            >
            <small
              ><span class="font-bold">Status:</span>
              {{ slotProps.item.status }}</small
            >
            <small
              ><span class="font-bold">Period:</span>
              {{ slotProps.item.periodInfo }}</small
            >
          </div>
        </div>
      </template>
    </OrderList>
  </div>
</template>

<script>
import images from "../assets/images.js";

export default {
  data() {
    return {
      pets: [
        {
          id: 1,
          img: images.car01,
          status: "Found Pet",
          periodInfo: "5 days ago",
          pet: "Cat",
          gender: "Famale",
        },
        {
          id: 2,
          img: images.car02,
          status: "Found pet",
          periodInfo: "12 hours ago",
          pet: "Cat",
          gender: "Famale",
        },
        {
          id: 3,
          img: images.car03,
          status: "Found pet",
          periodInfo: "7 days ago",
          pet: "Cat",
          gender: "Male",
        },
        {
          id: 4,
          img: images.car04,
          status: "Lost pet",
          periodInfo: "Found 3 days ago",
          pet: "Cat",
          gender: "Male",
        },
        {
          id: 5,
          img: images.car05,
          status: "Lost pet",
          periodInfo: "Found 2 days ago",
          pet: "Cat",
          gender: "Male",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 900px;
}
</style>
