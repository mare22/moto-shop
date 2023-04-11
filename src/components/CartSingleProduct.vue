<template lang="">
    
    <div class="img-cont">
        <img :src="'https://drive.google.com/uc?id=' + product.img" alt="">
    </div> <!--end.img-cont-->
    <div class="content-container">
        <h3>Product name: {{ product.name }}</h3>
        <p>Product price: <br> {{ product.price }} $</p>
    </div><!--end.content-container-->
    <div class="total">
        <p>Quantity:</p>
        <div class="quantity-wrapper">
            <span @click="decreaseQuantity" class="minus">-</span>
            <span class="num"> {{ product.quantity }}</span>
            <span @click="increaseQuantity" class="plus">+</span>
        </div>
        <div class="amount">
            <p class="product-total-price">{{ product.price * product.quantity }}$</p>
        </div>
        <button @click="$emit('remove', product.id)" class="remove">REMOVE</button>
    </div> <!--end.total-->
</template>
<script>
export default {
    name:'CartSingleProduct',
    props: ['product'],
    methods: {
        increaseQuantity() {
            for(let i = 0; i < this.$store.state.cart.length; i++) {
                const prodState = this.$store.state.cart[i];
                if(prodState.id === this.product.id) {
                    prodState.quantity += 1;
                }
            }
        },
        decreaseQuantity() {
            for(let i = 0; i < this.$store.state.cart.length; i++) {
                const prodState = this.$store.state.cart[i];
                if(prodState.id === this.product.id && this.product.quantity > 1) {
                    prodState.quantity -= 1;
                }
            }
        },
    },

}
</script>
<style scoped>
    h2 {
        padding-bottom:10px;
        font-size:20px;
    }
    .img-cont {
        background-color: #dedede;
    }

    .img-cont img {
        width: 100px;
        
    }
    .img-cont {
        background-color:white;
    }
 
    
    .content-container  {
        margin-left: 30px;
        margin-right: 30px;
    }
    .content-container h3 {
        color: black;
        font-size: 18px;
    }

    .quantity-wrapper {
        height: 20px;
        width: 50px;
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
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
    }
    .quantity-wrapper span.num {
        border-right: 2px solid rgba(0,0,0,0.2);
        border-left: 2px solid rgba(0,0,0,0.2);
        pointer-events: none;
    }
    .remove {
        padding: 5px 12px;
        cursor: pointer;
        border: 1px solid black;
        color: white;
        border-radius: 5px 10px;
        font-size: 10px;
        font-weight: bold;
        background-color: red;
    }
    .remove:hover {
        background-color:#cf0e0e;
        transition: 0.5s;
        color:white;
    }
    .total p {
        font-size: 15px;
        padding-bottom:5px;
    }
    .amount p {
        padding-top: 10px;
        font-weight:bold;
        color:red;
        font-size:18px;
    }


    @media screen and (min-width: 320px) and (max-width: 600px) {
    .chart-wrapper {
        width: 250px;
        margin: 0 auto;
        padding: 20px 0;
    }
    .chart-wrapper h2{
        text-align:center;
        font-size:18px;
        
    }
    .img-cont{
        text-align:center;
    }
    .container {
        display:block;
        
    }
    .content-container h3 {
        font-size: 17px;
        text-align:center;
        padding:10px 0;
    }
    .content-container p {
        text-align:center;
    }
    .quantity-wrapper {
        margin: 0 auto;
    }
    .total {
        font-size: 18px;
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
    

    }
</style>