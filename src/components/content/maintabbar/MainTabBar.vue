<template>
    <tab-bar>
      <tab-bar-item routername="home">
        <i class="iconfont" slot="item-icon">&#xe602;</i>
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item routername="category">
        <i class="iconfont" slot="item-icon">&#xe7f9;</i>
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item routername="cart">
        <i class="iconfont" slot="item-icon">&#xe601;</i>
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item routername="profile">
        <i class="iconfont" slot="item-icon">&#xe60c;</i>
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem,
  },
  computed: {

  },
}
</script>

<style>
  @import url("../../../assets/iconfont/tabbar/iconfont.css");
</style>