import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Count from "@/components/Count.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/count", name: "Count", component: Count },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
