<template>
  <div class="login">
    <div class="login-content">
      <el-button type="primary" @click="login">login</el-button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  setup() {
    const login = ()=>{
      localStorage.setItem("token",'yang')
      window.location.href='/'
    }
    return {
      login
    }
  }
});
</script>

<style scoped lang="less">
.login{
  width: 100%;
  height: 100vh;
  display: flex;
  .login-content{
    flex: 1;
    display:flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
