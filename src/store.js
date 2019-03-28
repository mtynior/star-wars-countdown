import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timers: [
      {
        slug: "episode9",
        title: "Star Wars Episode 9",
        countdownTo: "2019-04-30T22:00:00Z",
        style: {
          backgroundColor: "teal",
          color: "white"
        }
      },
      {
        slug: "celebration",
        title: "Star Wars Celebration 2019",
        countdownTo: "2019-03-31T22:00:00Z",
        style: {
          backgroundColor: "mediumslateblue",
          color: "white"
        }
      }
    ]
  },
  getters: {
    TIMERS: state => state.timers,
    getBySlug: state => slug =>
      state.timers.find(timer => timer.slug.toLowerCase() == slug.toLowerCase())
  },
  mutations: {},
  actions: {}
});
