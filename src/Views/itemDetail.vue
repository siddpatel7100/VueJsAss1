<template>
  <div>
<div class="d-flex item-details">

  <div class="item-details">
  <div class="container mb-5">
    <h4 class="my-4 fw-600">Add Item to Cart </h4>
    <div class="row">
      <div class="col.md-4" style="cursor: pointer">
        <img :src="details.url" width="300px" height="300px" style="border-radius: 50%"/>
      </div>
      <div class="col-md-4" style="cursor: pointer">
        <table>
          <tr>
            <td><h4 style="text-align: left">Name:</h4></td>
            <td><h4 style="text-align: center;color: darkorange">{{details.name}}</h4></td>

          </tr>
          <tr>
            <td><h4 style="text-align: left">Price:</h4></td>
            <td><h4 style="text-align: center;color: darkorange">{{details.price}}</h4></td>

          </tr>
    <tr>
      <td ><h4 style="text-align: left;">Description:</h4></td>
      <td><h4 style="text-align: center;color: darkorange">{{details.sku}}</h4></td>

    </tr>
        </table>
        <div class="line">

          <b-button v-on:click="addToCart" variant="danger">Add to Cart</b-button>
          <b-button v-on:click="removeItem" variant="success">Remove from Cart</b-button>
          <b-button v-on:click="goToCart" variant="info">View Cart</b-button>
        </div>
      </div>
    </div>
  </div>

  </div>

</div>
    <foot></foot>
  </div>
</template>

<script>

import Foot from "@/components/footer";
export default {
  name: "itemDetail",
  components:{
    Foot
  },
  data() {
    return {
      details: this.$route.params
    };
  },
  methods:{
    goToCart(){
      this.$router.push("./cart")
    },
    addToCart(){
       this.$store.dispatch("addToCart",this.details)
    },
    removeItem(){
          this.$store.dispatch("removeItem",this.details)
    }
  },
  created() {
    if(this.$route.params.id !== undefined)
      localStorage.setItem("details",JSON.stringify(this.$route.params));
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details"))
  }
}
</script>

<style scoped>
.mt-4, .my-4 {
  margin-left: 400px;

}
.col-md-4 {
  margin-left: 100px;
}
.line{
  margin-top: 20px;
  margin-left: -80px;
  width: 600px;
}
</style>