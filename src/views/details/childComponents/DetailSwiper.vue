<template>
    <swiper class="detail-swiper">
        <swiper-item v-for="(item, index) in topImages" :key="index">
            <img :src="item" alt="" @load="swiperLoaded">
        </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
      topImages:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
      swiperLoaded(){
          this.$emit("swiperLoaded")
      }
  }
};
</script>

<style scoped>
.detail-swiper{
    height: 400px;
}
</style>