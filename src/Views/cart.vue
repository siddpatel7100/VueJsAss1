<template>

  <div class="d-flex cart-outer-div">
    <div class="cart-body">
      <div v-if="totalPrice !== 0" class="container mb-5">
        <h4 class="my-4 my-cart">My Cart</h4>
        <div class="d-flex my-3" style="justify-content: space-between">

          <div class="container mb-5">
            <h2>My cart</h2>
            <h4>Summary</h4>

            <div class="own">
              <sum v-bind:totalPrice="totalPrice"></sum>
            </div>
            <div class="row" style="width: 50%">
              <div style="max-width: 70%" class="col-md-12">
                <ul style="padding: 0">
                  <li v-for="items in cartItems" :key="items.id" style="list-style: none">
                    <div class="cart-items">
                      <img :src="items.url" width="100px" height="100px" style="border-radius: 50%"/>
                      <h6 class="mt-15">{{ items.name }}</h6>
                      <div class="d-flex mt-10">
                        <button v-on:click="addItem(items)" class="add" type="button">+</button>
                        <span class="cart-quantity">{{ items.quantity }}</span>
                        <button v-on:click="removeItem(items)" class="remove" type="button">-</button>
                      </div>
                      <h6 class="mt-15"></h6>
                    </div>
                  </li>
                </ul>
              </div>
              <div  style="width: 80%;float: right;margin-left: 120%; margin-top: 5% ">
                <button v-on:click="checkOut" class="btn btn-primary" type="button">CheckOut</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <EmptyCart v-else></EmptyCart>
    </div>
    <foot></foot>
  </div>
</template>
<script>

import summ from "@/Views/summary";

import EmptyCart from "@/Views/emptyCart";
import Foot from "@/components/footer";

export default {
  name: "cart",
  components: {
    Foot,
    EmptyCart,
    "sum": summ
  },
  computed: {
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map(el => {
        price += el["quantity"] * el["price"]
      });
      return price
    },
    cartItems() {
      return this.$store.state.cartItems;
    }
  },
  methods: {
    addItem(items) {
      return this.$store.dispatch("addToCart", items)
    },
    removeItem(items) {
      return this.$store.dispatch("removeItem", items)
    },
    checkOut(){
     this.$swal({
       position: 'top-end',
       icon: 'success',
       height: 1000,
       width: 400,
      background:"#0CC5CA  ",
       textAlign:"center",
       paddingLeft:50,
       title: 'Your work has been saved',
       showConfirmButton: false,
       timer: 5000
      })
      window.location.href='/cart.vue'
    }
  }
}
</script>

<style scoped>
.cart-outer-div {
  flex-direction: column;
  height: 100vh;
}

.cart-body {
  background: white;

}

.cart-quantity {
  display: inline-block;
  padding: 3px 6px;
  width: 43px;
  height: 28px;
  border-radius: 2px;
  background-color: #42b983;
  margin: 0 5px;
  text-align: center;
}

.cart-items {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
}

.col-md-12[data-v-6058065a] {
  display: flex;
  flex-wrap: wrap;
  margin: 0;


}

.my-cart {
  color: orange;
  font-weight: 600;
}

input[type="text"] {
  border: none;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  outline: none;
}

.row[data-v-6058065a] {
  float: right;
  margin-top: 50px;
}

.own {
  display: block;
}

.fw-600 {
  font-weight: 600;
}

.line {
  height: 1px;
}

.w-120 {
  width: 120%;
}

.w-60 {
  width: 60%;
}

.add, .remove {
  width: 28px;
  height: 28px;
  background: linear-gradient(#F0F8FF, #ffffff);
  border: 1px solid #F0F8FF;
  cursor: pointer;
  font-size: 16px;
  border-radius: 7px;
  padding-top: 1px;
  outline: none;
}

.mt-10 {
  margin-top: 30px;
}

.mt-15 {
  margin-top: 15px;
  font-size: x-large;
}

.orange-red {
  color: orangered;
}

.darkvlue {
  color: darkblue;
}

.row {
  float: right;
  margin-bottom: 10px;

}
</style>