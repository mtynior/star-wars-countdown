<template>
  <Timer :timer="currentTimer" />
</template>

<script>
import Timer from "@/components/Timer.vue";

export default {
  name: "home",
  components: {
    Timer
  },
  watch: {
    $route() {
      //this.currentTimer = this.getTimerForSlug(this.$route.params.slug);
    }
  },
  computed: {
    currentTimer() {
      return this.getTimerForSlug(this.$route.params.slug);
    }
  },
  methods: {
    getTimerForSlug: function(slug) {
      return this.$store.getters.TIMERS[0]

      /*if (!slug || 0 === slug.length) {
        return this.$store.getters.TIMERS[0];
      }
      return availableTimers.find(
        timer => timer.slug.toLowerCase() == slug.toLowerCase()
      );*/
    }
  }
};
</script>
