<template>
  <form enctype="multipart/form-data" class="profile_information mt-4" style="padding: 30px 30px;" v-if="getUser">
    <div class="d-flex justify-content-between">
      <h3 class="hello_profile">{{$t('Personal information')}}</h3>
      <button v-if="!profile_edit" class="profile_edit-btn" @click="profileEditFunc">{{$t('Change')}}
        <img class="ms-2" style="margin-top: -3px;" src="../assets/uploads/icons/user-edit.svg" alt="edit icon">
      </button>
      <button v-else class="profile_not_edit-btn" @click="profileNotEditFunc">{{$t("Don't change")}}
        <img class="ms-2" style="margin-top: -3px;" src="../assets/uploads/icons/user-edit.svg" alt="edit icon">
      </button>
    </div>

    <div class="mt-3">
      <div class="d-flex">
        <div v-if="getUser.avatar">
          <img class="ms-3 image_profile" id="profile_avatar" :src="getUser.avatar" alt="Profile Image">
        </div>
        <div v-else class="catalog_profile_image">
          <i class="ms-3 fa fa-user" style="font-size: 44px; color:silver"></i>
        </div>
        <div class="ms-4" v-if="is_selected_photo">
          <b class="color_black opacity_07">{{$t('Selected photo')}}:</b><br>
          <span class="color_black" id="avatar_name"></span>
        </div>
      </div>
      <label class="mt-4 edit_photo ms-1" for="avatar" type="button">{{ $t("Change photo") }}</label>
      <input type="file" style="visibility:hidden" ref="fileInput" id="avatar" @change="getAvatar">
    </div>
    <div class="d-flex" v-if="getUser">
      <div>
        <input :class="'editor_inpur-profile '+opacity" name="first_name" id="first_name" type="text" :placeholder="$t('first name')" :readonly="not_writable" v-model="getUser.first_name">
        <input :class="'editor_inpur-profile '+opacity" name="phone_number" id="phone_number" :readonly="not_writable" :placeholder="$t('phone number')" v-model="getUser.phone_number">
        <select :class="'editor_inpur-profile '+opacity" name="gender" id="gender" v-model="getUser.gender" :readonly="not_writable">
          <option value="null" disabled>{{$t('Select gender')}}</option>
          <option value="1" >{{$t('Men')}}</option>
          <option value="2">{{$t('Women')}}</option>
        </select>
        <input :class="'editor_inpur-profile '+opacity" :type="password_type" value="" :readonly="not_writable" name="password" id="password" :placeholder="$t('New password')"><button v-if="password_eye" class="password_eye" @click="passwordShow"><i class="fas fa-eye"></i></button><button v-else class="password_eye" @click="passwordShow"><i class="fas fa-eye-slash"></i></button>
      </div>
      <div>
        <input :class="'editor_inpur-profile '+opacity" type="text" name="last_name" :placeholder="$t('last name')" :readonly="not_writable" id="last_name" :value="getUser.last_name">
        <input :class="'editor_inpur-profile '+opacity" type="date" name="birth_date" :placeholder="$t('birth date')" :readonly="not_writable" id="birth_date" v-if="getUser.birth_date" :value="getUser.birth_date">
        <input :class="'editor_inpur-profile '+opacity" type="date" name="old_birth_date" :placeholder="$t('birth date')" :readonly="not_writable" id="old_birth_date" v-else>
        <input :class="'editor_inpur-profile '+opacity" :type="password_old_type" name="old_password" :readonly="not_writable" id="old_password" value="" :placeholder="$t('Enter your password')"><button class="password_eye" v-if="password_old_eye" @click="passwordOldShow"><i class="fas fa-eye"></i></button><button v-else class="password_eye" @click="passwordOldShow"><i class="fas fa-eye-slash"></i></button>
        <input :class="'editor_inpur-profile '+opacity" :type="password_confirmation_type" name="password_confirmation" :readonly="not_writable" id="password_confirmation" value="" :placeholder="$t('Re-enter new password')"><button v-if="password_confirmation_eye" class="password_eye" @click="passwordConfirmationShow"><i class="fas fa-eye"></i></button><button v-else class="password_eye" @click="passwordConfirmationShow"><i class="fas fa-eye-slash"></i></button><br>
        <input v-if="updateButton" class="edit_password-profile" type="button" @click="editProfile" :value="$t('Update')">
      </div>
    </div>
  </form>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
  name:'profile-information',
  data(){
    return{
      profile_edit:false,
      birth_date:'',
      not_writable:true,
      password_eye:true,
      password_old_eye:true,
      password_confirmation_eye:true,
      opacity:'opacity_07',
      updateButton:false,
      password_type:'password',
      password_old_type:'password',
      password_confirmation_type:'password',
      get_avatar:null,
      fileInput:null,
      formData:new FormData(),
      is_selected_photo:false
    }
  },
  computed:{
    ...mapGetters(['getUser']),
  },
  methods:{
    ...mapActions(['GETUSER']),
    getAvatar(){
      // this.get_avatar = event.target.files[0]
      // this.get_avatar = this.fileInput.files[0]
      this.is_selected_photo = true
      this.formData.append("avatar", this.fileInput.files[0], this.fileInput.files[0].name)
      var oFReader = new FileReader();
      oFReader.readAsDataURL(document.getElementById("avatar").files[0]);
      oFReader.onload = function (oFREvent) {
        document.getElementById("profile_avatar").src = oFREvent.target.result;
        document.getElementById("avatar_name").innerText = document.getElementById("avatar").files[0].name
      };
    },
    profileEditFunc(){
      this.profile_edit = true
      this.not_writable = false
      this.opacity = ''
      this.updateButton = true
    },
    profileNotEditFunc(){
      this.profile_edit = false
      this.not_writable = true
      this.opacity = 'opacity_07'
      this.updateButton = false
    },
    passwordShow(){
      if(this.password_eye == true){
        this.password_type = 'text'
        this.password_eye = false
      }else{
        this.password_type = 'password'
        this.password_eye = true
      }
    },
    passwordOldShow(){
      if(this.password_old_eye == true){
        this.password_old_type = 'text'
        this.password_old_eye = false
      }else{
        this.password_old_type = 'password'
        this.password_old_eye = true
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
    async editProfile(){
      let first_name = document.getElementById('first_name')
      let phone_number = document.getElementById('phone_number')
      let gender = document.getElementById('gender')
      let password = document.getElementById('password')
      let last_name = document.getElementById('last_name')
      let birth_date = document.getElementById('birth_date')
      let old_birth_date = document.getElementById('old_birth_date')
      let old_password = document.getElementById('old_password')
      let password_confirmation = document.getElementById('password_confirmation')
      let old_birth_date_value = null
      let birth_date_value = null
      if(old_birth_date != undefined && old_birth_date != null){
        old_birth_date_value = old_birth_date.value
      }
      if(birth_date != undefined && birth_date != null){
        birth_date_value = birth_date.value
      }
      this.formData.append("first_name", first_name.value)
      this.formData.append("last_name", last_name.value)
      this.formData.append("phone_number", phone_number.value)
      this.formData.append("gender", gender.value)
      this.formData.append("password", password.value)
      this.formData.append("birth_date", birth_date_value)
      this.formData.append("old_birth_date", old_birth_date_value)
      this.formData.append("old_password", old_password.value)
      this.formData.append("password_confirmation", password_confirmation.value)
      try{
        const response = await axios.post('http://eccommerce/api/personal-information', this.formData, {
          headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/x-www-form-urlencoded',
            "Authorization":`Bearer ${localStorage.getItem('user_token')}`
          }
        })
        if(response.data.message == "password confirmation is not the same"){
          this.$toast.warning(this.$t('Password confirmation is not the same'));
        }
        if(response.data.message == "It is not your password"){
          this.$toast.warning(this.$t('It is not your password'));
        }
        if(response.data.message == 'Success'){
          this.$toast.success(this.$t('Successfully updated'));
        }
        console.log(response)
      }catch (e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.fileInput = this.$refs.fileInput;
  },
}
</script>
<style>
.profile_information{
  text-align: start;
}
.display_none{
  display: none;
}
.profile_not_edit-btn{
  padding: 5px 10px;
  background: #E44A4A;
  border-radius: 10px;
  border: none;
  color: var(--white);
}
.edit_photo{
  width: 144px;
}
.edit_photo:hover{
  color:#9CC73F;
}
.password_eye{
  margin-top: 30px;
  margin-left: -34px;
  transition:0.2s;
  z-index:2;
  color:black;
  background-color: transparent;
  border-radius: 44%;
}
.password_eye:hover{
  transform: scale(1.04);
}
.opacity_07{
  opacity: 0.7;
}
.image_profile{
  width: 64px;
  border-radius: 14px;
}
.color_black{
  color:black;
}
</style>