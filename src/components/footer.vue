<template>

  <div id="container">

    <div id="contacts--contact">
      <p>Email</p>
      <p>Phone No</p>
    </div>

  </div>



</template>

<script>
export default {
  name: "foot"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body{
  display:flex;
  background-color:#F0F8FF;
  height:95vh;
  justify-content:center;
  align-items:flex-end;
  font-family:Open Sans;
}

#container{
  padding-top:20px;
  margin-top:700px;

  color:white;
  background-color:#292354;
  display:flex;
  flex-direction:column;
  align-items:center;
}

#contacts--contact{
  text-align:right;
}

#contacts--social div{
  height:30px;
  width:30px;
  background-color:white;
  border-radius:50%;
}
#mentions p {
  font-size:0.5em;
}
</style>