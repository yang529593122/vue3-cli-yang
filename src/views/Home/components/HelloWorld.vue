<template>
  <div class="hello">
    <p><button @click="getProducts">异步axios</button>{{ name }}</p>
    <p><button @click="delItem">同步</button>{{ count }}</p>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const store = useStore();
    store.dispatch("getProducts");
    return {
      name: computed(() => store.getters.name),
      count: computed(() => store.getters.count),
      delItem: () => {
        store.commit("delItem", 3);
      },
      getProducts: () => {
        store.dispatch("getProducts");
      },
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
