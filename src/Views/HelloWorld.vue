<template>
  <div>


    <h1>Hello World</h1>
    <fot></fot>
  </div>
</template>

<script>
import footer from "@/components/footer";

export default {
  name: 'HelloWorld',
  components: {
    "fot":footer
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
