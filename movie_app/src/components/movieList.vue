<template>
    <div class ="movieCard">
        <p>{{movie.title}}</p>
        <img :src=movie.medium_cover_image alt="sorry the image is broken">
        <p>{{movie.id}}</p>
        <p>{{movie.summary}}</p>
        <p>{{movie.year}}</p>
    </div>
    
</template>

<script>
export default {
    name:'Movie',
    props:['movie']
};
</script>

<style>

</style>