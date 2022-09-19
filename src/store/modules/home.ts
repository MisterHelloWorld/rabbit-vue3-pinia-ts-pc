// 首页轮播图模块
import { defineStore } from "pinia";
import request from "@/utils/request";
import { BannerItem, ApiRes } from "@/types/data";

export default defineStore("home", {
  state: () => ({
    // 轮播图数据
    bannerList: [] as BannerItem[],
  }),
  actions: {
    // 获取轮播图数据的方法
    async getBannerList() {
      const res = await request.get<ApiRes<BannerItem[]>>("/home/banner");
      this.bannerList = res.data.result;
    },
  },
});
