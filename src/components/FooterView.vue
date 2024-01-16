<template>
    <footer class="container mt-5">
      <div class="footer_desktop">
        <div class="container mt-5 d-flex justify-content-center pt-4">
          <ul style="list-style-type: none; width: 280px;">
            <li class="mb-3">
              <a class="footer_bold-text" style="text-decoration: none; color: #000000;"><b>{{$t('For buyers')}}</b></a></li>
            <li>
              <router-link class="footer_common-text" to="payment-method" style="text-decoration: none; color: #000000;">{{$t('Payment Methods')}}</router-link>
            </li>
            <li>
              <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('Delivery')}}</router-link>
            </li>
            <li>
              <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('Return')}}</router-link>
            </li>
            <li>
              <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('Spam protection')}}</router-link>
            </li>
          </ul>
          <ul style="list-style-type: none; width: 280px;">
            <li class="mb-3">
              <a class="footer_bold-text"  style="text-decoration: none; color: #000000;"><b>UsaStore</b></a>
            </li>
            <li>
              <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('Home')}}</router-link>
            </li>
            <li>
              <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('Categories')}}</router-link>
            </li>
            <li>
              <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('About Us')}}</router-link>
            </li>
            <li>
              <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('Contacts')}}</router-link>
            </li>
          </ul>
          <ul style="list-style-type: none;">
            <li class="mb-3">
              <a class="footer_bold-text" style="text-decoration: none; color: #000000;"><b>{{$t('Our address')}}</b></a>
            </li>
            <li>
              <router-link style="text-decoration: none; color: #000000;" to="/" class="d-flex footer_common-text"><img class="me-2" src="../assets/uploads/icons/home.svg" alt="Home icon">{{$t('Tashkent, Mirabad district, st. Lunacharsky, 60')}}</router-link>
            </li>
            <li>
              <router-link style="text-decoration: none; color: #000000;" to="/" class="d-flex footer_common-text"><img class="me-2" src="../assets/uploads/icons/call.svg" alt="Call icon">+998 98 800 80 80</router-link>
            </li>
            <li>
              <router-link style="text-decoration: none; color: #000000;" to="/" class="d-flex footer_common-text"><img class="me-2" src="../assets/uploads/icons/sms.svg" alt="Sms icon">usastore@usastore.uz</router-link>
            </li>
            <li>
              <div style="text-decoration: none; color: #000000;" class="footer_common-text">
                <div class="d-flex">
                  <router-link class="me-3 mt-3" style="text-decoration: none; color: #000000;" to="/">
                    <img width="50" height="50" src="../assets/uploads/payment-image/Payme.svg" alt="Payme">
                  </router-link>
                  <router-link class="me-3 mt-3" style="text-decoration: none; color: #000000;" to="/">
                    <img width="50" height="50" src="../assets/uploads/payment-image/Click.svg" alt="Click">
                  </router-link>
                  <router-link class="me-3 mt-3" style="text-decoration: none; color: #000000;" to="/">
                    <img width="50" height="50" src="../assets/uploads/payment-image/Humo.svg" alt="Humo">
                  </router-link>
                  <router-link class="me-3 mt-3" style="text-decoration: none; color: #000000;" to="/">
                    <img width="50" height="50" src="../assets/uploads/payment-image/Uzcard.svg" alt="Uzcard">
                  </router-link>
                  <router-link class="me-3 mt-3" style="text-decoration: none; color: #000000;" to="/">
                    <img width="50" height="50" src="../assets/uploads/payment-image/Visa.svg" alt="Visa">
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer_mobile">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button :class="`accordion-button ${forCustomersCollapsed}`" @click="forCustomersFunc">
                {{$t('For buyers')}}
              </button>
            </h2>
            <div>
              <div class="accordion-body" v-if="forCustomers">
                <ul style="list-style-type: none;">
                  <li>
                    <router-link class="footer_common-text" to="/payment_method" style="text-decoration: none; color: #000000;">{{$t('Payment Methods')}}</router-link>
                  </li>
                  <li>
                    <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('Delivery')}}</router-link>
                  </li>
                  <li>
                    <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('Return')}}</router-link>
                  </li>
                  <li>
                    <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('Spam protection')}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button :class="`accordion-button ${usaStoreCollapsed}`" @click="usaStoreFunc">
                UsaStore
              </button>
            </h2>
            <div>
              <div class="accordion-body" v-if="usaStore">
                <ul style="list-style-type: none;">
                  <li>
                    <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('Home')}}</router-link>
                  </li>
                  <li>
                    <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('Categories')}}</router-link>
                  </li>
                  <li>
                    <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('About Us')}}</router-link>
                  </li>
                  <li>
                    <router-link class="footer_common-text" to="/" style="text-decoration: none; color: #000000;">{{$t('Contacts')}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button :class="`accordion-button ${ourAddressCollapsed}`" @click="ourAddressFunc">
                {{$t('Our address')}}
              </button>
            </h2>
            <div>
              <div class="accordion-body" v-if="ourAddress">
                <ul style="list-style-type: none;">
                  <li>
                    <router-link style="text-decoration: none; color: #000000;" to="/" class="d-flex footer_common-text"><img class="me-2" src="../assets/uploads/icons/home.svg" alt="Home icon">{{$t('Tashkent, Mirabad district, st. Lunacharsky, 60')}}</router-link>
                  </li>
                  <li>
                    <router-link style="text-decoration: none; color: #000000;" to="/" class="d-flex footer_common-text"><img class="me-2" src="../assets/uploads/icons/call.svg" alt="Call icon">+998 98 800 80 80</router-link>
                  </li>
                  <li>
                    <router-link style="text-decoration: none; color: #000000;" to="/" class="d-flex footer_common-text"><img class="me-2" src="../assets/uploads/icons/sms.svg" alt="Sms icon">usastore@usastore.uz</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center">
          <router-link style="text-decoration: none; color: #000000;" to="/" class="footer_common-text"></router-link>
          <router-link class="me-3 mt-3" style="text-decoration: none; color: #000000;" to="/">
            <img width="50" height="50" src="../assets/uploads/payment-image/payme.png" alt="Payme">
          </router-link>
          <router-link class="me-3 mt-3" style="text-decoration: none; color: #000000;" to="/">
            <img width="50" height="50" src="../assets/uploads/payment-image/Click.svg" alt="Click">
          </router-link>
          <router-link class="me-3 mt-3" style="text-decoration: none; color: #000000;" to="/">
            <img width="50" height="50" src="../assets/uploads/payment-image/Humo.svg" alt="Humo">
          </router-link>
          <router-link class="me-3 mt-3" style="text-decoration: none; color: #000000;" to="/">
            <img width="50" height="50" src="../assets/uploads/payment-image/Uzcard.svg" alt="Uzcard">
          </router-link>
          <router-link class="me-3 mt-3" style="text-decoration: none; color: #000000;" to="/">
            <img width="50" height="50" src="../assets/uploads/payment-image/Visa.svg" alt="Visa">
          </router-link>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-4" style="padding-bottom: 12px;">
        <h3 class="footer_license">{{$t('© 2024 UsaStore, All rights reserved.')}}</h3>
      </div>
    </footer>
</template>
<script>
export default {
  name:'footer-view',
  data(){
    return{
      name:'Elyor',
      forCustomersCollapsed:'collapsed',
      forCustomers:false,
      usaStore:false,
      usaStoreCollapsed:'collapsed',
      ourAddress:false,
      ourAddressCollapsed:'collapsed',
    }
  },
  methods:{
    forCustomersFunc(){
      if(this.forCustomers == false){
        this.forCustomers = true
        this.forCustomersCollapsed = ''
        if(this.usaStore == true){
          this.usaStore = false
          this.usaStoreCollapsed = 'collapsed'
        }
        if(this.ourAddress == true){
          this.ourAddress = false
          this.ourAddressCollapsed = 'collapsed'
        }
      }else{
        this.forCustomers = false
        this.forCustomersCollapsed = 'collapsed'

      }
    },
    usaStoreFunc(){
      if(this.usaStore == false){
        this.usaStore = true
        this.usaStoreCollapsed = ''
        if(this.forCustomers == true){
          this.forCustomers = false
          this.forCustomersCollapsed = 'collapsed'
        }
        if(this.ourAddress == true){
          this.ourAddress = false
          this.ourAddressCollapsed = 'collapsed'
        }
      }else{
        this.usaStore = false
        this.usaStoreCollapsed = 'collapsed'

      }
    },
    ourAddressFunc(){
      if(this.ourAddress == false){
        this.ourAddress = true
        this.ourAddressCollapsed = ''
        if(this.usaStore == true){
          this.usaStore = false
          this.usaStoreCollapsed = 'collapsed'
        }
        if(this.forCustomers == true){
          this.forCustomers = false
          this.forCustomersCollapsed = 'collapsed'
        }
      }else{
        this.ourAddress = false
        this.ourAddressCollapsed = 'collapsed'

      }
    },
  }
}
</script>
<style>
.footer_desktop{
  text-align: start;
}
.accordion-body{
  text-align: start;
}
</style>