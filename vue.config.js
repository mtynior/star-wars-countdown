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
          urlPattern: /.*\.(?:png|jpg|jpeg|gif|webp|ico|svg|eot|ttf|woff)$/,
          handler: "cacheFirst",
          options: {
            cacheName: "swc-assets",
            expiration: {
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              purgeOnQuotaError: true
            }
          }
        }
      ]
    }
  }
};
