<template>
    <div class="news">
        <h1>News</h1>
        <div class="intro-text">
            <p>Find out interesting news from the world of motorcycles,Moto GP races and novelties in our offer
            </p>
        </div><!--end.intro-text-->
        <div class="news-wrapper">
          <SingleNews 
            image="fb.jpg" 
            title="The Sun Daily <br> Pecco rakes up seventh season win with Malaysian GP victory" 
            text="Born in Turin, Bagnaia was already successful early on in Minimoto, as he won the European MiniGP championship in 2009..."
          />

          <SingleNews 
            image="2.jpg" 
            title="Scorpion EXO-TECH new <br>Flip-Back" 
            text="It is the first Flip-Back helmet from the Scorpion brand. It is currently the most modern and..."
          />
          

          <SingleNews  
            image="3.jpg" 
            title="Suomy and KYT models at purchase prices" 
            text="SUOMY HALO (integral helmet with sun visor and free Pinlock) is now at the lowest price of 15,000 dinars for one color and 18,000..."
          />

        </div><!--end.news-wrapper-->
    </div><!--end.news-->
</template>
<script>
import SingleNews from '../components/SingleNews'

export default {
  name: 'news',
  components: {
    SingleNews
  },
 
}

</script>
<style scoped>
  .news {
  border-bottom: 2px solid #cf0e0e;
  width: 100%;
}
.news h1 {
  text-align: center;
  padding: 20px 0 0;
  font-size: 33px;
}
.news .intro-text {
  text-align: center;
}
.news p {
  padding: 10px 0;
  width: 70%;
  margin: 0 auto;
}



@media screen and (min-width: 320px) and (max-width: 600px) {
  .article-outer {
  width: 250px;
  margin: 0 auto;
}
.article-outer img {
  width: 100%;
  height: 150px;
  text-align:center;
}
.article-outer h2 {
  padding-bottom: 2px;
  text-align: center;
  font-weight: 400;
  font-size: 18px;
}
.article-outer p {
  width: 70%;
  font-weight: 200;
  padding: 10px 0;
  margin: 0 auto;
  font-size: 15px;
}
.entry-content .read-c {
  margin-bottom: 20px;
  
}

}

</style>