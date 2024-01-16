<template>
  <background-transparent-view :closeModal="closeModal" :backgroundModal="backgroundModal"></background-transparent-view>
  <div v-if="isLoading" class="d-flex align-items-center" style="height: 100%">
    <div class="loading-spinner"></div>
  </div>
  <div v-else class="container">
    <header-view :catologModalFunc="catologModalFunc" :catologModal="catologModal"  :loginModal="loginModal" :loginModalFunc="loginModalFunc"></header-view>
    <section>
      <div class="container payment_method-body mt-5">
        <ul class="d-flex" style="list-style-type: none;">
          <li class="me-4">
            <router-link class="payment_list" to="/payment-method">
              {{$t('Payment Methods')}}
            </router-link>
          </li>
          <li class="me-4">
            <router-link class="payment_list-active" to="/buy-rules">
              {{$t('Sales Rules')}}
            </router-link>
          </li>
          <li class="me-4">
            <router-link class="payment_list" to="/buy-rules">
              {{$t('Public offer')}}
            </router-link>
          </li>
        </ul>

        <h3 style="margin-left: 30px;">{{$t('Sales_rules_1')}}</h3>

        <ol class="buy_rules-big_text" style="margin-left: 30px; margin-top: 30px;">
          <li>{{$t('Sales_rules_2')}}</li>
          <li>
            {{$t('Sales_rules_3')}}
            <ul>
              <li>
                {{$t('Sales_rules_4')}} <span>{{$t('Sales_rules_5')}}</span>
              </li>
              <li>
                {{$t('Sales_rules_6')}}
              </li>
            </ul>
          </li>
          <li>
            {{$t('Sales_rules_7')}}
          </li>
          <li>
            {{$t('Sales_rules_8')}}
          </li>
          <li>
            {{$t('Sales_rules_9')}}
          </li>
        </ol>
      </div>
    </section>
    <footer-view></footer-view>
  </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['backgroundModal', 'catologModal', 'loginModal'])
  },
  data(){
    return{
      name:'Elyor',
      isLoading:true
    }
  },
  methods:{
    ...mapMutations(['catologModalFunc', 'closeModal', 'loginModalFunc'])
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false; // Set to false when the loading is complete
    }, 200);
  }
}
</script>
<style>
.payment_method-body{
  text-align: start;
}
</style>