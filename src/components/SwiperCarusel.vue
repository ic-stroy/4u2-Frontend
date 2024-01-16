<template>
  <Swiper style="height:300px; width:100%"
      :loop=true
      :modules="modules"
      :slides-per-view="1.2"
      :space-between="50"
      navigation
      :centered-slides=true
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <SwiperSlide>
      <router-link to="/show-detail" class="splide__slide home_yellow">
        <img class="home_bgr_yellow_moreBig" src="../assets/uploads/recomindation/Home/Group43.svg" alt="recomindatin_big">
        <img class="home_bgr_yellow_big" src="../assets/uploads/recomindation/Home/recomindatin_big.svg" alt="recomindatin_big">
        <img class="home_bgr_yellow_768" src="../assets/uploads/recomindation/Home/recomindatin_768.svg" alt="recomindatin_big">
        <img class="home_bgr_yellow_460" src="../assets/uploads/recomindation/Home/recomindatin_460.svg" alt="recomindatin_big">
        <img class="home_bgr_yellow_380" src="../assets/uploads/recomindation/Home/recomindatin_380.svg" alt="recomindatin_big">
      </router-link>
    </SwiperSlide>
    <SwiperSlide>
      <router-link to="/show-detail" class="splide__slide home_red">
        <img class="home_bgr_red_moreBig" src="../assets/uploads/recomindation/Home/red/Group43.svg" alt="recomindatin_big">
        <img class="home_bgr_red_big" src="../assets/uploads/recomindation/Home/red/recomindatin_big.svg" alt="recomindatin_big">
        <img class="home_bgr_red_768" src="../assets/uploads/recomindation/Home/red/recomindatin_768.svg" alt="recomindatin_big">
        <img class="home_bgr_red_460" src="../assets/uploads/recomindation/Home/red/recomindatin_460.svg" alt="recomindatin_big">
        <img class="home_bgr_red_380" src="../assets/uploads/recomindation/Home/red/recomindatin_380.svg" alt="recomindatin_big">
      </router-link>
    </SwiperSlide>
    <SwiperSlide>
      <router-link to="/show-detail" class="splide__slide home_blue">
        <img class="home_bgr_blue_moreBig" src="../assets/uploads/recomindation/Home/blue/Group43.svg" alt="recomindatin_big">
        <img class="home_bgr_blue_big" src="../assets/uploads/recomindation/Home/blue/recomindatin_big.svg" alt="recomindatin_big">
        <img class="home_bgr_blue_768" src="../assets/uploads/recomindation/Home/blue/recomindatin_768.svg" alt="recomindatin_big">
        <img class="home_bgr_blue_460" src="../assets/uploads/recomindation/Home/blue/recomindatin_460.svg" alt="recomindatin_big">
        <img class="home_bgr_blue_380" src="../assets/uploads/recomindation/Home/blue/recomindatin_380.svg" alt="recomindatin_big">
      </router-link>
    </SwiperSlide>
    <SwiperSlide>
      <router-link to="/show-detail" class="splide__slide home_red">
        <img class="home_bgr_red_moreBig" src="../assets/uploads/recomindation/Home/red/Group43.svg" alt="recomindatin_big">
        <img class="home_bgr_red_big" src="../assets/uploads/recomindation/Home/red/recomindatin_big.svg" alt="recomindatin_big">
        <img class="home_bgr_red_768" src="../assets/uploads/recomindation/Home/red/recomindatin_768.svg" alt="recomindatin_big">
        <img class="home_bgr_red_460" src="../assets/uploads/recomindation/Home/red/recomindatin_460.svg" alt="recomindatin_big">
        <img class="home_bgr_red_380" src="../assets/uploads/recomindation/Home/red/recomindatin_380.svg" alt="recomindatin_big">
      </router-link>
    </SwiperSlide>
  </Swiper>
</template>
<script>
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
  export default {
    name:'swiper-carusel',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        try{
          console.log(swiper)
        }catch (e) {
          console.log(e);
        }
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, A11y],
      };
    },
  }
</script>
<style>
  .swiper-button-prev{
    left: 1em;
    align-items: center;
    background: #ccc;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    height: 2em;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2em;
    z-index: 1;
    background: var(--global) !important;
    opacity: 1 !important;
    fill: var(--white) !important;
  }
  .swiper-button-next{
    right: 1em;
    align-items: center;
    background: #ccc;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    height: 2em;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2em;
    z-index: 1;
    background: var(--global) !important;
    opacity: 1 !important;
    fill: var(--white) !important;
  }
  .swiper-button-prev:after, .swiper-button-next:after{
    color:white;
    font-size: 14px;
    font-weight: 900;
  }
</style>