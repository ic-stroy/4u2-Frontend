<template>
  <div>{{getThumbnailIndex}}</div>
  <swiper
      :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
      :spaceBetween="10"
      :thumbs="{swiper: thumbsSwiper}"
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      class="mySwiper2">
    <swiper-slide v-for="(getOneProduct_image, index) in getOneProduct.images" v-bind:key="(index)"><img :src="getOneProduct_image"/></swiper-slide>
  </swiper>
  <div class="d-flex justify-content-center">
    <swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="10"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="mySwiper">
      <swiper-slide v-if="getOneProduct.images[0]"><img :src="getOneProduct.images[0]"/></swiper-slide>
      <swiper-slide v-if="getOneProduct.images[1]"><img :src="getOneProduct.images[1]"/></swiper-slide>
      <swiper-slide v-if="getOneProduct.images[2]"><img :src="getOneProduct.images[2]"/></swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import {Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

export default {
  name:'thumbnail-swiper',
  props:{
    getOneProduct:{
      type:Object,
      required:true
    }
  },
  components:{
    Swiper,
    SwiperSlide
  },
  setup(){
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs, Autoplay],
    }
  },
  mounted() {

  }
}
</script>
<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
  width:400px;
  margin-right:-54px;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.mySwiper2 img{
  height: 410px;
}
</style>