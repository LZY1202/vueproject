<template>
  <div :class="['tabbar-item',{'tabbar-item-active': isActive}]" @click="itemClick">
    <slot name="item-icon"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    routername: {
      type: String
    },
    activecolor: {
      type: String,
      default: "rgb(255, 111, 195)"
    }
  },
  data() {
    return {
      // ifActive: false
    };
  },
  computed: {
    isActive() {
      return this.$route.name === this.routername;
    },
    activeStyle() {
      return this.isActive ? { color: this.activecolor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.routername);
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  padding: 5px;
  font-size: 14px;
}

.tabbar-item-active {
  color: rgb(255, 111, 195);
}
</style>