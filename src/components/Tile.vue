<template>
  <div class="tile">
    <header class="miniature" :style="timer.style">
      <router-link :to="timer.slug">
        <img class="logo" :src="timer.logo" />
      </router-link>
    </header>
    <footer class="caption">
      <router-link :to="timer.slug">
        <span>{{ timer.title }}</span>
      </router-link>
    </footer>
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
