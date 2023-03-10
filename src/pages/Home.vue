<template>
    <div class="top">
        <Header/>
        <Intro />
    </div> <!--end.top-->

    <Articles />
    <Brands />
    <News />
    <Customers />
    
</template>

<script>
import 'firebase/compat/firestore';
import Header from '../components/Header'
import Intro from '../components/Intro'
import Articles from '../components/Articles'
import Brands from '../components/Brands'
import News from '../components/News'
import Customers from '../components/Customers'
import ProductService from '../services/ProductService';

// import CategoryService from '../services/CategoryService'

export default {
  name: 'home',
  components: {
    Header,
    Intro,
    Articles,
    Brands,
    News,
    Customers,
 
    
  },
  async mounted() {
        const productService = new ProductService();

        // const products = await productService.all();

        const helmets = await productService.getByCategory("Helmets");


        console.log(helmets)
  }
}
</script>

<style>

</style>
