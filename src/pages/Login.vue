<template>
    <Header />
    <div class="main-login">
            <div class="login">
                <div class="wrapper">
                <section class="forms">
                    <form class="login" @submit.prevent="login">
                        <h2>LOGIN</h2>
                        <input 
                            class="email"
                            type="email" 
                            placeholder="Email"
                            v-model="login_form.email">
                        <input 
                            class="password"
                            type="password" 
                            placeholder="Password"
                            v-model="login_form.password">
                            <input class="btn" type="submit" value="LOGIN">
                    </form>
                </section>
                <p>Not register yet? Click the button below to REGISTER </p>
                <router-link :to="'/register'">
                <input class="btn" type="submit" value="REGISTER">
                </router-link>
                </div><!--end.wrapper-->
            </div>
    </div><!--end.main-login-->
    <Articles />
    <brands />
    <News />
    <Customers />
    <Footer />
</template>
<script>
import { ref } from 'vue' 
import { useStore } from 'vuex'
import Header from '../components/Header'
import Articles from '../components/Articles'
import Footer from '../components/Footer'
import Brands from '../components/Brands'
import News from '../components/News'
import Customers from '../components/Customers'
export default {
    name: "Login",
    setup() { //composition API

        const login_form = ref({});
        const store = useStore();
        const login =  () => {
            store.dispatch('login', login_form.value);
        }
        return {
            login_form,
            login,
        }
    },
    components: {
        Header,
        Articles,
        Footer,
        Brands,
        News,
        Customers
    }
}
</script>
<style scoped>
    .wrapper{
        width: 500px;
        margin: 0 auto;
        text-align: center;
        background-color: white;
        border-radius: 10px;
        padding: 20px 0;
    }
    input {  
        border: 1px solid black;
        border-radius: 5px;
        padding: 3px 10px;
        outline:none;
        background: none;
        margin: 0 5px;
    }
    .btn{
        font-weight: bold;
        cursor:pointer;
    }
    .btn:hover {
        background-color: #5f84a2;
        transition:1s;
    }
    .main-login {
        background-color:#5f84a2;
        padding: 20px 0;
    }

    .login {
        display:block;
    }
    .login h2 {
        padding-bottom: 10px;
        color:#5f84a2;
    }
    .wrapper p {
        padding:10px 0;
    }


    @media screen and (min-width:320px) and (max-width: 520px) {
        .wrapper{
        width: 300px;
        margin: 0 auto;
        margin-top: 40px;
        text-align: center;
        background-color: white;
        border-radius: 10px;
        padding: 20px 0;
        }
        input {
            display: block;
            margin: 0 auto;

        }
        .email {
            margin-bottom: 10px;
        }
        .password {
            margin-bottom: 10px;
        }
        .wrapper p {
        padding:10px 0;
        font-size:15px;
    }
    }
</style>