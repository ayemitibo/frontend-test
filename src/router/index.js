import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Characters from "../views/Characters.vue";
import SingleCharacter from "../views/SingleCharacter.vue";
import Header from "../components/Header";
import StarShips from "../views/Starships.vue";
import SingleStarShip from "../views/SingleStarShip.vue";
import SinglePlanet from "../views/SinglePlanet.vue";
import Planets from "../views/Planets.vue";

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
      {
        path: "planets",
        component: Planets,
      },
    ],
  },
  { path: "/starship/:name", component: SingleStarShip },
  { path: "/planet/:name", component: SinglePlanet },
  { path: "/character/:name", component: SingleCharacter },
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
