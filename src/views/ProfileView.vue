<template>
  <background-transparent-view :closeModal="closeModal" :backgroundModal="backgroundModal"></background-transparent-view>
  <div v-if="isLoading" class="d-flex align-items-center" style="height: 100%">
    <div class="loading-spinner"></div>
  </div>
  <div v-else>
    <header-view :catologModalFunc="catologModalFunc" :catologModal="catologModal" :loginModal="loginModal" :loginModalFunc="loginModalFunc"></header-view>
    <section class="mt-5">
      <div class="container d-flex">
        <ul class="d-flex" style="margin-left: -35px;">
          <li class="d-flex ms-1">
            <router-link to="/" style="text-decoration: none; color: #000000;">
              {{$t('Home')}}
            </router-link>
            <div class="ms-1">
              <img src="../assets/uploads/icons/arrow-left.svg" alt="arrow-left">
            </div>
          </li>
          <li class="d-flex ms-1">
            <router-link to="/profile" style="text-decoration: none; color: #000000;">
              {{$t('Personal Area')}}
            </router-link>
          </li>
<!--          <li class="d-flex ms-1">-->
<!--            <button @click="check" style="text-decoration: none; color: #000000;">-->
<!--              {{$t('check')}}-->
<!--            </button>-->
<!--          </li>-->
        </ul>
      </div>
    </section>

    <section>
      <div class="container d-flex profile_data-adaptive">
        <personal-info-menus-view :current_menu="current_menu"></personal-info-menus-view>
        <div>
          <div class="d-flex flex-column">
            <personal-information-view></personal-information-view>
            <profile-information></profile-information>
            <div class="coupon_product-card mt-4">
              <div class="mt-3 ms-4">
                <h3 class="hello_profile">{{$t('Coupons')}}</h3>
              </div>

              <div class="d-flex ms-4 mt-4 mb-3">
                <div class="coupon_yellow ms-3">
                  <coupon-product-view></coupon-product-view>
                </div>

                <div class="coupon_green ms-3">
                  <coupon-product-view></coupon-product-view>
                </div>

                <div class="coupon_red red_coupon-profile">
                  <coupon-product-view></coupon-product-view>
                </div>
                <button class="coupon_all-btn">
                  {{$t('All')}}
                </button>
              </div>
            </div>
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
      current_menu: {page:'profile'},
      isLoading:true
    }
  },
  methods:{
    ...mapMutations(['catologModalFunc', 'closeModal', "loginModalFunc"]),
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false; // Set to false when the loading is complete
    }, 200);
  }
}
</script>