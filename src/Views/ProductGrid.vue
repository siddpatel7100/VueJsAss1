<template>
  <div>
    <div id="content">
      <div class="container mb-5">
        <h4 class="my-4 fw-600 d-blue">Top Rated</h4>
        <div class="row">

        <div v-on:click="itemDetail(items)" v-for="items in productDetails" :key="items.id" class="col-md-4 pointer">
          <img :src="items.url" width="300px" height="300px" style="border-radius: 15px"/>
          <h5 class="fw-600 black">{{items.name}}</h5>

          <div>
            <a  >
              <button>Add to Cart</button>
            </a>
          </div>
        </div>
        </div>
      </div>



      </div>
    <fot></fot>
    </div>




</template>

<script>
import foot from "@/components/footer";
export default {
  name: "ProductGrid",
  components: {
    "fot":foot,
  },

  methods: {
    itemDetail(item){
     return this.$router.push({name:"itemDetail",params:item})
    }
  },
  computed: {
    productDetails(){
      return this.$store.state.productDetails;
    }
  },

}

</script>

<style scoped>
/* Google Font */
@import url('https://fonts.googleapis.com/css?family=Karla');

.productItem {
  box-shadow: 0px 0px 6px 0px gray;
  border-radius: 4px;
  padding-bottom: 10px;
}

body {
  font-size: 16px;

  font-family: 'Karla', sans-serif;
}

h1, h2, h3, p {
  color: #273238;
}

a {
  text-decoration: none;
}

#products {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr) );
  text-align: center;
  margin-top: 60px;
}

#products div {
  line-height: 13px;
}

.price p:nth-child(2) {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
}

.price {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.price p:nth-child(2) {
  color: #40d2a3;
  font-weight: 600;
}

button {
  background: #4ed1e3;
  border: 0px;
  border-radius: 4px;
  padding: 10px 20px;
  color: #fff;
  font-size: 14px;
}

button:hover {
  cursor: pointer;
}



.pagination p:nth-child(2n-3) {
  color: #65d6e4;
}
#container[data-v-6c4d8baa] {
  padding-top: 20px;
  margin-top: 50px;
  color: white;
  background-color: #292354;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>