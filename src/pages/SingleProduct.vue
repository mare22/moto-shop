<template>
    <Header/>
    <div v-if="product"> 
        <div class="single-product">
        <div class="wrapper">
            <div class="img-container">
                <img :src="require('../assets/images/' + product.img)" >
            </div> <!--end.img-container-->
            <div class="info-container">
                <h1>{{ product.name}}</h1>
                <h2>{{ product.price}}e</h2>
                <div class="chart-wrapper">
                    <div class="quantity-wrapper">
                        <span @click="decreaseQuantity" class="minus">-</span>
                        <span class="num"> {{ quantity }}</span>
                        <span @click="increaseQuantity" class="plus">+</span>
                    </div>
                    <button class="chart">ADD TO CHART</button>
                </div>
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
        // const id = this.$route.params.id
        const productService = new ProductService();
        
        this.product = await productService.getById(this.$route.params.id);
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
        }
    }
}

//Ubaciti funkcionalnost counter + i -

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
    .quantity-wrapper {
        height: 30px;
        width: 90px;
        display:flex;
        align-items:center;
        justify-content: center;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.4);
    }
    .quantity-wrapper span {
        width: 100%;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
    .quantity-wrapper span.num {
        border-right: 2px solid rgba(0,0,0,0.2);
        border-left: 2px solid rgba(0,0,0,0.2);
        pointer-events: none;
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
    .chart-wrapper {
        display: flex;
        padding-top: 20px;
    }
    .info-container button {
        margin-left: 20px;
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



    @media screen and (min-width: 320px) and (max-width: 600px) {
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
    }


    
</style>