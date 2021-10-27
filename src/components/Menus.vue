<template>
    <el-menu
      :default-active="paths"
      @open="handleSelect"
      router
      class="menu-content"
    >
      <SideBar :list="menus"></SideBar>
    </el-menu>
</template>

<script>
import { computed, defineComponent, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SideBar from "./SideBar";

export default defineComponent({
  components: { SideBar },
  setup() {
    const paths = ref("/");
    const store = useStore();
    const router = useRouter();
    const handleSelect = () => {
     // console.log(store, 222);
    };
    watchEffect(() => {
      router.getRoutes().map((item) => {
        if (item.path === router.currentRoute.value.path) {
          paths.value = router.currentRoute.value.path;
        }
      });
    });
    return {
      paths,
      menus: computed(() => store.getters.menus),
      handleSelect,
    };
  },
});
</script>

<style>
.menu-content {
  height: 100vh;
  overflow: auto;
  border: none;
}
</style>
