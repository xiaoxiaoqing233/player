import Vue from 'vue'
import Router from 'vue-router' // 1.导入路由
import Discovery from '../pages/Discovery.vue'
import PlayList from '../pages/PlayList.vue'
import NewSongs from '../pages/NewSongs.vue'
import NewMV from '../pages/NewMV.vue'

Vue.use(Router) // 2.use路由

export default new Router({//3.创建路由
  routes: [// 4.挂载路由
    {
      path: '/',
      name: 'Discovery',
      component: Discovery
    },
    {
      path: '/Discovery',
      name: 'Discovery',
      component: Discovery
    },
      {
      path: '/PlayList',
      name: 'PlayList',
      component: PlayList
    },
      {
      path: '/NewSongs',
      name: 'NewSongs',
      component: NewSongs
    },
      {
      path: '/NewMv',
      name: 'NewMV',
      component: NewMV
    }
  ]
})
