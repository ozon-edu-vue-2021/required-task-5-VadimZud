<template>
  <div class="product-card">
    <div class="image-wrapper">
      <img :src="product.img" :alt="product.dish" class="image" />
    </div>
    <div class="description-wrapper">
      <div class="name">{{ product.dish }}</div>
      <div class="cost">{{ product.cost }}&#8381;</div>
      <div class="description">{{ product.description }}</div>
    </div>
    <div class="button-wrapper">
      <div class="cart-button-wrapper">
        <template v-if="product.cartCount > 0">
          <button
            @click="removeFromCart({ id: product.id })"
            class="cart-control"
          >
            -
          </button>
          <span class="cart-count">{{ product.cartCount }}</span>
          <button @click="addToCart({ id: product.id })" class="cart-control">
            +
          </button>
        </template>
        <button
          v-else
          @click="addToCart({ id: product.id })"
          class="cart-button"
        >
          Добавить в корзину
        </button>
      </div>
      <button
        @click="toogleFavourites({ id: product.id })"
        class="favourites-button"
      >
        <span v-if="product.favourites">Убрать из избранного</span>
        <span v-else>Добавить в избранное</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["addToCart", "removeFromCart", "toogleFavourites"]),
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
}

.image {
  display: block;
  width: 150px;
  height: 150px;
}

.name {
  font-weight: bold;
  margin-bottom: 5px;
}

.description {
  max-height: 3.5em;
  overflow: hidden;
}

.cart-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-control {
  width: 24px;
}

.cart-count {
  width: 102px;
  text-align: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-button,
.favourites-button {
  width: 150px;
}
</style>
