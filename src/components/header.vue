<template>
<div class="hed">
  <b-nav>

    <b-nav-item ><router-link to="/tableview" >Table View</router-link></b-nav-item>
    <b-nav-item><router-link to="/HelloWorld" >Hello World</router-link></b-nav-item>
    <b-nav-item><router-link to="/ProductGrid" >Products</router-link></b-nav-item>
    <div class="setcart">
      <b-icon v-on:click="cart(items)" icon="cart" font-scale="3"></b-icon>

    </div>
    <span class="cart-count">{{count}}</span>

  </b-nav>

  <router-view></router-view>
</div>
</template>

<script>
export default {
name: "hed",
  components:{
     },
  data(){
    return{
      login:false
    }
  },
  methods:{
  cart(items) {
    return this.$router.push({name:"cart",params:items})
  }
  },
  computed:{
  count(){
    return this.$store.state.countItemCart;
  }
  },

}
</script>

<style scoped>
.hed{
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
.b-icon.bi {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.15em;
  margin-left: 250px;
  margin-top: 20px;
}
.cart-count{
margin-left: -15px;
  margin-top: 10px;
  margin-bottom: 50px;
  background: white;
  border-radius: 70%;

 font-size: xx-large;
}
</style>