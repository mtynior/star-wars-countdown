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
      runtimeCaching: [
        {
          urlPattern: /.*/,
          handler: "cacheFirst",
          options: {
            cacheName: "swc-assets",
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              purgeOnQuotaError: true
            }
          }
        }
      ]
    }
  }
};
