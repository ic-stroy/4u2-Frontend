<template>
  <div class="favourites_product-card favourites_product-card3 d-flex mt-4">
    <div class="mt-3 ms-4" v-if="getUser">
      <h3 class="hello_profile">{{$t('Hello')}} {{getUser.first_name}}!</h3>
      <p class="welcome_profile">{{$t('Welcome')}} <br> {{$t('to')}} <b>{{$t('your personal account')}}</b></p>
    </div>
    <div class="profile_balance d-flex">
      <div>
        <p class="you_ballance">{{$t('Your points')}}</p>
        <div style="margin-top: 35px;">
          <p class="balance_text-profile">{{$t('Balance:')}}</p>
          <div class="d-flex" style="margin-top: -15px;">
            <img class="group37_icon" src="../assets/uploads/icons/Group37.svg" alt="icon">
            <h3 class="ballance">100 500</h3>
          </div>
        </div>
      </div>
      <div>
        <img class="ballance_image-bg" src="../assets/uploads/icons/Union.svg" alt="image">
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name:'personal-information-view',
  computed:{
    ...mapGetters(['getUser']),
  },
  methods:{
  ...mapActions(['GETUSER']),
  },
  mounted() {
    this.GETUSER()
  }
}
</script>
<style>
.favourites_product-card{
  text-align: start;
}
</style>