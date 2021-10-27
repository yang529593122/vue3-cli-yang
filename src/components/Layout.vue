<template>
  <el-row class="app">
    <el-col class="nomargin left-content">
      <Menus />
    </el-col>
    <el-col class="nomargin right-content">
      <BaseContent>
        <router-view></router-view>
      </BaseContent>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import BaseContent from "./BaseContent";
import Menus from "./Menus";

export default defineComponent({
  name: "Layout",
  components: { Menus, BaseContent },
  setup() {
    const store = useStore();
    return {
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
    .left-content {
      max-width: 200px;
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
