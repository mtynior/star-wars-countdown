<template>
  <div class="countdown">
    <div class="timeFraction">
      <h1>00</h1>
      <span>Days</span>
    </div>
    <div class="timeFraction">
      <h1>00</h1>
      <span>Hours</span>
    </div>
    <div class="timeFraction">
      <h1>00</h1>
      <span>Minutes</span>
    </div>
    <div class="timeFraction">
      <h1>00</h1>
      <span>Seconds</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  props: {
    date: {}
  }
};
</script>

<style lang="scss" scoped src="@/sass/components/Countdown.scss" />
