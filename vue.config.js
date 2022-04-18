/* eslint-disable no-undef */
const { defineConfig } = require("@vue/cli-service");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new EslintWebpackPlugin({
        extensions: ["js", "ts", "vue"],
        threads: true,
        // files: ['**/*.js', '**/*.vue'],
        exclude: ["node_modules", ".nuxt"],
        fix: true,
      }),
    ],
  },
  transpileDependencies: true,
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
      enableBridge: false,
    },
  },
});
