<template>
  <transition name="backtop">
    <div id="back-top">
      <img src="~assets/img/common/top.png" alt />
    </div>
  </transition>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style scoped>
#back-top {
  position: fixed;
  bottom: 50px;
  right: 5px;
}
#back-top img {
  width: 43px;
  height: 43px;
}
.backtop-enter-active{
    animation: backtop 1s;
}
.backtop-leave-active{
    animation: backtop 1s reverse;
}
@keyframes backtop {
    0%{
        transform: translateY(20px);
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>