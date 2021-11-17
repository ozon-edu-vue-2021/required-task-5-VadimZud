<template>
  <div class="products">
    <h1>Товары</h1>
    <div class="products-list">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="product"
      ></product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import { mapState } from "vuex";

export default {
  name: "Products",
  components: {
    ProductCard,
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style scoped>
.product {
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border: 1px solid black;
  width: 160px;
}

.products-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
