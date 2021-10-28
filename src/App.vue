<template>
  <Layout />
</template>

<script>
import { defineComponent } from "vue";

import Layout from "./components/Layout";

export default defineComponent({
  name: "App",
  components: { Layout },
});
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #ddd;
}
::-webkit-scrollbar-thumb {
  background-color: #e6e6e6;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
