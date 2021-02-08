<template>
  <header>
    <mdb-container>
      <mdb-btn color="default" rounded @click.native="cascading=true">Login/Register
        <mdb-icon class="ml-1" icon="eye"/>
      </mdb-btn>
      <mdb-modal :show="cascading" cascade tabs @close="cascading=false">
        <mdb-tab class="light-blue darken-3" justify tabs>
          <mdb-tab-item :active="tabs==1" @click.native.prevent="tabs=1">Login</mdb-tab-item>
          <mdb-tab-item :active="tabs==2" @click.native.prevent="tabs=2">Register</mdb-tab-item>
        </mdb-tab>
        <mdb-modal-body v-if="tabs==1" class="mx-3">
          <mdb-input class="mb-5" label="Your Email" type="email"/>
          <mdb-input label="Your Password" type="password"/>
          <div class="mt-2 text-center">
            <mdb-btn color="info">Log In
              <mdb-icon class="ml-1" icon="sign-in-alt"/>
            </mdb-btn>
          </div>
        </mdb-modal-body>
        <mdb-modal-footer v-if="tabs==1" center>
          <div class="options text-center text-md-right mt-1">
            <p>Not a Member?<a href="#" @click="tabs=2">Sign Up</a></p>
          </div>
          <mdb-btn class="ml-auto" outline="info" @click.native="cascading=false">Close</mdb-btn>
        </mdb-modal-footer>
        <mdb-modal-body v-if="tabs==2" class="mx-3">
          <mdb-input class="mb-5" label="Your Email" type="email"/>
          <mdb-input class="mb-5" label="Your Username"/>
          <mdb-input class="mb-5" label="Your Password" type="password"/>
          <mdb-input label="Repeat Password" type="password"/>
          <div class="mt-2 text-center">
            <mdb-btn color="info">Sign Up
              <mdb-icon class="ml-1" icon="sign-in-alt"/>
            </mdb-btn>
          </div>
        </mdb-modal-body>
        <mdb-modal-footer v-if="tabs==2" center>
          <div class="options text-center text-md-right mt-1">
            <p>Already have an account?<a href="#" @click="tabs=1">Login</a></p>
          </div>
          <mdb-btn class="ml-auto" outline="info" @click.native="cascading=false">Close</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
    </mdb-container>
    <b-nav>

      <b-nav-item>
        <router-link to="/tableview">Table View</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/HelloWorld">Hello World</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/ProductGrid">Products</router-link>
      </b-nav-item>
      <div class="setcart">
        <b-icon font-scale="3" icon="cart" v-on:click="cart(items)"></b-icon>
      </div>
      <span class="cart-count">{{ count }}</span>
    </b-nav>
    <router-view></router-view>
  </header>
</template>

<script>
import {
  mdbBtn,
  mdbContainer,
  mdbIcon,
  mdbInput,
  mdbModal,
  mdbModalBody,
  mdbModalFooter,
  mdbTab,
  mdbTabItem
} from 'mdbvue';

export default {
  name: "header",
  components: {
    mdbContainer,
    mdbBtn,
    mdbModal,
    mdbTab,
    mdbTabItem,
    mdbModalBody,
    mdbInput,
    mdbModalFooter,
    mdbIcon,
  },
  data() {
    return {
      cascading:false,
      tabs:1,
      login: false
    }
  },
  methods: {
    cart(items) {
      return this.$router.push({name: "cart", params: items})
    }
  },
  computed: {
    count() {
      return this.$store.state.countItemCart;
    }
  },

}
</script>

<style scoped>
header {
  color: #65d6e4;
  background-color: yellow;
  text-align: center;
  height: 100px;
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