<!-- TODO:首页 -->
<script lang="ts" setup>
import HomeCategory from "./components/home-category.vue";
import HomeBanner from "./components/home-banner.vue";
import HomeNew from "./components/home-new.vue";
import HomeHot from "./components/home-hot.vue";
</script>

<template>
  <div class="page-home">
    <!-- TAG:首页轮播区域 -->
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory></HomeCategory>
        <!-- banner轮播图 -->
        <HomeBanner></HomeBanner>
      </div>
    </div>
    <!-- TAG:新鲜好物区域 -->
    <HomeNew></HomeNew>
    <!-- TAG:人气推荐区域 -->
    <HomeHot></HomeHot>
  </div>
</template>

<style lang="less" scoped></style>
