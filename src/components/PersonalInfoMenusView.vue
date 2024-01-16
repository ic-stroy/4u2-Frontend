<template>
  <div class="me-4" v-if="getUser">
    <div :class="'profile_total mt-4 '+ profile_notif" style="padding: 25px">
      <router-link to="/profile" :class="'profile_info'+ profile+ ' d-flex'">
        <div v-if="getUser.avatar">
          <img style="height: 70px; border-radius:24%" class="profile_imaage" :src="getUser.avatar" alt="Profile Image">
        </div>
        <div v-else class="catalog_profile_image">
          <i class="ms-3 fa fa-user" style="font-size: 44px; color:silver"></i>
        </div>
        <h3 class="profile_name">{{getUser.first_name}}</h3>
      </router-link>
      <ul style="list-style-type: none;">
        <li class="mt-4" style="margin-left: -30px;">
          <div :class="profile_history">
            <router-link class="d-flex" to="/profile-history" style="text-decoration: none; color: #000000;">
              <img style="width: 50px; height: 50px;" class="profile_icon" src="../assets/uploads/icons/Frame214.svg" alt="icon">
              <p class="profile_link">{{$t('Purchase history')}}</p>
            </router-link>
          </div>
        </li>
        <li class="mt-4" style="margin-left: -30px;">
          <div :class="profile_coupon">
            <router-link class="d-flex" to="/profile-coupon" style="text-decoration: none; color: #000000;">
              <img style="width: 50px; height: 50px;" class="profile_icon" src="../assets/uploads/icons/Frame214(1).svg" alt="icon">
              <p class="profile_link">{{$t('Gift vouchers')}}</p>
            </router-link>
          </div>
        </li>

        <li class="mt-4" style="margin-left: -30px;">
          <div :class="profile_seen">
            <router-link class="d-flex" to="/profile-seen" style="text-decoration: none; color: #000000;">
              <img style="width: 50px; height: 50px;" class="profile_icon" src="../assets/uploads/icons/Frame214(2).svg" alt="icon">
              <p class="profile_link">{{$t('Browsing history')}}</p>
            </router-link>
          </div>
        </li>

        <li class="mt-4" style="margin-left: -30px;">
          <div :class="profile_address">
            <router-link class="d-flex" to="/profile-address" style="text-decoration: none; color: #000000;">
              <img style="width: 50px; height: 50px;" class="profile_icon" src="../assets/uploads/icons/Frame214(3).svg" alt="icon">
              <p class="profile_link">{{$t('Address')}}</p>
            </router-link>
          </div>
        </li>

        <li class="mt-4" style="margin-left: -30px;">
          <div :class="profile_pay">
            <router-link class="d-flex" to="/profile-pay" style="text-decoration: none; color: #000000;">
              <img style="width: 50px; height: 50px;" class="profile_icon" src="../assets/uploads/icons/Frame214(4).svg" alt="icon">
              <p class="profile_link">{{$t('Payment method')}}</p>
            </router-link>
          </div>
        </li>

        <li class="mt-4" style="margin-left: -30px;">
          <div :class="profile_notification">
            <router-link class="d-flex" to="/profile-notification" style="text-decoration: none; color: #000000;">
              <img style="width: 50px; height: 50px;" class="profile_icon" src="../assets/uploads/icons/Frame214(5).svg" alt="icon">
              <p class="profile_link">{{$t('Notifications')}}</p>
            </router-link>
          </div>
        </li>

        <li class="mt-4" style="margin-left: -30px;">
          <div :class="profile_logout">
            <span class="d-flex" @click="logoutFunc" style="text-decoration: none; color: #000000;">
              <img style="width: 50px; height: 50px; color:#8EC740" class="profile_icon" src="../assets/uploads/icons/logout.svg" alt="icon">
              <p class="profile_link">{{$t('Logout')}}</p>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

  export default {
    name:'personal-info-menus-view',
    props:{
      current_menu:{
        type:Object,
        required:true
      },
      profile_notif_class:{
        type:Object
      }
    },
    data(){
      return{
        profile:'',
        profile_history:'',
        profile_coupon:'',
        profile_seen:'',
        profile_address:'',
        profile_pay:'',
        profile_notification:'',
        profile_notif:'',
        profile_logout:'',
        user_token:localStorage.getItem('user_token'),
        user_name:localStorage.getItem('user_name'),
        user_email:localStorage.getItem('user_email'),
        user_avatar:localStorage.getItem('user_avatar'),
      }
    },
    computed:{
      ...mapGetters(['getUser'])
    },
    methods:{
      ...mapActions(['GETUSER']),
      logoutFunc(){
        if(localStorage.getItem('user_token')){
          localStorage.removeItem('user_token')
        }
        if(localStorage.getItem('user_full_name')){
          localStorage.removeItem('user_full_name')
        }
        if(localStorage.getItem('user_email')){
          localStorage.removeItem('user_email')
        }
        if(localStorage.getItem('user_avatar')){
          localStorage.removeItem('user_avatar')
        }
        window.location.href = '/'
      }
    },
    mounted() {
      switch(this.current_menu.page){
        case('profile'):
          this.profile = '-active'
              break;
        case('profile_history'):
          this.profile_history = 'profile_active'
              break;
        case('profile_coupon'):
          this.profile_coupon = 'profile_active'
              break;
        case('profile_seen'):
          this.profile_seen = 'profile_active'
              break;
        case('profile_address'):
          this.profile_address = 'profile_active'
              break;
        case('profile_pay'):
          this.profile_pay = 'profile_active'
              break;
        case('profile_notification'):
          this.profile_notification = 'profile_active'
              break;
        case('profile_logout'):
          this.profile_logout = 'profile_active'
              break;
      }
      if(this.profile_notif_class != null && this.profile_notif_class != undefined){
        this.profile_notif = this.profile_notif_class
      }
      this.GETUSER()
    }
  }
</script>
<style>
.profile_total{
  text-align: start;
}
</style>