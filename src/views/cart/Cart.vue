<template>
  <div id="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <scroll class="cart-scroll" ref="scroll">
      <cart-list :cartlist="$store.state.cartlist" />
      <ul>
        <li>aaa1</li>
        <li>aaa2</li>
        <li>aaa3</li>
        <li>aaa4</li>
        <li>aaa5</li>
        <li>aaa6</li>
        <li>aaa7</li>
        <li>aaa8</li>
        <li>aaa9</li>
        <li>aaa10</li>
        <li>aaa11</li>
        <li>aaa12</li>
        <li>aaa13</li>
        <li>aaa14</li>
        <li>aaa15</li>
        <li>aaa16</li>
        <li>aaa17</li>
        <li>aaa18</li>
        <li>aaa19</li>
        <li>aaa20</li>
        <li>aaa21</li>
        <li>aaa22</li>
        <li>aaa23</li>
        <li>aaa24</li>
        <li>aaa25</li>
        <li>aaa26</li>
        <li>aaa27</li>
        <li>aaa28</li>
        <li>aaa29</li>
        <li>aaa30</li>
        <li>aaa31</li>
        <li>aaa32</li>
        <li>aaa33</li>
        <li>aaa34</li>
        <li>aaa35</li>
        <li>aaa36</li>
        <li>aaa37</li>
        <li>aaa38</li>
        <li>aaa39</li>
        <li>aaa40</li>
        <li>aaa41</li>
        <li>aaa42</li>
        <li>aaa43</li>
        <li>aaa44</li>
        <li>aaa45</li>
        <li>aaa46</li>
        <li>aaa47</li>
        <li>aaa48</li>
        <li>aaa49</li>
        <li>aaa50</li>
      </ul>
    </scroll>
    <cart-bottom-bar class="bottom-bar"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import CartList from "./childComponents/CartList";
import CartBottomBar from './childComponents/CartBottomBar'
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      length: "cartLength"
    })
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style  scoped>
#cart {
  height: 100vh;
  position: relative;
}
.navbar {
  color: white;
  background: var(--color-tint);
  position: relative;
  z-index: 10;
}
.cart-scroll {
  /* position: absolute;
  top: 44px;
  bottom: 89px;
  right: 0;
  left: 0; */
  height: calc(100% - 49px - 44px - 40px);
  overflow: hidden;
}
.bottom-bar{
  position: absolute;
  bottom: 89px;
  top: 0;
  left: 0;
  right: 0;
}
</style>