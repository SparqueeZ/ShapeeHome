import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createHead } from "@unhead/vue";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.use(MotionPlugin);

app.mount("#app");
