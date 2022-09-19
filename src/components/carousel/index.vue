<!-- TODO:轮播图组件 -->
<script lang="ts" setup name="XtxCarousel">
import { BannerItem } from "@/types/data";
import { onBeforeUnmount, onMounted, ref } from "vue";
const {
  slides,
  autoPlay = false,
  duration = 3000,
} = defineProps<{
  slides: BannerItem[];
  autoPlay?: boolean;
  duration?: number;
}>();

// 定义一个变量，用于控制当前轮播图状态
const active = ref(0);
// 左按钮功能
const onPrev = () => {
  active.value--;
  if (active.value < 0) {
    active.value = slides.length - 1;
  }
};
// 右按钮功能
const onNext = () => {
  active.value++;
  if (active.value > slides.length - 1) {
    active.value = 0;
  }
};

// 定义一个定时器id
let timer: number = -1;

// 鼠标移出自动轮播
const play = () => {
  if (!autoPlay) {
    return;
  }
  clearInterval(timer);
  // 定时器自动轮播
  timer = window.setInterval(() => {
    // 调用右按钮的方法
    onNext();
  }, duration);
};

// 鼠标移入停止轮播
const stop = () => {
  // 清除定时器
  clearInterval(timer);
};

onMounted(() => {
  // 自动轮播
  play();
});

onBeforeUnmount(() => {
  // 停止轮播
  stop();
});
</script>

<template>
  <div class="xtx-carousel" @mouseenter="stop" @mouseleave="play">
    <ul class="carousel-body">
      <li
        v-for="(item, index) in slides"
        :key="item.id"
        class="carousel-item"
        :class="{ fade: index === active }"
      >
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="" />
        </RouterLink>
      </li>
    </ul>
    <!-- 左按钮 -->
    <a href="javascript:;" @click="onPrev" class="carousel-btn prev">
      <i class="iconfont icon-angle-left"></i>
    </a>
    <!-- 右按钮 -->
    <a href="javascript:;" @click="onNext" class="carousel-btn next">
      <i class="iconfont icon-angle-right"></i>
    </a>
    <div class="carousel-indicator">
      <span
        v-for="(item, index) in slides"
        @mouseenter="active = index"
        :class="{ active: index === active }"
      ></span>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
