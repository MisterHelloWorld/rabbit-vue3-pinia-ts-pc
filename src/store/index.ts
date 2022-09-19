import useCategoryStore from "./modules/category";
import useHomeStore from "./modules/home";
export default function useStore() {
  return {
    // 头部导航模块
    category: useCategoryStore(),
    // 首页轮播图模块
    home: useHomeStore(),
  };
}
