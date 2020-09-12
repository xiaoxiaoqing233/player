<template>
  <div class="homeBox">
    <header>
      <Header></Header>
    </header>
    <section class="mainBox">
        <Aside></Aside>
        <router-view />
    </section>
  </div>
</template>

<script>
import Header from "../components/Header";
import Aside from "../components/Aside";
// import Swiper from '../components/Swiper'
// import Discovery from '../components/Discovery'
export default {
  components: {
    Header: Header,
    Aside: Aside,
    // Discovery:Discovery,
    // Swiper:Swiper
  },
};
</script>

<style>
.mainBox {
  display: flex;
}
/* 侧边栏点击高亮 */
.router-link-active {
  color: white;
  background-color: orange;
}
</style>