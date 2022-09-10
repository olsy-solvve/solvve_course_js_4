<template>
  <section>
    <div class="page-wrapper">
      <div class="section-content flex gap-3 mb-4">
        <div class="flex flex-column gap-3">
          <h1 class="text-4xl none">
            We help reunite lost pets with their families.
          </h1>
          <h2>
            Enter a photo of your missing pet and search our national lost and
            found pet database to find them.
          </h2>
          <div class="section-controls flex flex-grow-1 align-items-end gap-4">
            <PrimeButton
              ><router-link to="/">Found Pet</router-link></PrimeButton
            >
            <PrimeButton>Lost Pet</PrimeButton>
          </div>
        </div>
        <div class="section-head-img flex align-items-start">
          <img class="w-full" :src="dog01" />
        </div>
      </div>
    </div>
  </section>
  <section class="section-carousel">
    <div class="page-wrapper">
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
  methods: {},
  data() {
    return {
      pets: [
        {
          id: 1,
          img: images.car01,
          status: "Lost Pet",
          periodInfo: "Lost 5 days ago",
          breed: "Poodle",
        },
        {
          id: 2,
          img: images.car02,
          status: "Lost pet",
          periodInfo: "Lost 12 hours ago",
          link: "/found",
        },
        {
          id: 3,
          img: images.car03,
          status: "Lost pet",
          periodInfo: "Lost 7 days ago",
          link: "/lost",
        },
        {
          id: 4,
          img: images.car04,
          status: "Lost pet",
          periodInfo: "Lost 3 days ago",
          link: "/found",
        },
        {
          id: 5,
          img: images.car05,
          status: "Lost pet",
          periodInfo: "Lost 2 days ago",
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
.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
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
  color: rgb(0, 32, 91);
}

h2 {
  color: rgb(0, 32, 91);
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
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
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
