<template>
  <div>
    <Timer :timer="currentTimer" />
    <TileGrid class="timersGrid" />
    <Footer />
  </div>
</template>

<script>
import Timer from "@/components/Timer.vue";
import TileGrid from "@/components/TileGrid.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Timer,
    TileGrid,
    Footer
  },
  computed: {
    currentTimer() {
      let slug = this.$route.params.slug;

      if (!slug || slug.length === 0) {
        return this.$store.getters.TIMERS[0];
      }

      return this.$store.getters.getBySlug(slug);
    }
  }
};
</script>

<style lang="scss" scoped src="@/sass/views/Home.scss" />
