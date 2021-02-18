<template>
  <div>
    <b-navbar toggleable="lg" variant="dark" type="dark">
      <b-navbar-brand style="font-size: 30px" href="#">The Online Store</b-navbar-brand>
      <b-nav-toggle target="nav-collapse"></b-nav-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav style="margin-left: 50px">
          <b-nav-item style="font-size: 18px"  to="/ProductGrid">Products</b-nav-item>
          <b-nav-item style="font-size: 18px" v-b-modal.editProfileModal v-if="sessname != ''">Profile</b-nav-item>
          <b-nav-item style="font-size: 18px" v-on:click="cart(items)">
            Cart <b-badge  pill v-if="count>0" variant="light">{{ count }}</b-badge>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button v-on:click="openDialog" variant="outline-light">{{sessname == "" ? "Login" : sessname }}<b-avatar style="margin-left: 1em" icon="" variant="light" size="1.5em"></b-avatar></b-button>
      </b-navbar-nav>
    </b-navbar>

    <b-modal id="editProfileModal" cancel-variant="dark" ok-title="Edit Profile" @cancel="editCancelClicked" @close="editCancelClicked" ok-variant="primary" @ok="handleOkEdit" title="Edit Profile">
      <b-form @submit.stop.prevent="handleEdit" ref="editForm">

        <b-form-group
            label="Edit Username"
            label-for="edit-name-input"
            invalid-feedback="Username is required"
            :state="editUsernameState">
          <b-form-input
              id="edit-name-input"
              v-model="editUsername"
              :state="editUsernameState"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Password"
            label-for="password-input"
            invalid-feedback="Password is required"
            :state="editPasswordState">
          <b-form-input
              id="password-input"
              v-model="editPassword"
              :state="editPasswordState"
              required
          ></b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>

    <b-modal id="loginModal" cancel-variant="dark" ok-title="submit" ok-variant="primary"  @ok="handleOk" title="Login / Register">
      <b-tabs small pills fill card v-model="tabindex">
        <b-tab title="Login" active>
          <b-form @submit.stop.prevent="handleSubmit" ref="loginForm">


            <b-form-group
                label="Email"
                label-for="email-input"
                invalid-feedback="Name is required"
                :state="emailState">
              <b-form-input
                  id="email-input"
                  v-model="email"
                  :state="emailState"
                  required
              ></b-form-input>
            </b-form-group>
            <b-form-group
                label="Password"
                label-for="password-input"
                invalid-feedback="Password is required"
                :state="passwordState">
              <b-form-input
                  id="password-input"
                  v-model="password"
                  :state="passwordState"
                  required
              ></b-form-input>
            </b-form-group>

          </b-form>
        </b-tab>
        <b-tab title="Register">
          <b-form @submit.stop.prevent="handleSubmit" ref="registerForm">
            <b-form-group
                label="Email"
                label-for="email-input"
                invalid-feedback="Name is required"
                :state="registerEmailState">
              <b-form-input
                  id="email-input"
                  v-model="registerEmail"
                  :state="registerEmailState"
                  required
              ></b-form-input>
            </b-form-group>
            <b-form-group
                label="Username"
                label-for="name-input"
                invalid-feedback="Username is required"
                :state="passwordState">
              <b-form-input
                  id="name-input"
                  v-model="username"
                  :state="usernameState"
                  required
              ></b-form-input>
            </b-form-group>
            <b-form-group
                label="Password"
                label-for="password-input"
                invalid-feedback="Password is required"
                :state="registerPasswordState">
              <b-form-input
                  id="password-input"
                  v-model="registerPassword"
                  :state="registerPasswordState"
                  required
              ></b-form-input>
            </b-form-group>
            <b-form-group
                label="Confirm Password"
                label-for="confirm-password-input"
                invalid-feedback="Please reenter the password"
                :state="confirmPasswordState">
              <b-form-input
                  id="confirm-password-input"
                  v-model="password1"
                  :state="confirmPasswordState"
                  required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-tab>
      </b-tabs>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "CustomHeader",
  components: {
  },
  methods: {

    openDialog(){
      if(this.sessname == ""){
        this.$nextTick(() => {
          this.$bvModal.show('loginModal')
        })
      }else{
        return
      }
    },

    //edit Profile Methods
    updateProfile() {
      localStorage.username = this.editUsername
      localStorage.password = this.editPassword
      this.sessname = localStorage.username
      this.$alert("User Profile updated")
    },
    editCancelClicked(){
      this.editUsername = '';
      this.editUsernameState = null
      this.editPassword = ''
      this.editPasswordState = null
    },
    handleOkEdit(bvModalEvent){
      bvModalEvent.preventDefault()
      this.handleEdit();
    },
    handleEdit(){
      if(!this.checkEdiFormValidity()){
        return
      }
      this.updateProfile();
      this.$nextTick(() => {
        this.$bvModal.hide('editProfileModal')
      })
    },
    checkEdiFormValidity(){

      const valid = this.$refs.editForm.checkValidity()
      if (this.editUsername == ""){
        this.editUsernameState = valid;
      }
      if (this.editPassword == ""){
        this.editPasswordState = valid
      }
      return valid
    },

    //Login Modal methods
    handleOk(bvModalEvent){
      bvModalEvent.preventDefault();
      this.handleSubmit();
    },
    handleSubmit(){
      if(!this.checkFormValidity()){
        return
      }
      if (this.tabindex == 0){
        this.validateUser()
      }else{
        this.registerUser()
      }
      this.$nextTick(() => {
        this.$bvModal.hide('loginModal')
      })
    },

    checkFormValidity(){
      if (this.tabindex == 0){
        const valid = this.$refs.loginForm.checkValidity()
        if (this.email == ""){
          this.emailState = valid;
        }
        if (this.password == ""){
          this.passwordState = valid;
        }
        return valid
      }else {
        const valid = this.$refs.loginForm.checkValidity()
        if (this.registerEmail == ""){
          this.registerEmail = valid;
        }
        if (this.registerPassword == ""){
          this.registerPasswordState = valid;
        }
        if (this.username == ""){
          this.usernameState = valid;
        }
        if (this.password1 == ""){
          this.confirmPasswordState = valid
        }
        return valid
      }
    },
    cart(items) {
      return this.$router.push({name: "cart", params: items})
    },
    registerUser(){

      localStorage.email = this.registerEmail;
      localStorage.username = this.username;
      localStorage.password = this.this.registerPassword;
      this.email = '';
      this.username = '';
      this.password = '';
      this.password1=''
      this.$alert("user registered successfully")

    },
    validateUser(){
      if( this.email === localStorage.getItem("email") && this.password === localStorage.getItem("password")){
        this.sessname = localStorage.getItem("username");
        return this.sessname
      }else {
        this.$alert("Wrong Password and Username");
      }

    },
  },
  mounted() {
    this.editUsername = localStorage.username
    this.editPassword = localStorage.password
  },
  computed: {
    count() {
      return this.$store.state.countItemCart;
    }
  },
  data() {
    return {
      name:'',
      emailState:null,
      registerEmailState:null,
      passwordState:null,
      registerPasswordState:null,
      usernameState:null,
      confirmPasswordState:null,
      tabs:1,
      login: false,
      email:'',
      registerEmail:'',
      username:'',
      password:'',
      registerPassword:'',
      password1:"",
      sessname:"",
      valpass:"",
      valemail:"",
      tabindex:null,
      editUsername:'',
      editUsernameState:null,
      editPassword:'',
      editPasswordState:null,

    }
  },
}
</script>

<style>
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