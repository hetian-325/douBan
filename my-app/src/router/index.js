import Vue from 'vue'
import Router from 'vue-router'

import douBan from '../pages/douBan'
import dianYing from '../pages/dianYing'
import tuShu from '../pages/tuShu'
import guangBo from '../pages/guangBo'
import xiaoZu from '../pages/xiaoZu'
import souSuo from '../pages/souSuo'

import zhuCe from '../components/user/zhuCe'
import dengLu from '../components/user/dengLu'

import lunBo from '../components/movie/lunBo'
import xQing from '../components/movie/xQing'

import douCon from '../components/douCon'
import syxQ from '../components/syxQ'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/doucon',name:'douCon',component:douCon},
    {path:'/syxq/:id',name:'syxQ',component:syxQ},
    {path:'/lunbo',name:'lunBo',component:lunBo},
    {path:'/xqing/:id',name:'xQing',component:xQing},
    {path:'/zhuce',name:'zhuCe',component:zhuCe},
    {path:'/denglu',name:'dengLu',component:dengLu},
    {path:'/douban',name:'douBan',component:douBan},
    {path:'/dianying',name:'dianYing',component:dianYing},
    {path:'/tushu',name:'tuShu',component:tuShu},
    {path:'/guangbo',name:'guangBo',component:guangBo},
    {path:'/xiaozu',name:'xiaoZu',component:xiaoZu},
    {path:'/sousuo',name:'souSuo',component:souSuo},
    {path:'/*',redirect:'/douban'}
  ]
})
