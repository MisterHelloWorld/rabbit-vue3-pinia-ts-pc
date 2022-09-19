<script setup lang="ts" name="Layout">
import AppTopnav from "./components/app-topnav.vue";
import AppHeader from "./components/app-header.vue";
import AppFooter from "./components/app-footer.vue";
import AppHeaderSticky from "./components/app-header-sticky.vue";
</script>
<template>
  <!-- 头部导航栏 -->
  <AppTopnav></AppTopnav>
  <!-- header导航 -->
  <AppHeader></AppHeader>
  <!-- 吸顶导航 -->
  <AppHeaderSticky></AppHeaderSticky>
  <!-- html新增的语义化标签 -->
  <main class="app-body">
    <!-- TAG：Layout的二级路由出口 -->
    <RouterView></RouterView>
  </main>
  <!-- 底部footer -->
  <AppFooter></AppFooter>
</template>

<style scoped lang="less">
// 主体区域暂时高度
.app-body {
  min-height: 600px;
}
</style>
