<template>
  <div class="header">
    <div class="left"></div>
    <div class="right">
      <el-space>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <el-button type="text">{{name}}</el-button>
        <el-button type="text" @click="loginOut">退出</el-button>
      </el-space>
    </div>
  </div>
</template>

<script>
import { defineComponent,reactive,toRefs } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const state = reactive({
      name:localStorage.getItem('token')
    })
    const loginOut = () =>{
      localStorage.clear()
      sessionStorage.clear()
      window.location.href = '/login'
    }
    return {
      ...toRefs(state),
      loginOut
    }
  }

});
</script>

<style scoped lang="less">

.header {
  padding:0 20px;
  height: 60px;
  background-color: #fff;
  display:flex;
  justify-content: space-between;
  .right{
    display: flex;
    align-items: center;
  }
}

</style>
