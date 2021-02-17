<template>

  <body>
  <div id="products">
    <div v-for="detail in productDetails" :key="detail.url">
      <b-card
          :title="detail.name"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          class="mb-2"
          tag="article"
          style="max-width: 20rem;">

        <b-card-text>
          {{detail.description}}
        </b-card-text>

        <b-button href="#" variant="primary">Add to cart</b-button>

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

<style scoped>/* Google Font */
@import url('https://fonts.googleapis.com/css?family=Karla');

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

#products div {
  min-height: 180px;
  line-height: 13px;
}


</style>