<template>
  <background-transparent-view :closeModal="closeModal" :backgroundModal="backgroundModal"></background-transparent-view>
  <div v-if="isLoading" class="d-flex align-items-center" style="height: 100%">
    <div class="loading-spinner"></div>
  </div>
  <div v-else class="container">
    <header-view :catologModalFunc="catologModalFunc" :catologModal="catologModal" :loginModal="loginModal" :loginModalFunc="loginModalFunc"></header-view>
    <section class="mt-5">
      <div class="container d-flex">
        <ul class="d-flex" style="margin-left: -35px;">
          <li class="d-flex ms-1">
            <router-link to="/" style="text-decoration: none; color: #000000;">
              {{$t("Home")}}
            </router-link>
            <div class="ms-1">
              <img src="../assets/uploads/icons/arrow-left.svg" alt="arrow-left">
            </div>
          </li>
          <li class="d-flex ms-1">
            <router-link to="/" style="text-decoration: none; color: #000000;">
              {{$t("your personal account")}}
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="container d-flex profile_data-adaptive">
        <personal-info-menus-view :current_menu="current_menu"></personal-info-menus-view>
        <div>
          <div class="d-flex flex-column">
            <personal-information-view></personal-information-view>
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

                <div class="coupon_red coupon_none-mobile ms-3">
                  <coupon-product-view></coupon-product-view>
                </div>
              </div>

              <div class="d-flex ms-4 mt-3 mb-3" style="margin-top: 30px !important;">
                <div class="coupon_blue ms-3">
                  <coupon-product-view></coupon-product-view>
                </div>

                <div class="coupon_purple ms-3">
                  <coupon-product-view></coupon-product-view>
                </div>

                <div class="coupon_orange coupon_none-mobile ms-3">
                  <coupon-product-view></coupon-product-view>
                </div>
              </div>

              <div class="d-flex ms-4 mt-3 mb-3" style="margin-top: 30px !important;">
                <div class="coupon_pink ms-3">
                  <coupon-product-view></coupon-product-view>
                </div>

                <div class="coupon_grin ms-3">
                  <coupon-product-view></coupon-product-view>
                </div>

                <div class="coupon_rid coupon_none-mobile ms-3">
                  <coupon-product-view></coupon-product-view>
                </div>
              </div>
              <div class="d-flex ms-4 mt-3 mb-3" style="margin-top: 30px !important;">
                <div class="coupon_blue ms-3">
                  <coupon-product-view></coupon-product-view>
                </div>

                <div class="coupon_yellow ms-3">
                  <div style="display: flex; justify-content: end; flex-direction: column; align-items: end;">
                    <div style="text-align: left; margin-right: 1.5rem;" class="coupon_text mt-2">
                      <h3 class="first_buy">Первая покупка</h3>
                      <p class="first_buy">-10%</p>
                      <img style="margin-top: -20px;" src="../assets/uploads/icons/barcode1.svg" alt="barcode">
                    </div>
                  </div>
                </div>

                <div class="coupon_red coupon_none-mobile ms-3">
                  <div style="display: flex; justify-content: end; flex-direction: column; align-items: end;">
                    <div style="text-align: left; margin-right: 1.5rem;" class="coupon_text mt-2">
                      <h3 class="first_buy">Первая покупка</h3>
                      <p class="first_buy">-10%</p>
                      <img style="margin-top: -20px;" src="../assets/uploads/icons/barcode1.svg" alt="barcode">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container detail_container mt-5">
        <h3 class="comment_title pt-4">{{$t("You may like")}}</h3>
        <swiper-product></swiper-product>
      </div>
    </section>
    <footer-view></footer-view>
  </div>
</template>
<script>
import {mapMutations, mapState} from "vuex"
import CouponProductView from "@/components/CouponProductView";
export default {
  components: {CouponProductView},
  computed:{
    ...mapState(["backgroundModal", "catologModal", "loginModal"])
  },
  data(){
    return{
      name:"Elyor",
      current_menu: {page:'profile_coupon'},
      orders:[
        {
          "id":1,
          "order_date":"10.03.2023",
          "nomer":"112233 445566",
          "status": {
            "ru":"Получена",
            "uz":"Qabul qildi",
            "en":"Received"
          },
          "delivery_type":{
            "ru":"Доставка курьером",
            "uz":"Kuryer yetkazib berish",
            "en":"Courier delivery"
          },
          "delivery_date":"13.03.2023",
          "sum":"950 000 sum",
          "img":"Rectangle44.png",
        },
        {
          "id":2,
          "order_date":"10.03.2023",
          "nomer":"112233 445566",
          "status":{
            "ru":"Получена",
            "uz":"Qabul qildi",
            "en":"Received"
          },
          "delivery_type":{
            "ru":"Самовывоз",
            "uz":"Olib ketish",
            "en":"Pickup"
          },
          "delivery_date":"13.03.2023",
          "sum":"250 000 sum",
          "img":"Rectangle44(1).png",
        }
      ],
      isLoading:true
    }
  },
  methods:{
    ...mapMutations(["catologModalFunc", "closeModal", "loginModalFunc"])
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false; // Set to false when the loading is complete
    }, 200);
  }
}
</script>
<style>
.payment_method-body{
  text-align: start;
}
</style>