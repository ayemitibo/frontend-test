import Vue from "vue";
import Vuex from "vuex";
import apiClient from "../api-client";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    starShips: [],
  },
  mutations: {
    GET_ALL_STARTSHIPS(state, starShips) {
      state.starShips = starShips;
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
  },
  modules: {},
});
