<template>
    <Header/>
    <div v-if="product"> 
        <div class="single-product">
        <div class="wrapper">
            <div class="img-container">
                <img :src="'https://drive.google.com/uc?id=' + product.img" >
            </div> <!--end.img-container-->
            <div class="info-container">
                <h1>{{ product.name}}</h1>
                <h2>{{ product.price}}e</h2>
                    <button @click="AddProductToCart(product.id)" class="chart">ADD TO CHART</button>
            </div><!--info-container-->
        </div>
    </div> <!--end.single-product-->

    <div class="description">
        <div class="wrapper">
            <h2>PRODUCT DESCRIPTION</h2>
            <p>{{ product.desc }}</p>
        </div>
    </div><!--end.description-->

    </div>

    <Comments />
    <Footer />
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductService from '../services/ProductService'
import Comments from '../components/Comments'
export default {
    name: 'SingleProduct',
    data() {
        return {
            product: null,
            quantity: 1,
        }
    },
    components: {
        Header,
        Footer,
        Comments
    },
    async mounted() {
        const productService = new ProductService();
        
        this.product = await productService.getById(this.$route.params.id); //mapiranje rute sa korisnickim id-jem
    },
    methods: {
        increaseQuantity() {
            this.quantity += 1;

        },
        decreaseQuantity() {
            if(this.quantity <= 1) {
                return;
            }
            this.quantity -= 1;
        },
        AddProductToCart(productId) {
        this.$store.commit('ADD_PRODUCT_TO_CART', productId); 
      }
    }
}


</script>
<style scoped>
* {
    margin: 0;
}
.single-product {
    background-color: rgba(193, 193, 193,1);
    border-bottom: 1px solid #cf0e0e;
}
   .single-product .wrapper {
        width: 80%;
        display: flex;
        margin: 0 auto;
        padding: 50px 0;
    }
    .img-container img {
        width: 300px;
    }
    .img-container {
        border:2px solid #cf0e0e;
        border-radius:10px;
        padding: 10px 0;
        
    }
    .info-container {
        margin-left: 150px;
    }
    .info-container h1 {
        width: 300px;
    }
    .info-container h2 {
        color:#cf0e0e;
    }
    
    .info-container button {
        padding: 5px 18px;
        cursor: pointer;
        border: 1px solid black;
        color: white;
        border-radius: 5px 10px;
        font-size: 15px;
        font-weight: bold;
        background-color: red;
        margin-top:10px;

    }
    .info-container button:hover {
    background-color:#cf0e0e;
    transition: 0.5s;
    color:white;
  
    }
    .info-container h2 {
        padding-top: 20px;
        font-size: 28px;
    }
  
    .description {
        border-bottom: 1px solid red;
    }
    .description .wrapper {
        width: 60%;
        margin:0 auto;
        padding-bottom: 30px;
    }
    .description .wrapper h2 {
        text-align: center;
        padding: 30px 0;
        font-size: 20px;
    }



    @media screen and (min-width: 320px) and (max-width: 768px) {
    .wrapper {
        width: 80%;
        flex-direction: column;
        padding: 20px 0; 
    }
    .img-container img {
        width: 180px;
        text-align: center;
    }
    .img-container {
        padding: 5px 0;
        width: 180px;
        margin: 0 auto;
    }
    .info-container{
        margin: 0 auto;
    }
  
    .info-container h1 {
        font-size: 23px;
        text-align: center;
        padding-top: 15px;
    }
    .info-container h2 {
        text-align: center;
    }
    
    .chart-wrapper {
        justify-content: space-between;
        
    }
    .description p {
        text-align: center;
    }

    .info-container button {
        padding: 5px 18px;
        cursor: pointer;
        border: 1px solid black;
        color: white;
        border-radius: 5px 10px;
        font-size: 13px;
        font-weight: bold;
        background-color: red;
        margin-top:10px;
        margin-left:90px;
        text-align:center;
        
    }
    
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        .wrapper {
        width: 80%;
        display:flex;
        padding: 20px 0; 
    }
    .img-container img {
        width: 180px;
        text-align: center;
    }
    .img-container {
        padding: 5px 0;
        width: 180px;
        margin: 0 auto;
    }
    
    .info-container h1 {
        font-size: 23px;
        text-align: center;
        padding-top: 15px;
    }
    .info-container h2 {
        text-align:center;
    }
    .info-container .chart {
       
    }
    }
    }
    

    
</style>