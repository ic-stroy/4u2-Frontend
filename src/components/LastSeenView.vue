<template>
  <div class="seen_product-card mt-4">
    <div class="mt-3 ms-4 d-flex justify-content-between">
      <h3 class="hello_profile">{{$t('Last views')}}</h3>
      <button class="delete_history">{{$t('Clear the history')}} <img style="margin-top: -5px;" src="../assets/uploads/icons/trashWhite.svg" alt=""></button>
    </div>
    <div class="d-flex justify-content-around row" style="flex-wrap: wrap;">
      <router-link v-for="(product, index) in getProducts" :key="index" :to="'/show-detail/'+product.id" class="col-xl-3 col-lg-4 col-md-4 col-sm-4" id="card_like">
        <product-view :basket="product" @mouseenter="showBasket(index)"  @mouseleave="fromBasket(index)"></product-view>
      </router-link>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name:'last-seen-view',
  computed:{
    ...mapGetters(["basket", 'getProducts']),
  },
  props:{
    current_menu:{
      type:Object,
      required:true
    }
  },
  data(){
    return{
     name:"Elyor"
    }
  },
  methods:{
    ...mapActions(['GETPRODUCTSFUNC']),
    showBasket(i){
      if(this.getProducts[i].basket_button == false){
        this.getProducts[i].basket_button = true;
      }
    },
    fromBasket(i){
      if(this.getProducts[i].basket_button == true){
        this.getProducts[i].basket_button = false;
      }
    },
  },
  mounted() {
    this.GETPRODUCTSFUNC()
  }
}
</script>