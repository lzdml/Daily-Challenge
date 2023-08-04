import DefaultTheme from "vitepress/theme";
import Prompts from "../../../components/prompts.vue";
import global from "../../../components/global.vue";
import image from "../../../components/image.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app
      .component("GlobalPrompts", Prompts)
      .component("global", global)
      .component("GlobalImage", image);
  },
};
