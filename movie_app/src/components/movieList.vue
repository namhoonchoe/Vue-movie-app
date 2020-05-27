<template>
    <div class ="movieCard">
      <p>{{title}}</p>
      <img :src=$props.medium_cover_image alt="">
      <p>{{id}}</p>
      <p>{{summary}}</p>
      <p>{{year}}</p>
    </div>
    
</template>

<script>
export default {
    name:'Movie',
    props:{
        id:String,
        year:Number,
        title:String,
        summary:String,
        medium_cover_image:String
    }
};
</script>

<style>

</style>