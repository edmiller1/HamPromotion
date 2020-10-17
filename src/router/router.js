import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Qualified from "../views/Qualified.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    path: "/qualified",
    name: "Qualified",
    component: Qualified,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;