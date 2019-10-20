<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @nbClick="navClick" ref="nvabar"/>
    <scroll class="detail-scroll" ref="scroll" :probeType="3" @scroll="getCurrentPosition">
      <detail-swiper :topImages="topImages" @swiperLoaded="swiperLoaded"></detail-swiper>
      <detail-base-info :goodDetails="goods" />
      <detail-base-shop-info :shop="shop" />
      <detail-params ref="Dparams" />
      <detail-comment ref="Dcomment" />
      <detail-recommend ref="Drecommend" />
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailBaseShopInfo from "./childComponents/DetailBaseShopInfo";
import DetailParams from "./childComponents/DetailParams";
import DetailComment from "./childComponents/DetailComment";
import DetailRecommend from "./childComponents/DetailRecommend";
import DetailBottomBar from './childComponents/DetailBottomBar'

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop } from "network/details";
export default {
  name: "Details",
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      positionY: [],
      currentIndex: 0
    };
  },
  props:{
    img:{
      type:String,
      default: "",
    }
  },
  created() {
    this.id = this.$route.query.id;
    this.getDetail();
    // this.getPositionY();
  },
  computed: {},
  methods: {
    getDetail() {
      getDetail(this.id).then(res => {
        console.log(res);
        const data = res.result;
        this.topImages = res.result.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shop = new Shop(data.shopInfo);
      });
    },
    navClick(index) {
      console.log("details", index);
      this.$refs.scroll.scrollTo(0, -this.positionY[index], 200);
      console.log(this.positionY);
    },
    swiperLoaded() {
      this.getPositionY();
    },
    getPositionY() {
      this.$nextTick(() => {
        this.positionY = [];
        this.positionY.push(
          0,
          this.$refs.Dparams.$el.offsetTop,
          this.$refs.Dcomment.$el.offsetTop,
          this.$refs.Drecommend.$el.offsetTop
        );
      });
    },
    getCurrentPosition(position) {
      const length = this.positionY.length;
      position = -position.y;
      // console.log(position);
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i) {
          if (i <= length - 1) {
            if (
              this.positionY[i] <= position &&
              this.positionY[i + 1] > position
            ) {
              this.currentIndex = i;
              this.$refs.nvabar.currentIndex = this.currentIndex;
            }
          }
          if (this.currentIndex !== length - 1) {
            if (position >= this.positionY[length - 1]) {
              this.currentIndex = length - 1;
              // console.log(this.currentIndex);
              this.$refs.nvabar.currentIndex = this.currentIndex;
            }
          }
        }
      }
    },
    addToCart(){
      const product = {};
      product.id = this.id;
      product.price = this.goods.realPrice;
      product.title = this.goods.title;
      product.img = this.goods.img
      product.count = 1;
      this.$store.dispatch("addCart",product).then(res =>{
        console.log(res);
        this.$toast.show(res);
      })
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailBaseShopInfo,
    Scroll,
    DetailParams,
    DetailComment,
    DetailRecommend,
    DetailBottomBar,
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background: white;
}
.detail-nav {
  position: relative;
  z-index: 10;
  background: white;
}
.detail-scroll {
  /* height: calc(100% - 44px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.bottom-bar{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: calc(100% - 49px - 44px);
}
</style>