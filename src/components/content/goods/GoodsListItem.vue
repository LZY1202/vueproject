<template>
  <div class="goods-list-item" @click="goodsDetailPush">
    <img v-lazy="good.show.img" @load="imageloadFinish"/>
    <div class="goods-info">
      <p>{{good.title}}</p>
      <span class="price">{{good.price}}</span>
      <span class="collect">⭐{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    good: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    imageloadFinish(){
      this.$bus.$emit("imageloadFinish")
    },
    goodsDetailPush(){
      this.$router.push({name: 'details',query:{id: this.good.iid}})
    }
  }
};
</script>

<style scoped>
.goods-list-item {
    width: 48%;
    position: relative;
    padding-bottom: 40px;
}
.goods-info{
    font-size: 14px;
    text-align: center;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
}
.goods-list-item img {
    border-radius: 10px;
    width: 100%;
}
.goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.goods-info .price{
    color: var(--color-high-text);
    margin-right: 15px;
}
</style>