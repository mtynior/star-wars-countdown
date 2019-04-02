<template>
  <div class="footer">
    <div class="links">
      <a
        href="http://www.starwars.com/"
        target="_blank"
        rel="noopener"
        aria-label="Visit official Star Wars website"
      >
        <i class="swc-star-wars"></i>
      </a>
      <a
        href="https://tynior.com/"
        target="_blank"
        rel="noopener"
        aria-label="Visit author's personal website"
      >
        <i class="swc-qeltive"></i>
      </a>
      <a
        href="https://github.com/mtynior/star-wars-countdown"
        target="_blank"
        rel="noopener"
        aria-label="Checkout project's source code"
      >
        <i class="swc-github"></i>
      </a>
    </div>
    <div>
      <span>
        No copyright infringement intended. All rights belong to their
        respective owners.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped src="@/sass/components/Footer.scss" />
