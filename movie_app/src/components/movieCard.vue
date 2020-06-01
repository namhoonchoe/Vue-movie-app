<template functional>
  <div>
      <router-link to="/Detail">
      <p>{{props.title}}</p>  
      <img :src=props.coverImg alt="sorry the image is broken">
      <p>{{props.year}}</p>
      <p>{{props.id}}</p>
      <p>{{props.summary.slice(0,120)}}...</p>
      <p>{{props.genres}}</p> 
      </router-link>
  </div>
</template>

