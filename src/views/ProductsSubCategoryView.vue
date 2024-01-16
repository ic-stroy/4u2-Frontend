<template>
  <background-transparent-view :closeModal="closeModal" :backgroundModal="backgroundModal"></background-transparent-view>
  <div v-if="isLoading" class="d-flex align-items-center" style="height: 100%">
    <div class="loading-spinner"></div>
  </div>
  <div v-else class="container">
    <header-view :catologModalFunc="catologModalFunc" :catologModal="catologModal" :loginModal="loginModal" :loginModalFunc="loginModalFunc"></header-view>
    <section>
      <div class="container slick_sp mt-4 mb-4">
        <div class="splide__track">
          <div class="splide__list">
            <swiper-carusel></swiper-carusel>
          </div>
        </div>
      </div>
    </section>
    <section class="info">
      <div class="container">
        <div class="info_dektop">
          <div class="info__content d-flex">
            <div class="info__block d-flex">
              <img src='../assets/uploads/icons/clock.svg' alt="clock" class="info__img" />
              <div class="info__desc">
                <h3 class="info__title">{{$t('Service 24/7')}}</h3>
                <p class="info__txt">{{$t('24/7 online shopping')}}</p>
              </div>
            </div>
            <div class="info__block d-flex">
              <img src='../assets/uploads/icons/truck.svg' alt="truck" class="info__img" />
              <div class="info__desc">
                <h3 class="info__title">{{$t('Fast delivery')}}</h3>
                <p class="info__txt">{{$t('Fast delivery in Tashkent')}}</p>
              </div>
            </div>
            <div class="info__block d-flex">
              <img src='../assets/uploads/icons/home-2.svg' alt="home" class="info__img" />
              <div class="info__desc">
                <h3 class="info__title">{{$t('Pick-up point')}}</h3>
                <p class="info__txt">{{$t('Convenient pick-up points')}}</p>
              </div>
            </div>
            <div class="info__block d-flex">
              <img src='../assets/uploads/icons/card-tick.svg' alt="card" class="info__img" />
              <div class="info__desc">
                <h3 class="info__title">{{$t('Online payment')}}</h3>
                <p class="info__txt">{{$t('Convenient online payment')}}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img class="info_mobile" src="../assets/uploads/images/Frame44.svg" alt="Frame">
          <img class="info_mobile2" src="../assets/uploads/images/Frame71.svg" alt="Frame">
        </div>
      </div>
    </section>

    <section class="categories">
      <div class="container catogiro_desktop">
        <div class="categories__top d-flex">
          <h2 class="categories__title">{{$t('Popular categories')}}</h2>
<!--          <router-link to="/show-detail" id="cttg_btn" class="categories__btn d-flex" style="text-decoration: none;">{{$t('View all')}}<span class="categories__span">></span></router-link>-->
        </div>
        <div class="categories__cards">
          <router-link to='/products/2' class="categories__card categories__card_health d-flex">
            <img src='../assets/uploads/home-image/no-name-11.svg' alt="shampoo" class='categories__img' />
            <p class="categories__txt">{{$t('Beauty and health')}}</p>
          </router-link>
          <router-link to='/products/0' class="categories__card categories__card_shoes">
            <p class="categories__txt">{{$t('Shoes')}}</p>
            <img src='../assets/uploads/home-image/Rectangle21.svg' alt="shoe" class='categories__img' />
          </router-link>
          <router-link to='/products/3' class="categories__card categories__card_pill">
            <p class="categories__txt">{{$t('Medicines and vitamins')}}</p>
            <img src='../assets/uploads/home-image/Rectangle21(1).svg' alt="pill" class='categories__img' />
          </router-link>
          <router-link to='/products/4' class="categories__card categories__card_accessory">
            <img src='../assets/uploads/home-image/Rectangle21(3).svg' alt="accsessory" class='categories__img' />
            <p class="categories__txt">{{$t('Accessories')}}</p>
          </router-link>
          <router-link to='/products/5' class="categories__card categories__card_toys">
            <p class="categories__txt">{{$t('Toys')}}</p>
            <img src='../assets/uploads/home-image/Rectangle19.svg' alt="toy" class='categories__img' />
          </router-link>
          <router-link to='/products/1' class="categories__card categories__card_clothes">
            <img src='../assets/uploads/home-image/Rectangle21(2).svg' alt="clothes" class='categories__img' />
            <p class="categories__txt">{{$t('Cloth')}}</p>
          </router-link>
        </div>
      </div>

      <div class="container">
        <img class="catogiro_mobile" src="../assets/uploads/images/Group50.svg" alt="Group">
      </div>

      <div class="container">
        <img id="image" class="catogiro_mobile2" src="../assets/uploads/images/Group36.svg" alt="Group">
        <div id="loader" class="loader"></div>
      </div>
    </section>
    <section>
      <div class="container">
        <h3 class="recomidation_text-big mt-5">{{$t('Products')}}</h3>
        <div v-if="getProductsBySubCategories[0]" class="row d-flex justify-content-center">
          <router-link v-for="(product, index) in getProductsBySubCategories[0].products" :key="index" :to="'/show-detail/'+product.id" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="product" @mouseenter="showBasket(index)"  @mouseleave="fromBasket(index)"></product-view>
          </router-link>
        </div>
      </div>
    </section>
    <section class="offers mt-5">
      <div class="container">
        <h2 class="offers__title">{{$t('First time here?')}}</h2>
        <p class="offers__txt">{{$t('Leave your email and receive great offers!')}}</p>
        <div class="offers__block">
          <input type="mail" class="offers__input" :placeholder="$t('Enter E-mail')" />
          <img src='../assets/uploads/images/Arrow4.svg' alt="arrow" class="offers__img" />
          <button class="offers__btn">{{$t('Subscribe')}}</button>
        </div>
      </div>
    </section>
    <footer-view></footer-view>
  </div>
</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import router from "@/router";
export default {
  computed:{
    ...mapState([
      'backgroundModal',
      'catologModal',
      'loginModal'
    ]),
    ...mapGetters([
      'basket',
      'getProducts',
      'getProductsBySubCategories',
    ]),
  },
  data(){
    return {
      name:'Elyor',
      router_id:router.currentRoute.value.params.id,
      isLoading:true
    }
  },
  methods:{
    ...mapMutations(['catologModalFunc', 'closeModal', 'loginModalFunc']),
    ...mapActions(['GETPRODUCTSFUNC', 'GETPRODUCTSBYSUBCATEGORIES']),
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
  mounted() {
    this.GETPRODUCTSFUNC()
    this.GETPRODUCTSBYSUBCATEGORIES()
    setTimeout(() => {
      this.isLoading = false; // Set to false when the loading is complete
    }, 200);
  },
}
</script>
<style>
.basket_background{
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.to_basket{
  border:0;
  background-color: #8DC73F;
  color:white;
  border-radius: 4px;
  padding: 4px;
}
#card_like{
  margin-left: 15px;
  margin-right: 15px;
}
</style>