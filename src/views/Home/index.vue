<template>
  <div>
    <h1>This is an home page</h1>
     <HelloWorld />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";

export default defineComponent({
  name: "Home",
    components: { HelloWorld },
});
</script>

<style scoped lang="less">

</style>
