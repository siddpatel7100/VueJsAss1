<template>

  <body>
  <div id="products">
    <div id="subDiv" v-for="detail in productDetails" :key="detail.url">
      <b-card
          title-tag="h5"
          :title="detail.name"
          :img-src="detail.url"
          :img-height="200"
          img-alt="Image"
          img-top
          class="mb-2"
          tag="article"
          style="max-width: 20rem;">

        <b-card-text class="customTextDescription">
          {{detail.description}}
        </b-card-text>
        <div>
          <b-row>
            <b-col>
              <b-button href="#" v-on:click="addToCart(detail)" variant="primary">Add to cart</b-button>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button href="#" v-on:click="itemDetail(detail)" variant="warning">Product Info</b-button>
            </b-col>
          </b-row>
        </div>
      </b-card>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: "ProductGrid",
  components: {
  },



  methods: {
    addToCart(details){
      this.$store.dispatch("addToCart",details)
    },
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

.customTextDescription{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
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
}

#products #subDiv {
  min-height: 180px;
  line-height: 13px;
}


</style>