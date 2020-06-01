<template>
    <div class ="movieCard">
      <router-link to='/movie-detail'>
          <movieCard v-bind="{title:movie.title,
                          coverImg:movie.medium_cover_image,
                          id:movie.id,
                          summary:movie.summary,
                          genres:movie.genres}"/>
      </router-link>
   </div>
    
</template>

<script>
import movieCard from './movieCard'

export default {
    components:{
      movieCard,
    },
    name:'Movie',
    props:['movie']
};
</script>

<style>

</style>