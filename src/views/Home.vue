<template>
  <section class="section-head">
    <div class="page-wrapper">
      <div class="section-content">
        <div class="section-head-text">
          <h1>We help reunite lost pets with their families</h1>
          <h2>
            Enter a photo of your missing pet and search our national lost and
            found pet database to find them.
          </h2>
          <div class="section-controls">
            <Button>Find</Button>
            <Button>Lost</Button>
          </div>
        </div>
        <div class="section-head-img">
          <img :src="dog01" />
        </div>
      </div>
    </div>
  </section>
  <section class="section-carousel">
    <div class="page-wrapper">
      <Carousel
        :value="pets"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div class="img-block">
            <img :src="slotProps.data.img" />
          </div>
          <div class="info-block">
            <div class="status-info">{{ slotProps.data.status }}</div>
            <div class="period-info">{{ slotProps.data.periodInfo }}</div>
          </div>
        </template>
      </Carousel>
      <Button @click="test">test</Button>
    </div>
  </section>
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
          status: "Lost Dog",
          periodInfo: "2 years",
          breed: "Poodle",
        },
        {
          id: 2,
          img: images.car02,
          status: "Found pet",
          periodInfo: "Found pet",
          link: "/found",
        },
        {
          id: 3,
          img: images.car03,
          status: "Lost pet",
          periodInfo: "Lost pet",
          link: "/lost",
        },
        {
          id: 4,
          img: images.car04,
          status: "Found pet",
          periodInfo: "Found pet",
          link: "/found",
        },
        {
          id: 5,
          img: images.car05,
          status: "Lost pet",
          periodInfo: "Lost pet",
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
  mounted() {
    console.log(this.pets);
  },
  methods: {
    test() {
      console.log(this.pets);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
.section-content {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  > * {
    flex: 1 1 50%;
  }

  .section-head-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .section-head-img {
    display: flex;
    align-items: flex-start;

    img {
      width: 100%;
    }
  }
  .section-controls {
    display: flex;
    flex-grow: 1;
    align-items: end;
    gap: 25px;
  }
}

h1 {
  text-transform: none;
  font-size: 34px;
  color: rgb(0, 32, 91);
}

h2 {
  text-transform: none;
  color: rgb(0, 32, 91);
}

.p-carousel {
  .img-block {
    display: flex;
  }
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
