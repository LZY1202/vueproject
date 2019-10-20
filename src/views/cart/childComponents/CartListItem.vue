<template>
  <div id="cart-list-item">
    <div class="checkbtn">
        <check-btn :is-checked="product.checked" @click.native="checked"></check-btn>
    </div>
    <div class="item-img">
      <img :src="product.img" alt />
    </div>
    <div class="item-text">
      <div class="item-title">
        <p>{{product.title}}</p>
      </div>
      <div class="item-info">
        <span>{{product.price}}</span>
        <span>x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBtn from 'components/content/checkbtn/CheckBtn'
export default {
  name: "CartListItem",
  components:{
      CheckBtn,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods:{
      checked(){
          this.product.checked = !this.product.checked;
          console.log(this.product);
      }
  }
};
</script>

<style scoped>
#cart-list-item {
  /* box-sizing: border-box; */
  display: flex;
  height: 20vh;
  padding: 1% 2%;
  border-bottom: 1px solid black;
}
.checkbtn {
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img img {
  width: 80%;
  height: 90%;
  border-radius: 15px;
}
.item-text {
  width: 65%;
  position: relative;
  margin-right: 2%;
}
.item-info {
  position: absolute;
  bottom: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.item-title {
  /* height: 30%; */
  margin-top: 5%;
}
.item-info span {
  font-size: 18px;
}
.item-title p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>