<template>
  <div class="timer">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Timer",
  props: {
    name
  }
};
</script>

<style lang="scss" scoped src="@/sass/components/timer.scss" />
