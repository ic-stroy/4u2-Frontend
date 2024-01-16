<template>
  <background-transparent-view :closeModal="closeModal" :backgroundModal="backgroundModal"></background-transparent-view>
  <div v-if="isLoading" class="d-flex align-items-center" style="height: 100%">
    <div class="loading-spinner"></div>
  </div>
  <div v-else class="container">
    <header-view :catologModalFunc="catologModalFunc" :catologModal="catologModal" :loginModal="loginModal" :loginModalFunc="loginModalFunc"></header-view>
    <section>
      <div class="container payment_method-body mt-5">
        <ul class="d-flex" style="list-style-type: none;">
          <li class="me-4">
            <router-link class="payment_list-active" to="/payment-method">
              {{$t('Payment Methods')}}
            </router-link>
          </li>
          <li class="me-4">
            <router-link class="payment_list" to="/buy-rules">
              {{$t('Sales Rules')}}
            </router-link>
          </li>
          <li class="me-4">
            <router-link class="payment_list" to="/buy-rules">
              {{$t('Public offer')}}
            </router-link>
          </li>
        </ul>

        <h3 class="payment_method-big_text" style="padding-left: 30px; padding-top: 20px;">{{$t('Payment Methods')}}</h3>

        <div class="accordion" id="accordionExample1">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button :class="`accordion-button payment_method-accardion_text ${bankArrowChange}`" @click="bankCardFunc">
                {{$t('Bank card')}}
              </button>
            </h2>
            <div v-if="bankCard">
              <div class="accordion-body">
                <div class="payment_method-accardion_mini-text">
                  <strong>{{$t('Bank_card_bold')}}</strong>
                  <br> {{$t('Bank_card_text')}} <br> {{$t('Bank_card_text_1')}}
                  <br> <strong>{{$t('Bank_card_bold_1')}}</strong>
                </div>
                <div class="d-flex mt-3">
                  <a style="text-decoration: none; color: #000000;" href="#" class="footer_common-text"></a>
                  <a class="me-3 mt-3" style="text-decoration: none; color: #000000;" href="#">
                    <img width="50" height="50" src="../assets/uploads/payment-image/payme.png" alt="Payme">
                  </a>
                  <a class="me-3 mt-3" style="text-decoration: none; color: #000000;" href="#">
                    <img width="50" height="50" src="../assets/uploads/payment-image/click.png" alt="Click">
                  </a>
                  <a class="me-3 mt-3" style="text-decoration: none; color: #000000;" href="#">
                    <img width="50" height="50" src="../assets/uploads/payment-image/humo.png" alt="Humo">
                  </a>
                  <a class="me-3 mt-3" style="text-decoration: none; color: #000000;" href="#">
                    <img width="50" height="50" src="../assets/uploads/payment-image/uzcard.png" alt="Uzcard">
                  </a>
                  <a class="me-3 mt-3" style="text-decoration: none; color: #000000;" href="#">
                    <img width="50" height="50" src="../assets/uploads/payment-image/visa.png" alt="Visa">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button :class="`accordion-button payment_method-accardion_text ${onlinePaymentChange}`" @click="onlinePaymentFunc">
                {{$t('Online payment security')}}
              </button>
            </h2>
            <div v-if="onlinePayment">
              <div class="accordion-body">
                <div class="payment_method-accardion_mini-text">
                  <strong>{{ $t("Online_payment_security_bold") }}</strong>
                  <br> {{ $t("Online_payment_security_text") }} <br> {{ $t("Online_payment_security_text_1") }}
                  <br> <strong>{{ $t("Online_payment_security_bold_1") }}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-view></footer-view>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import FooterView from "@/components/FooterView";
export default {
  components: {FooterView},
  computed:{
    ...mapState(['backgroundModal', 'catologModal', 'loginModal']),
  },
  data(){
    return{
      name:'Elyor',
      bankCard:false,
      onlinePayment:false,
      bankArrowChange:'collapsed',
      onlinePaymentChange:'collapsed',
      isLoading:'',
    }
  },
  methods:{
    bankCardFunc(){
      if(this.bankCard == false){
        this.bankCard = true
        this.bankArrowChange = ''
      }else{
        this.bankCard = false
        this.bankArrowChange = 'collapsed'
      }
      if(this.onlinePayment == true){
        this.onlinePayment = false
        this.onlinePaymentChange = 'collapsed'
      }
    },
    onlinePaymentFunc(){
      if(this.onlinePayment == false){
        this.onlinePayment = true
        this.onlinePaymentChange = ''
      }else{
        this.onlinePayment = false
        this.onlinePaymentChange = 'collapsed'
      }
      if(this.bankCard == true){
        this.bankCard = false
        this.bankArrowChange = 'collapsed'
      }
    },
    ...mapMutations(['closeModal', 'catologModalFunc', 'loginModalFunc'])
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false; // Set to false when the loading is complete
    }, 200);
  },
}
</script>
<style>
.payment_method-body{
  text-align: start;
}
</style>