<template>
  <div class="mainBody">

    <h2>Edit Page</h2>
    <input type="text" v-model="uname" ><br>
    <input type="text" v-model="email"><br>
    <input type="text" v-model = "password"><br>
    <button type="button" v-on:click="updateprofile" >Update</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      email: '',
      uname: '',
      password: '',
    }
  },
  mounted() {
    this.uname =localStorage.username
    this.email = localStorage.email
    this.password = localStorage.password
  },
  components: {
  },

  methods: {
    updateprofile() {
      localStorage.username = this.uname
      localStorage.email = this.email
      localStorage.password = this.password
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainBody{
  height: 65vh;
}
h1 {
  margin-top:25px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
