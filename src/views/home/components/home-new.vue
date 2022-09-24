<!-- TODO:新鲜好物 -->
<script lang="ts" setup>
import useStore from "@/store";
import HomePanel from "./home-panel.vue";
const { home } = useStore();
// 初始化组件时调用获取新鲜好物数据的方法
home.getNewList();
</script>
<template>
  <div class="home-new">
    <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <!-- 右侧插槽 -->
      <template v-slot:right>
        <XtxMore path="/" />
      </template>
      <!-- 默认插槽:内区域 -->
      <template v-slot:default>
        <ul class="goods-list" v-if="home.newGoodList.length > 0">
          <li v-for="item in home.newGoodList" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
          </li>
        </ul>
        <ul class="goods-list" v-else>
          <li v-for="item in 4" :key="item">
            <RouterLink to="/">
              <XtxSkeleton :width="306" :height="306" animated />
              <p class="name ellipsis">暂无数据</p>
              <p class="price">&yen;暂无数据</p>
            </RouterLink>
          </li>
        </ul>
      </template>
    </HomePanel>
  </div>
</template>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
