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
    <div class="card">
      <OrderList v-model="products" listStyle="height:auto" dataKey="id">
        <template #header> List of Pets </template>
        <template #item="slotProps">
          <div class="product-item">
            <div class="image-container">
              <img
                src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                :alt="slotProps.item.name"
              />
            </div>
            <div class="product-list-detail">
              <h6 class="mb-2">{{ slotProps.item.name }}</h6>
              <i class="pi pi-tag product-category-icon"></i>
              <span class="product-category">{{
                slotProps.item.category
              }}</span>
            </div>
            <div class="product-list-action">
              <h6 class="mb-2">${{ slotProps.item.price }}</h6>
              <span
                :class="
                  'product-badge status-' +
                  slotProps.item.inventoryStatus.toLowerCase()
                "
                >{{ slotProps.item.inventoryStatus }}</span
              >
            </div>
          </div>
        </template>
      </OrderList>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ProductService from "@/service/ProductService";

export default {
  setup() {
    onMounted(() => {
      productService.value
        .getProductsSmall()
        .then((data) => (products.value = data));
    });

    const products = ref(null);
    const productService = ref(new ProductService());

    return { products, productService };
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 900px;
}

.card {
  background: #ffffff;
  padding: 2rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin-bottom: 2rem;
}
.product-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  width: 100%;

  img {
    width: 75px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 1rem;
  }

  .product-list-detail {
    flex: 1 1 0;
  }

  .product-list-action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .product-category-icon {
    vertical-align: middle;
    margin-right: 0.5rem;
    font-size: 0.875rem;
  }

  .product-category {
    vertical-align: middle;
    line-height: 1;
    font-size: 0.875rem;
  }
}

@media screen and (max-width: 576px) {
  .product-item {
    flex-wrap: wrap;

    .image-container {
      width: 100%;
      text-align: center;
    }

    img {
      margin: 0 0 1rem 0;
      width: 100px;
    }
  }
}
</style>
