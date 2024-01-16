<template>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css">
  <background-transparent-view :closeModal="closeModal" :backgroundModal="backgroundModal"></background-transparent-view>
  <div v-if="isLoading" class="d-flex align-items-center" style="height: 100%">
    <div class="loading-spinner"></div>
  </div>
  <div v-else class="container">
    <div class="carusel_modal" v-if="createAddressModal" style="height: 160%">
      <div class="d-flex align-items-center">
        <div class="carusel_modal_content">
          <div id="custCarousel" class="carousel slide">
            <div class="carousel-inner">
              <select class="form-control" v-model="region" @change="selectRegion">
                <option :value="{}" disabled selected>{{$t('Select region')}}</option>
                <option v-for="(region_, index) in all_cities" :key="index" :value="region_">{{region_.region}}</option>
              </select>
              <select class="form-control mt-3" v-if="region.cities" v-model="city" @change="selectCity">
                <option :value="{}" disabled selected>{{$t('Select city')}}</option>
                <option v-for="(city_, index) in region.cities" :key="index" :value="city_">{{city_.name}}</option>
              </select>
              <input type="text" class="form-control mt-3" v-if="city_selected" v-model="address" :placeholder="$t('Delivery address')">
            </div>
            <div>
              <span>{{$t('Lat')}}:{{LatLon[0]}}</span>&nbsp;&nbsp;
              <span>{{$t('Lng')}}:{{LatLon[1]}}</span>
            </div>
            <div class="LeafletMap">
                <l-map
                    v-model="zoom"
                    v-model:zoom="zoom"
                    :center="LatLon"
                    @click="handleMapClick"
                >
                  <l-tile-layer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  ></l-tile-layer>
                  <l-marker :lat-lng="LatLon" draggable @moveend="log('moveend')">
                    <l-popup>
                      {{city.name}}
                    </l-popup>
                  </l-marker>
                </l-map>
            </div>
            <div class="d-flex justify-content-end mt-2"><button class="submit-button" @click="saveAddress">{{$t('Save')}}</button></div>
          </div>
        </div>
      </div>
    </div>
    <div class="carusel_modal" v-if="editAddressModal" style="height: 160%">
      <div class="d-flex align-items-center" v-if="getAddressEdit">
        <div class="carusel_modal_content">
          <div id="custCarousel" class="carousel slide">
            <div class="carousel-inner">
              <select class="form-control" v-model="getAddressEdit.region" @change="editSelectRegion">
                <option :value="{}" disabled :selected="getAddressEdit.region == undefined">{{$t('Select region')}}</option>
                <option v-for="(region_, index) in all_cities" :key="index" :value="region_" :selected="getAddressEdit.region.id == region_.region.id">{{region_.region}}</option>
              </select>
              <select class="form-control mt-3" v-if="getAddressEdit.region.cities" v-model="getAddressEdit.city" @change="editSelectCity">
                <option :value="{}" disabled :selected="getAddressEdit.city == undefined">{{$t('Select city')}}</option>
                <option v-for="(city_, index) in edit_region.cities" :key="index" :value="city_">{{city_.name}}</option>
              </select>
              <input type="text" class="form-control mt-3" v-if="edit_city_selected" v-model="edit_address" :placeholder="$t('Delivery address')">
            </div>
            <div>
              <span>{{$t('Lat')}}:{{editLatLon[0]}}</span>&nbsp;&nbsp;
              <span>{{$t('Lng')}}:{{editLatLon[1]}}</span>
            </div>
            <div class="LeafletMap">
              <l-map
                  v-model="edit_zoom"
                  v-model:zoom="edit_zoom"
                  :center="editLatLon"
                  @click="editHandleMapClick"
              >
                <l-tile-layer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ></l-tile-layer>
                <l-marker :lat-lng="editLatLon" draggable @moveend="log('moveend')">
                  <l-popup>
                    {{edit_city.name}}
                  </l-popup>
                </l-marker>
              </l-map>
            </div>
            <div class="d-flex justify-content-end mt-2"><button class="submit-button" @click="updateAddress">{{$t('Update')}}</button></div>
          </div>
        </div>
      </div>
    </div>
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
            <div class="seen_product-card mt-4">
              <div class="mt-3 ms-4">
                <div class="d-flex justify-content-between">
                  <h3 class="hello_profile">{{$t('Delivery address and pick-up points')}}</h3>
                  <button class="button_location-green" @click="addLocation"><img src="../assets/uploads/icons/location-add.svg" alt="Location"></button>
                </div>
                <div v-if="my_addresses.length > 0">
                  <div v-for="(my_address, index) in my_addresses" :key="index">
                    <div class="row ms-4 mt-4">
                      <div class="col-8">
                        <p class="addres_title ms-4 mt-3">{{$t('Адрес доставки:')}} <b>{{my_address.region.name+' '+my_address.city.name+' '+my_address.name }}</b></p>
                      </div>
                      <div class="col-4">
                        <button class="button_location-blue" @click="editLocation(my_address)"><img src="../assets/uploads/icons/message-edit.svg" alt="Edit"></button>
                        <button class="button_location-blue" @click="showMapFunc(index)" v-if="showed_map[index]"><i class="fas fa-eye"></i></button><button v-else class="button_location-blue" @click="showMapFunc(index)"><i class="fas fa-eye-slash"></i></button>
                        <button class="button_location-red" @click="destroyLocation"><img src="../assets/uploads/icons/trashWhite.svg" alt="Delete"></button>
                      </div>
                    </div>
                    <div :class="'mt-4 profile_address_map '+map_display[index]" :id="'yandex_map_'+(index+1)"></div>
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
import {mapMutations, mapState, mapGetters, mapActions} from "vuex"
import axios from "axios";

