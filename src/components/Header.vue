<template>
  <div class="header">
    <div class="left"></div>
    <div class="right">
      <div class="userimg"><img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt=""></div>
      <div class="user-menu">
        <span>管理员</span>
        <span @click="loginOut">退出</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const loginOut = () =>{
      localStorage.clear()
      sessionStorage.clear()
      window.location.href = '/login'
    }
    return {
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
    line-height:60px;
    .user-menu{
      span{
        padding-right: 10px;
        &:nth-of-type(2){
          cursor: pointer;
        }
      }
    }
    .userimg{
      margin-top: 14px;
      margin-right: 10px;
      width:32px;
      height:32px;
      border-radius:50%;
      overflow: hidden;
      img{
        display:block;
        width:100%;
        height:100%;
      }
    }
  }
}

</style>
