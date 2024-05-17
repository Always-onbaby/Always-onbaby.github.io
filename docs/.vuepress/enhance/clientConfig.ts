import { defineClientConfig } from "vuepress/client";
import OtherComponent from "../components/OtherComponent.vue";
import Layout from '../components/Layout.vue'
export default defineClientConfig({
  layouts: {
    Layout,
  },
  enhance({ app }) {
    app.component("OtherComponent", OtherComponent);
  },
});
