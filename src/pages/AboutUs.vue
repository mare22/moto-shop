<template>
    <Header />
    <div class="about-us">
        <div class="main-wrapper">
            <div class="img-container">
                <img src="../assets/images/about-us/mainimg.png" alt="">
            </div> <!--end.img-container-->
            <div class="text-container">
                <h1>ABOUT US</h1>
                <p>We are On Wheel from California and since our establishment in 2008 we have been operating in the very center of the city, in the well-known neighborhood of Savamala. In all the past years, we have tried to build the image of a recognizable shop that stands out with a quality product offering in a well-organized and pleasant environment.

                As a company and as individuals, we are motorcycling enthusiasts, but our dedication to motorcycles and motorcycle equipment does not end there. We are also working on educating motorcycle enthusiasts about the importance of using protective equipment and increasing the safety of motorcyclists. In addition, we regularly organize various events, gatherings and gatherings with motor racing coverage. </p>
            </div><!--end.text-contaienr-->
          
        </div><!--end.main-wrapper-->
        <div class="paragraph">
            <p>As sponsors of several teams and drivers, we also contribute to the development of motorsport in California.Every year, we participate in the Belgrade Motopassion fair, and we contribute to the development of every other event related to two-wheelers and enthusiasts. Through a wide range of products and dedication to each individual who visits us, we want to make motorcycling accessible to everyone, but also something for the chosen ones.</p>
        </div>
        
        <div class="section-container">
            <h2>We are waiting for You in our store!</h2>
            <div class="img-wrapper">
                <img src="../assets/images/about-us/s1.jpg" alt="">
                <img src="../assets/images/about-us/s2.jpg" alt="">
            </div> <!--end.img-wrapper-->
            <div class="img-wrapper">
                <img src="../assets/images/about-us/s3.jpg" alt="">
                <img src="../assets/images/about-us/s4.jpg" alt="">
            </div> <!--end.img-wrapper-->
            <div class="img-wrapper">
                <img src="../assets/images/about-us/s5.jpg" alt="">
                <img src="../assets/images/about-us/s6.jpg" alt="">
            </div> <!--end.img-wrapper-->
        </div> <!--end.section-container-->
    </div><!--end.about-us-->
    <Brands/>
    <Footer />
</template>
<script>

import Header from '../components/Header'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
export default {
    name: 'AboutUs',
    components: {
        Header,
        Brands,
        Footer
    }
}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mada:wght@300;400;600&family=Metrophobic&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: 'Mada', sans-serif;
}
    .main-wrapper {
        width:80%;
        display:flex;
        margin: 0 auto;
        padding: 30px 0;
    }
    .img-container img {
        width: 400px;
    }
    .text-container {
        width: 350px;
        margin-left: 80px;
    }
    .text-container h1 {
        border-bottom: 1px solid red;
        width: 145px;
    }
    .text-container p {
        padding: 10px 0;
        font-size: 16px;
        
    }
    .paragraph {
        width: 70%;
        margin-left: 130px;
        font-size: 16px;
        padding-bottom: 30px;
    }
    .img-wrapper {
        display:flex;
        margin: 0 auto;
        width: 80%;
        padding: 10px 0;
    }
    .img-wrapper img {
        width: 300px;
        margin: 0 auto;
        box-shadow: 1px 2px 10px black;
    }
    .section-container h2 {
        text-align:center;
        padding: 30px 0;
    }
    .section-container {
        border-top: 1px solid red;
        border-bottom: 1px solid red;
        padding-bottom: 30px;
    }
    
    

    @media screen and (min-width: 769px) and (max-width: 1024px) {
        .main-wrapper {
        width:80%;
        display:flex;
        margin: 0 auto;
        padding: 30px 0;
    }
    .img-container img {
        width: 300px;
    }
    .text-container {
        
        margin-left: 40px;
    }
    .text-container h1 {
        border-bottom: 1px solid red;
        width: 100px;
        font-size: 22px;
    }
    .text-container p {
        padding: 10px 0;
        font-size: 15px;
    }
    .paragraph {
        width: 70%;
        margin-left: 130px;
        font-size: 15px;
        padding-bottom: 30px;
    }
    .img-wrapper img {
        width: 250px;
    }
    .section-container h2 {
        text-align:center;
        padding: 30px 0;
        font-size: 22px;
    }
    .section-container {
        border-top: 1px solid red;
        border-bottom: 1px solid red;
        padding-bottom: 30px;
    }
    }

    @media screen and (min-width: 481px) and (max-width: 768px)  {
        .main-wrapper {
        width:80%;
        display:block;
        padding: 30px 0;
        text-align:center;
    }

    .img-container img {
        width: 300px;
    }
    .text-container {
        margin:0 auto;
    }
    .text-container h1 {
        border-bottom: 1px solid red;
        width: 100px;
        font-size: 22px;
        margin:0 auto;
    }
    .text-container p {
        padding: 10px 0;
        font-size: 15px;
        text-align:center;
    }
    .paragraph {
        width: 50%;
        margin:0 auto;
        font-size: 15px;
        padding-bottom: 30px;
        text-align:center;
    }
    .img-wrapper img {
        width: 250px;
    }
    .section-container h2 {
        text-align:center;
        padding: 30px 0;
        font-size: 22px;
    }
    .section-container {
        border-top: 1px solid red;
        border-bottom: 1px solid red;
        padding-bottom: 30px;
    }


    .img-wrapper {
        display:flex;
        margin: 0 auto;
        width: 80%;
        padding: 10px 0;
    }
    .img-wrapper img {
        width: 150px;

    }
    .section-container h2 {
        text-align:center;
        padding: 30px 0;
        font-size: 20px;
    }
    .section-container {
        border-top: 1px solid red;
        border-bottom: 1px solid red;
        padding-bottom: 30px;
    }

    }
    @media screen and (max-width: 480px) {
        .main-wrapper {
        width:80%;
        display:block;
        padding: 30px 0;
        text-align:center;
    }

    .img-container img {
        width: 230px;
    }
    .text-container {
       margin: 0 auto;
       width: 80%;
       padding: 10px 0;
        text-align:center;
        
    }
    .text-container h1 {
        border-bottom: 1px solid red;
        width: 100px;
        font-size: 22px;
        margin:0 auto;
    }
    .text-container p {
        font-size: 15px;
        text-align:center;
    }
    .paragraph {
        width: 80%;
        margin:0 auto;
        font-size: 15px;
        padding-bottom: 30px;
        text-align:center;
    }
    .img-wrapper {
        display:grid;
        margin: 0 auto;
        width: 80%;
        padding: 10px 0;
        grid-template-columns: repeat(1,1fr)
        
    }
    .img-wrapper img {
        width: 230px;
        flex-direction:column;
        margin-top: 20px;
    }
    .section-container h2 {
        text-align:center;
        padding: 30px 0;
        font-size: 18px;
    }
    .section-container {
        border-top: 1px solid red;
        border-bottom: 1px solid red;
        padding-bottom: 30px;
    }
    }
</style>