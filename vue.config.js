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
          urlPattern: new RegExp(/\.(?:png|gif|jpg|jpeg|svg|eot|ttf|woff)$/),
          handler: "cacheFirst",
          options: {
            cacheName: "assets"
          }
        }
      ]
    }
  }
};
