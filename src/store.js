import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timers: [
      {
        slug: "episode9",
        title: "Star Wars Episode 9",
        logo: "/img/assets/episode_9/episode_9_logo_vector.svg",
        style: {
          backgroundImage: 'url("/img/assets/episode_9/starfield_tile.png")',
          backgroundRepeat: "repeat",
          color: "ffffff"
        },
        messages: [
          {
            fromDate: null,
            toDate: "2019-12-18T22:00:00Z",
            message: null,
            countdownTo: "2019-12-18T22:00:00Z"
          }
        ]
      },
      {
        slug: "celebration2019",
        title: "Star Wars Celebration 2019",
        logo: "/img/assets/celebration_2019/celebration_2019_vector.svg",
        style: {
          backgroundImage:
            'url("/img/assets/celebration_2019/celebration_2019_background.png")',
          backgroundSize: "cover",
          color: "#ffe900"
        },
        messages: [
          {
            fromDate: null,
            toDate: "2019-04-11T12:00:00Z",
            message: null,
            countdownTo: "2019-04-11T12:00:00Z"
          },
          {
            fromDate: "2019-04-11T12:00:00Z",
            toDate: "2019-04-15T12:00:00Z",
            message: "It's happening right now!",
            countdownTo: null
          },
          {
            fromDate: "2019-04-15T12:00:00Z",
            toDate: null,
            message: "It's over :(",
            countdownTo: null
          }
        ]
      },
      {
        slug: "clonewars",
        title: "Star Wars The Clone Wars",
        logo: "/img/assets/clone_wars/clone_wars_logo.svg",
        style: {
          backgroundImage:
            'url("/img/assets/clone_wars/clone_wars_background.jpg")',
          backgroundSize: "cover",
          color: "#ffe900"
        },
        messages: [
          {
            fromDate: null,
            toDate: null,
            message: "Comming Soon!",
            countdownTo: null
          }
        ]
      },
      {
        slug: "mandalorian",
        title: "The Mandalorian",
        logo: null,
        style: {
          backgroundImage:
            'url("/img/assets/mandalorian/mandalorian_background.jpg")',
          backgroundSize: "cover",
          color: "#ffffff"
        },
        messages: [
          {
            fromDate: null,
            toDate: null,
            message: "Comming Soon!",
            countdownTo: null
          }
        ]
      }
    ]
  },
  getters: {
    TIMERS: state => state.timers,
    getTimerBySlug: state => slug =>
      state.timers.find(
        timer => timer.slug.toLowerCase() == slug.toLowerCase()
      ),
    getMessageForTimerWithSlugWithinDate: (state, getters) => (
      slug,
      referenceDate
    ) => {
      let timer = getters.getTimerBySlug(slug);
      return timer.messages.find(message => {
        let fromDate = message.fromDate ? new Date(message.fromDate) : null;
        let toDate = message.toDate ? new Date(message.toDate) : null;

        if (fromDate <= referenceDate && referenceDate <= toDate) {
          return true;
        } else if (!fromDate && referenceDate <= toDate) {
          return true;
        } else if (fromDate <= referenceDate && !toDate) {
          return true;
        } else if (!fromDate && !toDate) {
          return true;
        } else {
          return false;
        }
      });
    }
  },
  mutations: {},
  actions: {}
});
