<template>
    <div class="tnx-customers">
        <div class="bg-hero">
                <div class="wrapper">
                
                    <p> <i>You can get anywhere you want with a motorcycle, and you always carry your love and passion for motorcycling in your heart. We on our site never forget that, so we transfer that passion to the business we do. We have been successfully operating on the market for years and we are recognizable as one of the leaders in the sale of motorcycle equipment, both in our store and throughout Europe through the Web Shop.
                    </i></p>
                    <h2>We thank all our customers for their long-term trust,<br>
                    and for us, your safety is paramount.</h2>
                    <a href=""><button class="view-offer">VIEW OUR OFFER</button></a>
                </div><!--end.wrapper-->
        </div><!--end.bg-hero-->
              
    </div><!--end.txt-customers-->
</template>
<script>
export default {
    name: 'customers'
}
</script>
<style scoped>
 .tnx-customers {
  background-image:linear-gradient(rgba(17, 16, 4, 0.7), rgba(0, 0, 10, 0.8)), url(../assets/images/tnx-img2.jpg);
  background-position: center left;
  background-size: cover;
  width: auto;
  min-height: 70vh;
  border-bottom: 1px solid #cf0e0e;
}

.bg-hero .wrapper {
  width: 80%;
  padding: 110px 0;
  text-align: center;
  margin: 0 auto;
}
.bg-hero .wrapper p {
  color: white;
  font-size: 20px;
  padding: 20px 0;
}
.bg-hero .wrapper h2 {
  padding: 18px 0 35px;
  color: white;
}
.bg-hero .wrapper .view-offer {
  padding: 9px 15px;
  cursor: pointer;
  background-color: #cf0e0e;
  color: white;
  border-radius: 5px 12px;
  border: none;
  font-size: 14px;
  font-weight: bold;
}
.bg-hero .wrapper .view-offer:hover {
  background-color: #9f0000;
}


@media screen and (min-width: 320px) and (max-width: 600px) {
    .tnx-customers {
  background-image:linear-gradient(rgba(17, 16, 4, 0.7), rgba(0, 0, 10, 0.8)), url(../assets/images/tnx-img2.jpg);
  background-position: center left;
  background-size: cover;
  width: auto;
  min-height: 40vh;
  border-bottom: 1px solid #cf0e0e;
}

.bg-hero .wrapper {
  width: 80%;
  padding: 50px 0;
  text-align: center;
  margin: 0 auto;
}
.bg-hero .wrapper p {
  color: white;
  font-size: 15px;
  padding: 20px 0;
  font-weight: 300;
}
.bg-hero .wrapper h2 {
  padding: 18px 0 35px;
  color: white;
  font-size: 16px;
}


}
</style>