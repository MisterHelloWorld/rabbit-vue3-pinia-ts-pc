import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/views/layout/index.vue";
import Home from "@/views/home/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        // 首页组件
        { path: "", component: Home },
        // 一级分类组件
        {
          path: "/category/:id",
          component: () => import("@/views/category/index.vue"),
        },
        // 二级分类组件
        {
          path: "/category/sub/:id",
          component: () => import("@/views/category/sub.vue"),
        },
      ],
    },
    { path: "/login", component: () => import("@/views/login/index.vue") },
  ],
});

export default router;
