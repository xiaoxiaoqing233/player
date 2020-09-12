<template>
<!-- 分类搜索导航 -->
  <div class="navBox">
          <ul>
              <li>地区：</li>
              <li><button>全部</button></li>
              <li><button>内地</button></li>
              <li><button>港台</button></li>
              <li><button>欧美</button></li>
              <li><button>日本</button></li>
              <li><button>韩国</button></li>
        </ul>
        <ul>
              <li>类型：</li>
              <li><button>全部</button></li>
              <li><button>官方版</button></li>
              <li><button>原声</button></li>
              <li><button>现场版</button></li>
              <li><button>网易出品</button></li>
        </ul>
        <ul>
              <li>排序：</li>
              <li><button>上升最快</button></li>
              <li><button>最热</button></li>
              <li><button>最新</button></li>
        </ul>
      </div>
</template>

<script>
export default {

}
</script>

<style>
.navBox ul{
    list-style: none;
    display: flex;
}
</style>