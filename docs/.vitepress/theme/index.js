import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("render-page", () =>
      import("../../../components/renderPage.vue")
    );
  },
};
