<template>
  <div>
    <b-navbar toggleable="lg" variant="dark" type="dark">
      <b-navbar-brand style="font-size: 30px" href="#">The Online Store</b-navbar-brand>
      <b-nav-toggle target="nav-collapse"></b-nav-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav style="margin-left: 50px">
          <b-nav-item style="font-size: 18px" active-class="active" to="/ProductGrid">Products</b-nav-item>
          <b-nav-item style="font-size: 18px" to="/HelloWorld">Profile</b-nav-item>
          <b-nav-item style="font-size: 18px" v-on:click="cart(items)">
            Cart <b-badge  pill v-if="count>0" variant="light">{{ count }}</b-badge>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button variant="outline-light" >Login<b-avatar style="margin-left: 1em" icon="" variant="light" size="1.5em"></b-avatar></b-button>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "CustomHeader",
  components: {
  },
  methods: {

    updateModalState(variable){
      this.loginmode = variable
    },
    cart(items) {
      return this.$router.push({name: "cart", params: items})
    },
    signup(){

      localStorage.email = this.email;
      localStorage.username = this.username;
      localStorage.password = this.password;
      this.email = '';
      this.username = '';
      this.password = '';
      this.password1=''

    },
    valuser(){
      if( this.valemail === localStorage.getItem("email") && this.valpass === localStorage.getItem("password")){

        this.$alert("Hello Vue Simple Alert.");

        this.sessname = localStorage.getItem("email");
        this.cascading=false
        return this.sessname
      }else {
        this.$alert("Wrong Password and Username");
      }

    }
  },
  computed: {
    count() {
      return this.$store.state.countItemCart;
    }
  },
  data() {
    return {
      cascading:false,
      tabs:1,
      login: false,
      email:'',
      username:'',
      password:'',
      password1:"",
      sessname:"",
      valpass:"",
      valemail:""

    }
  },
}
</script>

<style>

header {
  color: #65d6e4;
  background-color: yellow;
  text-align: center;
  height: 100px;
}

.setusername{
  float: right;
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

.cart-count {
  margin-left: -15px;
  margin-top: 10px;
  margin-bottom: 50px;
  background: white;
  border-radius: 70%;
  font-size: xx-large;
}
</style>