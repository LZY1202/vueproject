<template>
  <div id="cartlist">
    <cart-list-item v-for="(item,index) in cartlist" :key="index" :product="item" />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  components: {
    CartListItem
  },
  props: {
    cartlist: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>