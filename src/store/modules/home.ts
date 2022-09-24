// 首页轮播图模块
import { defineStore } from "pinia";
import request from "@/utils/request";
import { BannerItem, ApiRes, GoodItem, HotGoods } from "@/types/data";

export default defineStore("home", {
  state: () => ({
    // 轮播图数据
    bannerList: [] as BannerItem[],
    // 新鲜好物数据
    newGoodList: [] as GoodItem[],
    // 人气推荐数据
    hotGoodList: [] as HotGoods[],
  }),
  actions: {
    // 获取轮播图数据的方法
    async getBannerList() {
      const res = await request.get<ApiRes<BannerItem[]>>("/home/banner");
      this.bannerList = res.data.result;
    },

    // 获取新鲜好物数据的方法
    async getNewList() {
      // 此处新鲜好物接口异常
      const res = await request.get<ApiRes<GoodItem[]>>("/home/new");
      this.newGoodList = res.data.result;
    },

    // 获取人气推荐数据的方法
    async getHotList() {
      const res = await request.get<ApiRes<HotGoods[]>>("/home/hot");
      this.hotGoodList = res.data.result;
    },
  },
});
