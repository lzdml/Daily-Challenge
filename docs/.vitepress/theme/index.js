import DefaultTheme from "vitepress/theme";
import Prompts from "../../../components/prompts.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("GlobalPrompts", Prompts);
  },
};
