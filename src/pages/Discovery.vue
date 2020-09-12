<template>
<!-- 发现音乐 -->
  <div class="DiscoveryBox">
      <Swiper></Swiper>
      <Nav></Nav>
      <div class="musicList">
          <ul>
              <li>
                  <img>
                  <span>音乐1</span>
              </li>
              <li>
                  <img>
                  <span>音乐</span>
              </li>
              <li>
                  <img>
                  <span>音乐</span>
              </li>
              <li>
                  <img>
                  <span>音乐</span>
              </li>
              <li>
                  <img>
                  <span>音乐</span>
              </li>
              <li>
                  <img>
                  <span>音乐</span>
              </li>
              <li>
                  <img>
                  <span>音乐</span>
              </li>
              <li>
                  <img>
                  <span>音乐</span>
              </li>
              <li>
                  <img>
                  <span>音乐</span>
              </li>
              <li>
                  <img>
                  <span>音乐</span>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Swiper from '../components/Swiper'
import Nav from '../components/Nav'
export default {
    components:{
        Swiper:Swiper,
        Nav:Nav
    }
}
</script>

<style>

/* .musicList{
    display:flex;
} */
.musicList ul{
    list-style: none;
    display:flex;
    flex-wrap: wrap;
}
</style>