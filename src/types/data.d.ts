// 所有接口返回的类型
export interface ApiRes<T> {
  code: string;
  msg: string;
  result: T;
}

// 头部导航分类中商品的每一项类型
export interface CategoryGoods {
  desc: string;
  id: string;
  name: string;
  picture: string;
  price: string;
}
// 头部导航分类的每一项类型
export interface CategoryItem {
  id: string;
  name: string;
  picture: string;
  open: boolean;
  goods: CategoryGoods[];
  children: CategoryItem[];
}

// 轮播图里的每一项类型
interface BannerItem {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}
