<!-- TODO:首页 -->
<script lang="ts" setup>
import HomeCategory from "./components/home-category.vue";
import HomeBanner from "./components/home-banner.vue";
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory></HomeCategory>
        <!-- banner轮播图 -->
        <HomeBanner></HomeBanner>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
