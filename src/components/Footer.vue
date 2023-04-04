<template>
    <div class="footer">
        <div class="wrapper">
            <div class="logo">
                <router-link :to="'/'">
                        <img class="logo" src="../assets/images/logo.png"> 
                    </router-link>
                   
            </div> <!--end.logo-->
            <div class="content">
                <p>Through a wide range of products and dedication to each individual who visits us, we want to make motorcycling accessible to everyone, but at the same time a thing for the chosen ones.<br> We would like to thank all our customers for their long-term trust</p>
                <div class="map-wrapper">
                    <h3>OUR LOCATION</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d135292.633627958!2d-121.61926502861144!3d36.723013132746644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scalifornia%20moto!5e0!3m2!1ssr!2srs!4v1678790913898!5m2!1ssr!2srs" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div> <!--end.content-->
 
            <div class="fus-icons">
            
                <h3>FOLLOW US</h3>
                <i class="fa-brands fa-facebook" ></i>
                <i class="fa-brands fa-instagram" style="margin-left:15px"></i>
                <i class="fa-brands fa-twitter" style="margin-left:15px" ></i>
                <p><b>Working hours:</b> Tues-Sat 10AM - 4PM</p>
                <p><b>Address:</b> 938 S Main Street</p>
                <p><b>Mail:</b> onwheel@gmail.com</p>
            </div> <!--end.icons--> 
        </div> <!--end.wrapper-->
    </div> <!--end.footer-->
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
    .footer {
        background-color: #5c5c5c;
        padding: 30px 0;
        border-bottom: 1px solid red;
        
    }
    .footer .wrapper {
        width: 80%;
        margin: 0 auto;
    }

    .content p {
        width: 400px;
        margin-right: 50px;
        color: white;
    }
    .logo {
        width: 150px;
        padding: 5px 0;
        padding-bottom: 20px;

    }
    .logo h3 {
        text-align:right;
    }
    .map-wrapper {
        width: 400px;
        height: 200px;
    }
    .map-wrapper h3 {
        text-align: center;
        padding-bottom: 20px;
    }
    .fus-icons  {
        color: white;
    }
   
    .content span{
        padding-top: 20px;
    }
    .content p {
        font-size: 15px;
        font-weight: 300;
    }
    .content {
        display: flex;
        justify-content: space-between;
    }

    .fus-icons p {
        padding: 5  px 0;
    }

    @media screen and (min-width: 320px) and (max-width: 600px) {
        .footer .wrapper {
        width:80%;
           
    }
    .content {
        display: block;
        margin: 0 auto;
    }
    .map-wrapper {
        width: 250px;
        height: 150px;
        margin: 0 auto;
    }
    .content p {
        width: 250px;
        margin: 0 auto;
        color: white;
        text-align: center;
        padding-bottom: 10px;
    }
    .fus-icons {
        padding-top: 80px;
        text-align: center;
    }
    }
</style>