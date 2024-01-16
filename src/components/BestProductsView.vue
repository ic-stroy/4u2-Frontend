<template>
  <div class="card_content like__cards">
    <img class="card_image_" :src="basket.images[0]" alt="card image">
    <h3 class="comment_title pt-4">{{basket.sum}} </h3>
    <p class="comment_text" style="white-space: nowrap">{{basket.name}}</p>
    <div class="d-flex favorites_fat-div">
      <div>
        <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
        <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
        <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
        <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
        <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
      </div>
      <p class="detail_star">{{ 5 }} {{$t('reviews')}}</p>
    </div>
    <transition name="basketButton">
      <div class="basket_background" v-if="basket.best_basket_button">
        <button class="to_basket" @click="toBasket">{{$t('Add to cart')}}</button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name:'best-product-view',
  props:{
    basket:{
      type:Object,
      required:true
    }
  },
  methods: {
    toBasket() {
      window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });
    },
  },
}
</script>
<style>
.card_image_{
  height: 117px;
}
/*.basketButton-enter-from{*/
/*  display: none;*/
/*}*/
/*.basketButton-enter-to{*/
/*  display:block;*/
/*}*/
/*.basketButton-enter-active{*/
/*  transition: 1s;*/
/*}*/
/*.basketButton-leave-from{*/
/*  display: block;*/
/*}*/
/*.basketButton-leave-to{*/
/*  display:none;*/
/*}*/
/*.basketButton-leave-active{*/
/*  transition: all 0.8s ease;*/
/*}*/
</style>