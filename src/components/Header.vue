<template>
<!-- 头部 -->
  <div class="headerBox">
    <div class="left">左边</div>
    <div class="center">中间</div>
    <div class="right">
      搜索:
      <input type=text placeholder="请输入您想搜索的歌曲"
      v-model="inputValue" @keyup.enter="toSearch">
    </div>
  </div>
</template>

<script>
import PlayListVue from '../pages/PlayList.vue'
export default {
  data(){
    return{
      inputValue:''
    }
  },
  methods:{
    toSearch(){
      if(this.inputValue==''){
        // 如果为空，提示
        alert("请输入搜索内容")
      }else{
        // 否则跳转
        this.$router.push('./PlayList')
      }
    }
  }
}
</script>

<style>
.headerBox{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
}
</style>