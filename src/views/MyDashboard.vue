<template>
  <div class="page-wrapper">
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
        <div class="text-center mt-4">
          <MyButton label="+Add a lost pet"></MyButton>
        </div>
        <div class="text-center mt-4 mb-2">
          <MyButton label="+Add a found pet"></MyButton>
        </div>
      </div>
    </div>
    <OrderList class="mb-5" v-model="pets" listStyle="height:auto">
      <template #header> My Pets List </template>
      <template #item="slotProps">
        <div class="pets-item">
          <div class="pets-img">
            <img :src="slotProps.item.img" />
          </div>
          <div class="pets-info">
            <span>Pet: {{ slotProps.item.pet }}</span>
            <span>Gender: {{ slotProps.item.gender }}</span>
            <span>Status: {{ slotProps.item.status }}</span>
            <span>Period: {{ slotProps.item.periodInfo }}</span>
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
  margin: 0 auto;
}

.pets-item {
  display: flex;
  flex-direction: row;
}

.pets-img {
  max-width: 150px;
  img {
    width: 100%;
  }
}
.pets-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 10px;
}
</style>
