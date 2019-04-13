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
          content: this.$route.fullPath,
          template: "https://starwarscountdown.online%s"
        },
        {
          name: "og:type",
          content: "website"
        },
        {
          name: "twitter:description",
          content: this.pageDescription
        },
        {
          name: "twitter:title",
          content: this.pageTitle
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
    }
  }
};
</script>

<style lang="scss" scoped src="@/sass/views/Home.scss" />
