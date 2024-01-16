<template>
  <div class="card_content like__cards">
    <img class="card_image_" :src="basket.images[0]" alt="card image">
    <h3 class="comment_title pt-4">{{basket.sum.toLocaleString('ru-Ru', { style: 'currency', currency: 'uzs',minimumFractionDigits: 0,
      maximumFractionDigits: 0 })}} </h3>
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
      <div class="basket_background" v-if="basket.basket_button">
        <button class="to_basket" @click="toBasket">{{$t('Add to cart')}}</button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name:'product-view',
  props:{
    basket:{
      type:Object,
      required:true
    },
  },
  methods: {
    toBasket(){
      window.scrollTo({ top: 200, left: 0, behavior: 'smooth' });
    }
  },
}
</script>

<style>
.basketButton-enter-from{
  opacity: 0;
}
.basketButton-enter-to{
  opacity: 1;
}
.basketButton-enter-active{
  transition: all 1s ease;
}
.basketButton-leave-from{
  opacity: 1;
}
.basketButton-leave-to{
  opacity: 0;
}
.basketButton-leave-active{
  transition: all 1s ease;
}
.card_image_{
  border-radius: 4px;
}
</style>