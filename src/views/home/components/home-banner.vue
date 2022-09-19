<!-- TODO:banner轮播图 -->
<script lang="ts" setup name="HomeBanner">
import useStore from "@/store";
const { home } = useStore();
// 初始化获得轮播图数据
home.getBannerList();
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <XtxCarousel
      :slides="home.bannerList"
      :duration="1500"
      :autoPlay="true"
    ></XtxCarousel>
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  :deep(.carousel-btn.prev) {
    left: 270px !important;
  }
  :deep(.carousel-indicator) {
    padding-left: 250px;
  }
}
</style>
