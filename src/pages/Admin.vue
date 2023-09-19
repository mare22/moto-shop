<template>
    <Header />
    <div v-if="user && user.is_admin" class="admin">
    <div class="wrapper">
            <h2>HELLO {{ user.email}}</h2>
            <h4>Please fill the fields below to add a new product:</h4>
                <div class="select">
                    <p>Select category:</p>
                        <select v-model="product.category" id="categories" class="categories">
                            <option value="Helmets">HELMETS</option>
                            <option value="Shoes">SHOES</option>
                            <option value="Accessories">ACCESSORIES</option>
                            <option value="Jackets">JACKETS</option>
                            <option value="Gloves">GLOVES</option>
                        </select>
                </div><!--end.select-->
                <p v-if="cat_error">You must pick category...</p>

                <div class="desc">
                    <p>Description:</p>
                    <textarea v-model="product.description" class="text" rows="3"> </textarea>
                </div>
                <p  v-if="product_errors.desc_error" 
                    class="desc_error">
                    Description must have minimum 5 characters...
                </p>

                <div class="img">
                    <p>Image id:</p>
                    <input v-model="product.img" type="text" class="url">
                </div>
                <p class="img_error"
                     v-if="product_errors.img_error">
                    ID must have minimun 5 characters...
                </p>

                <div class="name">
                    <p>Name:</p>
                    <input v-model="product.name" type="text" class="inpname">
                </div>
                <p calss="name_error" class="name_error"
                    v-if="product_errors.name_error">
                    Name must have minimum 3 characters...
                </p>


                <div class="price">
                    <p>Price:</p>
                    <input v-model="product.price" 
                    type="number" class="pr ">
                </div>
                <p v-if="product_errors.price_error" 
                    class="price_error">
                    You must enter the price...
                </p>
                <button @click="createProduct" class="add">Add new prodcuct</button>
        </div> <!--end.wrapper-->

        <!-- orders -->
        <div class="orders">
            <div style="overflow-x:auto;">
                <div class="orders-wrapper">
                        <h1> Orders</h1>
                <table>
                    <tr>
                        <th>transaction_number</th>
                        <th>User id</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Created at</th>
                    </tr>
                    <tr v-for="(order, index) in orders" :key="index">
                        <td>{{ order.transaction_number }}</td>
                        <td>{{ order.user_id }}</td>
                        <td>{{ order.quantity }}</td>
                        <td>{{ order.price }}</td>
                        <td>{{ new Date(order.created_at).toLocaleString() }}</td>
                    </tr>
                </table>
                </div>
            </div>     
        </div><!--end.orders-->

    </div>
    <brands />
    <News />
    <Customers />
    <Footer />
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Brands from '../components/Brands'
import News from '../components/News'
import Customers from '../components/Customers'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import ProductService from '../services/ProductService'
import OrderService from '../services/OrderService'

