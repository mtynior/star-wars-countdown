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
      globPatterns: [
        "**/*.{sample, html, json, js, css, map, png, jpg, jpeg, gif, webp, ico, svg, eot, ttf, woff}"
      ],
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            /\.(?:json|png|jpg|jpeg|gif|webp|ico|svg|eot|ttf|woff)$/
          ),
          handler: "cacheFirst",
          options: {
            cacheName: "swc-assets"
          }
        }
      ]
    }
  }
};
