<template>
    <div class ="movie-card" @click ="sendingTitle" >
      <router-link to='/detail' > 
        <movieCard v-bind="{title:movie.title,
                            coverImg:movie.medium_cover_image,
                            year:movie.year,
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
      movieCard
    },
    name:'Movie',
    props:['movie'],
    methods: {
      sendingTitle() {
        this.$store.dispatch('sendingTitle',this.movie.title)
      }
    }
   
  
}
     




</script>

<style scoped>
  
</style>