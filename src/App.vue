<template>
  <div>
    <xyz message="this is the data element passed"/>
    <HelloWorld msg="this is your vue application"/>
    <el-button size="mini" type="danger">delete button</el-button>
  </div>
</template>

<script>
import {Button} from 'element-ui'
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue';
import xyz from "./components/tableview.vue";
Vue.use(Button)
export default {
  name: 'App',
  components: {
    xyz,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
