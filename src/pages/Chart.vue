<template>
    <div class="chart">
        <Header />
        <div class="chart-wrapper">
            <h2>YOUR CHART</h2>
            <div v-for="(product, index) in productsInCart" :key="index" class="container">
                <CartSingleProduct 
                    @remove="removeProduct"
                    :name="product.name" 
                    :image="product.img" 
                    :price="product.price" 
                    :productId="product.id"
                />
            </div> <!--end.container-->
            
        </div><!--end.chart-wrapper-->
        <Footer />
    </div><!--end.chart-->
    

</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartSingleProduct from '../components/CartSingleProduct'

import ProductService from '../services/ProductService'


export default {
    name:'Chart',
    components: {
        Header,
        Footer,
        CartSingleProduct
    },
    data() {
        return {
            productService: new ProductService(),
            products: [],
        }
    },
    computed: {
        productsInCart(){
            //dovici id-eve projzovda iz korpe
            const productsInCart = this.$store.state.cart;
            // filtriraj projzvode na osnovu id-eva iz korpe

            const cartedProducts = []
            this.products.forEach(product => {
                if(productsInCart.includes(product.id)){
                    cartedProducts.push(product);
                }
            });

            return cartedProducts
        }
    },
    async mounted() {
        //dovuci projzvode iz baze
       this.products = await this.productService.all() //vraca sve proizvode iz baze

       
    },
    methods: {
        removeProduct(productId) {
            this.$store.commit('REMOVE_PRODUCT_FROM_CART', productId); 
        },
    }
}


</script>

<style scoped>
    .chart {
        background-color: #dedede;
        
    }
    .chart-wrapper {
        width: 500px;
        margin: 0 auto;
        padding: 20px 0;
        
    }
    .container {
        display:flex;
        background-color: white;
        justify-content:center;
        box-shadow: 0 3px 6px rgba(0,0,0,0.4);
        padding: 20px 30px;
        border-radius:10px;
        margin: 10px 0;
    }
</style>