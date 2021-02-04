<template>
  <div id="toolBtns">

    <hed></hed>


  </div>

</template>

<script>
import {Button} from 'element-ui'
import Vue from 'vue'
import header from "@/components/header";



Vue.component(Button)



export default {
  name: 'App',
  components: {
    "hed":header


  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c44;
  margin-top: 60px;
}
#toolBtns a.router-link-exact-active{
 background-color:green;
}
.el-table {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  flex: 1;
  margin-top: 30px;
  width: 100%;
  max-width: 100%;
  font-size: 14px;
  color: #606266;
}

</style>
