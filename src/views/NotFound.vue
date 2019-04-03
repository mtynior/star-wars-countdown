<template>
  <div>
    <div class="not-found">
      <h1>404</h1>
      <h3>This is not the page you are looking for.</h3>
    </div>
    <TileGrid :timers="visibleTimers" class="timersGrid" />
    <Footer />
  </div>
</template>

<script>
import TileGrid from "@/components/TileGrid.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "NotFound",
  components: {
    TileGrid,
    Footer
  },
  metaInfo: {
    title: "Page not found",
  },
  computed: {
    visibleTimers() {
      return this.$store.getters.TIMERS;
    }
  }
};
</script>

<style lang="scss" scoped src="@/sass/views/NotFound.scss" />
