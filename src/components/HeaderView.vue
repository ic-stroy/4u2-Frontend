<template>
  <div>
    <header class="padding_3rem">
      <div class="container">
        <div class="header_div">
          <div class="d-flex align-items-center">
            <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img class="header_logo" src="../assets/uploads/images/logo.svg" alt="">
            </router-link>
            <ul style="list-style-type: none; display: flex;">
              <li class="header_list mt-2 header_hamburger" style="display: none;">
                <router-link to="/" class="nav-link px-2 text-secondary">
                  <img src="../assets/uploads/icons/hamburger.svg" alt="hamburger">
                </router-link>
              </li>
              <li class="header_list mt-2">
                <router-link to="/" class="nav-link px-2 text-secondary">{{$t('Recommendations')}}</router-link>
              </li>
              <li class="none_header-datail mt-2">
                <router-link to="/" class="nav-link px-2 text-secondary">{{$t('For clients')}}</router-link>
              </li>
              <li class="header_list mt-2">
                <router-link to="/" class="nav-link px-2 text-secondary">{{$t('Contacts')}}</router-link>
              </li>
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <div class="dropdown">
              <a class="btn header_lang" id="language_text" style="background-color: #E6E6E6;" @click="selectLanguage">
                {{language.toUpperCase()}}
              </a>
              <ul class="language-menu" v-if="modalLanguage">
                <li id="language_ru" style="display: flex; justify-content: center; align-items: center;">
                  <a class="dropdown-item" style="width: 40px; height: 34px; border-radius: 5px; background: #E6E6E6; display: flex; justify-content: center; align-items: center;" @click="chageRu">
                    <img id="image_ru" src="../assets/uploads/icons/Ru.svg" alt="Ru">
                  </a>
                </li>
                <li id="language_uzb" style="display: flex; justify-content: center; align-items: center;" class="mt-2">
                  <a class="dropdown-item" style="width: 40px; height: 34px; border-radius: 5px; background: #E6E6E6; display: flex; justify-content: center; align-items: center;"  @click="chageUz">
                    <img id="image_uzb" src="../assets/uploads/icons/Uzb.svg" alt="Uz">
                  </a>
                </li>
                <li id="language_eng" style="display: flex; justify-content: center; align-items: center;" class="mt-2">
                  <a class="dropdown-item" style="width: 40px; height: 34px; border-radius: 5px; background: #E6E6E6; display: flex; justify-content: center; align-items: center;"  @click="chageEn">
                    <img id="image_eng" src="../assets/uploads/icons/Eng.svg" alt="En">
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-end flex_mobile">
              <button type="button" class="btn btn-outline-light me-2 border border-0"><img class="location_btn" src="../assets/uploads/icons/location.svg" alt="location"></button>
              <button type="button" class="btn location_name btn-outline-light border border-0 color-danger" style="color: black;">Ташкент</button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="mt-4">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <div class="dropdown">
            <button class="catalog_btn btn" type="button" @click="catologModalFunc">
              <img class="catalog_img" src="../assets/uploads/icons/category.svg" alt="catalog">
              {{$t('Catalog')}}
            </button>
            <div class="catolog-modal" v-if="catologModal">
              <catolog-modal></catolog-modal>
            </div>
          </div>
          <label class="catalog_search">
            <img class="search_icon-section" src="../assets/uploads/icons/search-normal.svg" alt="search">
            <input type="text" class="border border-0 catalog_search-input" :placeholder="$t('Shorts')">
          </label>
        </div>

        <div style="position: absolute; width: 90%">
          <div class="sign_in">
            <div class="sign_in_modal" v-if="loginModal">
              <div class="sign_in_container" v-if="!verifyContent">
                <div class="sign_in_modal_content" v-if="loginOrRegister" id="login_or_register">
                  <div>
                    <div class="sign_in_modal_header">
                      <p><b>{{$t('Registration')}}</b></p>
                      <span>{{$t('Register if you are here for the first time')}}</span>
                    </div>
                    <div class="sign_in_modal_content">
                      <img src="../assets/images/login_or_register.png" alt="">
                    </div>
                  </div>
                  <div>
                    <div>
                      <button @click="registerContentFunc" class="button_full_width btn mt-2 btn-active">{{$t('Register')}}</button>
                    </div>
                    <div>
                      <button @click="loginContentFunc" class="button_full_width btn mt-2 btn-disactive">{{$t('Login to existing account')}}</button>
                    </div>
                    <div class="d-flex sign_in_modal_body justify-content-around mt-2">
                      <!--                    <div>-->
                      <!--                      <GoogleLogin id="login_google_content_id" :callback="callback"/>-->
                      <!--                    </div>-->
                    </div>
                  </div>
                </div>
                <div class="sign_in_modal_content" v-if="loginContent" id="login">
                  <div>
                    <div class="sign_in_modal_header">
                      <p><b>{{$t('Authorization')}}</b></p>
                      <span>{{$t('Enter your details')}}</span>
                    </div>
                    <div class="sign_in_modal_body">
                      <div class="mt-3">
                        <div class="d-flex justify-content-start">
                          <label for="login_phone_number"><b>{{$t('Phone number')}}</b></label>
                        </div>
                        <div class="d-flex justify-content-center">
                          <input style="outline: none" type="text" name="login_phone_number" id="login_phone_number" required>
                        </div>
                      </div>
                      <div class="mt-3">
                        <div class="d-flex justify-content-start">
                          <label for="login_password"><b>{{$t('Password')}}</b></label>
                        </div>
                        <div class="d-flex">
                          <div>
                            <input :type="login_password_type" name="login_password" id="login_password" required>
                            <button v-if="login_password_eye" class="header_password_eye" @click="loginPasswordShow"><i class="fas fa-eye"></i></button>
                            <button v-else class="header_password_eye" @click="loginPasswordShow"><i class="fas fa-eye-slash"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button @click="SubmitLoginFunc" class="button_full_width mt-4 submit_button">{{$t('Submit')}}</button>
                    </div>
                    <div>
                      <button @click="registerContentFunc" class="button_full_width btn mt-2 btn-disactive">{{$t('Register')}}</button>
                    </div>
                  </div>
                </div>
                <div class="sign_in_modal_content" v-if="registerContent" id="sign_in">
                  <div>
                    <div class="sign_in_modal_header">
                      <p><b>{{$t('Registration')}}</b></p>
                      <span>{{$t('Enter your phone number')}}</span>
                    </div>
                    <div class="sign_in_modal_body">
                      <div class="mt-3">
                        <div class="d-flex justify-content-start">
                          <label for="register_phone_number"><b>{{$t('Phone number')}}</b></label>
                        </div>
                        <div class="d-flex justify-content-center">
                          <input type="number" name="register_phone_number" id="register_phone_number" required>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button @click="SubmitSignInFunc" class="button_full_width mt-4 submit_button">{{$t('Submit')}}</button>
                    </div>
                    <div>
                      <button @click="loginContentFunc" class="button_full_width btn mt-2 btn-disactive">{{$t('Login to existing account')}}</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sign_in_modal_content" v-else-if="!registerContentWithInfo" id="verify_content">
                <div>
                  <div class="sign_in_modal_header">
                    <p><b>{{$t('Enter confirmation code')}}</b></p>
                    <span>{{$t('We have sent a 6-digit SMS security code to your number')}}</span>
                  </div>
                  <div class="sign_in_modal_body">
                    <div class="mt-3">
                      <div class="d-flex justify-content-start">
                        <label for="verify_code"><b>{{$t('Confirmation code')}}</b></label>
                      </div>
                      <div class="d-flex justify-content-center">
                        <input type="number" name="register_verify_code" id="verify_code" required>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button @click="SubmitVerifyFunc" class="button_full_width mt-4 submit_button">{{$t('Submit')}}</button>
                </div>
              </div>
              <div class="sign_in_modal_content" v-else id="register_content">
                <div class="sign_in_modal_header">
                  <p><b>{{$t('Register')}}</b></p>
                  <span>{{$t('Enter your details')}}</span>
                </div>
                <div class="sign_in_modal_body">
                  <div class="mt-3">
                    <input type="hidden" name="register_content_phone_number" id="register_content_phone_number" required>
                  </div>
                  <div class="mt-3">
                    <div class="d-flex justify-content-start">
                      <label for="user_name"><b>{{$t('Name')}}</b></label>
                    </div>
                    <div class="d-flex justify-content-center">
                      <input type="text" name="user_name" id="user_name" required>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="d-flex justify-content-start">
                      <label for="password"><b>{{$t('Password')}}</b></label>
                    </div>
                    <div class="d-flex justify-content-center">
                      <input :type="register_password_type" name="register_password" id="password" required><button v-if="register_password_eye" class="header_password_eye" @click="registerPasswordShow"><i class="fas fa-eye"></i></button><button v-else class="header_password_eye" @click="registerPasswordShow"><i class="fas fa-eye-slash"></i></button>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="d-flex justify-content-start">
                      <label for="password_confirmation"><b>{{$t('Password confirmation')}}</b></label>
                    </div>
                    <div class="d-flex justify-content-center">
                      <input :type="password_confirmation_type" name="register_password_confirmation" id="password_confirmation" required><button v-if="password_confirmation_eye" class="header_password_eye" @click="passwordConfirmationShow"><i class="fas fa-eye"></i></button><button v-else class="header_password_eye" @click="passwordConfirmationShow"><i class="fas fa-eye-slash"></i></button>
                    </div>
                  </div>
                </div>
                <div>
                  <button @click="SubmitRegisterFunc" class="button_full_width mt-4 submit_button">{{$t('Register')}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex">
          <router-link to="/favourites" class="me-3 catalog_adaptive-like" style="background-color: transparent; border: none; margin-top: 12px;">
            <img class="catalog_heart-image" src="../assets/uploads/icons/heart.svg" alt="heart">
            <b v-if="favourite_products != undefined && favourite_products != null && favourite_products != ''" class="basket_products_count">+{{favourite_products}}</b>
            <b v-else-if="favourite_products == 0" class="basket_products_count"></b>
            <b v-else-if="favouriteProducts != undefined && favouriteProducts != null && favouriteProducts != ''" class="basket_products_count">+{{favouriteProducts}}</b>
          </router-link>
          <router-link to="/basket" class="me-3 catalog_adaptive-like" style="background-color: transparent; border: none; margin-top: 12px;">
            <img class="catalog_heart-image" src="../assets/uploads/icons/shopping-cart.svg" alt="shopping-cart">
            <b v-if="selected_products != undefined && selected_products != null && selected_products != ''" class="basket_products_count">+{{selected_products}}</b>
            <b v-else-if="selected_products == 0" class="basket_products_count"></b>
            <b v-else-if="selectedProducts != undefined && selectedProducts != null && selectedProducts != ''" class="basket_products_count">+{{selectedProducts}}</b>
          </router-link>
          <div class="d-flex" v-if="isAuth">
            <p v-if="getUser" class="mt-3 me-3 catalog_adaptive-name">{{getUser.first_name}}</p>
            <router-link to="/profile" class="catalog_profile_image" style="background-color: transparent; border: none; margin-top: 10px;">
              <div v-if="getUser.avatar != 'null' && getUser.avatar != null && getUser.avatar != undefined && getUser.avatar != 'undefined'">
                <img  class="user_avatar_link" :src="getUser.avatar" alt="user">
              </div>
              <div v-else class="catalog_profile_image authentificate_button_no">
                <i class="fa fa-user"></i>
              </div>
            </router-link>
          </div>
          <div class="d-flex" v-else>
            <button class="authentificate_button catalog_profile_image" @click="loginModalFunc" style="background-color: transparent; border: none; margin-top: 10px;"><i class="fa fa-user"></i></button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {defaultLocale} from "@/i18n";
import axios from "axios"
import {decodeCredential} from 'vue3-google-login'
import {mapActions, mapGetters} from "vuex";

export default {
  name:'header-view',
  props:{
    catologModalFunc:{
      type:Function,
      required: true
    },
    closeModal:{
      type:Function
    },
    loginModalFunc:{
      type:Function,
      required:true
    },
    catologModal:{
      required: true
    },
    loginModal:{
      required: true
    },
    selected_products:{},
    favourite_products:{},
  },
  computed:{
    ...mapGetters(['getUser', 'isAuth']),
  },
  data(){
    return{
      modalLanguage:false,
      selectedProducts:'',
      favouriteProducts:'',
      language:localStorage.getItem('lang')||defaultLocale,
      user_token:localStorage.getItem('user_token'),
      loginOrRegister:true,
      loginContent:false,
      registerContent:false,
      registerContentWithInfo:false,
      verify_modal:false,
      verifyContent:false,
      verify_phone_number:localStorage.getItem('verify_phone_number'),
      token:localStorage.getItem('token'),
      callback: (response) => {
        let user = decodeCredential(response.credential)
        this.googleLoginOrRegister(user.given_name, user.family_name, user.email, user.exp, user.picture)
      },
      register_password_eye:true,
      password_confirmation_eye:true,
      login_password_eye:true,
      register_password_type:'password',
      password_confirmation_type:'password',
      login_password_type:'password',
    }
  },
  methods:{
    ...mapActions(['GETUSER']),
    selectLanguage(){
      if(this.modalLanguage == false){
        this.modalLanguage = true
      }else{
        this.modalLanguage = false
      }
    },
    loginPasswordShow(){
      if(this.login_password_eye == true){
        this.login_password_type = 'text'
        this.login_password_eye = false
      }else{
        this.login_password_type = 'password'
        this.login_password_eye = true
      }
    },
    registerPasswordShow(){
      if(this.register_password_eye == true){
        this.register_password_type = 'text'
        this.register_password_eye = false
      }else{
        this.register_password_type = 'password'
        this.register_password_eye = true
      }
    },
    passwordConfirmationShow(){
      if(this.password_confirmation_eye == true){
        this.password_confirmation_type = 'text'
        this.password_confirmation_eye = false
      }else{
        this.password_confirmation_type = 'password'
        this.password_confirmation_eye = true
      }
    },
    async googleLoginOrRegister(first_name, last_name, email, password, picture){
      try{
        const response = await axios.post('http://eccommerce/api/google-login-or-register', {
          'first_name':first_name,
          'last_name':last_name,
          'email':email,
          'password':password,
          'picture':picture
        })
        if(response.data.status == true){
          if(response.data.data.token != null && response.data.data.token != undefined){
            this.user_token = response.data.data.token
            localStorage.setItem('user_token', response.data.data.token)
          }
          if(response.data.is_registered == 0){
            this.$toast.success(this.$t('You are Logged in'));
          }else{
            this.$toast.success(this.$t('You are registered'));
          }
          location.reload();
        }
      }catch (e) {
        console.log(e)
      }
    },
    async SubmitSignInFunc(){
      if(localStorage.getItem('verify_phone_number') != undefined && localStorage.getItem('verify_phone_number') != null){
        localStorage.removeItem('verify_phone_number')
        this.verify_phone_number = null
      }
      let register_phone_number = document.getElementById('register_phone_number')
      // try{
      //   const response = await axios.post('http://eccommerce/api/phone-register', {
      //     'phone':register_phone_number.value
      //   })
      //   if(response.data.status == true){
      //     localStorage.setItem('verify_phone_number', register_phone_number.value)
      //     this.verify_phone_number = register_phone_number.value
      //     this.verifyContent = true
      //     this.$toast.success(this.$t('Sms code was sent to your phone'));
      //   }
      // }catch (e) {
      //   this.$toast.warning(this.$t('Resend sms code'));
      //   console.log(e)
      // }
      localStorage.setItem('verify_phone_number', register_phone_number.value)
      this.verify_phone_number = register_phone_number.value
      this.verifyContent = true
    },
    async SubmitVerifyFunc(){
      if(localStorage.getItem('user_token') != undefined && localStorage.getItem('user_token') != null){
        localStorage.removeItem('user_token')
        this.user_token = null
      }
      let verify_code = document.getElementById('verify_code')
      try{
        const response = await axios.post('http://eccommerce/api/phone-verify', {
          'phone_number':this.verify_phone_number,
          'verify_code':verify_code.value
        })
        if(response.data.status == true){
          this.token = response.data.data.token
          localStorage.setItem('token', response.data.data.token)
          if(this.registerContentWithInfo == false){
            this.registerContentWithInfo = true
          }
           this.$toast.success(this.$t('Successfully verified'));
        }
      }catch (e) {
        console.log(e)
      }
    },
    async SubmitRegisterFunc(){
      let user_name = document.getElementById('user_name')
      let password = document.getElementById('password')
      let password_confirmation = document.getElementById('password_confirmation')
      if(password.value == password_confirmation.value){
        try{
          const response = await axios.post('http://eccommerce/api/register', {
            "name": user_name.value,
            "password": password.value,
            "password_confirmation": password_confirmation.value,
          },{
            headers: {
              "Authorization": `Bearer ${this.token}`,
              "Content-Type": "application/json"
            }
          });
          if(response.data.status == true){
            this.user_token = response.data.data.token
            localStorage.setItem('user_token', response.data.data.token)
            if(localStorage.getItem('token') != undefined && localStorage.getItem('token') != null){
              localStorage.removeItem('token')
            }
            this.loginContent = false
            this.$toast.success(this.$t('Successfully registered'));
            location.reload();
          }else{
            this.$toast.warning(this.$t('Registration failed. incorrect token'));
          }
        }catch (e) {
          this.$toast.warning(this.$t('Registration failed. incorrect token'));
          console.log(e)
        }
      }else{
        this.$toast.warning(this.$t('Your password confirmation is not the same'));
      }
    },
    async SubmitLoginFunc(){
      let login_phone_number = document.getElementById('login_phone_number')
      let login_password = document.getElementById('login_password')
      try{
        const response = await axios.post('http://eccommerce/api/login', {
          "email": login_phone_number.value,
          "password": login_password.value,
        });
        if(response.data.status == true){
          if(response.data.data.token != null && response.data.data.token != undefined){
            localStorage.setItem('user_token', response.data.data.token)
          }
          this.loginContent = false
          this.$toast.success(this.$t('Successfully logged in'));
          location.reload();
        }else{
          this.$toast.warning(this.$t('Authorization failed. email or password is incorrect'));
        }
      }catch (e) {
        this.$toast.warning(this.$t('Authorization failed. email or password is incorrect'));
        console.log(e)
      }
    },
    loginContentFunc(){
      if(this.loginContent == false){
        this.loginContent = true
      }
      if(this.loginOrRegister == true){
        this.loginOrRegister = false
      }
      if(this.registerContent == true){
        this.registerContent = false
      }
    },
    registerContentFunc(){
      if(this.registerContent == false){
        this.registerContent = true
      }
      if(this.loginOrRegister == true){
        this.loginOrRegister = false
      }
      if(this.loginContent == true){
        this.loginContent = false
      }
    },
    chageRu(){
      if(localStorage.getItem('lang')){
        localStorage.removeItem('lang')
      }
      localStorage.setItem('lang', 'ru')
      this.language = 'ru'
      if(this.modalLanguage == true){
        this.modalLanguage = false
      }
      this.$i18n.locale = 'ru'
    },
    chageUz(){
      if(localStorage.getItem('lang')){
        localStorage.removeItem('lang')
      }
      localStorage.setItem('lang', 'uz')
      this.language = 'uz'
      if(this.modalLanguage == true){
        this.modalLanguage = false
      }
      this.$i18n.locale = 'uz'
    },
    chageEn(){
      if(localStorage.getItem('lang')){
        localStorage.removeItem('lang')
      }
      localStorage.setItem('lang', 'en')
      this.language = 'en'
      if(this.modalLanguage == true){
        this.modalLanguage = false
      }
      this.$i18n.locale = 'en'
    },
    getSelectedProducts(){
      if(localStorage.getItem('selected_product')){
        this.selectedProducts = JSON.parse(localStorage.getItem('selected_product')).length
      }
    },
    getFavouriteProducts(){
      if(localStorage.getItem('favourite_product')){
        this.favouriteProducts = JSON.parse(localStorage.getItem('favourite_product')).length
      }
    }
  },
  mounted() {
    this.getSelectedProducts()
    this.getFavouriteProducts()
    this.GETUSER()
  }
}
</script>

<style>
@import "../assets/css/local/main.css";
@import "../assets/css/local/chat.css";
@import "../assets/css/bootstrap/bootstrap.css";
@import "../assets/splide/css/splide.min.css";

.catolog-modal{
  padding:20px;
  position: absolute;
  inset: 0px auto auto 0px;
  margin: 0px;
  transform: translate(0px, 58px);
  background: #F8F8F8;
  border: 2px solid var(--global);
  border-radius: 0px 10px 10px 10px;
  z-index:2
}
.language-menu{
  width: 55px;
  padding: 6px;
  position: absolute;
  inset: 0px auto auto 0px;
  margin-top: 8px;
  transform: translate(0px, 40px);
  background: #F8F8F8;
  border: 2px solid #8dc73f;
  border-radius: 0px 10px 10px 10px;
  z-index: 2;
}
.language-menu li{
  width: 40px;
  height: 34px;
  border-radius: 5px;
  background: #E6E6E6;
  display: flex;
  justify-content: center;
  align-items: center;
}
.catalog_adaptive-like{
  text-decoration: none;
}
.basket_products_count{
  color:red;
  font-size: 14px;
}
.authentificate_button svg{
  color: lightgrey;
  height: 25px;
}
.authentificate_button_no svg{
  color: #8DC73F;
  height: 25px;
}

.sign_in{
  display: flex;
  justify-content: center;
}
.sign_in_modal{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  height: 494px;
  max-width: 300px;
  min-width: 274px;
  z-index: 4;
  background-color: white;
  position: absolute;
  border-radius: 8px;
  font-family: Inter;
}
.sign_in_container{
  height: 100%;
}
.sign_in_modal_header p{
  font-size: 24px;
  line-height:1;
}
.sign_in_modal_header span{
  opacity:0.5;
  font-size: 14px;
}
.sign_in_modal_content{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px;
}
.sign_in_modal a{
  height: 14px;
}
.sign_in_modal_body input{
  border-radius: 7px;
  padding: 4px;
  border: solid 1px lightgrey;
  margin-top: 4px;
  width:100%;
}
.sign_in_modal_body label{
  font-size: 14px;
}
.button_full_width{
  width:100%;
}
#F8F8F8{
  color:white;
  background-color: #F8F8F8;
 }
.submit_button, .btn-active{
  color:white;
  padding: 5px 0px;
  background-color:#8DC73F;
  border-radius: 6px;
  transition: 0.4s;
}
.submit_button:hover{
  background-color:#75A635;
  transform: scale(1.01);
}
.user_avatar_link{
  height: 27px;
  border-radius: 25%;
}
.btn-disactive{
  color:white;
  padding: 5px 0px;
  background-color:silver;
  border-radius: 6px;
  transition: 0.4s;
}
.header_password_eye{
  margin-left: -34px;
  transition:0.2s;
  z-index:2;
  color:black;
  background-color: transparent;
  border-radius: 44%;
}
.header_password_eye:hover{
  transform: scale(1.04);
}
</style>