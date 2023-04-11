<template>
    <div class="chart">
        <Header />
        <div v-if="checkoutBtn" class="chart-wrapper">
            <h2>YOUR CHART</h2>
            <div v-for="(product, index) in productsInCart" :key="index"  class="container">
                <CartSingleProduct :product="product" @remove="removeProduct"/>
            </div> <!--end.container-->

            <div class="total-container">   
                <p class="total">Total: {{ totalPrice }} $</p>
                <button  @click="checkoutMsg" class="checkout">CHECKOUT</button>
            </div>
            
        </div><!--end.chart-wrapper-->
        <div v-else>
            <h1 style="text-align: center; margin: 30px">Cart is empty</h1>
        </div>
        <Footer />
    </div><!--end.chart-->
    

</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartSingleProduct from '../components/CartSingleProduct'
import ProductService from '../services/ProductService'
import Swal from 'sweetalert2'
import OrderService from '../services/OrderService'
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
            checkoutBtn: false,
            orderService: new OrderService()
        }
    },
    computed: {
        productsInCart(){
            return this.$store.state.cart;
        },
        totalPrice() {
            let totalPrice = 0;
            for(let i=0; i< this.productsInCart.length;i++) {
                totalPrice += this.productsInCart[i].price * this.productsInCart[i].quantity
            }
            return totalPrice
        }
    },
    async mounted() {       
        //dovuci proizvode iz baze
       this.products = await this.productService.all() //vraca sve proizvode iz baze

       if(this.$store.state.cart.length > 0) {
            this.checkoutBtn = true;
       }
    },
    methods: {
        removeProduct(productId) {
            this.$store.commit('REMOVE_PRODUCT_FROM_CART', productId); 
        },
        checkoutMsg() {

            if(!this.$store.state.user) {
                this.$router.push({path:'/login'})
                return;
            }
            console.log(this.$store.state.user);
            const date = new Date().toString();
            const transactionNumber = Date.now();

            for(let i=0; i< this.productsInCart.length;i++) { //create order
                const product = this.productsInCart[i]

                this.orderService.create({ // create order
                    "product_id": product.id,
                    "quantity": product.quantity,
                    "price": product.price,
                    "created_at": date,
                    "transaction_number": transactionNumber,
                    "user_id": this.$store.state.user.uid
                })
            }
            
            //AKO NEMA NIKAKVOG PROIZVODA PRIKAZATI PORUKU I NE DOZVOLITI DA PRIKAZE SUCESS
            Swal.fire('GREAT!',
                    'You purchase your products!',
                    'success').then(() => {
                        this.$store.commit('CLEAN_CART'); 
                        this.checkoutBtn = false;
                    })
            
                    
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