import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  computed:{
    ...mapState(["backgroundModal", "catologModal", "loginModal", "createAddressModal", "editAddressModal"]),
    ...mapGetters(["getUser", "getAddressEdit"])
  },
  components:{
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data(){
    return{
      name:"Elyor",
      current_menu: {page:'profile_address'},
      isLoading:true,
      all_cities:{},
      region:{},
      city:{},
      zoom: 7,
      LatLon: [41.311081, 69.240562],
      city_id:null,
      city_selected:false,
      address:'',
      showed_map:[true, true, true, true],
      map: null,
      map_display:['d-none', 'd-none', 'd-none', 'd-none'],
      my_addresses:[]
    }
  },
  methods:{
    ...mapMutations(["catologModalFunc", "closeModal", "loginModalFunc", "addLocation", "editLocation"]),
    ...mapActions(['GETUSER']),
    async getCities(){
      try{
        const get_districts = await axios.get('http://eccommerce/api/get-districts')
        this.all_cities = get_districts.data.data
        console.log(this.all_cities)
      }catch (e) {
        console.log(e)
      }
    },
    showMapFunc(index){
      if(this.showed_map[index] == true){
        for(let i=0; i<4; i++){
          if(i != index){
            this.showed_map[i] = true
            this.map_display[i] = "d-none"
          }else{
            this.showed_map[i] = false
            this.map_display[i] = ""
          }
        }
      }else{
        this.showed_map[index] = true
        this.map_display[index] = "d-none"
      }
    },
    initMap() {
      if(this.my_addresses.length > 0){
        for (let i=0; i<this.my_addresses.length; i++){
          this.yandexFunc('yandex_map_'+(i+1), [this.my_addresses[i].latitude, this.my_addresses[i].longitude])
        }
      }
    },
    yandexFunc(id, LatLon){
      let map = new window.ymaps.Map(id, {
        center: LatLon, // Initial map center coordinates
        zoom: 15, // Initial zoom level
      });
      let placemark = new window.ymaps.Placemark(LatLon, {}, {})
      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      // map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
      map.geoObjects.add(placemark);
    },
    handleMapClick(event){
      this.LatLon = [event.latlng.lat, event.latlng.lng]
    },
    editHandleMapClick(event){
      this.editLatLon = [event.latlng.lat, event.latlng.lng]
    },
    editSelectCity(){
      this.edit_zoom = 15
      this.editLatLon = [this.edit_city.lat, this.edit_city.long]
      this.edit_city_id = this.edit_city.id
      this.edit_city_selected = true
    },
    selectCity(){
      this.zoom = 15
      this.LatLon = [this.city.lat, this.city.long]
      this.city_id = this.city.id
      this.city_selected = true
    },
    editSelectRegion(){
      this.edit_city = {}
      this.edit_zoom = 7
      this.editLatLon = [this.edit_region.lat, this.edit_region.long]
      this.edit_city_selected = false
    },
    selectRegion(){
      this.city = {}
      this.zoom = 7
      this.LatLon = [this.region.lat, this.region.long]
      this.city_selected = false
    },
    async saveAddress(){
      try{
        const set_address = await axios.post('http://eccommerce/api/set-address', {
          'name':this.address,
          'city_id':this.city_id,
          'latitude':this.city.lat,
          'longitude':this.city.long,
          'user_id':this.getUser.id
        },{
          headers:{
            'Content-type':'multipart/form-data',
            'Authorization':`Bearer ${localStorage.getItem('user_token')}`
          }
        })
        if(set_address.data.message == "Number of your addresses has reached the limit"){
          this.$toast.warning(this.$t('Number of your addresses has reached the limit'))
        }else if(set_address.data.status == true){
          this.$toast.success(this.$t('Successfully added your address'));
          setTimeout(()=>{
            location.reload()
          }, 200)
        }else{
          this.$toast.success(this.$t('City or Region not found'));
        }
      }catch (e) {
        console.log(e)
      }
    },
    async updateAddress(){
      try{
        const set_address = await axios.post('http://eccommerce/api/edit-address', {
          'name':this.edit_address,
          'city_id':this.edit_city_id,
          'latitude':this.edit_city.lat,
          'longitude':this.edit_city.long,
          'user_id':this.getUser.id
        },{
          headers:{
            'Content-type':'multipart/form-data',
            'Authorization':`Bearer ${localStorage.getItem('user_token')}`
          }
        })
        if(set_address.data.status == true){
          this.$toast.success(this.$t('Successfully updated'));
        }else{
          this.$toast.success(this.$t('City or Region not found'));
        }
        console.log(set_address)
      }catch (e) {
        console.log(e)
      }
    },
    async getAddress(){
      try{
        const addresses = await axios.get('http://eccommerce/api/get-address', {
          headers:{
            'Content-type':'Application/json',
            'Authorization':`Bearer ${localStorage.getItem('user_token')}`
          }
        })
        this.my_addresses = addresses.data.data
      }catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.getAddress()
    setTimeout(() => {
      this.isLoading = false; // Set to false when the loading is complete
    }, 200);
    this.getCities()
    this.GETUSER()
    setTimeout( ()=> {
      window.ymaps.ready(this.initMap)
    }, 1444);
  }
}
</script>
<style>
.LeafletMap{
  height: 304px;
  width: auto;
}
.fa-eye, .fa-eye-slash{
  color:white;
}
.button_location-blue, .button_location-green, .button_location-red{
  transition:0.2s
}
.button_location-blue:hover, .button_location-green:hover, .button_location-red:hover{
  transform:scale(1.08);
}
.profile_address_map{
  width: auto;
  height: 344px;
}
</style>