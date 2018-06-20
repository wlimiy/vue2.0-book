import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../components/Home.vue';
// import List from '../components/List.vue';
// import Add from '../components/Add.vue';
// import Collect from '../components/Collect.vue';
// import Detail from '../components/Detail.vue';
Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:"/home",
      component:()=>import('../components/Home.vue'),
      meta: {
        keepAlive: true, // 需要被缓存
        title:'首页'
      }
    },
    {
      path:"/list",
      component:()=>import('../components/List.vue'),
      meta:{title:'列表页'}

    },
    {
      path:"/add",
      component:()=>import('../components/Add.vue'),
      meta:{title:'添加'}
    },
    {
      path:"/collect",
      // component:Collect
      component:()=>import('../components/Collect.vue'),
      meta:{title:'收藏'}
    },
    {
      path:"/detail/:bid",
      component:()=>import('../components/Detail.vue'),
      name:'detail',
      meta:{title:'详情页'}
    },
    {
      path:"",
      component:()=>import('../components/Home.vue')
    },
    {
      path:"*",
      component:()=>import('../components/Home.vue')
    },
  ]
});
