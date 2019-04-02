<template>
  <div class="timer" :style="timer.style">
    <div class="container">
      <div class="logo">
        <img v-if="timer.logo" :srcset="timer.logo" alt="Event logo" />
      </div>
      <Countdown
        v-if="currentMessage.countdownTo"
        :dateInUTC="currentMessage.countdownTo"
      />
      <div v-else class="message">
        <h1>{{ currentMessage.message }}</h1>
      </div>
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
  },
  computed: {
    currentMessage() {
      return this.$store.getters.getMessageForTimerWithSlugWithinDate(
        this.timer.slug,
        new Date()
      );
    }
  }
};
</script>

<style lang="scss" scoped src="@/sass/components/Timer.scss" />
