import Vue from "vue";
import Vuex from "vuex";

import img1 from "../assets/images/6123150777.webp";
import img2 from "../assets/images/6126039472.webp";
import img3 from "../assets/images/6126040354.webp";
import img4 from "../assets/images/6128597660.webp";
import img5 from "../assets/images/6134992334.webp";
import img6 from "../assets/images/6136170572.webp";
import img7 from "../assets/images/6136172483.webp";
import img8 from "../assets/images/6140906765.webp";
import img9 from "../assets/images/6142673815.webp";
import img10 from "../assets/images/6142681673.webp";
import img11 from "../assets/images/6142683276.webp";
import img12 from "../assets/images/6148226736.webp";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        error: "",
    },
    getters: {
        cart: (state) => state.products.filter((it) => it.cartCount > 0),
        favourites: (state) => state.products.filter((it) => it.favourites),
        totalCost: (state) => {
            return state.products.reduce((sum, it) => {
                if (it.cartCount) {
                    sum += it.cartCount * it.cost;
                }
                return sum;
            }, 0);
        },
    },
    mutations: {
        setProducts(state, { products }) {
            state.products = products;
        },
        addToCart(state, { id }) {
            const index = state.products.findIndex((it) => it.id === id);
            if (index !== -1) {
                const product = state.products[index];
                product.cartCount++;
                Vue.set(state.products, index, product);
            }
        },
        removeFromCart(state, { id }) {
            const index = state.products.findIndex((it) => it.id === id);
            if (index !== -1) {
                const product = state.products[index];
                if (product.cartCount > 0) {
                    product.cartCount--;
                    Vue.set(state.products, index, product);
                }
            }
        },
        toogleFavourites(state, { id }) {
            const index = state.products.findIndex((it) => it.id === id);
            if (index !== -1) {
                const product = state.products[index];
                product.favourites = !product.favourites;
                Vue.set(state.products, index, product);
            }
        },
        setError(state, { error }) {
            state.error = error;
        },
    },
    actions: {
        async loadProducts({ commit }) {
            try {
                const response = await fetch("https://random-data-api.com/api/food/random_food?size=30");
                if (response.ok) {
                    const products = await response.json();
                    for (const product of products) {
                        const imgIndex = Math.floor(Math.random() * 12);
                        const cost = Math.round(Math.random() * 1000);
                        product.img = images[imgIndex];
                        product.cost = cost;
                        product.cartCount = 0;
                        product.favourites = false;
                    }
                    commit("setProducts", { products });
                } else {
                    commit("setError", `Ошибка при загрузке данных: ${response.status} (${response.statusText})`);
                }
            } catch (error) {
                commit("setError", `Ошибка при загрузке данных: ${error.message}`);
            }
        },
    },
});