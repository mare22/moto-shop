<template>
    <div class="chart">
        <Header />
        <div class="chart-wrapper">
            <h2>YOUR CHART</h2>
            <div v-for="(product, index) in productsInCart" :key="index"  class="container">
                <CartSingleProduct
                    ref="cartproducts"
                    @remove="removeProduct"
                    @quantityChange="quantityChanged"
                    :name="product.name" 
                    :image="product.img" 
                    :price="product.price" 
                    :productId="product.id"
                />
            </div> <!--end.container-->

            <div class="total-container">   
                <p class="total">Total: {{ totalPrice }} $</p>
                <button  @click="checkoutMsg" class="checkout">CHECKOUT</button>
            </div>
            
        </div><!--end.chart-wrapper-->
        <Footer />
    </div><!--end.chart-->
    

</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartSingleProduct from '../components/CartSingleProduct'
import ProductService from '../services/ProductService'
import Swal from 'sweetalert2'

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
            totalPrice: 0
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
    updated() {
        this.calculateTotalPrice();    
    },
    methods: {
        removeProduct(productId) {
            this.$store.commit('REMOVE_PRODUCT_FROM_CART', productId); 
        },
        quantityChanged() {
            this.calculateTotalPrice();    
        },
        calculateTotalPrice() {
            this.totalPrice = 0;
            if(!this.$refs.cartproducts) return;
        

            console.log(this.$refs.cartproducts)
            for(let i = 0; this.$refs.cartproducts.length > i; i++) {
                let product = this.$refs.cartproducts[i];

                this.totalPrice += parseInt(product.price) * product.quantity;
            }
        },
        checkoutMsg() {
            //AKO NEMA NIKAKVOG PROIZVODA PRIKAZATI PORUKU I NE DOZVOLITI DA PRIKAZE SUCESS
            Swal.fire('GREAT!',
                    'You purchase your products!',
                    'success')
        }
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
    .total {
        font-size: 20px;
        font-weight: bold;
        color: red;
        padding:10px 0;
        text-align:center;
    }
    .checkout {
        padding: 5px 18px;
        cursor: pointer;
        border: 1px solid black;
        color: white;
        border-radius: 5px 10px;
        font-size: 13px;
        font-weight: bold;
        background-color: red;
        display:block;
        margin:auto;
        
    }
    .total-container {
        width: 100%;
        margin: 0 auto;
        background-color:#aaaa;
        border-radius: 10px;
        padding-bottom: 10px;
        box-shadow: 1px 2px 3px grey;
    }


   
</style>