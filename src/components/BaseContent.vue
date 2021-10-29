<template>
  <div class="content">
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";


export default defineComponent({
  name: "BaseContent",
});
</script>

<style scoped lang="less">
.content {
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
  .page-content {
    flex:1;
    margin: 20px;
    padding: 16px;
    background: #fff;
    overflow:auto;
  }
}
</style>
