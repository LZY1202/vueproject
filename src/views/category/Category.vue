<template>
  <div class="wrapper">
    <ul>
      <li>分类1</li>
      <li>分类2</li>
      <li>分类3</li>
      <li>分类4</li>
      <li>分类5</li>
      <li>分类6</li>
      <li>分类7</li>
      <li>分类8</li>
      <li>分类9</li>
      <li>分类10</li>
      <li>分类11</li>
      <li>分类12</li>
      <li>分类13</li>
      <li>分类14</li>
      <li>分类15</li>
      <li>分类16</li>
      <li>分类17</li>
      <li>分类18</li>
      <li>分类19</li>
      <li>分类20</li>
      <li>分类1</li>
      <li>分类2</li>
      <li>分类3</li>
      <li>分类4</li>
      <li>分类5</li>
      <li>分类6</li>
      <li>分类7</li>
      <li>分类8</li>
      <li>分类9</li>
      <li>分类10</li>
      <li>分类11</li>
      <li>分类12</li>
      <li>分类13</li>
      <li>分类14</li>
      <li>分类15</li>
      <li>分类16</li>
      <li>分类17</li>
      <li>分类18</li>
      <li>分类19</li>
      <li>分类20</li>
      <li>分类1</li>
      <li>分类2</li>
      <li>分类3</li>
      <li>分类4</li>
      <li>分类5</li>
      <li>分类6</li>
      <li>分类7</li>
      <li>分类8</li>
      <li>分类9</li>
      <li>分类10</li>
      <li>分类11</li>
      <li>分类12</li>
      <li>分类13</li>
      <li>分类14</li>
      <li>分类15</li>
      <li>分类16</li>
      <li>分类17</li>
      <li>分类18</li>
      <li>分类19</li>
      <li>分类20</li>
      <li>分类1</li>
      <li>分类2</li>
      <li>分类3</li>
      <li>分类4</li>
      <li>分类5</li>
      <li>分类6</li>
      <li>分类7</li>
      <li>分类8</li>
      <li>分类9</li>
      <li>分类10</li>
      <li>分类11</li>
      <li>分类12</li>
      <li>分类13</li>
      <li>分类14</li>
      <li>分类15</li>
      <li>分类16</li>
      <li>分类17</li>
      <li>分类18</li>
      <li>分类19</li>
      <li>分类20</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {};
  },
  mounted() {
    const bscroll = new BScroll(".wrapper", {
      probeType: 2,
      click: true,
      pullUpLoad: true,
    });

    bscroll.on('scroll',(position) =>{

    })

    bscroll.on('pullingUp',()=>{

        setTimeout(() => {
            bscroll.finishPullUp()
        }, 2000);
    })
  }
};
</script>

<style scoped>
.wrapper {
  height: 200px;
  background: red;
}
</style>