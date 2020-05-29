<template>
    <div class ="movieCard">
      <movieCard v-bind="{title:movie.title,
                          coverImg:movie.medium_cover_image,
                          id:movie.id,
                          summary:movie.summary,
                          genres:movie.genres}"/>
    </div>
</template>

<script>
import movieCard from './movieCard'
export default {
    components:{
      movieCard
    },
    name:'Movie',
    props:['movie']
};
</script>

<style>

</style>