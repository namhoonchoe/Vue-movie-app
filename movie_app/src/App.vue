<template>
  <div id='app'>
    <div v-if=" isLoading === true ">
      <p>Loading ...</p>
    </div>
    <div v-else>
     <movieList v-for="movies in movieList" :key="movies.id"
                v-bind:movie="movies"/>
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
      movieList:[],
      movies:[]
    }
  },
  methods: {
     async fetchMovies() {
        await axios.get('https://yts-proxy.now.sh/list_movies.json/')
         .then(res => (this.movieList = res.data.data.movies))
         .catch(err => console.log(err));
        this.isLoading = false;
        const [movies] = this.movieList;
        this.movies = [movies]
      } 
      
  },  
  created() {
      this.fetchMovies();
     
  },
 /* mounted(){
    const getMoives  = () =>{
      this.movieList.map()
    }*/
  }
  
  
  
  


</script>

<style>
  
  
</style>