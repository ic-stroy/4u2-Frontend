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
            <last-seen-view></last-seen-view>
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
export default {
  computed:{
    ...mapState(["backgroundModal", "catologModal", "loginModal"])
  },
  data(){
    return{
      name:"Elyor",
      current_menu: {page:'profile_seen'},
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