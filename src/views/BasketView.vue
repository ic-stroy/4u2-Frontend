<template>
  <background-transparent-view :backgroundModal="backgroundModal" :closeModal="closeModal"></background-transparent-view>
  <div v-if="isLoading" class="d-flex align-items-center" style="height: 100%">
    <div class="loading-spinner"></div>
  </div>
  <div v-else>
    <header-view :catologModalFunc="catologModalFunc"  :loginModal="loginModal" :loginModalFunc="loginModalFunc" :catologModal="catologModal" :selected_products="selected_products.length" :favourite_products="favourite_products.length"></header-view>
      <section class="mt-5">
        <div class="container d-flex">
          <ul class="d-flex" style="margin-left: -35px;">
            <li class="d-flex ms-1">
              <a href="#" style="text-decoration: none; color: #000000;">
                {{$t('Home')}}
              </a>
              <div class="ms-1">
                <img src="../assets/uploads/icons/arrow-left.svg" alt="arrow-left">
              </div>
            </li>
            <li class="d-flex ms-1">
              <a href="#" style="text-decoration: none; color: #000000;">
                {{$t('Personal Area')}}
              </a>
              <div class="ms-1">
                <img src="../assets/uploads/icons/arrow-left.svg" alt="arrow-left">
              </div>
            </li>
            <li class="d-flex ms-1">
              <a href="#" style="text-decoration: none; color: #000000;">
                {{$t('Basket')}}
              </a>
              <div class="ms-1">
                <img src="../assets/uploads/icons/arrow-left.svg" alt="arrow-left">
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div class="container d-flex">
          <h1 class="basket_big-text">{{$t('Basket')}}</h1>
          <h3 class="basket__product-count ms-3" style="margin-right: 3rem; margin-top: 1rem;">({{selected_products.length}} {{$t('goods')}})</h3>
          <div class="d-flex header_bottom_text" style="margin-left: 3rem;">
            <img style="width: 20px; height: 20px;" class="mt-3 send_and_trash-btn ms-3 me-2" src="../assets/uploads/icons/share.svg" alt="share">
            <h4 class="basket_small-text">{{$t('Share')}}</h4>
          </div>
          <div class="d-flex ms-3">
            <img style="width: 20px; height: 20px;" class="mt-3 send_and_trash-btn ms-3 me-2" src="../assets/uploads/icons/trash.svg" alt="trash">
            <h4 class="basket_small-text">{{$t('Empty trash')}}</h4>
          </div>
        </div>
      </section>

      <section>
        <div class="container d-flex basket_father">
          <div class="me-4">
            <div class="d-flex flex-column">
              <div v-if="selected_products.length == 0" class="basket_products mt-4 d-flex align-items-center justify-content-center">
                <span>{{$t('No products')}}</span>
              </div>
              <div v-for="(product, index) in selected_products" :key="index" class="basket_products mt-4">
                <router-link :to="'/show-detail/'+product.id" style="text-decoration: none;" class="d-flex">
                  <img class="save_a_like-image_basket" :src="product.images" alt="shoes">
                  <div class="mt-3">
                    <p class="basket_title"> <b>{{product.name}}</b></p>
                    <p class="basket_title" style="opacity: 0.5; margin-top: -10px;">{{product.company}}</p>
                  </div>
                </router-link>
                <div style="flex-direction: column;">
                  <div class="d-flex mt-3">
                    <button class="basket_minus me-2" @click="minusFunc(index)">−</button>
                    <input class="basket_number-input" type="number" :value="product.count" id="input"/>
                    <button class="basket_minus ms-2 me-3" @click="plusFunc(index)">+</button>
                    <h3 class="basket_price">{{product.sum*product.count}} {{$t('sum')}}</h3>
                  </div>
                  <div class="basket_trash-btn" style="margin-top: 20px; position: relative; left: 100px;">
                    <h3 class="basket_price-mobile">{{product.sum*product.count}} {{$t('sum')}}</h3>
                    <div class="d-flex">
                      <div style="cursor: pointer;" id="activeDiv" @click="toFavourite(product)" class="me-2">
                        <svg v-if="product.is_favourite == undefined || product.is_favourite == null || product.is_favourite != true" style="cursor: pointer;" width="20" height="20" id="activeSvg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path id="activePath" d="M17.1582 4.14159C17.8915 4.96659 18.3332 6.04992 18.3332 7.24158C18.3332 13.0749 12.9332 16.5166 10.5165 17.3499C10.2332 17.4499 9.7665 17.4499 9.48317 17.3499C7.0665 16.5166 1.6665 13.0749 1.6665 7.24158C1.6665 4.66659 3.7415 2.58325 6.29984 2.58325C7.8165 2.58325 9.15817 3.31659 9.99984 4.44992C10.8415 3.31659 12.1915 2.58325 13.6998 2.58325" stroke="#8DC73F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg v-else style="cursor: pointer;" width="20" height="20" id="activeSvg" viewBox="0 0 20 20" fill="#8DC73F" xmlns="http://www.w3.org/2000/svg">
                          <path id="activePath" d="M17.1582 4.14159C17.8915 4.96659 18.3332 6.04992 18.3332 7.24158C18.3332 13.0749 12.9332 16.5166 10.5165 17.3499C10.2332 17.4499 9.7665 17.4499 9.48317 17.3499C7.0665 16.5166 1.6665 13.0749 1.6665 7.24158C1.6665 4.66659 3.7415 2.58325 6.29984 2.58325C7.8165 2.58325 9.15817 3.31659 9.99984 4.44992C10.8415 3.31659 12.1915 2.58325 13.6998 2.58325" stroke="#8DC73F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <button @click="deleteFunc(index)">
                        <img style="margin-top: 3px;" width="20" height="20" src="../assets/uploads/icons/trashRed.svg" alt="trash">
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="basket_total mt-4 all_product" style="padding: 25px; margin-left: 3rem;">
            <div class="d-flex justify-content-between mt-1">
              <h3 class="basket_total-all">{{ $t("Products") }} <span style="opacity: 0.5">({{selected_products.length}})</span></h3>
              <h3 class="basket_total-all">{{all_sum}} {{$t('Sum')}}</h3>
            </div>
            <div class="d-flex justify-content-between mt-1">
              <h3 class="basket_total-all">{{ $t("Delivery") }}</h3>
              <h3 class="basket_total-all">18 000 {{$t('Sum')}}</h3>
            </div>
            <div class="d-flex justify-content-between mt-1">
              <h3 class="basket_total-all">{{ $t("Total amount") }}</h3>
              <h3 class="basket_total-all">{{all_sum + 18000}} {{$t('Sum')}}</h3>
            </div>
            <div class="mt-5">
              <h3 class="basket_total-all"><b>{{ $t("Delivery address") }}</b></h3>
              <p class=".basket_total-addres">{{ $t("Tashkent city, district. Chilonzar, 13, apt. 12v") }}</p>
            </div>
            <div class="mt-3">
              <form class="d-flex">
                <input class="basket_coupon" type="text" placeholder="Введите купон">
                <button class="basket_coupon-btn">{{ $t("Apply") }}</button>
              </form>
            </div>
            <div class="mt-4">
              <h3 class="basket_total-all"><b>{{ $t("Payment method") }}</b></h3>
              <div class="d-flex mt-3">
                <div class="d-flex justify-content-center align-items-center">
                  <input type="radio" id="html" class="basket_pay me-2" name="fav_language" value="HTML">
                  <label for="html">{{$t("Cash")}}</label><br>
                </div>
                <div class="d-flex justify-content-center align-items-center ms-4">
                  <input type="radio" id="css" class="basket_pay me-2" name="fav_language" value="CSS">
                  <label for="css">{{$t("Online")}}</label><br>
                </div>
              </div>
            </div>
            <div class="mt-4 d-flex" style="justify-content: space-around;">
              <img width="50" height="50" src="../assets/uploads/payment-image/Payme.svg" alt="Payme">
              <img width="50" height="50" src="../assets/uploads/payment-image/Click.svg" alt="Click">
              <img width="50" height="50" src="../assets/uploads/payment-image/Humo.svg" alt="Humo">
              <img width="50" height="50" src="../assets/uploads/payment-image/Uzcard.svg" alt="Uzcard">
              <img width="50" height="50" src="../assets/uploads/payment-image/Visa.svg" alt="Visa">
            </div>
            <div class="d-flex justify-content-center">
              <button class="mt-4 basket_order-btn">{{$t('Go to checkout')}}</button>
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
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import HeaderView from "@/components/HeaderView";
  import FooterView from "@/components/FooterView";
  import router from "@/router";
  export default {
    components: {FooterView, HeaderView},
    computed:{
      ...mapState(['backgroundModal', 'catologModal', 'loginModal']),
      ...mapGetters(['getProducts', 'getFavourites']),
    },
    data(){
      return{
        name:'Elyor',
        selected_products:[],
        all_sum:0,
        favourite_product:{},
        favourite_products:[],
        favourite_product_element:'no element',
        is_repeated:false,
        router_id:router.currentRoute.value.params.id,
        isLoading:true
      }
    },
    methods:{
      ...mapMutations(['closeModal', 'catologModalFunc', 'toFavorites', 'getFavouritedProducts', 'loginModalFunc']),
      ...mapActions(['GETPRODUCTSFUNC']),
      plusFunc(index){
        this.selected_products[index].count++
        this.all_sum = 0
        this.allSumFunc()
      },
      minusFunc(index){
        if(this.selected_products[index].count > 0){
          this.selected_products[index].count = this.selected_products[index].count - 1
        }
        this.all_sum = 0
        this.allSumFunc()
      },
      getAllSum(item){
        this.all_sum = this.all_sum + item.sum*item.count
      },
      allSumFunc(){
        this.all_sum = 0
        this.selected_products.forEach(this.getAllSum)
      },
      deleteFunc(index){
        this.selected_products.splice(index, 1)
        if(localStorage.getItem('selected_product')){
          localStorage.removeItem('selected_product')
        }
        localStorage.setItem('selected_product', JSON.stringify(this.selected_products))
        this.allSumFunc()
        this.$toast.warning(this.$t('Product deleted from basket !'));
      },
      takeFavouriteProducts(){
        if(localStorage.getItem('favourite_product')){
          this.favourite_products = JSON.parse(localStorage.getItem('favourite_product'))
        }
      },
      SelectedProducts(){
        if(localStorage.getItem('selected_product')){
          this.selected_products = JSON.parse(localStorage.getItem('selected_product'))
        }
      },
      getSelectedProduct(){
        this.takeFavouriteProducts()
        for(let j=0; j<this.favourite_products.length; j++){
          for(let i=0; i<this.selected_products.length; i++){
            if(this.selected_products[i].id == this.favourite_products[j].id){
              Object.assign(this.selected_products[i], {'is_favourite':true})
            }
          }
        }
      },
      toFavourite(product) {
        this.takeFavouriteProducts()
        this.is_repeated = false
        this.favourite_product.id = product.id
        this.favourite_product.name = product.name
        this.favourite_product.subcategory = product.subcategory
        this.favourite_product.category = product.category
        this.favourite_product.sum = product.sum
        this.favourite_product.company = product.company
        this.favourite_product.images = product.images
        for(let i = 0; i<this.favourite_products.length; i++){
          if(this.favourite_products[i].id == product.id) {
            this.is_repeated = true
            this.favourite_product_element = i
            for(let j = 0; j<this.selected_products.length; j++){
              if(this.selected_products[j].id == product.id){
                if(this.selected_products[j].is_favourite != undefined && this.selected_products[j].is_favourite != null){
                  delete this.selected_products[j].is_favourite
                }
              }
            }
          }
        }
        if(this.favourite_product_element != 'no element' && this.is_repeated == true){
          this.favourite_products.splice(parseInt(this.favourite_product_element), 1)
        }
        this.favourite_product_element = 'no element'
        if(this.is_repeated == false){
          for(let j = 0; j<this.selected_products.length; j++){
            if(this.selected_products[j].id == product.id){
              if(this.selected_products[j].is_favourite == undefined || this.selected_products[j].is_favourite == null){
                Object.assign(this.selected_products[j], {'is_favourite':true})
              }
            }
          }
          if(this.favourite_products.length == 0){
            this.favourite_products = [this.favourite_product]
          }else {
            this.favourite_products.push(this.favourite_product)
          }
        }
        if(localStorage.getItem('favourite_product')){
          localStorage.removeItem('favourite_product')
        }
        localStorage.setItem('favourite_product', JSON.stringify(this.favourite_products))
        if(this.is_repeated == false){
          this.$toast.success(this.$t('Product added to favourites !'));
        }else{
          this.$toast.warning(this.$t('Product deleted from favourites !'));
        }
      },
    },
    mounted() {
      this.GETPRODUCTSFUNC()
      this.SelectedProducts()
      this.getSelectedProduct()
      this.getFavouritedProducts()
      this.allSumFunc()
      setTimeout(() => {
        this.isLoading = false; // Set to false when the loading is complete
      }, 200);
    }
  }
</script>
<style>
  .basket_products>a{
    width:55%
  }
  /*.save_a_like-image_basket{*/
  /*  margin-right: 8px;*/
  /*}*/
  .basket_trash-btn button{
    background-color: white;
    transition:0.4s;
    display: flex;
    align-items: center;
  }
  #activeDiv{
    transition: 0.4s;
  }
  .basket_trash-btn button:hover{
    transform: scale(1.1);
  }
  #activeDiv:hover{
    transform: scale(1.1);
  }
</style>