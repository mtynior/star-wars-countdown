<template>
  <div class="tileGrid">
    <Tile v-for="timer in timers" :key="timer.slug" :timer="timer" />
  </div>
</template>

<script>
import Tile from "@/components/Tile.vue";

export default {
  name: "TileGrid",
  components: {
    Tile
  },
  props: {
    timers: null
  }
};
</script>

<style lang="scss" scoped src="@/sass/components/TileGrid.scss" />
