<template>
    <img :src="require(`../assets/uploads/images/${basket.image}`)" alt="card image">
    <h3 class="comment_title pt-4">{{basket.product_sum}} сум</h3>
    <p class="comment_text">{{basket.comment_text}}</p>
    <div class="d-flex">
        <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
        <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
        <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
        <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
        <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
        <p class="detail_star star_owerwiev_text">{{ basket.detail_star }} {{$t('reviews')}}</p>
    </div>
    <div class="basket_background" v-if="basket.basket_button">
      <button class="to_basket" @click="toBasket">{{$t('Add to cart')}}</button>
    </div>
</template>
<script>
export default {
  name:'seen-product-view',
  props:{
    basket:{
      required:true
    }
  },
  methods: {
    toBasket(e) {
      e.preventDefault()
    },
  },
  mounted() {
    // console.log(this.basket)
  }
}
</script>
<style>
.card_image_{
  height: 117px;
}
</style>