<template>
    <div class="main-register">
        <div class="register-wrapper">
            <form class="register"  @submit.prevent="registerUser">
                <h2>REGISTER</h2>
                <div class="name">
                    <p>Name:</p>
                    <input type="name" v-model="name">
                </div>
                <div class="email">
                    <p>Email:</p>
                    <input 
                    type="email"
                    v-model="register_form.email">
                </div>
                
                <div class="password">
                    <p>Password:</p>
                    <input 
                    type="password" 
                    v-model="register_form.password">
                </div>

                <div class="address">
                    <p>Address:</p>
                    <textarea type="address" class="address" rows="3"> </textarea>
                </div>
                
                <div class="country">
                    <p>Country:</p>
                        <select id="categories" class="categories">
                            <option value="AU">AUSTRALIA</option>
                            <option value="US">USA</option>
                            <option value="UK">UK</option>
                            <option value="CA">CANADA</option>
                            <option value="IN">INDIA</option>
                        </select>
                </div><!--end.select-->

                <input class="button" type="submit" value="REGISTER">
            </form>
        </div><!--end.register-wrapper-->
    </div><!--end.main-register-->
</template>
<script>

import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'Register',
    setup() {
        const register_form = ref({});
        const store = useStore();

        const register = () => {
            store.dispatch('register', register_form.value);
        }
        return {
            register_form,
            register,
            name: null,
            email: null,
            password: null,
            address: null,
            country: null
        }
    },
    methods: {
        registerUser() { // TOTO NAPRAVITI LEPSU VALIDACIJU FORME
            if(!this.name) {
               alert('name must have character')
            }
            if(this.email === "@") {
                alert('must have @')
            }
            if(this.password < 5) {
                alert('password must have minimum 5 characters')
            }
        }
    }
    }
    
</script>
<style scoped>
    .name {
        display: flex;
        margin-left: 50px;
        margin-bottom: 10px;
    }
    .name input {
        margin-left: 40px;
        width:200px;
    }
    .email {
        display: flex;
        margin-left: 50px;
        margin-bottom: 10px;
    }
    .email input {
        margin-left: 42px;
        width:200px;

    }

    .password {
        display: flex;
        margin-left: 50px;
        margin-bottom: 10px;
    }
    .password input {
        margin-left: 16px;
        width:200px;
    }
    .address {
        display: flex;
        margin-left: 50px;
        margin-bottom: 5px;
    }
    .address textarea {
        margin-left: 28px;
        width:220px;
        background-color:#d3d3d3;
        border: 1px solid black;
        border-radius: 5px;
    }

    .country {
        display: flex;
        margin-left: 50px;
        margin-bottom:10px;
    }

    .categories {
        margin-left: 25px;
        width:225px;
        padding: 5px 0;
        background-color:#d3d3d3;
    }

    .button {
        padding:5px 20px;
        cursor:pointer;
    }
    .button:hover {
        background-color:#e24c00;
        transition:1s;
    }


    .register-wrapper {
        width: 500px;
        margin:0 auto;
        padding: 20px 0;
        background-color:#d3d3d3;
        border-radius: 10px;
        margin-top: 40px;
    }
    .register {
        text-align:center;
    }
    .register h2 {
        padding-bottom: 10px;
        color: #e24c00;
    }
    input {  
        border: 1px solid black;
        border-radius: 5px;
        padding: 3px 10px;
        outline:none;
        background: none;
        margin: 0 5px;
    }
    .button {
        font-weight: bold;
    }
    .main-register {
        background-color:#e24c00;
        width:100%;
        height:100vh;
        position:fixed;
        
    }


</style>