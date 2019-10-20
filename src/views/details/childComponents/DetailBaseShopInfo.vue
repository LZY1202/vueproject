<template>
  <div id="detail-base-shop-info" v-if="Object.keys(shop).length > 0">
    <div class="shop-logo">
      <div align="center">
        <img :src="shop.logo" alt />
      </div>
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-cell">
      <div class="shop-cell-info">
        <div>
          <span class="shop-cell-num">{{sells}}万</span>
          <br />
          <span class="shop-cell-text">销量</span>
        </div>
        <div>
          <span>{{shop.goodsCount}}</span>
          <br />
          <span class="shop-cell-text">商品</span>
        </div>
        
      </div>
      <div class="line"></div>
      <ul class="shop-cell-score">
        <li v-for="(item, index) in shop.score" :key="index">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
          <span>{{ item.isBetter ? "高":"低"}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    sells() {
      return (this.shop.sells * 0.0001).toFixed(1);
    }
  }
};
</script>

<style scoped>
.shop-logo {
  height: 60px;
  line-height: 60px;
  display: flex;

  /* align-items: center; */
}
.shop-logo img {
  position: relative;
  top: 8px;
  width: 45px;
  height: 45px;
  margin-right: 5px;
  margin-left: 10px;
}
.shop-cell {
  display: flex;
}
.shop-cell-info {
  width: 50%;
  /* height: 50px; */
  display: flex;
  justify-content: space-around;
  padding: 30px 30px;
  /* border-right: 1px solid black */
}
.shop-cell-text {

  font-size: 20px;
  font-weight: bolder;
}
.shop-cell-score {
  width: 50%;
  /* line-height:35px;  */
  font-size: 15px;
  position: relative;
}
.shop-cell-score li{
  margin:10px 0;
}
.shop-cell-score span:last-child{
  position: absolute;
  right: 10%;
  color: white;
  border-radius: 5px;
  background: red;
  margin-left: 10px;
  padding:0 2px;
}
.shop-cell-score span:nth-child(2){
  position: absolute;
  left: 55%;
}
.shop-cell-score span:first-child{
  /* position: absolute; */
  margin-left: 10%;
}
.line{
  height: 40px;
  border-left: 1px solid rgba(0, 0, 0, 0.123);
  margin-top: 30px;
}
</style>