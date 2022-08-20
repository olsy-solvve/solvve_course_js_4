import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

import prime from "./plugins/prime.js";
prime(app);

import router from "./plugins/router.js";
app.use(router);

app.mount("#app");
