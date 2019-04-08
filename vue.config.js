module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/sass/starwars_countdown.scss";`
      }
    }
  },
  pwa: {
    name: "Star Wars Countdown",
    themeColor: "#151515",
    msTileColor: "#ffffff",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      cacheId: "swc",
      navigateFallback: "index.html",
      exclude: [/_redirects/, /robots.txt/],
      runtimeCaching: [
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|gif|webp|ico|svg|eot|ttf|woff|json)$/,
          handler: "cacheFirst",
          options: {
            cacheName: "swc-assets",
            expiration: {
              maxAgeSeconds: 5 * 24 * 60 * 60, // 5 days
              purgeOnQuotaError: true
            }
          }
        }
      ]
    }
  }
};
