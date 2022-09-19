// 头部导航模块
import { defineStore } from "pinia";
import request from "@/utils/request";
import { ApiRes, CategoryItem } from "@/types/data";
import { topCategory } from "../constants";
// 默认头部导航分类
const defaultCategory = topCategory.map((item) => {
  return { name: item.name, children: [{ name: item.c1 }, { name: item.c2 }] };
});

export default defineStore("category", {
  state: () => ({
    // 头部导航数据
    list: defaultCategory as CategoryItem[],
  }),
  actions: {
    // 获取头部导航分类的方法
    async getCategoryList() {
      // 获取头部导航分类
      const res = await request.get<ApiRes<CategoryItem[]>>(
        "/home/category/head"
      );
      res.data.result.forEach((item) => {
        item.open = false;
      });
      this.list = res.data.result;
    },
    // 分类的某一项弹窗显示
    show(id: string) {
      const category = this.list.find((item) => item.id === id);
      category!.open = true;
    },
    // 分类的某一项弹窗隐藏
    hide(id: string) {
      const category = this.list.find((item) => item.id === id);
      category!.open = false;
    },
  },
});
