import { createApp } from "vue";
import App from "./App.vue";
// 引入路由根文件
import router from "@/router/index";
// 引入兼容性css文件，初始化样式，统一浏览器
import "normalize.css";
// 引入自动的公共样式
import "@/assets/styles/common.less";
const app = createApp(App);
import { createPinia } from "pinia";
const pinia = createPinia();
import components from "./components/index";
// 使用路由
app.use(router);
// 使用pinia
app.use(pinia);
// 全局注册组件
app.use(components);
// 挂载实例
app.mount("#app");
