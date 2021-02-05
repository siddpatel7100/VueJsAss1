<template>
<header>
  <mdb-container left>
    <mdb-btn color="default" @click.native="login=true">Login<mdb-icon icon="eye" class="m1-1"/></mdb-btn>
      <mdb-modal :show="login" @close="login=false">
        <mdb-modal-header class="text-center">
          <mdb-modal-title tag="h4" bold class="w-100">Login</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body class="mx-3 grey-text">
          <mdb-input label="Your Email" icon="envelope" type="email" class="mb-5"/>
          <mdb-input label="Your Password" icon="lock" type="password"/>
        </mdb-modal-body>
        <mdb-modal-footer center>
          <mdb-btn @click.native="login=false">Login</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
  </mdb-container>
  <b-nav>

    <b-nav-item ><router-link to="/tableview" >Table View</router-link></b-nav-item>
    <b-nav-item><router-link to="/HelloWorld" >Hello World</router-link></b-nav-item>
    <b-nav-item><router-link to="/ProductGrid" >Products</router-link></b-nav-item>
  </b-nav>
  <router-view></router-view>
</header>
</template>

<script>
import{ mdbContainer,mdbBtn,mdbIcon,mdbModal,mdbModalHeader,mdbModalBody,mdbModalFooter,mdbInput,mdbModalTitle} from 'mdbvue';
export default {
name: "header",
  components:{
    mdbContainer,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    mdbInput,
    mdbModalTitle,
    mdbIcon
  },
  data(){
    return{
      login:false
    }
  }
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