<template>
    <Header />
    <div class="main-register">
        <div class="register-wrapper">
            <form class="register"  @submit.prevent="registerUser">
                <h2>REGISTER</h2>
                <div class="name">
                    <p>Name:</p>
                    <input type="name" v-model="register_form.name">
                    <p class="errmsg"></p>
                </div>
                <p v-if="name_error" id="errmsg">Name must have at least two letters...</p>
                <div class="email">
                    <p>Email:</p>
                    <input type="email" v-model="register_form.email">
                </div>
                <p id="errmsg" v-if="email_error">Email must have @ character...</p>
                <div class="password">
                    <p>Password:</p>
                    <input 
                    type="password" 
                    v-model="register_form.password">
                </div>
                <p v-if="password_error" id="errmsg">Password must contain at least 6 sharacters...</p>
                <div class="address">
                    <p>Address:</p>
                    <textarea v-model="register_form.address" type="address" class="address" rows="3"> </textarea>
                </div>
                <p  v-if="address_error" id="errmsg">Address must have at least 5 characters...</p>
                <div class="country">
                    <p>Country:</p>
                        <select v-model="register_form.country" id="categories" class="categories">
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
    <Articles />
    <brands />
    <News />
    <Customers />
    <Footer />
</template>
<script>
import Header from '../components/Header'
import Articles from '../components/Articles'
import Footer from '../components/Footer'
import Brands from '../components/Brands'
import News from '../components/News'
import Customers from '../components/Customers'
import UserService from '../services/UserService'

export default {
    name: 'Register',
    data() {
        return {
            userService: new UserService(),
            register_form: {
                name: '',
                email: '',
                password: '',
                address: '',
                country: '',
            },
            name_error: false,
            email_error:false,
            password_error: false,
            address_error:false
        }
    },
    components: {
        Header,
        Articles,
        Footer,
        Brands,
        News,
        Customers
    },
    methods: {
        registerUser() {
            if(this.register_form.name < 1) {
               this.name_error = true
            } else {
               this.name_error = false
            }
            if(this.register_form.email.indexOf("@") === -1) {
                this.email_error = true
            } else {
                this.email_error = false
            }
            if(this.register_form.address.length <= 5) {
                this.address_error = true
            } else {
                this.address_error = false
            }
            if(this.register_form.password.length < 6) {
                this.password_error = true
            } else {
                this.password_error = false
            }

            if(this.name_error || this.email_error || this.address_error || this.password_error) {
                return;
            }

            this.$store.dispatch('register', this.register_form);

            this.userService.create(this.register_form);
        }
    }
    }
    
</script>
<style scoped>
    #errmsg {
        color:red;
        font-size:12px;
        
    }
    .name {
        display: flex;
        margin-left: 50px;
    }
    .name input {
        margin-left: 40px;
        width:200px;
        margin-bottom: 10px;
    }
    .email {
        display: flex;
        margin-left: 50px;
    }
    .email input {
        margin-left: 42px;
        width:200px;
        margin-bottom: 10px;
    }
    .password {
        display: flex;
        margin-left: 50px;
    }
    .password input {
        margin-left: 16px;
        width:200px;
        margin-bottom: 10px;
    }
    .address {
        display: flex;
        margin-left: 50px;
    }
    .address textarea {
        margin-left: 28px;
        width:220px;
        background-color:#d3d3d3;
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom: 10px;
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
        padding: 20px 0;
        
    }

    @media screen and (min-width:320px) and (max-width: 620px) {
        
    .register-wrapper {
        width: 300px;
        margin:0 auto;
        padding: 20px 0;
        background-color:#d3d3d3;
        border-radius: 10px;
       
    }
    .name {
        display: block;
        margin:0;
    }
    .name p {
        text-align:center;
    }
    .name input {
        margin:0 auto;
        width:150px;
    }
    .email {
        display: block;
        margin:0;
    }
    .email p {
        text-align:center;
    }
    .email input {
        margin:0 auto;
        width:150px;
    }
    .password {
        display: block;
        margin:0;
    }
    .password p{
        text-align:center;
    }
    .password input {
        margin:0 auto;
        width:150px;
    }
    .address {
        display: block;
        margin:0;
    }
    .adress p {
        text-align:center;
    }
    .address textarea {
        margin:0 auto;
        width:170px;
        background-color:#d3d3d3;
        border: 1px solid black;
        border-radius: 5px;
    }

    .country {
        display: block;
        margin:0;
        margin-bottom:10px;
    }

    .categories {
        margin:0 auto;
        width:170px;
        padding: 5px 0;
        background-color:#d3d3d3;
    }

    }
</style>