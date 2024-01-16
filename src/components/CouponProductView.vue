<template>
    <div style="display: flex; justify-content: end; flex-direction: column; align-items: end;">
      <div style="text-align: left; margin-right: 1.5rem;" class="coupon_text mt-2">
        <h3 class="first_buy">{{$t('First purchase')}}</h3>
        <p class="first_buy">-10%</p>
        <img style="margin-top: -20px;" src="../assets/uploads/icons/barcode1.svg" alt="barcode">
      </div>
    </div>
</template>
<script>
export default {
  name:'coupon-product-view'
}
</script>