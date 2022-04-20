/* eslint-disable no-undef */
const { defineConfig } = require("@vue/cli-service");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new EslintWebpackPlugin({
        extensions: ["js", "ts", "vue"],
        threads: true,
        exclude: ["node_modules", ".dist"],
        fix: true,
      }),
      new StylelintPlugin({
        files: ["**/*.(vue|scss)"],
        fix: true,
        emitErrors: true,
        failOnError: false,
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
