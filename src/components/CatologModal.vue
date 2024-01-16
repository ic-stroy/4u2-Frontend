<template>
  <div class="d-flex">
    <div>
      <ul style="border-right: 1px solid #8DC73F;">
        <li v-for="(category, index) in categories" v-bind:key="index" class="dropdown-item"
            @mouseenter="catologMenuFunc(category)" style="margin-left: -15px; width: 350px;" @click="closeModal">
          <router-link :to="'/products/'+index" class="d-flex hover_arrow mt-2 justify-content-between dropdown-item catalog-menu-hover">
            <div class="d-flex">
              <img class="me-3" :src="require('../assets/uploads/icons/'+category.name.split(' ')[0]+'.svg')" alt="">
              <a class="catalog_text-dropdown" href="#">{{category.name}}</a>
            </div>
            <div>
              <img style="display: none;" class="me-3 none_sun" src="../assets/uploads/icons/arrow-right-drop.svg" alt="clothes">
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="catalog_item-mobile">
      <ul>
        <li v-for="(subcategory, index) in subcategories" v-bind:key="index" class="dropdown-item"
            @mouseenter="catologSubMenuFunc(subcategory)" style="margin-left: -15px; width: 250px;" @click="closeModal">
          <router-link :to="'/sub-category-products/'+subcategory.id" class="d-flex hover_arrow mt-2 justify-content-between dropdown-item catalog-menu-hover">
            <div class="d-flex">
              <a class="catalog_text-dropdown" href="#">{{subcategory.name}}</a>
            </div>
            <div>
              <img style="display: none;" class="me-3 none_sun" src="../assets/uploads/icons/arrow-right-drop.svg" alt="clothes">
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="catalog_item-mobile">
      <ul>
        <li v-for="(subsubcategory, index) in subsubcategories" v-bind:key="index" class="dropdown-item" style="margin-left: -15px; width: 550px;" @click="closeModal">
          <router-link :to="'/sub-category-products/'+subsubcategory.id" class="d-flex hover_arrow mt-2 justify-content-between dropdown-item catalog-menu-hover">
            <div class="d-flex">
              <a class="catalog_text-dropdown" href="#">{{subsubcategory.name}}</a>
            </div>
            <div>
              <img style="display: none;" class="me-3 none_sun" src="../assets/uploads/icons/arrow-right-drop.svg" alt="clothes">
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
 import axios from "axios";
 import {mapMutations} from "vuex";

 export default {
   name:'catolog-modal',
   data(){
      return {
        categories:[],
        subcategories:[],
        subsubcategories:[],
      }
   },
   methods:{
      ...mapMutations(['closeModal']),
      catalogMenu(item, index){
        item.addEventListener('click', function () {
          console.log([item, index])
        })
      },
     async getCatgories(){
        try{
          const response = await axios.get('http://eccommerce/api/categories')
          this.categories = response.data
          this.subcategories = this.categories[0].sub_category
          this.subsubcategories = this.categories[0].sub_category[0].sub_sub_category
        }catch (e) {
          console.log(e)
        }
     },
     catologMenuFunc(category){
       this.subcategories = []
        this.subcategories = category.sub_category
       this.subsubcategories = []
     },
     catologSubMenuFunc(subcategory){
       this.subsubcategories = []
        this.subsubcategories = subcategory.sub_sub_category
     },
     menuHoverFunc(){
       // let catalog_menu = document.getElementsByClassName('catalog-menu-hover')
       // catalog_menu.map(this.catalogMenu)
     }
   },
   mounted() {
      this.menuHoverFunc()
      this.getCatgories()
   }
 }
</script>
<style>
.hover_arrow:hover div a{
 color: #94CA4B;
}
.hover_arrow:hover div img{
 display:block !important;
}
</style>