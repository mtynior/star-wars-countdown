import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import store from "./store";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/404",
      name: "not_found",
      component: NotFound
    },
    {
      path: "/:slug?",
      name: "home",
      component: Home,
      beforeEnter: (to, _, next) => {
        let slug = to.params.slug;

        if (slug == null) {
          return next();
        }

        if (store.getters.findBySlug(slug) == null) {
          return next("/404");
        }

        next();
      }
    }
  ]
});
