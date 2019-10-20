<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TaBbar",
  data() {
    return {};
  }
};
</script>

<style scoped>
 #tabbar {
  display: flex;
  background: #f3f3f3;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 0.5px rgba(179, 179, 179, 0.2);
}

</style>