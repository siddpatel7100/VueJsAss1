<template>
  <div id="toolBtns">
    <custom-header>

    </custom-header>
    <RouterView class="routerContainer">

    </RouterView>
    <custom-footer>

    </custom-footer>
  </div>

</template>
<script>
import {Button} from 'element-ui'
import Vue from 'vue'
import CustomHeader from "@/components/header";
import CustomFooter from "@/components/footer";
Vue.component(Button)

export default {

  components: {
    CustomFooter,
    CustomHeader

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
.routerContainer{
  margin: 10px;
}
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #502c44;*/
/*  margin-top: 60px;*/
/*}*/
/*.el-table {*/
/*  position: relative;*/
/*  overflow: hidden;*/
/*  box-sizing: border-box;*/
/*  flex: 1;*/
/*  margin-top: 30px;*/
/*  width: 100%;*/
/*  max-width: 100%;*/
/*  font-size: 14px;*/
/*  color: #606266;*/
/*}*/

</style>
