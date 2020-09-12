<template>
<!-- 侧边导航栏 -->
  <div class="asideBox">
      <ul>
          <li><router-link to="/Discovery">发现音乐</router-link></li>
          <li><router-link to="/PlayList">推荐歌单</router-link></li>
          <li><router-link to="/NewSongs">最新音乐</router-link></li>
          <li><router-link to="/NewMV">最新MV</router-link></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.asideBox{
  width: 200px;
  background-color: #ededed;
}
.asideBox ul{
list-style: none;
}
.asideBox ul li{
  text-align: center;
  margin: 10px;
}

</style>