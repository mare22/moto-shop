<template>
  <Header />
  <div class="products">
   <div class="products-wrapper">
      <div v-for="(products, index) in chunkArray(products, 4)" :key="index" class="products-container">
        <div v-for="(product, index) in products" :key="index" class="single-container">
          <div class="image-container">
            <router-link :to="'/SingleProduct/' + product.id">
              <img :src="'https://drive.google.com/uc?id=' + product.img" alt="">
            </router-link>
          </div><!--end.image-container-->
            <h3>{{ product.name}}</h3>
            <div class="price">
              <h4>{{ product.price}}€</h4>
            </div> <!--end.price-->
            <div class="btn-wrapper">
              <button @click="AddProductToCart(product)"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
      </div><!--end.products-container-->
   </div><!--end products-wrapper-->

  </div> <!--end.products-->
   <Footer />    
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductService from '../services/ProductService'

export default {
    name: 'products',
    data() {
      return {
        products: [],
        productService: new ProductService(),
      }
    },
    components: {
       Header,
       Footer
    },
    async mounted() {
        const category = this.$route.params.category;
        this.products = await this.productService.getByCategory(category);
        if(this.products.length === 0) {
          console.error("Nije dobr url putanje")
        }

    },
    methods: {
      // Da izlomimo niz tj product u manje delove
      chunkArray(inputArray, perChunk) {
        return inputArray.reduce((resultArray, item, index) => { 
            const chunkIndex = Math.floor(index/perChunk)

            if(!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = [] // start a new chunk
            }

            resultArray[chunkIndex].push(item)

            return resultArray
          }, [])
      },

      AddProductToCart(product) {
          product.quantity = 1;
          this.$store.commit('ADD_PRODUCT_TO_CART', product); 
      }
    }
}

</script>

<style scoped>

  .products {
    background-color:#d3d3d3;
    border-bottom: 1px solid red;
    border-top: 1px solid red;
  }
    h3 {
      color:black;
      font-size:15px;
    }
    .products-wrapper {
      width: 80%;
      margin: 0 auto;
      padding: 30px 0;
    }
   
    .single-container {
      text-align: center;
      width: 150px;
      padding-bottom: 20px;
    }

    .single-container:hover {
      background-color: #d97676;
      border-radius: 7%;
      transition: 1s
    }
    .image-container {
      width:150px;
      margin: 0 auto
    }
    .image-container img{
      padding: 10px 0;
      width: 100px;
      display:block;
      cursor: pointer;
      margin: 0 auto;
    }
    .image-container:hover {
      transition: 1s;
      transform: scale(1.1);
    }
    .price {
      padding: 8px 0;
    }
    .btn-wrapper button{
    padding: 3px 18px;
    cursor: pointer;
    border: 1px solid black;
    color: black;
    border-radius: 5px 10px;
    font-size: 14px;
  }

  .btn-wrapper button:hover {
    background-color: #cf0e0e;
    transition: 0.2s;
    color:white;
  }
  .products-container {
    display:flex;
    justify-content: space-between
  }

  @media screen and (max-width: 768px) {
    .products-container {
      display:grid;
      grid-template-columns: repeat(2,1fr)
      
    }
    .single-container {
      margin: 0 auto;
      width: 150px;
      
    }
    .btn-wrapper {
      padding-bottom: 20px;
    }
  }
</style>