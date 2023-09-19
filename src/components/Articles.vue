<template>
    <div class="articles">
            <div class="wrapper">
            <h2>See our offer that we have prepared for You!</h2>
            <p>Here you can find the best helmets, jackets, gloves and footwear for driving on the road in one place - both for longer trips (Touring) <br>and for cruising the city streets (Urban-City). We know that motorcycling is not only a hobby, but also a sport, so if you want to equip yourself for maximum adrenaline pleasure, you will find equipment and protectors intended for sports riding on the track.
            </p>
        </div> <!--end.wrapper-->

        <div class="content-wrapper">

            <div v-for="(category,index) in categories" :key="index" class="content-box">
                <div class="content-img">
                    <router-link :to="'/products/' + category.name">
                        <img :src="require('../assets/images/' + category.img)" alt="">
                    </router-link>
                </div> <!--end.content-img-->
                <h4>{{ category.name }}</h4>
            </div> <!--end.content-box-->

        </div>
    </div> <!--end.articles-->
</template>
<script>
import CategoryService from '../services/CategoryService'

export default {
    name: 'articles',
    data() {
        return {
            categories: []
        }
    },
    async mounted() {
        const categoryService = new CategoryService(); 
        this.categories = await categoryService.all();//dovlacim kategories iz baze

        
  }
}
</script>
<style scoped>
    @media screen and (min-width: 320px) and (max-width: 600px) {
    .articles .wrapper h2 {
    font-size: 23px;
    text-align: center;
  }
  .articles .wrapper p {
    text-align: center;
    margin: 0 auto;
    padding: 10px 0;
    width: 250px;
    font-size: 17px;
  }
  
  .content-wrapper {
    width: 30%;
    display: block;
    margin: 0 auto;
  }
  
  .content-box {
    text-align: center;
  }
  .content-box img {
    width: 40%;
    padding: 8px 0;
  }
  .content-box h4 {
    font-size: 20px;
    padding: 10px 0;
  }
  
  .content-img {
    border: 1.7px solid #cf0e0e;
    border-radius: 10px;
    box-shadow: 5px 4px 15px;
    color: #575757;
    
  }
    }
</style>