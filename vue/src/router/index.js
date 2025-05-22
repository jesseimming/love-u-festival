import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Map from "../views/Map.vue";
import Schedule from "../views/Schedule.vue";
import Info from "../views/Info.vue";
import Scheme from "../views/Scheme.vue";
import Artists from "../views/Artists.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/map", name: "Map", component: Map },
  { path: "/schedule", name: "Schedule", component: Schedule },
  { path: "/info", name: "Info", component: Info },
  { path: "/scheme", name: "Scheme", component: Scheme },
  { path: "/artists", name: "Artists", component: Artists },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
