// import Vue from 'vue'
// import Vuex from 'vuex'
// import logger from 'vuex/dist/logger'//是一个日志插件
// Vue.use(Vuex);
// //容器是唯一的
// const state={count:0};
// const getters={
//   val:(state)=>state.count%2?'奇数':'偶数'
// };
// import mutations from './mutations';
// export default new Vuex.Store({
//   state,
//   getters,
//   strict:true,//只能通过mutation(管理员)来更改状态，mutation不支持异步
//   mutations,
//   plugins:[logger()]
// });
import Vue from 'vue';
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import mutations from './mutations'
Vue.use(Vuex);
const state={
  count:0
};

const getters={
  val:state=>state.count%2?'奇数':'偶数'
};
export default new Vuex.Store({
  state,
  mutations,
  getters,
  strict:true,//只能通过mutation(管理员)来更改状态
  plugins:[logger()]
});
