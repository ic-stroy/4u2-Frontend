<template>
  <background-transparent-view :closeModal="closeModal" :backgroundModal="backgroundModal"></background-transparent-view>
    <div v-if="isLoading" class="d-flex align-items-center" style="height: 100%">
      <div class="loading-spinner"></div>
    </div>
    <div v-else>
      <div class="carusel_modal" v-if="custModal" style="height: 160%">
        <div class="d-flex align-items-center">
          <div class="carusel_modal_content">
            <div id="custCarousel" class="carousel slide">
              <div class="carousel-inner">
                <thumbnail-swiper :getOneProduct="getOneProduct"></thumbnail-swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <header-view :catologModalFunc="catologModalFunc" :catologModal="catologModal" :selected_products="selected_products.length" :favourite_products="getFavourites.length"  :loginModal="loginModal" :loginModalFunc="loginModalFunc"></header-view>
        <section class="mt-5">
          <div class="container d-flex">
            <ul class="d-flex" style="margin-left: -35px;" v-if="getOneProduct.category_link != undefined && getOneProduct.category_link != null">
              <li class="d-flex ms-1 section_link">
                <router-link to="/" style="text-decoration: none; color: #000000;">
                  {{$t('Home')}}
                </router-link>
                <div class="ms-1">
                  <img src="../assets/uploads/icons/arrow-left.svg" alt="arrow-left">
                </div>
              </li>
              <li class="d-flex ms-1 section_link" v-if="getOneProduct.category_link.link != undefined && getOneProduct.category_link.link != null">
                <router-link :to="`${getOneProduct.category_link.link}`" style="text-decoration: none; color: #000000;">
                  {{$t(getOneProduct.category_link.name)}}
                </router-link>
                <div class="ms-1">
                  <img src="../assets/uploads/icons/arrow-left.svg" alt="arrow-left">
                </div>
              </li>
              <li class="d-flex ms-1 section_link" v-if="getOneProduct.sub_category_link.link != undefined && getOneProduct.sub_category_link.link != null">
                <router-link :to="`${getOneProduct.sub_category_link.link}`" style="text-decoration: none; color: #000000;">
                  {{$t(getOneProduct.sub_category_link.name)}}
                </router-link>
                <div class="ms-1">
                  <img src="../assets/uploads/icons/arrow-left.svg" alt="arrow-left">
                </div>
              </li>
              <li class="d-flex ms-1 section_link" v-if="getOneProduct.sub_sub_category_link.link != undefined && getOneProduct.sub_sub_category_link.link != null">
                <router-link :to="`${getOneProduct.sub_sub_category_link.link}`" style="text-decoration: none; color: #000000;">
                  {{$t(getOneProduct.sub_sub_category_link.name)}}
                </router-link>
                <div class="ms-1">
                  <img src="../assets/uploads/icons/arrow-left.svg" alt="arrow-left">
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div class="container detail_container d-flex mt-3">
            <div class="detail_image-slide slide_app_detail" style="padding: 40px 80px">
              <button style="border: none; background-color: transparent;"  @click="openCustModal">
                <img class="show-detail_big_image" :src="getOneProduct.images[selected_image_index]" alt="shoes">
              </button>
              <div class="mt-3">
                <button class="me-2 show-detail_arrow_button" @click="getPreviousImage">
                  <img style="transform: rotate(180deg);" src="../assets/uploads/icons/arrow-circle-right.svg" alt="Left icon">
                </button>
                <!--            <button v-for="(getOneProduct_image, index) in getOneProduct.images" v-bind:key="(index)" class="me-2 show-detail_mini_button" @click="openCustModal">-->
                <!--              <img class="show-detail_mini_image" :src="getOneProduct_image" alt="shoes">-->
                <!--            </button>-->
                <button v-if="getOneProduct.images[0]" class="me-2 show-detail_mini_button" @click="showCurrentImage(0)">
                  <img class="show-detail_mini_image" :src="getOneProduct.images[0]" alt="shoes">
                </button>
                <button v-if="getOneProduct.images[1]" class="me-2 show-detail_mini_button" @click="showCurrentImage(1)">
                  <img class="show-detail_mini_image" :src="getOneProduct.images[1]" alt="shoes">
                </button>
                <button v-if="getOneProduct.images[2]" class="me-2 show-detail_mini_button" @click="showCurrentImage(2)">
                  <img class="show-detail_mini_image" :src="getOneProduct.images[2]" alt="shoes">
                </button>
                <button class="me-2 show-detail_arrow_button" @click="getNextImage">
                  <img src="../assets/uploads/icons/arrow-circle-right.svg" alt="Right icon">
                </button>
              </div>
            </div>
            <div class="show-detail_padding" style="padding: 40px 80px">
              <h3 class="detail_title">{{getOneProduct.name}}</h3>
              <p class="detail_title" style="opacity: 0.5; font-size: 16px;">{{getOneProduct.company}}</p>
              <div class="flex_deteil">
                <div class="d-flex show-detail_margin_top">
                  <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
                  <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
                  <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
                  <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
                  <img class="me-1" src="../assets/uploads/icons/Star5.svg" alt="Star">
                  <p class="detail_star">{{5}} {{$t('reviews')}}</p>
                </div>
                <div class="d-flex show-detail_margin_top">
                  <img src="../assets/uploads/icons/bag-tick.svg" alt="Bag">
                  <p class="detail_title ms-2 mt-3" style="font-size: 16px;">{{$t('Are available')}}</p>
                </div>
                <div class="d-flex show-detail_margin_top">
                  <p v-if="product_sum != 0" class="detail_title ms-2 mt-3" style="font-size: 16px;">{{product_sum}} {{$t('Sum')}}</p>
                  <p v-else class="detail_title ms-2 mt-3" style="font-size: 16px;">{{getOneProduct.sum}} {{$t('Sum')}}</p>
                </div>
              </div>
              <p class="detail_number">{{$t('Color')}}</p>
              <div class="d-flex show-detail_margin_bottom mb-2">
                <div v-if="!size_selected">
                  <button v-for="(character, j) in getOneProduct.characters" :key="j" :class="'detail_color ' + color_active[j]" :style="'background:'+character.color.code" @click="selectColor(j, character)"></button>
                </div>
                <div v-else>
                  <button v-for="(character__, m) in getOneProduct.characters" :key="m" :class="'detail_color ' + color_active[m]" :style="'background:'+character__.color.code" @click="selectColor(m, character__)"></button>
                </div>
              </div>
              <p class="detail_number mt-2">{{$t('Size')}}</p>
              <div class="row">
                <div class="text-align-start" v-if="!color_selected">
                  <button :class="'detail_size size_show '+selected_size[k]" v-for="(product_size, k) in getOneProduct.first_color_products" @click="selectSize(k, getOneProduct.first_color_products.length, product_size)" :key="k">{{product_size.size}}</button>
                </div>
                <div class="text-align-start" v-else>
                  <button :class="'detail_size size_show ' + selected_size[l]" v-for="(product_size, l) in character.products" :key="l" @click="selectSize(l, character.products.length, product_size)">{{ product_size.size }}</button>
                </div>
              </div>
              <br>
              <br>
              <div class="d-flex">
                <button class="detail_minus me-2" @click="minusFunc">−</button>
                <input class="detail_number-input" type="number" :value="product_count" id="input"/>
                <button class="detail_minus ms-2" @click="plusFunc">+</button>
              </div>
              <div class="d-flex mt-3">
                <button class="detail_buy" @click="toBasket()">{{$t('Add to cart')}}</button>
                <div id="activeDiv">
                  <button @click="toFavourite()" class="mt-2 ms-3">
                    <svg v-if="!is_favourite" style="cursor: pointer;" width="25" height="23" id="activeSvg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path id="activePath" d="M17.1582 4.14159C17.8915 4.96659 18.3332 6.04992 18.3332 7.24158C18.3332 13.0749 12.9332 16.5166 10.5165 17.3499C10.2332 17.4499 9.7665 17.4499 9.48317 17.3499C7.0665 16.5166 1.6665 13.0749 1.6665 7.24158C1.6665 4.66659 3.7415 2.58325 6.29984 2.58325C7.8165 2.58325 9.15817 3.31659 9.99984 4.44992C10.8415 3.31659 12.1915 2.58325 13.6998 2.58325" stroke="#8DC73F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg v-else style="cursor: pointer;" width="25" height="23" id="activeSvg" viewBox="0 0 20 20" fill="#8DC73F" xmlns="http://www.w3.org/2000/svg">
                      <path id="activePath" d="M17.1582 4.14159C17.8915 4.96659 18.3332 6.04992 18.3332 7.24158C18.3332 13.0749 12.9332 16.5166 10.5165 17.3499C10.2332 17.4499 9.7665 17.4499 9.48317 17.3499C7.0665 16.5166 1.6665 13.0749 1.6665 7.24158C1.6665 4.66659 3.7415 2.58325 6.29984 2.58325C7.8165 2.58325 9.15817 3.31659 9.99984 4.44992C10.8415 3.31659 12.1915 2.58325 13.6998 2.58325" stroke="#8DC73F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="container detail_container detail_comment mt-5" style="padding: 20px;">
            <h3 class="comment_title">{{$t('Product description')}}</h3>
            <p class="comment_description text-align-start" v-html="getOneProduct.description"></p>
          </div>
        </section>

        <section>
          <div class="container nowrap detail_container mt-5 pb-5">
            <h3 class="comment_title pt-4">{{$t('You might like it')}}</h3>
            <swiper-product></swiper-product>
          </div>
        </section>

        <section>
          <div class="container nowrap detail_container mt-5">
            <h3 class="comment_title pt-4">{{$t('Bestsellers')}}</h3>
            <swiper-best-products></swiper-best-products>
          </div>
        </section>
        <footer-view></footer-view>
      </div>
    </div>
