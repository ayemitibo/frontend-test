import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Characters from "../views/Characters.vue";
import StarShips from "../views/Starships.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/starships",
    name: "StarShips",
    component: StarShips,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
