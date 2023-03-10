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
                    <a href="" alt=""><img :src="require('../assets/images/' + category.img)" alt=""></a>
                    
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
        this.categories = await categoryService.all();

        
  }
}
</script>
<style lang="">
    
</style>