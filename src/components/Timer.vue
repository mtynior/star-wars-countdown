<template>
  <div class="timer" :style="timer.style">
    <div class="container">
      <div class="logo">
        <h1>{{ timer.title }}</h1>
      </div>
      <Countdown :dateInUTC="timer.countdownTo" />
    </div>
  </div>
</template>

<script>
import Countdown from "@/components/Countdown.vue";

export default {
  name: "Timer",
  components: {
    Countdown
  },
  props: {
    timer: {}
  }
};
</script>

<style lang="scss" scoped src="@/sass/components/Timer.scss" />
