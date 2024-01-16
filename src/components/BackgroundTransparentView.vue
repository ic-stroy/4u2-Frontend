<template>
    <div class="background_transparent" v-if="backgroundModal" @click="closeModal"></div>
</template>
<script>
  export default {
    name:'background-transparent-view',
    props:{
      backgroundModal:{
        required: true
      },
      closeModal:{
        type:Function
      }
    },
    data(){
      return{
        name:'Elyor',
      }
    },
  }
</script>
<style>
.background_transparent{
  width: 200%;
  height: 160%;
  position: absolute;
  z-index: 1;
}
</style>