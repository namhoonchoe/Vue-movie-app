<template>
    <div id='nav'>
      <router-link to="/About">About</router-link>
      <router-link to="/">Home</router-link>
    </div>
</template>

<script>
export default {
  name: 'Navigation'
}

</script>

<style scoped>
  #nav  {
    z-index: 1;
    position: fixed;
    top:50px;
    left:10px;
    display: flex;
    flex-direction: column;
    background-color:white;
    padding: 10px 20px;
    border-radius: 5px;
  }
  #nav a {
    font-size: 12px;
    text-decoration:none;
    color: #0008fc;
    text-align: center;
    font-weight: 600;
  }
  #nav a:not(:last-child) {
  margin-bottom: 20px;
  }
</style>