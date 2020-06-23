<template>
  <div class='content-container'>
    <div v-if=" isLoading === true ">
      <p class="loading">Loading ...</p>
    </div>
    <div v-else>
      <section class="movies">
        <movieList v-for="movies in movieList" :key="movies.id"
                v-bind:movie="movies"/>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import movieList from '../components/movieList.vue';

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
     
  }
}
</script>

<style scoped>
  .content-container {
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .loading {
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
  }
  .movies {
    display:grid;
    grid-template-columns: repeat(2,minmax(400px,1fr));
    grid-gap: 100px;
    padding:50px;
    padding-left: 150px;
    padding-top:70px;
    width: 80%;
  }
  
  @media screen and (max-width: 1090px) {
  .movies {
    grid-template-columns: 1fr;
    width: 100%;
  }
}
  
</style>