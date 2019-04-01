<template>
  <div class="timer" :style="timer.style">
    <div class="container">
      <div class="logo">
        <img :srcset="timer.logo" />
      </div>
      <Countdown
        v-if="currentMessage.countdownTo != null"
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
