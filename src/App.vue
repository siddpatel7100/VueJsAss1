<template>
  <div>
    <tableview message="this is the data element passed"/>
    <HelloWorld msg="this is your vue application"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import tableview from "./components/tableview.vue";
export default {
  name: 'App',
  components: {
    tableview,
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
