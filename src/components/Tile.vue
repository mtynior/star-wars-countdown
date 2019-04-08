<template>
  <div class="tile">
    <router-link :to="timer.slug">
      <header class="miniature" :style="timer.style">
        <img class="logo" :src="timer.logo" alt="Tile logo" />
      </header>
      <footer class="caption">
        <span>{{ timer.title }}</span>
      </footer>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    timer: {}
  }
};
</script>

<style lang="scss" scoped src="@/sass/components/Tile.scss" />
