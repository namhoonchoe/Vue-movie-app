<template functional>
  <div class="movie">
      <img :src=props.coverImg alt="sorry the image is broken"> 
    <div class="movie__data">
      <p class="movie__title">{{props.title}}</p>  
      <p class="movie__year">{{props.year}}</p>
      <p class="movie__genres">{{props.genres.toString()}}</p> 
      <p class="movie__summary">{{props.summary.slice(0,80)}}...</p>
    </div>
  </div>
</template>

<style scoped>

   .movie {
     display: grid;
     grid-template-columns: minmax(150px, 1fr) 2fr;
     grid-gap: 20px;
     background-color: white;
     margin-bottom: 70px;
     font-weight: 300;
     padding:20px;
     border-radius: 5px;
     color: #adaeb9;
   }

   .movie img{
     position: relative;
     top:-50px;
     max-width: 150px;
     width:100%;
     margin-right: 30px;
      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
   }

   .movie .movie__title,
   .movie .movie__year {
     margin:0;
     font-size:14px;
     font-weight:300;
   }
   
   .movie .movie__title{
     margin-bottom: 5px;
     font-size: 24px;
     color: #2c2c2c;
   }
   
   .movie .movie__genres {
     padding: 0;
     margin: 0;
     display:flex;
     flex-wrap: wrap;
     margin: 5px 0px;
     font-size: 14px;
   }

</style>