</template>
<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
import router from "@/router";
export default {
  data(){
    return{
      name:'Elyor',
      product_count:0,
      color_active:['active'],
      selected_size:[''],
      selected_color:[''],
      selected_product:{},
      selected_products:[],
      max_product_count:10,
      character:{},
      color_selected:false,
      size_selected:false,
      character__:{},
      selected_product_size:'',
      selected_product_id:'',
      selected_product_color:{},
      favourites:[],
      is_favourite:false,
      router_id:router.currentRoute.value.params.id,
      product_sum:0,
      selected_image_index:0,
      isLoading:true
    }
  },
  computed:{
    ...mapState([
        'loginModal',
      'backgroundModal',
      'catologModal',
      'custModal',
    ]),
    ...mapGetters(['getOneProduct', 'getFavourites']),
  },
  methods:{
    ...mapMutations(['catologModalFunc', 'closeModal', 'openCustModal', 'toFavourites', 'getFavouritedProducts', 'loginModalFunc']),
    ...mapActions(['GETPRODUCTFUNC', 'GETPRODUCTSFUNC', 'GETBESTSELLER']),
    plusFunc(){
      if(this.product_count < this.max_product_count){
        this.product_count = this.product_count + 1
      }
    },
    getPreviousImage(){
      if(this.selected_image_index > 0){
        this.selected_image_index = this.selected_image_index - 1
      }else{
        this.selected_image_index = this.getOneProduct.images.length-1
      }
    },
    getNextImage(){
      if(this.selected_image_index < this.getOneProduct.images.length-1){
        this.selected_image_index = this.selected_image_index + 1
      }else{
        this.selected_image_index = 0
      }
    },
    showCurrentImage(index){
      this.selected_image_index = index
    },
    minusFunc(){
      if(this.product_count > 0){
        this.product_count = this.product_count - 1
      }
    },
    selectColor(j, character){
      for(let i=0; i<this.color_active.length; i++){
        if(this.color_active[i] == 'active'){
          this.color_active[i] = ''
        }
      }
      this.color_active[j] = 'active'
      this.product_sum = character.products[0].sum
      this.max_product_count = character.products[0].count
      for(let n=0; n<character.products.length; n++){
        if(this.selected_size[n] == 'selected_size'){
          this.selected_size[n] = ''
        }
      }
      this.selected_product_size = ''
      this.selected_product_id = ''
      this.selected_product_color = character.color
      this.character = character
      if(this.color_selected == false){
        this.color_selected = true
      }
      if(this.size_selected == true){
        this.size_selected = false
      }
    },
    selectSize(k, length, product){
      for(let n=0; n<length; n++){
        if(this.selected_size[n] == 'selected_size'){
          this.selected_size[n] = ''
        }
      }
      this.selected_size[k] = 'selected_size'
      this.selected_product_size = product.size
      this.selected_product_id = product.id
      this.product_sum = product.sum
      if(this.size_selected == false){
        this.size_selected = true
      }
      this.product_count = 0
      this.max_product_count = product.count
    },
    toBasket() {
      if(this.selected_product_id != '' && this.selected_product_size != '' && this.selected_product_color.length != 0 && this.product_count > 0){
        this.selected_product.id = this.getOneProduct.id
        this.selected_product.name = this.getOneProduct.name
        this.selected_product.subcategory = this.getOneProduct.subcategory
        this.selected_product.category = this.getOneProduct.category
        this.selected_product.sum = this.getOneProduct.sum
        this.selected_product.company = this.getOneProduct.company
        this.selected_product.count = this.product_count
        this.selected_product.images = this.getOneProduct.images[0]
        if (this.selected_products.length == 0) {
          this.selected_products = [this.selected_product]
        } else {
          this.selected_products.push(this.selected_product)
        }
        if(localStorage.getItem('selected_product')){
          localStorage.removeItem('selected_product')
        }
        localStorage.setItem('selected_product', JSON.stringify(this.selected_products))
        this.$toast.success(this.$t('Product added to basket !'));
      }else if(this.selected_product_id == '' || this.selected_product_size == ''){
        this.$toast.warning(this.$t('Select product size !'));
      }else if(this.selected_product_color.length == 0){
        this.$toast.warning(this.$t('Select product color !'));
      }else if(this.product_count == 0){
        this.$toast.warning(this.$t('Select the number of products !'));
      }
    },
    takeFavouriteProducts(){
      if(localStorage.getItem('favourite_product')){
        this.favourites = JSON.parse(localStorage.getItem('favourite_product'))
      }
    },
    takeSelectedProducts(){
      if(localStorage.getItem('selected_product')){
        this.selected_products = JSON.parse(localStorage.getItem('selected_product'))
      }
    },
    getSelectedProduct(){
      this.takeFavouriteProducts()
      this.takeSelectedProducts()
      for(let j=0; j<this.favourites.length; j++){
        if(this.router_id == this.favourites[j].id){
          this.is_favourite = true
        }
      }
    },
    toFavourite() {
      this.takeFavouriteProducts()
      this.toFavourites()
      if(parseInt(this.favourites.length) < parseInt(this.getFavourites.length)){
        this.$toast.success(this.$t('Product added to favourites !'));
        this.is_favourite = true
      }else{
        this.$toast.warning(this.$t('Product deleted from favourites !'));
        this.is_favourite = false
      }
    },
  },
  mounted(){
    this.GETPRODUCTFUNC()
    this.GETPRODUCTSFUNC()
    this.GETBESTSELLER()
    this.getSelectedProduct()
    this.getFavouritedProducts()
    window.scrollTo({ top: 200, left: 0, behavior: 'smooth' })
    setTimeout(() => {
      this.isLoading = false; // Set to false when the loading is complete
    }, 200);
  }
}
</script>
<style>
.carusel_modal{
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top:44px;
}
.background_transparent{
  position: absolute;
  min-height: 100%;
  max-height: auto;
  width: 100%;
  background-color: rgb(0,0,0,0.4);
}
.carusel_modal_content{
  background-color: white;
  z-index: 6;
  border-radius: 0.5rem;
  min-height: 600px;
  width:500px;
  padding-right: 1rem;
  padding-left: 1rem;
}
.swiper_main_image>img{
  border-radius:40px;
  border:solid 2px green;
  height: 394px;
  width: 394px;
}
#custCarousel{
  padding: 1rem;
}
.show-detail_big_image{
  max-width: 600px;
  height: 600px;
  border-radius: 14px;
  border: solid 2px green;
}
.show-detail_mini_image{
  max-width: 100px;
  height: 100px;
  border-radius: 8px;
}
.show-detail_mini_button{
  max-width: 108px;
  height: 108px;
  border-radius: 8px;
  border: solid 1px green;
  background-color: white;
}
.detail_color{
  border: solid 1px silver;
}
.selected_size{
  background-color: #8DC73F;
  color:white;
}
.size_show{
  margin-bottom: 14px;
}
#activeSvg{
  transition: 0.4s;
}
#activeSvg:hover {
  transform: scale(1.1);
}
#activeDiv button{
  background-color: white;
}
.text-align-start{
  text-align: start;
}

.detail_comment:hover, .comment_description:hover{
  color:black;
}
.show-detail_arrow_button{
  background-color: white;
  width: 27px;
  height: 27px;
  border-radius: 50%;
}
.show-detail_arrow_button img{
  margin-left: -0.5rem;
}
</style>