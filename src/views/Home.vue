<template>
  <div>
    <Timer :timer="currentTimer" />
    <TileGrid :timers="visibleTimers" class="timersGrid" />
    <Footer />
  </div>
</template>

<script>
import Timer from "@/components/Timer.vue";
import TileGrid from "@/components/TileGrid.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  metaInfo() {
    return {
      title: this.pageTitle,
      titleTemplate: null,
      link: [
      { 
        rel: "canonical", href: this.fullUrl },
      ],
      meta: [
        {
          name: "description",
          content: this.pageDescription
        },
        {
          name: "og:description",
          content: this.pageDescription
        },
        {
          name: "og:title",
          content: this.pageTitle
        },
        {
          name: "og:site_name",
          content: this.pageTitle
        },
        {
          name: "og:url",
          content: this.fullUrl
        },
        {
          name: "og:image",
          content: this.baseUrl + "/img/icons/apple-touch-icon-152x152.png"
        },
        {
          name: "og:type",
          content: "website"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:site",
          content: this.fullUrl
        },
        {
          name: "twitter:title",
          content: this.pageTitle
        },
        {
          name: "twitter:description",
          content: this.pageDescription
        },
        {
          name: "twitter:image:src",
          content: this.baseUrl + "/img/icons/apple-touch-icon-152x152.png"
        }
      ]
    };
  },
  components: {
    Timer,
    TileGrid,
    Footer
  },
  computed: {
    currentTimer() {
      let slug = this.$route.params.slug;

      if (!slug || slug.length === 0) {
        return this.$store.getters.TIMERS[0];
      }

      return this.$store.getters.getTimerBySlug(slug);
    },
    visibleTimers() {
      return this.$store.getters.TIMERS.filter(
        timer => timer.slug != this.currentTimer.slug
      );
    },
    pageDescription() {
      return "How many days until " + this.currentTimer.title + "?";
    },
    pageTitle() {
      return "Star Wars Countdown | " + this.currentTimer.title;
    },
    baseUrl() {
      return window.location.origin;
    },
    fullUrl() {
      return  this.baseUrl + this.$route.fullPath;
    }
  }
};
</script>

<style lang="scss" scoped src="@/sass/views/Home.scss" />
