<template>
  <background-transparent-view :backgroundModal="backgroundModal" :closeModal="closeModal"></background-transparent-view>
  <div v-if="isLoading" class="d-flex align-items-center" style="height: 100%">
    <div class="loading-spinner"></div>
  </div>
  <div v-else>
    <header-view :catologModalFunc="catologModalFunc"  :loginModal="loginModal" :loginModalFunc="loginModalFunc" :catologModal="catologModal" :favourite_products="favourites.length"></header-view>
    <section class="mt-4">
      <div class="container d-flex justify-content-between">
        <div class="d-flex">
          <h1 class="basket_big-text">{{$t('Favorites')}}</h1>
          <h3 class="basket__product-count ms-3" style="margin-right: 3rem; margin-top: 1rem;">({{favourites.length}} {{$t('goods')}})</h3>
        </div>
        <div class="d-flex">
          <div class="d-flex header_bottom_text" style="margin-left: 3rem;">
            <img style="width: 20px; height: 20px;"  class="mt-3 send_and_trash-btn ms-3 me-2" src="../assets/uploads/icons/share.svg" alt="share">
            <h4 class="basket_small-text">{{$t('Share')}}</h4>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container d-flex">
        <div class="me-4 favorites__cards_father">
          <div class="d-flex flex-column">
            <div v-if="favourites != undefined && favourites.length == 0" class="favourites_product-card favourites_product-card2 mt-4">
              <span>{{$t('No products')}}</span>
            </div>
            <div class="favourites_product-card favourites_product-card2 mt-4" v-for="(product, index) in favourites" :key="index">
              <router-link :to="'/show-detail/'+product.id" style="text-decoration: none;" class="d-flex">
                <img class="save_a_like-image" :src="product.images" alt="shoes">
                <div class="ms-2 favorites_product_text" style="margin-top: 1.5rem;">
                  <p class="favourites_title titile_favorit"><b>{{product.name}}</b></p>
                  <p class="favourites_title" style="opacity: 0.5; margin-top: -10px;">{{product.company}}</p>
                </div>
              </router-link>
              <div style="display: flex; flex-direction: column;" class="favourite_botttom">
                <div class="d-flex mt-4">
                  <h3 class="favourites_price">{{product.sum}} {{$t('sum')}}</h3>
                </div>
                <div class="like_and_trash" style="margin-top: 80px; position: relative;">
                  <div class="d-flex">
                    <button class="favourites" @click="fromFavourite(index)">
                      <img width="20" height="20" src="../assets/uploads/icons/heart.svg" alt="">
                    </button>
                    <button class="add_to_card">{{$t('Add to cart')}}</button>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div>
          <div class="favorites_total mobile_favorites_total-none mt-4 ms-5" style="padding: 25px">
            <div class="d-flex justify-content-between mt-1">
              <h3 class="basket_total-all">{{$t("Total products")}}</h3>
              <h3 class="basket_total-all">7</h3>
            </div>
            <div class="d-flex justify-content-between mt-1">
              <h3 class="basket_total-all">{{$t("Total amount:")}}</h3>
              <h3 class="basket_total-all">1 643 827 сум</h3>
            </div>

            <div class="d-flex justify-content-center mt-5">
              <button class="buy_first">{{$t('Buy in one click')}}</button>
            </div>
          </div>

          <div class="favorites_watched mt-4 ms-5">
            <h1 class="basket_big-text" style="font-size: 30px;">{{$t('You watched')}}</h1>
            <div style="height: 96%; overflow: scroll; display: flex; flex-direction: column; align-items: center;">
              <router-link to="/show-detail" style="text-decoration: none;" class="favorites__cards_liked" @mouseenter="showBasket(0)"  @mouseleave="fromBasket(0)">
                <seen-product-view :basket="basket[0]"></seen-product-view>
              </router-link>
              <router-link to="/show-detail" style="text-decoration: none;" class="favorites__cards_liked" @mouseenter="showBasket(1)"  @mouseleave="fromBasket(1)">
                <seen-product-view :basket="basket[1]"></seen-product-view>
              </router-link>
              <router-link to="/show-detail" style="text-decoration: none;" class="favorites__cards_liked" @mouseenter="showBasket(2)"  @mouseleave="fromBasket(2)">
                <seen-product-view :basket="basket[2]"></seen-product-view>
              </router-link>
              <router-link to="/show-detail" style="text-decoration: none;" class="favorites__cards_liked" @mouseenter="showBasket(3)"  @mouseleave="fromBasket(3)">
                <seen-product-view :basket="basket[3]"></seen-product-view>
              </router-link>
              <router-link to="/show-detail" style="text-decoration: none;" class="favorites__cards_liked" @mouseenter="showBasket(4)"  @mouseleave="fromBasket(4)">
                <seen-product-view :basket="basket[4]"></seen-product-view>
              </router-link>
              <router-link to="/show-detail" style="text-decoration: none;" class="favorites__cards_liked" @mouseenter="showBasket(5)"  @mouseleave="fromBasket(5)">
                <seen-product-view :basket="basket[5]"></seen-product-view>
              </router-link>
              <router-link to="/show-detail" style="text-decoration: none;" class="favorites__cards_liked" @mouseenter="showBasket(6)"  @mouseleave="fromBasket(6)">
                <seen-product-view :basket="basket[6]"></seen-product-view>
              </router-link>
              <router-link to="/show-detail" style="text-decoration: none;" class="favorites__cards_liked" @mouseenter="showBasket(7)"  @mouseleave="fromBasket(7)">
                <seen-product-view :basket="basket[7]"></seen-product-view>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="favorites_total favorites_total-mobile mt-4" style="padding: 25px; margin-left: 3rem; display: none; width: 97%;">
          <div class="d-flex justify-content-between mt-1">
            <h3 class="basket_total-all">{{$t("Total products:")}}</h3>
            <h3 class="basket_total-all">7</h3>
          </div>
          <div class="d-flex justify-content-between mt-1">
            <h3 class="basket_total-all">{{$t("Total amount:")}}</h3>
            <h3 class="basket_total-all">1 643 827 сум</h3>
          </div>

          <div class="d-flex justify-content-center mt-5">
            <button class="buy_first">{{$t('Buy in one click')}}</button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container detail_container mt-5">
        <h3 class="comment_title pt-4">{{$t('You may like')}}</h3>
        <swiper-product></swiper-product>
      </div>
    </section>
    <footer-view></footer-view>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  computed:{
    ...mapState(['backgroundModal', 'catologModal', 'loginModal'])
  },
  data(){
    return{
      basket:[
        {
          basket_button:false,
          comment_text:"Пальто бордовое женское",
          detail_star:"12 158",
          product_sum:"1 117 000",
          image:"Rectangle7.png"
        },
        {
          basket_button:false,
          comment_text:"Пальто бордовое женское",
          detail_star:"12 158",
          product_sum:"1 117 000",
          image:"Rectangle7(1).png"
        },
        {
          basket_button:false,
          comment_text:"Пальто бордовое женское",
          detail_star:"12 158",
          product_sum:"1 117 000",
          image:"Rectangle7(2).png"
        },
        {
          basket_button:false,
          comment_text:"Пальто бордовое женское",
          detail_star:"12 158",
          product_sum:"1 117 000",
          image:"Rectangle7(3).png"
        },
        {
          basket_button:false,
          comment_text:"Пальто бордовое женское",
          detail_star:"12 158",
          product_sum:"1 117 000",
          image:"Rectangle7(4).png"
        },
        {
          basket_button:false,
          comment_text:"Пальто бордовое женское",
          detail_star:"12 158",
          product_sum:"1 117 000",
          image:"Rectangle7(5).png"
        },
        {
          basket_button:false,
          comment_text:"Пальто бордовое женское",
          detail_star:"12 158",
          product_sum:"1 117 000",
          image:"Rectangle7(6).png"
        },{
          basket_button:false,
          comment_text:"Пальто бордовое женское",
          detail_star:"12 158",
          product_sum:"1 117 000",
          image:"Rectangle7.png"
        },
        {
          basket_button:false,
          comment_text:"Пальто бордовое женское",
          detail_star:"12 158",
          product_sum:"1 117 000",
          image:"Rectangle7(1).png"
        },
        {
          basket_button:false,
          comment_text:"Пальто бордовое женское",
          detail_star:"12 158",
          product_sum:"1 117 000",
          image:"Rectangle7(2).png"
        },
      ],
      favourites:[],
      isLoading:true
    }
  },
  methods:{
    showBasket(i){
      if(this.basket[i].basket_button == false){
        this.basket[i].basket_button = true;
      }
    },
    fromBasket(i){
      if(this.basket[i].basket_button == true){
        this.basket[i].basket_button = false;
      }
    },
    takeFavouriteProducts(){
      if(localStorage.getItem('favourite_product')){
        this.favourites = JSON.parse(localStorage.getItem('favourite_product'))
      }
    },
    ...mapMutations(['closeModal', 'catologModalFunc', 'loginModalFunc']),
    fromFavourite(index){
      this.favourites.splice(index, 1)
      if(localStorage.getItem('favourite_product')){
        localStorage.removeItem('favourite_product')
      }
      localStorage.setItem('favourite_product', JSON.stringify(this.favourites))
      this.$toast.warning(this.$t('Product deleted from favourites !'));
    },
  },
  mounted(){
    this.takeFavouriteProducts()
    setTimeout(() => {
      this.isLoading = false; // Set to false when the loading is complete
    }, 200);
  }
}
</script>
<style>
.save_a_like-image{
  height: 160px;
}
.favourites{
  width: 24px;
  height: 24px;
  background-color: white;
}
.add_to_card{
  min-width: 120px;
  text-align: center;
}
</style>