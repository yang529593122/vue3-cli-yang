<template>
  <template v-if="isLogin">
      <el-container class="warp">
          <el-aside width="200px" class="aside">
              <div class="logo">XXX后台管理系统</div>
              <Menus />
          </el-aside>
          <el-container>
              <el-header class="header">
                  <Header/>
              </el-header>
              <el-main>
                  <BaseContent>
                    <router-view></router-view>
                  </BaseContent>
              </el-main>
          </el-container>
      </el-container>
  </template>
  <template v-else>
    <Login />
  </template>

</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import BaseContent from "./BaseContent";
import Menus from "./Menus";
import Login from "../views/Login";
import Header from "./Header";

export default defineComponent({
  name: "Layout",
  components: { Menus, BaseContent, Login,Header },
  setup() {
    const store = useStore();
    let isLogin = ref(false);
    isLogin = localStorage.getItem("token") ? true : false;
    console.log(isLogin, 222);
    return {
      isLogin,
      count: computed(() => store.getters.count),
      arr: computed(() => store.getters.arr),
      delItem: (data) => {
        store.commit("delItem", data);
      },
      getProducts: () => {
        store.dispatch("getProducts");
      },
    };
  },
});
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.warp{
  height:100vh;
    .aside{
        background: #d3dce6;
    }
    .logo{
        height: 59px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .header{
        border-bottom:1px solid #ccc;
    }
}
</style>
