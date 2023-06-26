import DefaultTheme from "vitepress/theme"
import Concat from '../../../components/concat.vue'
export default {
  ...DefaultTheme,
  enhanceApp({
    app
  }) {
    app.component('t-concat', Concat)
  }
}
