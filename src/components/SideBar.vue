<template>
  <template v-for="(item, index) in list">
    <template v-if="item.children.length">
      <el-sub-menu :index="item.index" :key="index">
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{ item.name }}</span>
        </template>
        <SideBar :list="item.children"></SideBar>
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item  :key="index" :index="item.index">
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </el-menu-item>
    </template>
  </template>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",
  props: {
    list: Array,
  },
});
</script>

<style scoped></style>
