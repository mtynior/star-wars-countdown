<template>
  <div class="tile">
    <router-link :to="timer.slug">
      <p>{{ timer.title }}</p>
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
