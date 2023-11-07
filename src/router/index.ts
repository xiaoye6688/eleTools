// router.ts

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import video from "../views/Video.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home, // 首页组件
  },
  {
    path: "/about",
    component: About, // 关于页面组件
  },
  {
    path: "/Video",
    component: video,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
