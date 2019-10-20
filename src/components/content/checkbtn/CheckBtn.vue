<template>
  <div id="checkbtn" :class="{active: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "CheckBtn",
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#checkbtn {
  border-radius: 50%;
  border: 1px solid rgba(138, 136, 136, 0.582);
}
.active {
  background: red;
}
</style>