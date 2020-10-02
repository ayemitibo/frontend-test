import Vue from "vue";
import Vuex from "vuex";
import apiClient from "../api-client";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    starShips: [],
    planets: [],
  },
  mutations: {
    GET_ALL_STARTSHIPS(state, starShips) {
      state.starShips = starShips;
    },
    GET_ALL_PLANETS(state, planets) {
      state.planets = planets;
    },
  },
  actions: {
    async getStarships({ commit }) {
      try {
        const starShips = await apiClient.get("/starships/");
        commit("GET_ALL_STARTSHIPS", starShips.results);
        return starShips.results;
      } catch (error) {
        console.log(error);
      }
    },
    async getPlanets({ commit }) {
      try {
        const planets = await apiClient.get("/planets/");
        commit("GET_ALL_PLANETS", planets.results);
        return planets.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
