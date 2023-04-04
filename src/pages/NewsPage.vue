<template>
    <Header />
    <div class="news-page">
        <div class="news-page-header">
            <h1>News</h1> 
        </div><!--end.news-header-->
        <div class="news-page-wrapper">
            <h2 v-html="$route.query.title"></h2><!---OVDE TREBA DA SE BINDUJE KADA 
                SE KLIKNE IZ HOME DA SE PRIKAZE TACNO TA VEST-->
            <div class="img-cont">
                <img :src="require('../assets/images/news/' + $route.query.image)" alt="">
            </div> <!--end.img-cont-->
            <p>{{ $route.query.text}}</p>
        </div><!--end.news-page-wrapper-->
    </div> <!--end.news-->
    <Footer />
</template>
<script>
import Header from '../components/Header'
export default {
    name: 'NewsPage',
    components: {
        Header,
        Footer
    },
    mounted() {
        console.log(this.$route.query)
    }
}
import Footer from '../components/Footer.vue'
</script>
<style scoped>

.news-page {
    border: 1px solid red;
}
    .news-page-header {
        text-align:center;
        padding: 50px 0;
        background-color: #5c5c5c;
        color: white;
        font-size: 20px;
    }
    .news-page-wrapper h2 {
        text-align:center;
        padding: 30px 0;
    }
    .news-page-wrapper {
        width: 80%;
        margin: 0 auto;
    }
    .img-cont img {
        width: 700px; 
    }
    .img-cont {
        text-align:center;
    }
    .news-page-wrapper p {
       margin: 0 auto;
       width: 80%;
       padding: 20px 0;
    }

  


    @media screen and (min-width: 769px) and (max-width: 1024px)  {
        .img-cont img {
        width: 500px; 
    }
    
}
    @media screen and (min-width: 481px) and (max-width: 768px)  {
        .img-cont img {
        width: 400px; 
        
    }
    .news-page-wrapper p {
        text-align:center;
    }

    }
    @media screen and (max-width: 480px) {
        .img-cont img {
        width: 250px; 
    }
    .news-page-wrapper h2 {
        font-size: 20px; 

    }
    .news-page-wrapper p {
        text-align:center;
    }
    }

</style>