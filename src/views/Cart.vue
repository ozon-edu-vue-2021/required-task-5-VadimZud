<template>
  <div class="products">
    <h1>Корзина</h1>
    <div class="products-list">
      <template v-if="cart.length">
        <product-card
          v-for="product in cart"
          :key="product.id"
          :product="product"
          class="product"
        ></product-card>
        <button @click="placeOrder">
          Оформить на сумму {{ totalCost }}&#8381;
        </button>
      </template>
      <div v-else>Корзина пуста</div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(["cart", "totalCost"]),
  },
  methods: {
    placeOrder() {
      let message = "Вы заказали:\n";
      for (let product of this.cart) {
        message += `${product.dish} - ${product.cost} руб. x ${product.cartCount}\n`;
      }
      message += `На общую сумму: ${this.totalCost} руб.`;
      alert(message);
    },
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
