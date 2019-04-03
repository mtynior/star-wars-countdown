<template>
  <div class="footer">
    <div class="links">
      <a
        v-for="link in links"
        :key="link.url"
        :href="link.url"
        target="_blank"
        rel="noopener"
        :aria-label="link.description"
      >
        <i :class="link.icon"></i>
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
  name: "Footer",
  data() {
    return {
      links: [
        {
          url: "http://www.starwars.com/",
          icon: "swc-star-wars",
          description: "Visit official Star Wars website"
        },
        {
          url: "https://tynior.com/",
          icon: "swc-qeltive",
          description: "Visit author's personal website"
        },
        {
          url: "https://github.com/mtynior/star-wars-countdown",
          icon: "swc-github",
          description: "Checkout project's source code"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped src="@/sass/components/Footer.scss" />
