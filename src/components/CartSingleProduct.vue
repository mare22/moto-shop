<template lang="">
    <div class="img-cont">
        <img :src="require('../assets/images/' + image)" alt="">
    </div> <!--end.img-cont-->
    <div class="content-container">
        <h3>Product name: {{ name }}</h3>
        <p>Product price: {{ price }} $</p>
    </div><!--end.content-container-->
    <div class="total">
        <p>Quantity:</p>
        <div class="quantity-wrapper">
            <span @click="decreaseQuantity" class="minus">-</span>
            <span class="num"> {{ quantity }}</span>
            <span @click="increaseQuantity" class="plus">+</span>
        </div>
        <div class="amount">
            <p>{{ price * quantity }}$</p>
        </div>
        <button @click="$emit('remove', productId)" class="remove">REMOVE</button>
    </div> <!--end.total-->
</template>
<script>
export default {
    name:'CartSingleProduct',
    props: ['name', 'image', 'price', 'productId'],
    data() {
        return {
            quantity: 1
        }
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
</style>