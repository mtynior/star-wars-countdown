import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let timers_db = require("./db.json");

export default new Vuex.Store({
  state: {
    timers: timers_db
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

        let isWithinSpecifiedRage =
          fromDate <= referenceDate && referenceDate <= toDate;

        let isWithinRageWithoutDefinedStart =
          !fromDate && referenceDate <= toDate;

        let isWithinRageWithoutDefinedEnd =
          fromDate <= referenceDate && !toDate;

        let isRangeNotSpeciefied = !fromDate && !toDate;

        if (
          isWithinSpecifiedRage ||
          isWithinRageWithoutDefinedStart ||
          isWithinRageWithoutDefinedEnd ||
          isRangeNotSpeciefied
        ) {
          return true;
        }

        return false;
      });
    }
  },
  mutations: {},
  actions: {}
});
