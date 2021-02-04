<template>
  <div>
    <div id="products">
      <div class="productItem" v-for="(detail,index) in productDetails" v-bind:key="index">
        <a v-bind:href="detail.link" v-bind:key="index">
          <img :src="detail.url">
          <h2>{{ detail.name }}</h2>
        </a>
        <div class="price" v-if="detail.sale != null">
          <p style="text-decoration: line-through">${{ detail.base }}</p>
          &nbsp;
          <p>${{ detail.sale }}</p>
        </div>
        <div v-else>
          <p>${{ detail.base }}</p>
        </div>
        <div v-if="detail.options == true">
          <span class="options"><em>More options available</em></span>
          <br><br>
          <a v-bind:href="detail.link" v-bind:key="index">
            <button>See Details</button>
          </a>
        </div>
        <div v-else-if="detail.options == null || detail.options == false">
          <template>
            <el-input-number size="mini" :min="1" :max="10" @change="handleCartCount()" v-model="num"
                             v-bind:key="index" controls-position="right"></el-input-number>
          </template>
          <br>
          <br>
          <a v-bind:href="detail.link" v-bind:key="index">
            <button>Add to Cart</button>
          </a>
        </div>
      </div>
    </div>
    <div class="pagination">
      <a href="https://www.volusion.com"><p><i class="fa fa-angle-left"></i>&nbsp;Prev</p></a>
      <p>Page 2 of 3</p>
      <a href="https://www.volusion.com"><p>Next &nbsp;<i class="fa fa-angle-right"></i></p></a>
    </div>
    <fot></fot>
  </div>

</template>

<script>
import footer from "@/components/footer";
export default {
  name: "ProductGrid",
  components: {
    "fot":footer
  },
  methods: {
    handleCartCount(index) {
      console.log(index);
    }
  },
  data: function () {
    return {
      num: 1,
      productDetails: [
        {
          name: 'Canvas Belt',
          base: 25,
          sale: 18,
          url: 'https://res.cloudinary.com/materialsandbox/image/upload/w_200,h_200,c_lpad,f_auto,q_auto/v1510871021/598ddfff937c5e00104d1062/kkaibs0wyimiiiupzald.jpg',
          options: false,
          link: 'https://www.volusion.com',
          sku: 'canvas-belt'
        },
        {
          name: 'Radiator Sunglasses',
          base: 180,
          sale: null,
          url: 'https://res.cloudinary.com/materialsandbox/image/upload/w_200,h_200,c_lpad,f_auto,q_auto/v1510871843/598ddfff937c5e00104d1062/anv93570youaa5l5v4df.jpg',
          options: null,
          link: 'https://www.volusion.com',
          sku: 'radiator-sunglasses'
        },
        {
          name: 'Two-Toned Frames',
          base: 95,
          url: 'https://res.cloudinary.com/materialsandbox/image/upload/w_200,h_200,c_lpad,f_auto,q_auto/v1510871706/598ddfff937c5e00104d1062/kbvz8omxkg3vjsb3iuum.jpg',
          options: true,
          link: 'https://www.volusion.com',
          sku: 'two-toned-frames'
        },
        {
          name: 'Travel Bag',
          base: 18,
          sale: null,
          url: 'https://res.cloudinary.com/materialsandbox/image/upload/w_200,h_200,c_lpad,f_auto,q_auto/v1510870695/598ddfff937c5e00104d1062/cvpw60nfqyh0cwvyeo7g.jpg',
          options: true,
          link: 'https://www.volusion.com',
          sku: 'travel-bag'
        },
        {
          name: 'Wide Frames',
          base: 110,
          sale: null,
          url: 'https://res.cloudinary.com/materialsandbox/image/upload/w_200,h_200,c_lpad,f_auto,q_auto/v1510871775/598ddfff937c5e00104d1062/q5dlgf1crgmbqse7yqg6.jpg',
          options: null,
          link: 'https://www.volusion.com',
          sku: 'wide-frames'
        },
        {
          name: 'Braided Leather Belt',
          base: 30,
          sale: null,
          url: 'https://res.cloudinary.com/materialsandbox/image/upload/w_200,h_200,c_lpad,f_auto,q_auto/v1510870932/598ddfff937c5e00104d1062/v5bdr22hep2udbjktgkh.jpg',
          options: true,
          link: 'https://www.volusion.com',
          sku: 'braided-leather-belt'
        },
        {
          name: 'Canvas Bag',
          base: 45,
          url: 'https://res.cloudinary.com/materialsandbox/image/upload/w_200,h_200,c_lpad,f_auto,q_auto/v1510870612/598ddfff937c5e00104d1062/ofngcvfty7tck036mb7o.jpg',
          options: true,
          link: 'https://www.volusion.com',
          sku: 'canvas-multi-purpose'
        },
        {
          name: 'Townsend Sunglasses',
          base: 180,
          sale: 175,
          url: 'https://res.cloudinary.com/materialsandbox/image/upload/w_200,h_200,c_lpad,f_auto,q_auto/v1510871872/598ddfff937c5e00104d1062/rdqyipz1iwkviiou0myh.jpg',
          options: true,
          link: 'https://www.volusion.com',
          sku: 'townsend-sunglasses'
        },
        {
          name: 'Backpack',
          base: 20,
          url: 'https://res.cloudinary.com/materialsandbox/image/upload/w_200,h_200,c_lpad,f_auto,q_auto/v1510870306/598ddfff937c5e00104d1062/fmbt3wmhuizqzdh1meo4.jpg',
          options: null,
          link: 'https://www.volusion.com',
          sku: 'backpack'
        },
        {
          name: 'Aviator Sunglasses',
          base: 180,
          sale: 175,
          url: 'https://res.cloudinary.com/materialsandbox/image/upload/w_200,h_200,c_lpad,f_auto,q_auto/v1510871812/598ddfff937c5e00104d1062/o5kddxdjs2x8xnmqjdbr.jpg',
          options: null,
          link: 'https://www.volusion.com',
          sku: 'aviator-sunglasses'
        },
        {
          name: 'Leather Belt',
          base: 35,
          sale: 28,
          url: 'https://res.cloudinary.com/materialsandbox/image/upload/w_200,h_200,c_lpad,f_auto,q_auto/v1510871140/598ddfff937c5e00104d1062/ccfswlzcdsskq6ip9qtg.jpg',
          options: true,
          link: 'https://www.volusion.com',
          sku: 'leather-belt'
        },
        {
          name: 'Retro Frames',
          base: 110,
          sale: null,
          url: 'https://res.cloudinary.com/materialsandbox/image/upload/w_200,h_200,c_lpad,f_auto,q_auto/v1510871547/598ddfff937c5e00104d1062/s063kcuijj0ipavdlp9r.jpg',
          options: null,
          link: 'https://www.volusion.com',
          sku: 'retro-peepers'
        }
      ]
    };
  }
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

.pagination {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
  border-top: 1px solid #eee;
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