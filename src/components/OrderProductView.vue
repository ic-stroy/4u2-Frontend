<template>
  <div class="favourites_product-card history_profile-card d-flex mt-4" v-for="order in orders" :key="order.id">
    <div class="mt-1 ms-1">
      <div style="margin-bottom: 40px;">
        <h3 class="hello_profile" style="font-size: 20px; margin-bottom: -2px;">{{$t('Order from')}} {{order.order_date}}</h3>
        <p class="hello_profile" style="opacity: 0.25; font-size: 20px;">{{order.nomer}}</p>
      </div>
      <div class="mt-4">
        <div class="d-flex">
          <h3 class="hello_profile" style="font-size: 20px; margin-bottom: -2px;">{{order.delivery_type.ru}}</h3>
          <button class="received_btn">{{order.status.ru}}</button>
        </div>
        <p class="hello_profile" style="opacity: 0.25; font-size: 20px;">{{$t('Delivery date:')}} {{order.delivery_date}}</p>
      </div>
    </div>
    <div>
      <h3 class="hello_profile mt-2" style="font-size: 20px; margin-bottom: -2px;">{{order.sum}}</h3>
      <img class="mt-4" :src="require(`../assets/uploads/images/${order.img}`)" alt="Rectangle">
    </div>
  </div>
</template>
<script>

import {defaultLocale} from "@/i18n";

export default {
  name:'order-product-view',
  props: {
    orders: {
      required:true,
      type:Array
    },
  },
  data(){
    return{
      lang: (localStorage.getItem('lang')||defaultLocale)
    }
  },
  mounted() {
    console.log([this.orders[0].status])
  }
}

</script>
<style>
.favourites_product-card{
  text-align: start;
}
</style>