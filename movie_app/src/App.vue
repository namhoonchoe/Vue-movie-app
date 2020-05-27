<template>
  <div id='app'>
    <div v-if=" isLoading === true ">
      <p>Loading ...</p>
    </div>
    <div v-else>
     <movieList v-bind="movieList"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import movieList from './components/movieList';

export default {
  name:'App',
  components:{
    movieList
  },
  data(){
    return {
      isLoading: true,
      movieList: []
    };
  },
  methods: {
      async fetchMovies() {
        await axios
            .get('https://yts-proxy.now.sh/list_movies.json')
            .then(Response => (this.movieList = Response.data.data.movies[1]))
       this.isLoading = false;
       
      },
     /*getArg(){
        const {movieItem} = this.movieList.data.data.movies;
        const movieArg = {  id:movieItem.id,
                            year:movieItem.year,
                            title:movieItem.title,
                            summary:movieItem.summary,
                            poster:movieItem.poster
        }
        
      }*/
    
 
  },

  mounted() {
    this.fetchMovies();
  },  

}


</script>

<style>
  
  
</style>