import Vue from "vue";
import Router from "vue-router";

import Products from "../views/Products.vue";
import Cart from "../views/Cart.vue";
import Favourites from "../views/Favourites.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Products,
        },
        {
            path: "/cart",
            component: Cart,
        },
        {
            path: "/favourites",
            component: Favourites,
        }
    ]
});