<template>
  <div class="countdown">
    <div class="timeFraction">
      <h1>{{ values.days }}</h1>
      <span>Days</span>
    </div>
    <div class="timeFraction">
      <h1>{{ values.hours }}</h1>
      <span>Hours</span>
    </div>
    <div class="timeFraction">
      <h1>{{ values.minutes }}</h1>
      <span>Minutes</span>
    </div>
    <div class="timeFraction">
      <h1>{{ values.seconds }}</h1>
      <span>Seconds</span>
    </div>
  </div>
</template>

<script>
var countdown = require("countdown");

export default {
  name: "Countdown",
  props: {
    dateInUTC: {}
  },
  computed: {
    values() {
      let units =
        countdown.DAYS |
        countdown.HOURS |
        countdown.MINUTES |
        countdown.SECONDS;
      return countdown(null, new Date(this.dateInUTC), units);
    }
  }
};
</script>

<style lang="scss" scoped src="@/sass/components/Countdown.scss" />
