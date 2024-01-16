<template>
  <background-transparent-view :closeModal="closeModal" :backgroundModal="backgroundModal"></background-transparent-view>
  <div v-if="isLoading" class="d-flex align-items-center" style="height: 100%">
    <div class="loading-spinner"></div>
  </div>
  <div v-else class="container">
    <header-view :catologModalFunc="catologModalFunc" :catologModal="catologModal"  :loginModal="loginModal" :loginModalFunc="loginModalFunc"></header-view>
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
          <router-link to="/show-detail" id="cttg_btn" class="categories__btn d-flex" style="text-decoration: none;">{{$t('View all')}}<span class="categories__span">></span></router-link>
        </div>
        <div class="categories__cards">
          <router-link to='show-detail' class="categories__card categories__card_health d-flex">
            <img src='../assets/uploads/home-image/no-name-11.svg' alt="shampoo" class='categories__img' />
            <p class="categories__txt">{{$t('Beauty and health')}}</p>
          </router-link>
          <router-link to='/show-detail' class="categories__card categories__card_shoes">
            <p class="categories__txt">{{$t('Shoes')}}</p>
            <img src='../assets/uploads/home-image/Rectangle21.svg' alt="shoe" class='categories__img' />
          </router-link>
          <router-link to='/show-detail' class="categories__card categories__card_pill">
            <p class="categories__txt">{{$t('Medicines and vitamins')}}</p>
            <img src='../assets/uploads/home-image/Rectangle21(1).svg' alt="pill" class='categories__img' />
          </router-link>
          <router-link to='/show-detail' class="categories__card categories__card_accessory">
            <img src='../assets/uploads/home-image/Rectangle21(3).svg' alt="accsessory" class='categories__img' />
            <p class="categories__txt">{{$t('Accessories')}}</p>
          </router-link>
          <router-link to='/show-detail' class="categories__card categories__card_toys">
            <p class="categories__txt">{{$t('Toys')}}</p>
            <img src='../assets/uploads/home-image/Rectangle19.svg' alt="toy" class='categories__img' />
          </router-link>
          <router-link to='/show-detail' class="categories__card categories__card_clothes">
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
        <h3 class="recomidation_text-big mt-5">{{$t('You might like it')}}</h3>
        <p class="mb-4">{{$t('Based on your preferences')}}</p>
        <div class="row d-flex justify-content-between" v-if="getProducts">
          <router-link v-for="(product, index) in getProducts.data" :key="index" :to="'/show-detail/'+index" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like" >
            <product-view :basket="product" @mouseenter="showBasket(index)"  @mouseleave="fromBasket(index)"></product-view>
          </router-link>
          <router-link to="/show-detail/0" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like" >
            <product-view :basket="basket[0]" @mouseenter="showBasket(0)"  @mouseleave="fromBasket(0)"></product-view>
          </router-link>
          <router-link to="/show-detail/1" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[1]" @mouseenter="showBasket(1)"  @mouseleave="fromBasket(1)"></product-view>
          </router-link>
          <router-link to="/show-detail/2" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[2]" @mouseenter="showBasket(2)"  @mouseleave="fromBasket(2)"></product-view>
          </router-link>
          <router-link to="/show-detail/3" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[3]" @mouseenter="showBasket(3)"  @mouseleave="fromBasket(3)"></product-view>
          </router-link>
          <router-link to="/show-detail/4" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[4]" @mouseenter="showBasket(4)"  @mouseleave="fromBasket(4)"></product-view>
          </router-link>
          <router-link to="/show-detail/5" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[5]" @mouseenter="showBasket(5)"  @mouseleave="fromBasket(5)"></product-view>
          </router-link>
          <router-link to="/show-detail/6" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[6]" @mouseenter="showBasket(6)"  @mouseleave="fromBasket(6)"></product-view>
          </router-link>
          <router-link to="/show-detail/7" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[7]" @mouseenter="showBasket(7)"  @mouseleave="fromBasket(7)"></product-view>
          </router-link>
          <router-link to="/show-detail/8" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[8]" @mouseenter="showBasket(8)"  @mouseleave="fromBasket(8)"></product-view>
          </router-link>
          <router-link to="/show-detail/9" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[9]" @mouseenter="showBasket(9)"  @mouseleave="fromBasket(9)"></product-view>
          </router-link>
          <router-link to="/show-detail/10" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[10]" @mouseenter="showBasket(10)"  @mouseleave="fromBasket(10)"></product-view>
          </router-link>
          <router-link to="/show-detail/11" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[11]" @mouseenter="showBasket(11)"  @mouseleave="fromBasket(11)"></product-view>
          </router-link>
          <router-link to="/show-detail/12" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[12]" @mouseenter="showBasket(12)"  @mouseleave="fromBasket(12)"></product-view>
          </router-link>
          <router-link to="/show-detail/13" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[13]" @mouseenter="showBasket(13)"  @mouseleave="fromBasket(13)"></product-view>
          </router-link>
          <router-link to="/show-detail/14" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[14]" @mouseenter="showBasket(14)"  @mouseleave="fromBasket(14)"></product-view>
          </router-link>
          <router-link to="/show-detail/15" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[15]" @mouseenter="showBasket(15)"  @mouseleave="fromBasket(15)"></product-view>
          </router-link>
          <router-link to="/show-detail/16" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[16]" @mouseenter="showBasket(16)"  @mouseleave="fromBasket(16)"></product-view>
          </router-link>
          <router-link to="/show-detail/17" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[17]" @mouseenter="showBasket(17)"  @mouseleave="fromBasket(17)"></product-view>
          </router-link>
          <router-link to="/show-detail/18" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[18]" @mouseenter="showBasket(18)"  @mouseleave="fromBasket(18)"></product-view>
          </router-link>
          <router-link to="/show-detail/19" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[19]" @mouseenter="showBasket(19)"  @mouseleave="fromBasket(19)"></product-view>
          </router-link>
          <router-link to="/show-detail/20" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[20]" @mouseenter="showBasket(20)"  @mouseleave="fromBasket(20)"></product-view>
          </router-link>
          <router-link to="/show-detail/21" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[21]" @mouseenter="showBasket(21)"  @mouseleave="fromBasket(21)"></product-view>
          </router-link>
          <router-link to="/show-detail/22" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[22]" @mouseenter="showBasket(22)"  @mouseleave="fromBasket(22)"></product-view>
          </router-link>
          <router-link to="/show-detail/23" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[23]" @mouseenter="showBasket(23)"  @mouseleave="fromBasket(23)"></product-view>
          </router-link>
          <router-link to="/show-detail/24" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[24]" @mouseenter="showBasket(24)"  @mouseleave="fromBasket(24)"></product-view>
          </router-link>
          <router-link to="/show-detail/25" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[25]" @mouseenter="showBasket(25)"  @mouseleave="fromBasket(25)"></product-view>
          </router-link>
          <router-link to="/show-detail/26" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[26]" @mouseenter="showBasket(26)"  @mouseleave="fromBasket(26)"></product-view>
          </router-link>
          <router-link to="/show-detail/27" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[27]" @mouseenter="showBasket(27)"  @mouseleave="fromBasket(27)"></product-view>
          </router-link>
          <router-link to="/show-detail/28" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[28]" @mouseenter="showBasket(28)"  @mouseleave="fromBasket(28)"></product-view>
          </router-link>
          <router-link to="/show-detail/29" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[29]" @mouseenter="showBasket(29)"  @mouseleave="fromBasket(29)"></product-view>
          </router-link>
          <router-link to="/show-detail/30" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[30]" @mouseenter="showBasket(30)"  @mouseleave="fromBasket(30)"></product-view>
          </router-link>
          <router-link to="/show-detail/31" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[31]" @mouseenter="showBasket(31)"  @mouseleave="fromBasket(31)"></product-view>
          </router-link>
          <router-link to="/show-detail/32" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[32]" @mouseenter="showBasket(32)"  @mouseleave="fromBasket(32)"></product-view>
          </router-link>
          <router-link to="/show-detail/33" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[33]" @mouseenter="showBasket(33)"  @mouseleave="fromBasket(33)"></product-view>
          </router-link>
          <router-link to="/show-detail/34" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[34]" @mouseenter="showBasket(34)"  @mouseleave="fromBasket(34)"></product-view>
          </router-link>
          <router-link to="/show-detail/35" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[35]" @mouseenter="showBasket(35)"  @mouseleave="fromBasket(35)"></product-view>
          </router-link>
          <router-link to="/show-detail/36" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[36]" @mouseenter="showBasket(36)"  @mouseleave="fromBasket(36)"></product-view>
          </router-link>
          <router-link to="/show-detail/37" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[37]" @mouseenter="showBasket(37)"  @mouseleave="fromBasket(37)"></product-view>
          </router-link>
          <router-link to="/show-detail/38" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[38]" @mouseenter="showBasket(38)"  @mouseleave="fromBasket(38)"></product-view>
          </router-link>
          <router-link to="/show-detail/39" class="col-xl-2 col-lg-3 col-md-3 col-sm-4" id="card_like">
            <product-view :basket="basket[39]" @mouseenter="showBasket(39)"  @mouseleave="fromBasket(39)"></product-view>
          </router-link>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button class="show_more-rec">{{$t('View all')}} ↓</button>
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
export default {
  computed:{
    ...mapState([
      'backgroundModal',
      'catologModal',
        'loginModal'
    ]),
    ...mapGetters([
      'basket',
      'getProducts'
    ]),
  },
  data(){
    return {
      name:'Elyor',
      products:[],
      isLoading:true
    }
  },
  methods:{
    ...mapMutations(['catologModalFunc', 'closeModal', 'loginModalFunc']),
    ...mapActions(['GETPRODUCTSFUNC']),
    showBasket(i){
      if(this.basket[i].basket_button == false){
        this.basket[i].basket_button = true;
      }
    },
    fromBasket(i){
      if(this.basket[i].basket_button == true){
        this.basket[i].basket_button = false;
      }
    }
  },
  mounted() {
    this.GETPRODUCTSFUNC()
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