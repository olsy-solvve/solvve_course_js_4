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
          <div class="flex">
            <img class="w-full" :src="slotProps.data.img" />
          </div>
          <div class="info-block">
            <div class="status-info">{{ slotProps.data.status }}</div>
            <div class="period-info">{{ slotProps.data.periodInfo }}</div>
          </div>
        </template>
      </PrimeCarousel>
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
          status: "Found Pet",
          periodInfo: "Found 5 days ago",
          breed: "Poodle",
        },
        {
          id: 2,
          img: images.car02,
          status: "Found pet",
          periodInfo: "Found 12 hours ago",
          link: "/found",
        },
        {
          id: 3,
          img: images.car03,
          status: "Found pet",
          periodInfo: "Found 7 days ago",
          link: "/lost",
        },
        {
          id: 4,
          img: images.car04,
          status: "Found pet",
          periodInfo: "Found 3 days ago",
          link: "/found",
        },
        {
          id: 5,
          img: images.car05,
          status: "Lost pet",
          periodInfo: "Found 2 days ago",
          link: "/lost",
        },
      ],
      dog01: images.dog01,

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
</style>
