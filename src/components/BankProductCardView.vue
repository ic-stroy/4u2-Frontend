<template>
  <div class="bank_product-card mt-4">
    <div class="mt-3 ms-4">
      <h3 class="hello_profile">{{$t('Online payment')}}</h3>
      <p class="addres_title ms-4 mt-3 text-start">{{$t('Your cards')}}</p>

      <div class="d_pay">
        <div class="d-flex">
          <div class="d-flex me-5">
            <div class="card_image">
              <p class="bank_name" style="opacity: 0.5;">{{$t('Name of the bank')}}</p>

              <p class="bank_name" style="margin-top: 60px; margin-bottom: 1px">**** **** **** 4567</p>
              <div class="d-flex justify-content-between">
                <p class="bank_name">Оксана Петровна</p>
                <img width="20" height="12" src="../assets/uploads/payment-image/image6.png" alt="humo">
              </div>
            </div>

            <div class="d-flex flex-column ms-3 mt-3">
              <button class="button_location-green"><img src="../assets/uploads/icons/message-edit.svg" alt="Edit"></button>
              <button class="button_location-red mt-3"><img src="../assets/uploads/icons/trashWhite.svg" alt="Delete"></button>
            </div>
          </div>

          <div class="d-flex">
            <div class="card_image">
              <p class="bank_name" style="opacity: 0.5;">{{$t('Name of the bank')}}</p>

              <p class="bank_name" style="margin-top: 60px; margin-bottom: 1px">**** **** **** 4567</p>
              <div class="d-flex justify-content-between">
                <p class="bank_name">Оксана Петровна</p>
                <img width="20" height="12" src="../assets/uploads/payment-image/image6.png" alt="humo">
              </div>
            </div>

            <div class="d-flex flex-column ms-3 mt-3">
              <button class="button_location-green"><img src="../assets/uploads/icons/message-edit.svg" alt="Edit"></button>
              <button class="button_location-red mt-3"><img src="../assets/uploads/icons/trashWhite.svg" alt="Delete"></button>
            </div>
          </div>
        </div>

        <div class="d-flex mt-4">
          <div class="d-flex me-5">
            <div class="card_image">
              <p class="bank_name" style="opacity: 0.5;">{{$t('Name of the bank')}}</p>

              <p class="bank_name" style="margin-top: 60px; margin-bottom: 1px">**** **** **** 4567</p>
              <div class="d-flex justify-content-between">
                <p class="bank_name">Оксана Петровна</p>
                <img width="20" height="12" src="../assets/uploads/payment-image/image6.png" alt="humo">
              </div>
            </div>

            <div class="d-flex flex-column ms-3 mt-3">
              <button class="button_location-green"><img src="../assets/uploads/icons/message-edit.svg" alt="Edit"></button>
              <button class="button_location-red mt-3"><img src="../assets/uploads/icons/trashWhite.svg" alt="Delete"></button>
            </div>
          </div>

          <div class="d-flex">
            <div class="card_image d-flex justify-content-center align-items-center">
              <button class="bank_plus">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'bank-product-card-view'
}
</script>