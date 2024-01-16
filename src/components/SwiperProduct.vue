<template>
  <div>
    <Swiper
        :loop=true
        :modules="modules"
        :slides-per-view="5"
        :space-between="30"
        navigation
        :breakpoints = "{
          '1250': {
            slidesPerView: 5,
          },
          '1024': {
            slidesPerView: 4,
          },
          '767': {
            slidesPerView: 3,
          },
          '640': {
            slidesPerView: 2,
          },
          '320': {
            slidesPerView: 2,
          },
          '250': {
            slidesPerView: 1,
          }
        }"
        :centered-slides=true
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="(product, index) in getProducts" :key="index">
        <router-link :to="'/show-detail/'+product.id" id="card_like">
          <product-view :basket="product" @mouseenter="showBasket(index)"  @mouseleave="fromBasket(index)"></product-view>
        </router-link>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script>
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {mapGetters} from "vuex";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
  name:'swiper-product',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
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
  computed:{
    ...mapGetters(['getProducts'])
  },
  data(){
    return{
      name:'Elyor'
    }
  },
  methods:{
    showBasket(i){
      if(this.getProducts[i].basket_button == false){
        this.getProducts[i].basket_button = true;
      }
    },
    fromBasket(i){
      if(this.getProducts[i].basket_button == true){
        this.getProducts[i].basket_button = false;
      }
    }
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
.card_like>products-view{
  height: 300px;
}
.like__cards{
  z-index:5;
}
#card_like{
  text-decoration: none;
}

</style>