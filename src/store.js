import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timers: [
      {
        slug: "episode9",
        title: "Star Wars Episode 9",
        logo: "/images/episode_9/episode_9_logo.png",
        countdownTo: "2019-12-18T22:00:00Z",
        style: {
          backgroundImage: "url(\"/images/episode_9/starfield_tile.png\")",
          backgroundRepeat: "repeat",
          color: "white"
        }
      },
      {
        slug: "celebration2019",
        title: "Star Wars Celebration 2019",
        logo: "/images/celebration_2019/celebration_2019_logo.png",
        countdownTo: "2019-04-11T12:00:00Z",
        style: {
          backgroundColor: "black",
          color: "#FFE900"
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
