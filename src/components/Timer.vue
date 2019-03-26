<template>
  <div class="timer">
    <h1>{{ this.timer.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Timer",
  props: {
    timer: {}
  }
};
</script>

<style lang="scss" scoped src="@/sass/components/timer.scss" />
