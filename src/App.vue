<template>
  <div>

    <ProductGrid></ProductGrid>
  </div>
</template>

<script>
import {Button} from 'element-ui'
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue';
import xyz from "./components/tableview.vue";
import ProductGrid from "@/components/ProductGrid";
Vue.component(Button)
Vue.component(HelloWorld)
Vue.component(xyz)
export default {
  name: 'App',
  components: {
    ProductGrid,
    // xyz,
    // HelloWorld
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
