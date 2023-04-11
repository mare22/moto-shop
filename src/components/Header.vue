<template>
    <div class="header">
        <div class="navbar">
            <div class="wrapper">
                    <router-link :to="'/'">
                        <img class="logo" src="../assets/images/logo.png"> 
                    </router-link>
                    <nav>                            
                        <input type="checkbox" id="check">
                        <label for="check" class="hamburger-btn" style="text-align:center">
                            <i class="fas fa-bars" style="color: white;"></i>
                        </label>
                        <ul class="nav-list" style="text-align:center">
                           <li>
                                <router-link class="active no-underline" :to="'/'">
                                    HOME
                                </router-link>
                            </li>
                            <li>
                                <router-link class="active no-underline" :to="'/AboutUs'">
                                        ABOUT US
                                </router-link> 
                            </li>
                            <li>
                                <router-link class="active no-underline" :to="'/'">
                                    NEWS
                                </router-link>
                            </li>
                            <li>
                                <router-link class="active no-underline" :to="'/Contact'">
                                CONTACT
                                </router-link>
                            </li>
                            <li >
                                <router-link class="no-underline" :to="'/Chart'">
                                    <i class="fa-solid fa-cart-shopping"></i> {{ prodcutsInCart.length }}
                                </router-link>
                            </li>
                            <li >
                                <router-link v-if="!$store.state.user" class="no-underline" :to="'/login'">
                                    LOGIN
                                </router-link>
                                <a @click="logout" v-else class="no-underline">
                                    LOGOUT
                                </a>
                            </li>
                        </ul>
                    </nav>
            </div> <!--end.wrapper-->
        </div> <!--end.navbar-->
    </div> <!--end.header-->
</template>
<script>
export default {
    name: 'header',
    data() {
        return {
        }
    },
    computed: {
        prodcutsInCart(){
            return this.$store.state.cart
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
        }
    }
}
</script>
<style>
    .no-underline {
        text-decoration: none;
    }
</style>