<template>
  <div class="countdown">
    <div class="timer">
      <div class="timeFraction">
        <h1>{{ timeDiff.days }}</h1>
        <span>Days</span>
      </div>
      <div class="timeFraction">
        <h1>{{ timeDiff.hours }}</h1>
        <span>Hours</span>
      </div>
      <div class="timeFraction">
        <h1>{{ timeDiff.minutes }}</h1>
        <span>Minutes</span>
      </div>
      <div class="timeFraction">
        <h1>{{ timeDiff.seconds }}</h1>
        <span>Seconds</span>
      </div>
    </div>
    <div class="date">
      <h5>Countdown to: {{ targetDate }}</h5>
    </div>
  </div>
</template>

<script>
import moment from "moment";

var countdown = require("countdown");

export default {
  name: "Countdown",
  props: {
    dateInUTC: null
  },
  data() {
    return {
      timeDiff: null
    };
  },
  created() {
    this.calculateTimeDiff();
    setInterval(this.calculateTimeDiff, 500);
  },
  beforeDestroy() {
    clearInterval(this.calculateTimeDiff);
  },
  computed: {
    targetDate: function() {
      return moment(this.dateInUTC).format("Do MMMM YYYY, HH:mm");
    }
  },
  methods: {
    calculateTimeDiff() {
      let units =
        countdown.DAYS |
        countdown.HOURS |
        countdown.MINUTES |
        countdown.SECONDS;
      this.timeDiff = countdown(null, this.dateInUTC, units);
    }
  }
};
</script>

<style lang="scss" scoped src="@/sass/components/Countdown.scss" />
