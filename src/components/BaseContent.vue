<template>
  <div class="content">
    <Header/>
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "./Header";

export default defineComponent({
  name: "BaseContent",
  components: { Header },
});
</script>

<style scoped lang="less">
.content {
  height: 100vh;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;

  .page-content {
    margin: 20px;
    padding: 16px;
    background: #fff;
  }
}
</style>
