import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timers: [
      {
        slug: "episode9",
        title: "Star Wars Episode 9"
      },
      {
        slug: "celebration",
        title: "Star Wars Celebration 2019"
      }
    ]
  },
  getters: {
    TIMERS: state => {
      return state.timers;
    }
  },
  mutations: {},
  actions: {}
});
