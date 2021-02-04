<template>
<header>
  <b-nav>

    <b-nav-item ><router-link to="/tableview" >Table View</router-link></b-nav-item>
    <b-nav-item><router-link to="/HelloWorld" >Hello World</router-link></b-nav-item>
    <b-nav-item><router-link to="/ProductGrid" >Products</router-link></b-nav-item>
  </b-nav>
  <router-view></router-view>
</header>
</template>

<script>
export default {
name: "header"
}
</script>

<style scoped>
header{
  color: #65d6e4;
  background-color: yellow;
  text-align: center;
  height: 100px;
  margin-top: 50px;
  margin-left: 200px;
  margin-right: 200px;
  margin-bottom: 50px;
}
.nav {
  display: flex;
  flex-wrap: wrap-reverse;
  padding-left: 400px;
  margin-bottom: 0;
  list-style: none;
  font-size: x-large;

}
.nav-link {
  display: block;
  padding-top: 30px;
}
</style>