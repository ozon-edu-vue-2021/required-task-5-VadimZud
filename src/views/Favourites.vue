<template>
  <div class="products">
    <h1>Избранное</h1>
    <div class="products-list">
      <template v-if="favourites.length">
        <product-card
          v-for="product in favourites"
          :key="product.id"
          :product="product"
          class="product"
        ></product-card>
      </template>
      <div v-else>Список избранного пуст</div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "Favourites",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(["favourites"]),
  },
};
</script>

<style scoped>
.product {
  justify-content: space-between;
  gap: 5px;
  border: 1px solid black;
}

.products-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
