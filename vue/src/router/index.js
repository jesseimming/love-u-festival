import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Map from "../views/Map.vue";
import Schedule from "../views/Schedule.vue";
import Info from "../views/Info.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/map", name: "Map", component: Map },
  { path: "/schedule", name: "Schedule", component: Schedule },
  { path: "/info", name: "Info", component: Info },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
