// TODO:组件全局注册文件
import XtxSkeleton from "@/components/skeleton/index.vue";
import XtxCarousel from "@/components/carousel/index.vue";
import XtxMore from "@/components/more/index.vue";
import { App } from "vue";
export default {
  install(app: App) {
    app.component("XtxSkeleton", XtxSkeleton);
    app.component("XtxCarousel", XtxCarousel);
    app.component("XtxMore", XtxMore);
  },
};
