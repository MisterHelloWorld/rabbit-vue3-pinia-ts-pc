import { createApp } from "vue";
import App from "./App.vue";
// 引入兼容性css文件，初始化样式，统一浏览器
import "normalize.css";
// 引入自动的公共样式
import "@/assets/styles/common.less";
createApp(App).mount("#app");