import Swal from '../../node_modules/sweetalert2';
export default {
    name: 'Admin',
    data() {
        return {
            orders: [],
            product: {
                category: '',
                description: '',
                name: '',
                img:'',
                price: '',
                
            },
            product_errors: {
                desc_error: false,
                cat_error: false,
                img_error: false,
                name_error: false,
                price_error: false
            },
            productService: new ProductService(),
            orderService: new OrderService(),
        }
    },
    setup() {
        const store = useStore()

        onBeforeMount(async () => {
            await store.dispatch('fetchUser')
        })
  },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    async mounted() {
        this.orders = await this.orderService.all();
    },
    components: {
        Header,
        Footer,
        Brands,
        News,
        Customers
    },
    methods: {
        createProduct() {
            if(this.product.description.length < 5 ) {
                this.product_errors.desc_error = true
            } else {
                this.product_errors.desc_error = false
            }
            if(this.product.category === "") {
                this.product_errors.cat_error = true
            } else {
                this.product_errors.cat_error = false
            }
            if(this.product.img.length < 5) {
                this.product_errors.img_error = true
            } else {
                this.product_errors.img_error = false
            }
            if(this.product.name.length < 3) {
                this.product_errors.name_error = true
            } else {
                this.product_errors.name_error = false
            }
            if( this.product.price === "") {
                this.product_errors.price_error = true
            } 
                else {
                this.productService.create(this.product);
                Swal.fire(
                'Success!',
                'New product has been added into shop!',
                'success'
                ).then(() => {
                    this.$router.push({path:'/'})
                })
            }
            
        }
    }
}
</script>
<style scoped>
    .desc_error, .img_error, .name_error, .price_error {
        color:red;
        font-size:14px;
    }
 
    table, td, th {
        border: 1px solid;
        padding: 5px;  
    }

    table {
    border-collapse: collapse;
    }
    .admin {
        padding:20px 0;
        background-color: #eae8e8;
    }
    .wrapper h2 {
        color:white;
    }
    .wrapper h4 {
        font-weight: 400;
        font-size:15px;
        padding: 10px 0;
        
    }
    .select {
        display:flex;
        margin: 0 10px;
    }
    .categories {
        font-size:14px;
        margin-left: 70px;
        width:145px;
        padding: 8px 0;
        color:red;
    }
    .wrapper {
        width: 500px;
        margin:0 auto;
        padding: 20px 0;
        background-color:#79828d;
        border-radius: 10px;
        
        text-align:center;
    }
    .select p {
        margin-right: 10px; 
        
    }
    .desc p {
        margin-left: 10px; 
    }
    .desc {
        display:flex;
        padding: 10px 0;
    }
    .text {
        width:200px;
        margin-left:50px;
        
    }
    .img {
        display:flex;
        padding-bottom: 10px;
    }
    .img p{
        margin-left: 10px; 
    }
    .url {
        margin-left: 68px;
        width:200px;
        padding: 3px 0;
    }
    .name {
        display:flex;
        margin-left: 10px;
        margin-bottom: 7px;
    }
    .inpname {
        margin-left: 86px;
        width:200px;
        padding: 3px 0;
    }
    .price {
        display:flex;
        
    }
    .price p {
        margin-left:10px;
    }
    .pr {
        margin-left: 93px;
        width:200px;
        padding: 3px 0;
        margin-bottom: 20px;
    }
    .add {
    padding: 5px 15px;
    cursor: pointer;
    background-color: #878787;
    color: white;
    border-radius: 5px 10px;
    border: none;
    font-size: 12px;
    font-weight: bold;
    }
    .add:hover  {
    background-color: #cf0e0e;
    transition: 0.2s;
    
    }
    .orders-wrapper h1 {
        text-align:center;
        padding:10px 0;
    }
    .orders-wrapper {
        width:80%;
        margin: 0 auto;
    }
    table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
}

tr:nth-child(even){background-color: #f2f2f2}
    @media screen and (min-width:320px) and (max-width: 620px) {
    .admin {
        padding:20px 0;
        background-color: #eae8e8;
    }
        .wrapper h2 {
        font-size:18px;
        padding-bottom:10px;
    }
    .wrapper h4 {
        font-weight: 400;
        font-size:15px;
        padding-bottom:10px;
    }
    .select {
        display:block;
        margin: 0 auto;
    }
    .wrapper {
        width: 300px;
        margin:0 auto;
        padding: 20px 0;
        border-radius: 10px;
        text-align:center;
    }
    .categories {
        margin: 0;
        font-size:12px;
    }
    .select p {
        text-align:center;
        padding-bottom:8px;
    }
    .desc {
        display:block;
        width:150px;
        margin: 0 auto;
    }
    .desc p{
        padding-bottom:8px;
        margin:0;
    }
    .text {
        width:130px;
        margin:0 auto;
    }
    .img {
        display:block;
    }
    .img p{
       text-align:center;
       margin:0;
       padding-bottom:8px;
    }
    .url {
        width:150px;
        margin:0 auto;
    }
    .inpname {
        margin: 0 auto;
        width:150px;
    }
    .name {
        display:block;
        margin: 0 auto;
    }
    .name p {
        padding-bottom:8px;
    }
    .price {
        display:block;
        margin: 0 auto;
    }
    .price p {
        text-align:center;
        margin:0;
        padding-bottom:8px;
        padding-top:8px;
    }

    .pr {
        margin: 0 auto;
        width:150px;
    
    }
    .add {
        margin-top: 20px;
    }
   
}
</style>