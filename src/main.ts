import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Hanyi from "./components/Hanyi.vue";
import Hanyi2 from "./components/Hanyi2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Hanyi },
    { path: "/xxx", component: Hanyi2 },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
