/**
 * Time: 2021/10/18.
 * Author: Yang PengFei
 */
import { getData } from "../../api/services/homeService";

const state = {
  menus:[
    {
      name: "首页",
      icon: "el-icon-folder",
      index:"/",
      children: []
    },
    {
      name: "设置",
      index: '/about',
      icon: "el-icon-menu",
      children: [
        {
          name: "关于我们",
          icon: "el-icon-menu",
          index:"/about",
          children: []
        }
      ]
    },
    {
      name: "订单",
      icon: "el-icon-document-copy",
      index:"/home",
      children: [
        {
          name: "订单列表",
          icon: "el-icon-document-copy",
          index:"/home",
          children: []
        },
      ]
    },

  ],
  name:'失败',
  count:0
};
const mutations = {
  delItem(state, data) {
    state.count = state.count+data
  },
  setArrs(state, data) {
    state.name = data;
  },
};
const actions = {
  getProducts({ commit }) {
    getData().then(res=>{
      console.log(res,222)
      commit("setArrs", res.message);
    })
    // setTimeout(() => {
    //   commit("setArrs", [{ name: "这是一个商品" }]);
    // }, 1000);
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
