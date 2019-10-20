<template>
  <div id="recommend-item">
    <ul class="recommend">
      <li v-for="(item,index) in recommends" :key="index">
        <a href="#">
          <img :src="item.image" alt />
          <div>{{item.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    recommends: {
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

<style  scoped>
.recommend {
    display: flex;
    text-align: center;
    font-size: 14px;
    padding-bottom: 12px;
    border-bottom: 8px solid rgba(219, 219, 219, 0.5);
}
.recommend li{
    flex: 1;
}
.recommend img{
    width: 70px;
    height: 70px;
    margin: 5px 0 8px 0;
}

</style>