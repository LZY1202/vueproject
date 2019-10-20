<template>
  <div id="detail-nav-bar">
    <nav-bar>
      <ul slot="center" class="center">
        <li
          v-for="(item, index) in title"
          :key="index"
          :class="['center-item',{'item-select': index === currentIndex}]"
          @click="navbarClick(index)"
        >{{item}}</li>
      </ul>
      <div slot="left" @click="backToHome" class="back-item">
          <img src="~assets/img/common/back.svg" alt="">
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    navbarClick(index) {
      this.currentIndex = index;
      this.$emit("nbClick",index);
    },
    backToHome(){
        this.$router.back();
    }
  },
  components: {
    NavBar
  }
};
</script>

<style  scoped>
#detail-nav-bar {
  font-size: 15px;
  box-shadow: 0 1px 2px rgb(56, 56, 56, 0.2);
}
.item-select {
  color: var(--color-tint);
}
.back-item{
    padding-top: 6px;
}
.center {
  display: flex;
}
.center-item {
  flex: 1;
}
</style>