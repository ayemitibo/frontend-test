import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Characters from "../views/Characters.vue";
import Header from "../components/Header";
import StarShips from "../views/Starships.vue";
import SingleStarShip from "../views/SingleStarShip.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Header,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "characters",
        component: Characters,
      },
      {
        path: "starships",
        component: StarShips,
      },
    ],
  },
  { path: "/starship/:id", component: SingleStarShip },
];

const router = new VueRouter({
  mode: "hash",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },

  base: process.env.BASE_URL,
  routes,
});

export default router;
