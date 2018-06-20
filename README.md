![Image text](https://github.com/wlimiy/vue2.0-book/blob/master/images/1.png)
![Image text](https://github.com/wlimiy/vue2.0-book/blob/master/images/2.png)
![Image text](https://github.com/wlimiy/vue2.0-book/blob/master/images/3.png)
### 启后端服务
mock>server.js
### 启前端服务
```
wangbingqideMacBook-Pro:test wangbingqi$ cd vueStudy
wangbingqideMacBook-Pro:vueStudy wangbingqi$ cd vueProject
wangbingqideMacBook-Pro:vueProject wangbingqi$ npm run dev

```
### 全局安装vue脚手架
```
sudo npm install vue-cli -g
```
* 用vue-cli初始化一个webpack项目，命令行：
```
vue init webpack 项目名
```
* 安装插件，使用webpack模板生成一个vue项目
```
cd 项目名字
sudo npm install
npm run dev
```
#### 安装项目依赖
* 项目用到less
* 项目用到axios
* 项目用到vuex
* bootstrap
```
npm install less less-loader axios vuex bootstrap
```
#### 创建项目目录
vue-book项目根目录
- mock:放后端服务代码，用来放模拟后端的数据，为了看到开发项目的效果
    - server .js
    - sliders.js
- src
    - api：放所有的接口文件
    - base：基础组件
    - components：页面组件
        - 首页Home.vue
        - 列表页List.vue
        - 添加页Add.vue
        - 收藏页Collect.vue
        - 详情页Detail.vue
    - router
    - App.vue
    - main.js
#### iconfont添加页面图标
* http://www.iconfont.cn/
* 首页 列表页 添加页 收藏 返回按钮
* 点击添加项目按钮，查看项目链接，把css路径粘贴到index.html里。
```
<link rel="stylesheet" href="//at.alicdn.com/t/font_678227_cfppikf65f4gf1or.css">
<i class="iconfont icon-weibiaoti1"></i>
```
#### 使用vue-awesome-swiper，实现首页轮播图
```
sudo npm install vue-awesome-swiper --save
```
#### vue-router模块化开发写法
* router>index.js
```
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {path:"/home",component:Home}
  ]
});
```
#### 热门图书功能
* 先写服务端，确保数据能正常返回
```
mock>server.js
//读取文件
function read(cb){
  fs.readFile('./book.json','utf-8',function (err,data) {
    if(err||data.length==0){
      cb([]);//如果有错误，或者文件没长度，就是空数组
    }else{
      cb(JSON.parse(data));//将读出来的内容转化成对象
    }
  })
}
if(pathname==='/hot'){
    read(function (books) {
     let hot = books.reverse().slice(0,6);
     res.end(JSON.stringify(hot));
    });
    return
  }
```
* 增加api方法，实现调取数据的功能
```
api>index.js
//获取热门图书接口
export let getHotBook=()=>{
  return axios.get('/hot')
};
```
* 在哪个组件中应用这个api，如果是一个基础组件，需要用这些数据，在使用这个组件的父级中调用这个方法，将数据传递给基础组件
```
Home.vue
import {getSliders,getHotBook} from '../api'
data(){
    return {
      sliders:[],
      hotBooks:[]
    }
}
created(){
    this.getSlider();//获取轮播书
    this.getHot();//获取热门图书
}
methods: {
  async getHot(){
    this.hotBooks=await getHotBook();
  }
}
<div class="container">
  <h3>热门图书</h3>
  <ul>
    <li v-for="hot in hotBooks">
      <img :src="hot.bookCover">
      <b>{{hot.bookName}}</b>
    </li>
  </ul>
</div>
```
#### 写一个基础组件
* 创建一个.vue文件
* 在需要使用这个组件的父级中引用这个组件
* 在组件中注册
* 以标签的形式引入
#### RESTful架构
#### 下拉加载 /page
* 默认情况下，每次给五条
* 前端告诉后台，现在要从第几条开始给我
* /page?offset=5
* 后台返回时，还要告诉前端是否有更多的数据
* hasMore=false
#### 图片懒加载：vue-lazyload
* npm install vue-lazyload
* <img v-lazy="book.bookCover">
```
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
```
#### coding split Vue代码分隔懒加载
* 懒加载：延迟加载，需要的时候进行加载，随用随载
* 以前路由的写法
```
import Detail from '../components/Detail.vue';
{
  path:"/list",
  component:List
}
```
* 现在动态加载路由的写法
```
    {
      path:"/list",
      component:()=>import('../components/List.vue')
    },
```
#### 项目打包
* npm run build
* 静态服务
```
 //读取路径
  fs.stat('.'+pathname,function (err,stats) {
    if(err){
      res.statusCode=404;
      res.end('NOT FOUND');
    }else{//如果是目录会报错
      if(stats.isDirectory){
        let p=require('path').join('.'+pathname,'./index.html');
        fs.createReadStream(p).pipe(res);
      }else{
        fs.createReadStream('.'+pathname).pipe(res);
      }
    }
  })
```
#### 全局钩子
```
//在进入路由之前，每一次都会执行此方法,全局钩子
router.beforeEach(function (to,from,next) {
  document.title=to.meta.title;
  next();
});

{
  path:"/add",
  component:()=>import('../components/Add.vue'),
  meta:{title:'添加'}
}
```
