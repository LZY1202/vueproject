<template>
  <div id="detail-bottom-bar">
    <div class="cart" @click="addCart">
      <span>加入购物车</span>
    </div>
    <div class="collect">
      <span>收藏</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {};
  },
  methods:{
      addCart(){
          this.$emit("addToCart")
      }
  }
};
</script>

<style scoped>
#detail-bottom-bar {
  display: flex;
  height: 49px;
  position: relative;
  bottom: 49px;
  left: 0;
  right: 0;
}
.cart {
  text-align: center;
  line-height: 49px;
  background: red;
  color: white;
  flex: 1;
}
.collect {
  text-align: center;
  line-height: 49px;
  background: yellow;
  color: black;
  flex: 1;
}
</style>