import { getConfirmation } from "../api/request";
import { createRouter, createWebHistory } from "vue-router";

const files = require.context("./modules", true, /\.js$/);
const routeList = [];
files.keys().forEach((key) => {
  const child = files(key).default;
  if (!key.includes("iframeRouter")) {
    routeList.push(...child);
  }
});
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routeList,
});
router.beforeEach((to, from, next) => {
  getConfirmation();
  next();
});

export default router;
