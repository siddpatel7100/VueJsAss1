<template>
  <mdb-card>
    <mdb-card-header class="pt-4 bg-dark">
      <b-card-title title="Shipping Address" class="text-light"></b-card-title>
    </mdb-card-header>
    <!-- Material input -->
    <form>
      <!-- Grid row -->
      <div class="form-row">
        <!-- Default input -->
        <div class="form-group col-md-6">
          <label for="name">Full Name</label><label class="error">{{eml1}}</label>

          <input type="name" class="form-control" id="name" v-model="name" placeholder="Your Name">
        </div>
        <!-- Default input -->
        <div class="form-group col-md-6">
          <label for="email">Email</label><label class="error">{{eml2}}</label>

          <input type="email" class="form-control" id="email" v-model="email" placeholder="Your Email">
        </div>
      </div>
      <!-- Grid row -->

      <!-- Default input -->
      <div class="form-group">
        <label for="inputAddress">Address</label><label class="error" >{{eml3}}</label>
        <input type="text" class="form-control" id="inputAddress" v-model="address" placeholder="1234 Main St">
      </div>
      <!-- Default input -->
      <!-- Grid row -->
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputAddress2">Address 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
        </div>
        <div class="form-group col-md-6">
          <label for="inputPhone">Phone Number</label><label class="error">{{eml4}}</label>
          <input type="text" class="form-control" id="inputPhone" v-model="phone" placeholder="Your Phone Number">
        </div>
      </div>
      <!-- Grid row -->
      <div class="form-row">
        <!-- Default input -->
        <div class="form-group col-md-6">
          <label for="inputCity">City</label><label class="error">{{eml5}}</label>
          <input type="text" class="form-control" id="inputCity" v-model="city" placeholder="New York City">
        </div>
        <!-- Default input -->
        <div class="form-group col-md-6">
          <label for="inputZip">Zip</label><label class="error">{{eml6}}</label>
          <input type="text" class="form-control" id="inputZip" v-model="zip" placeholder="11206-1117">
        </div>
      </div>
      <!-- Grid row -->
    </form>
    <hr>

    <mdb-card-header class="pt-4 bg-dark">
      <b-card-title title="Payment Method" class="text-light"></b-card-title>
    </mdb-card-header>

    <!-- Group of material radios - option 1 -->
    <div class="form-check" style="margin-left: 1%;margin-top: 2%;margin-bottom: 2%">
      <b-row>
        <b-col cols="1" style="padding: 0px;align-content: center">
          <input type="radio" style=" transform: scale(2);"   id="materialGroupExample1" name="groupOfMaterialRadios">
        </b-col>
        <b-col cols="11">
          <label class="form-check-label" style="" for="materialGroupExample1">Cash On Delivery(COD)</label>
        </b-col>
      </b-row>
    </div>

    <!-- Group of material radios - option 2 -->
    <div class="form-check" style="margin-left: 1%;margin-bottom: 2%;margin-top: 2%;">
      <b-row>
        <b-col cols="1" style="padding: 0px;align-content: center">
          <input type="radio" style=" transform: scale(2);" id="materialGroupExample2" name="groupOfMaterialRadios" checked>
        </b-col>
        <b-col cols="11">
          <label class="form-check-label" style="" for="materialGroupExample2">Debit/Credit</label>
        </b-col>
      </b-row>


    </div>

    <!-- Group of material radios - option 3 -->
    <div class="form-check" style="margin-left: 1%;margin-bottom: 2%;margin-top: 2%;">

      <b-row>
        <b-col cols="1" style="padding: 0px;align-content: center">
          <input type="radio" style=" transform: scale(2);" id="materialGroupExample3" name="groupOfMaterialRadios">
        </b-col>
        <b-col cols="11">
          <label class="form-check-label" style="" for="materialGroupExample3">Net Banking</label>
        </b-col>
      </b-row>


    </div>

    <mdb-card-footer class="white d-flex justify-content-end">
      <mdb-btn  class="btn-dark" icon="paper-plane" v-on:click="placeorder" rounded>Place Order</mdb-btn>
    </mdb-card-footer>

  </mdb-card>
</template>

<script>
export default {
  name: "checkout",
  components: {
  },
  data() {
    return {
      numeric: 'hello',
      eml1:"",
      eml2:"",
      eml3:"",
      eml4:"",
      eml5:"",
      eml6:"",
      name:"",
      email:"",
      address:"",
      phone:"",
      city:"",
      zip:"",
      selectOptions: [
        { text: "Breakfast", value: "Option 1" },
        { text: "Dinner", value: "Option 2" },
        { text: "Brunch", value: "Option 3" },
        { text: "Supper", value: "Option 4" }
      ],
      food: [
        "Glutenfree",
        "Vegetarian",
        "Vegan",
        "Sugarfree"
      ]
    };
  },
  methods: {
    placeorder() {
      if (this.name == "") {
        this.eml1 = "Require Name*"
      } else {
        this.eml1 = ''
      }
      if (this.email == "") {
        this.eml2 = "Require Email*"
      } else {
        this.eml2 = ''
      }
      if (this.address == "") {
        this.eml3 = "Require Address*"
      } else {
        this.eml3 = ''
      }
      if (this.phone == "") {
        this.eml4 = "Require Phone*"
      } else {
        this.eml4 = ''
      }
      if (this.city == "") {
        this.eml5 = "Require City*"
      } else {
        this.eml5 = ''
      }
      if (this.zip == "") {
        this.eml6 = "Require Zip*"
      } else {
        this.eml6 = ''
      }
      if(this.eml1 == ''&& this.eml2 =='' && this.eml3 =="" && this.eml4 =='' && this.eml5 =='' &&  this.eml6 =='')
      {
        this.$swal({
          position: 'top-end',
          icon: 'success',
          height: 1000,
          width: 400,
          background: "#0CC5CA  ",
          textAlign: "center",
          paddingLeft: 50,
          title: 'Your Order Has Been Placed Successfully',
          showConfirmButton: false,
          timer: 5000
        })
      }
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  margin-left: 20%;
  margin-right: 20%;
  padding-left: 2%;
  padding-right: 2%;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.form-col{
  margin-top: -20%;
  margin-left: 45%;
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  margin-top: 5%;
  margin-bottom: 2%;
}
label {
  display: initial;
  float: left;
  margin-bottom: 0.5rem;
}
.error{
  color: red;
  margin-left: 2%;
}
</style>