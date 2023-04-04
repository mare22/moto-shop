<template>
  <div>
      <div class="top">
          <Header/>
          <Intro />
      </div> <!--end.top-->

      <Articles />
      <Brands />
      <News />
      <Customers />
      <Footer/>
  </div>
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
import Footer from '../components/Footer'

import { onBeforeMount } from 'vue'
import { useStore } from 'vuex' 
// import CategoryService from '../services/CategoryService'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      // console.log(store.state.user.email)
      const user = store.dispatch('fetchUser')
      console.log(user);
    })
  },
  name: 'home',
  components: {
    Header,
    Intro,
    Articles,
    Brands,
    News,
    Customers,
    Footer
    
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
