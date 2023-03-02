<template>
    <div class="top">
        <Header />
        <Intro />
    </div> <!--end.top-->

    <Articles />
    <Brands />
    <News />
    <Customers />
    
</template>

<script>
import firebase from "./firebaseInit";
import 'firebase/compat/firestore';
import Header from './components/Header'
import Intro from './components/Intro'
import Articles from './components/Articles'
import Brands from './components/Brands'
import News from './components/News'
import Customers from './components/Customers'

const db = firebase.firestore();
  
export default {
  name: 'App',
  components: {
    Header,
    Intro,
    Articles,
    Brands,
    News,
    Customers
  },
  async mounted() {
    const products = await db.collection("products").get(); // poziv baze

    products.docs.forEach((doc) => {
        console.log(doc.data());
    })
  }
}
</script>

<style>

</style>
