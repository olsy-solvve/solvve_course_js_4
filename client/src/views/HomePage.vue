<template>
  <section class="py-5 my-5">
    <div class="container">
      <div
        class="section-content flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap md:justify-content-center sm:justify-content-center gap-3 mb-4"
      >
        <div class="flex flex-column gap-3">
          <h1 class="text-5xl">
            We help reunite lost pets with their families.
          </h1>
          <p class="text-2xl mr-6">
            Enter a photo of your missing pet and search our national lost and
            found pet database to find them.
          </p>
          <div
            class="section-controls flex flex-grow-1 align-items-end gap-4 mb-5"
          >
            <PrimeButton>Found Pet</PrimeButton>
            <PrimeButton
              ><router-link to="/lost">Lost Pet</router-link></PrimeButton
            >
          </div>
        </div>
        <div class="section-head-img flex align-items-start">
          <img class="w-full" :src="dog01" />
        </div>
      </div>
    </div>
  </section>
  <section class="section-carousel my-8">
    <div class="container">
      <PrimeCarousel
        :value="pets"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div @click="openDescriptWindow(slotProps.data)">
            <div class="flex">
              <img class="w-full" :src="slotProps.data.img" />
            </div>
            <div class="info-block">
              <div class="status-info">{{ slotProps.data.status }} pet</div>
              <div class="period-info">{{ slotProps.data.periodInfo }}</div>
            </div>
          </div>
        </template>
      </PrimeCarousel>
    </div>
  </section>

  <PrimeDialog
    v-model:visible="displayDescriptWindow"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '30vw' }"
  >
    <img class="img-descpipt" :src="currentData.img" :alt="currentData.name" />
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
  </PrimeDialog>
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
          status: "Found",
          animal: "Cat",
          gender: "Female",
          periodInfo: "Found 5 days ago",
          description: "Black little",
          breed: "Poodle",
        },
        {
          id: 2,
          img: images.car02,
          name: "Barsik",
          status: "Lost",
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
          status: "Found",
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
          status: "Found",
          animal: "Cat",
          gender: "Female",
          periodInfo: "Found 3 days ago",
          description: "Little gray cat",
          link: "/found",
        },
        {
          id: 5,
          img: images.car05,
          status: "Found pet",
          name: "Tom",
          animal: "Cat",
          gender: "Male",
          periodInfo: "Found 2 days ago",
          description: "Big fluffy cat",
          link: "/lost",
        },
        {
          id: 6,
          img: images.car06,
          name: "Mars",
          status: "Lost",
          animal: "Dog",
          gender: "Male",
          periodInfo: "Lost 6 days ago",
          description: "Little black dog",
          link: "/lost",
        },
      ],
      dog01: images.dog01,
      displayDescriptWindow: false,

      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
  methods: {
    openDescriptWindow(data) {
      this.currentData = data;
      this.displayDescriptWindow = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  margin: auto;
  padding: 0;
  max-width: 1170px !important;
  min-width: 320px !important;
}
.section-content {
  > * {
    flex: 1 1 50%;
  }
}

a {
  color: #fff;
  text-decoration: none;
}

h1 {
  color: rgb(36, 38, 43);
}

p {
  color: rgb(82, 91, 107);
}

.p-carousel {
  .info-block {
    border-left: 1px solid rgb(237, 237, 237);
    border-right: 1px solid rgb(237, 237, 237);
    border-bottom: 1px solid rgb(237, 237, 237);
    padding: 20px;
    background-color: #fff;
  }
  .p-carousel-item {
    img {
      border-radius: 10px 10px 0 0;
    }
  }
}

@media screen and (max-width: 575px) {
  .container {
    width: 90%;
  }

  .section-content {
    flex-wrap: wrap;
  }
}
</style>

<style lang="scss">
.p-carousel {
  .p-carousel-item {
    padding: 5px;
  }
}
.img-descpipt {
  width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-right: 2rem;
}
</style>
