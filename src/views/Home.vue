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
  computed: {
    currentTimer() {
      let slug = this.$route.params.slug;

      if (!slug || 0 === slug.length) {
        return this.$store.getters.TIMERS[0];
      }

      return this.$store.getters.findBySlug(slug);
    }
  }
};
</script>
