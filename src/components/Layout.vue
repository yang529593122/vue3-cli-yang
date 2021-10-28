<template>
  <template v-if="isLogin">
    <el-row class="app">
      <el-col class="nomargin left-content">
        <div class="logo">
          XXX后台管理系统
        </div>
        <Menus />
      </el-col>
      <el-col class="nomargin right-content">
        <BaseContent>
          <router-view></router-view>
        </BaseContent>
      </el-col>
    </el-row>
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

export default defineComponent({
  name: "Layout",
  components: { Menus, BaseContent, Login },
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
html,
body,
#app {
  width: 100%;
  height: 100%;
  .app {
    display: flex;
    height:100vh;
    .left-content {
      max-width: 200px;
      height:100vh;
      .logo{
        height:60px;
        display:flex;
        justify-content: center;
        align-items: center;
      }
    }
    .right-content {
      flex: 1;
    }
    .nomargin {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
}
</style>
