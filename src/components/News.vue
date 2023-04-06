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
            text="Ducati Lenovo Team rider Francesco Bagnaia clinched his seventh win this season after making the most of a strong start to win the 2022 Malaysian Motorcycle Grand Prix at the Sepang International Circuit (SIC) here, today.

            As the season heads to a close with the final race in Valencia, Spain in two weeks’ time, Bagnaia only needs to finish the race at the Ricardo Tormo Circuit in at least 13th place to secure his maiden MotoGP championship.

            “First of all, I want to say that I did the best start of my life because it was perfect, and (at first turn) I took some risk to enter the front (riders). Today we (team) did a really good job in terms of the championship and also it is my seventh win of the season, I’m very happy,” he said after the race.

            In the 2019 Malaysian GP, Bagnaia could only manage a 12th place finish, a year after he came in third in Sepang when he won the 2018 Moto2 championship.

            Quartararo, currently second in the riders’ championship standings, meanwhile, expressed delight over his first podium finish since being runner-up at the Austrian GP last August.

            The 23-year-old French rider started behind Bagnaia in 12th place but managed to power into the front group early in the race.

            “I gave my maximum today, I couldn’t do any better but I’m proud of myself because they (rivals) had a good day so did we and at the end, I know where I was losing - exactly the time.

            “I feel like I’m riding really well....one of the best of the season, especially in the first lap so I am feeling super happy and at least we bring it (title fight) to Valencia even if the chances are super small, we did bring it to Valencia,” he said."
          />

          <SingleNews
            image="2.jpg" 
            title="Scorpion EXO-TECH new <br>Flip-Back" 
            text="The Bell SRT Modular Helmet is the result of a high performance helmet manufacturer developing a helmet for the those who may never see a track day, but still need their helmet to execute. Touring and commuting features like a flip up chin bar, speaker pockets and eyewear compatibility marry to a fiberglass composite shell to push the boundaries of a modular helmet. The Bell SRT Modular Helmet may not get you to the track, but Bell's history outfitting world class athletes permeates through its design giving you a touring helmet flavored with first-rate performance. "
          />
          

          <SingleNews  
            image="3.jpg" 
            title="Suomy and KYT models at purchase prices" 
            text="SUOMY HALO (integral helmet with sun visor and free Pinlock) is now at its lowest price of 15,000 din for plain and 18,000 for models with graphics.

            KYT VENOM (integral helmet with sun visor) is now at its lowest price of 8,500 dinars for plain colors and 9,900 dinars for models with graphics.

            KYT FALCON (integral helmet with sun visor and free Pinlock) is now at its lowest price of 11,500 dinars for plain colors and 12,900 for models with graphics.

            KYT CONVAIR (flip-up helmet with sun visor) is now at its lowest price of 10,000 din.

            KYT HELLCAT (jet helmet with sun visor) is now at its lowest price of 8,500 dinars for plain colors and 9,900 dinars for models with graphics.

            The promotion lasts while stocks last."
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