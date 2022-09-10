<template>
  <section class="section-list">
    <div class="page-wrapper">
      <ListOfAllPets
        :value="pets"
        :layout="layout"
        :paginator="true"
        :rows="4"
      >
      <!-- :sortOrder="sortOrder" -->
        <!-- :sortField="sortField" -->
        <template #header>
          <h1>My Pets</h1>
          <div class="grid grid-nogutter">
            <div class="col-6" style="text-align: right">
              <!-- <FormDropdown v-model="layout"></FormDropdown> -->
            </div>
          </div>
        </template>

        <template #list="slotProps">
          <div class="col-12">
            <div class="pets-list-item">
              <div class="img-block">
                <img :src="slotProps.data.img" :alt="slotProps.data.name" />
              </div>
              <div class="pets-list-detail" @click="openDescriptWindow">
                <div class = "type-info">Name : <span class="pets-name">{{ slotProps.data.name }}</span></div>
                <div class = "type-info">Status : <span class="status">{{ slotProps.data.status }}</span></div>
                <div class = "type-info">Animal : <span class="animal">{{ slotProps.data.animal }}</span></div>
                <div class = "type-info">Gender : <span class="gender">{{ slotProps.data.gender }}</span></div>
                <div class = "type-info">Period : <span class="gender">{{ slotProps.data.periodInfo }}</span></div>
                <div class = "type-info">ID : <span class="id">{{ slotProps.data.id }}</span></div>
              </div>
              <div class="pets-list-action">
                <PrimeButton label="Show" icon="pi pi-external-link" v-on:click="openBasic" />
                
                
                <PrimeButton
                  label="Delete pet"
                  icon="pi pi-trash"                  
                  class="p-button-raised p-button-rounded"
                  @click="deleteAnimal(slotProps.data.id)"
                />
              </div>
            </div>
          </div>  
        </template>
              
        
        <PrimeDialog v-model:visible="openDescriptWindow" >
          
          <div class = "type-info">Name : <span class="pets-name">{{ slotProps.data.name }}</span></div>
                <div class = "type-info">Status : <span class="status">{{ slotProps.data.status }}</span></div>
                <div class = "type-info">Animal : <span class="animal">{{ slotProps.data.animal }}</span></div>
                <div class = "type-info">Gender : <span class="gender">{{ slotProps.data.gender }}</span></div>
                <div class = "type-info">Period : <span class="gender">{{ slotProps.data.periodInfo }}</span></div>
              


          <template #footer>
            <PrimeButton label="Chahge information of a pet" icon="pi pi-pencil" @click="closeBasic" class="p-button-text" />
            <PrimeButton label="Close" icon="pi pi-times" @click="closeBasic" autofocus />
          </template>
        </PrimeDialog>

<!-- 
        <PrimeDialog v-model:visible="displayModuleWindow" header="Header" :breakpoints="{ '960px': '75vw', '640px': '90vw' }" :style="{ width: '50vw' }">
          
          <div class="field col-12 md:col-4">
            <label class="type-info">Pet Status</label>
            <FormDropdown
              v-model="selectedStatus"
              :options="status"
              optionLabel="status"
              placeholder="Select a Status"
            ></FormDropdown>
          </div>

          <div class="field col-12 md:col-4">
              <label class="type-info">Animal</label>
              <FormDropdown
                v-model="selectedAnimal"
                :options="animal"
                optionLabel="type"
                placeholder="Select a type of Animal"
              ></FormDropdown>
          </div>

          <div class="field col-12 md:col-4">
            <label class="type-info">Pet Gender</label>
              <FormDropdown
                v-model="selectedGender"
                :options="genders"
                optionLabel="gen"
                placeholder="Select a Genger"
              ></FormDropdown>
          </div>

          <div class="field col-12 md:col-4">
            <label for="description" class="type-info">Date</label>
              <span class="p-float-label">
                <InputText id="date" v-model="value2" type="text" />
                <label for="date">Description </label>
              </span>
          </div>

          <template #footer>
            <PrimeButton
              label="Cancel"
              icon="pi pi-times"
              @click="closeModuleWindow"
              class="p-button-text"
            />
            <PrimeButton
              label="Submit"
                icon="pi pi-check"
                @click="closeModuleWindow"
                autofocus
            />
          </template>
        </PrimeDialog>  -->

        <PrimeDialog v-model:visible="displayBasic" >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <template #footer>
            <PrimeButton label="No" icon="pi pi-times" @click="closeBasic" class="p-button-text" />
            <PrimeButton label="Yes" icon="pi pi-check" @click="closeBasic" autofocus />
          </template>
        </PrimeDialog>

      </ListOfAllPets>
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
          status: "Found Pet",
          animal: "Cat",
          gender: "Female",
          periodInfo: "Found 5 days ago",
          link: "/found",
        },
        {
          id: 2,
          img: images.car02,
          name: "Barsik",
          status: "Lost pet",
          animal: "Cat",
          gender: "Male",
          periodInfo: "Found 12 hours ago",
          link: "/found",
        },
        {
          id: 3,
          img: images.car03,
          name: "Sema",
          status: "Found pet",
          animal: "Cat",
          gender: "Male",
          periodInfo: "Found 7 days ago",
          link: "/lost",
        },
        {
          id: 4,
          img: images.car04,
          name: "Alisha",
          status: "Found pet",
          animal: "Cat",
          gender: "Female",
          periodInfo: "Found 3 days ago",
          link: "/found",
        },
        {
          id: 5,
          img: images.car05,
          name: "Tom",
          status: "Lost pet",
          animal: "Cat",
          gender: "Male",
          periodInfo: "Found 2 days ago",
          link: "/lost",
        },
      ],
      status: [{ status: "Found" }, { status: "Lost" }],
      animal: [{ type: "Cat" }, { type: "Dog" }],
      genders: [{ gen: "Female" }, { gen: "Male" }],
      layout: "list",
      displayModuleWindow: false,
      displayDescriptWindow: false,
      selectedName: null,
      selectedStatus: null,
      selectedAnimal: null,
      selectedGender: null,
      //data od period
      //descript
      displayBasic: false,
    };
  },
  methods: {

    // openModuleWindow() {
    //   const $name = '#pets-name'
    //   console.log(this.displayModuleWindow);      
    //   this.displayModuleWindow = true;
    //   console.log(this.displayModuleWindow); 
    // },
    // closeModuleWindow() {
    //   this.displayModuleWindow = false;
    // },
// ..........................................................................
    
    openDescriptWindow(){
      this.displayModuleWindow = true;
    },
    closeDescriptWindow() {
      // this.displayModuleWindow = false;
    },

    async deleteAnimal(id) {
      await this.pets.deleteFromList(id);
      this.showList();
    },

    openBasic() {
      console.log(this.displayBasic);
      this.displayBasic = true;
      console.log(this.displayBasic);
    },
    closeBasic() {
      this.displayBasic = false;
    },
  },
};
</script>

<style lang="scss" scoped>
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
  .pets-list-action {
    display: flex;
    flex-direction: column;
  }
  .p-button {
    margin-bottom: 0.5rem;
  }
}
</style>
