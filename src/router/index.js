import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/index'
import Billboard from '@/page/billboard'
import Column from '@/page/column'
import PersonCenter from '@/page/personCenter'
import ProgramDetail from '@/page/billboard/programDetail'
import MovieBill from '@/page/billboard/movieBill'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/programDetail/:id",
      name:"ProgramDetail",
      component:ProgramDetail
    },
    {
      path:"/:type/more",
      name:"MovieBill",
      component:MovieBill,
    },
    {
      path: '/',
      component: Home,
      children:[
        {
          path: '/',
          name: 'Billboard',
          component:Billboard
        },{
          path: '/column',
          name: 'Column',
          component:Column
        },{
          path: '/personCenter',
          name: 'PersonCenter',
          component:PersonCenter
        }
      ]
    }
  ]
})
