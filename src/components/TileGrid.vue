<template>
  <div class="tileGrid">
    <Tile v-for="timer in availableTimers" :key="timer.slug" :timer="timer" />
  </div>
</template>

<script>
import Tile from "@/components/Tile.vue";

export default {
  name: "TileGrid",
  components: {
    Tile
  },
  computed: {
    availableTimers() {
      return this.$store.getters.TIMERS;
    }
  }
};
</script>

<style lang="scss" scoped src="@/sass/components/TileGrid.scss" />
