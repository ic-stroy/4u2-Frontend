<template>
  <router-view :key="$route.fullPath"/>
</template>
<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  min-height: 100vh;
  max-height: auto;
  padding-bottom: 20px;
  margin: 0px;
}

</style>
