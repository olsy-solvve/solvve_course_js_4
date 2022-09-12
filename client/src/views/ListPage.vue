<template>
  <section class="section-list mt-6">
    <div class="page-wrapper">
      <ListOfAllPets
        :value="petsComputed"
        :layout="layout"
        :paginator="true"
        :rows="3"
      >
        <template #header>
          <div class="row">
            <FormDropdown
              v-model="sortStatus"
              class="lg:col-3 md:col-4 sm:col-6 col-12"
              :options="statuses"
              optionLabel="label"
              optionValue="value"
              placeholder="Sort By Status"
            />
          </div>
        </template>

        <template #list="slotProps">
          <div class="col-12">
            <div
              class="pets-list-item"
              @click="openDescriptWindow(slotProps.data)"
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
          status: "Found",
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
          name: "Tom",
          status: "Lost",
          animal: "Cat",
          gender: "Male",
          periodInfo: "Found 2 days ago",
          description: "Big fluffy cat",
          link: "/lost",
        },
      ],
      statuses: [
        { label: "All", value: null },
        { label: "Found", value: "Found" },
        { label: "Lost", value: "Lost" },
      ],
      sortStatus: null,
      layout: "list",
      displayDescriptWindow: false,
    };
  },
  computed: {
    petsComputed() {
      if (!this.sortStatus) {
        return this.pets;
      }

      return this.pets.filter((pet) => {
        return pet.status === this.sortStatus;
      });
    },
  },
  methods: {
    openDescriptWindow(data) {
      this.currentData = data;
      this.displayDescriptWindow = true;
    },
    addPet() {
      this.$router.push("/found");
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
}
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
.img-descpipt {
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
}
</style>
