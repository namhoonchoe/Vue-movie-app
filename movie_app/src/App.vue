<template>
  <div id="app">
    <ul id=example>
      <li v-for="fav in foods" :key="fav.food">
        <p>I like {{fav.food}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      foods:[
        {food:'kimchi'},
        {food:'suyook'},
        {food:'chukumi'},
        {food:'jokbal'}
      ]
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
