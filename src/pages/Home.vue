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
import Footer from '../components/Footer'

import { onBeforeMount } from 'vue'
import { useStore } from 'vuex' 
// import CategoryService from '../services/CategoryService'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
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
    
  }
}
</script>

<style>

</style>
