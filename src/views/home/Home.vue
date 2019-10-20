<template>
  <div id="home">
    <nav>
      <nav-bar class="navbar">
        <span slot="center">购物街</span>
      </nav-bar>
    </nav>
    <tab-control
      :titles="titles"
      :class="['tab-control',{'fixed':isTabFixed}]"
      @tabClick="tabClick"
      ref="tabcontrol1"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="scrollPosition"
      @loader="loaderMore"
    >
      <home-swiper :banners="banners" @swiperLoad="swiperLoad"></home-swiper>
      <recommend-item :recommends="recommends"></recommend-item>
      <feature-view></feature-view>
      <tab-control :titles="titles" :class="['tab-control']" @tabClick="tabClick" ref="tabcontrol2"></tab-control>
      <goods-list :goodslist="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./homechild/HomeSwiper";
import RecommendItem from "./homechild/RecommendItem";
import FeatureView from "./homechild/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

import { debounce } from "@/utils/utils";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendItem,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      currentTypeList: ["pop", "new", "sell"],
      currentIndex: 0,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      isShowBackTop: false,
      tabCtrlPosition: 0,
      isTabFixed: false,
      scrollY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    currentType() {
      return this.currentTypeList[this.currentIndex];
    }
  },
  created() {
    //请求轮播图数据
    this.getHomeMultidata();

    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 监听item中的图片加载完成
    let refresh = debounce(this.$refs.scroll.refresh, 300);
    this.$bus.$on("imageloadFinish", () => {
      refresh();
    });
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.scrollY;
  },
  methods: {
    /*
     * 事件监听相关的方法
     */
    tabClick(index) {
      this.currentIndex = index;
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;

      this.$refs.scroll.scrollTo(0, -this.tabCtrlPosition);
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    scrollPosition(position) {
      // 判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;
      // 决定tabControl是否吸顶
      this.isTabFixed = -position.y > this.tabCtrlPosition;
    },
    loaderMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperLoad() {
      // console.log(this.$refs.tabcontrol.$el.offsetTop);
      this.tabCtrlPosition = this.$refs.tabcontrol2.$el.offsetTop;
    },
    /*
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      //轮播图请求
      getHomeMultidata().then(res => {
        if (res && res.data) {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        }
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        if (res && res.data) {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;
        }
        //刷新上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.navbar {
  color: white;
  background: rgb(255, 111, 195);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  box-shadow: 0 1px 3px rgba(255, 111, 195, 0.5);
}
.fixed {
  position: fixed;
  top: 39px;
  right: 0;
  left: 0;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* top: */
}
</style>