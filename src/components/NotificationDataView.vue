<template>
  <div class="wrapper mt-4 ms-4">
    <div class="notification_data">
      <div class="left">
        <div class="message_notif">
          <h3 class="ms-4 message_text-big">{{$t('Messages')}}</h3>
        </div>
        <ul style="list-style-type: none;" class="people message_peoples">
          <li :class="'person '+ person.is_active +' d-flex'" v-for="(person, index) in persons" :key="index" @click="showMessageFunc(index)">
            <img src="../assets/uploads/images/logo.png" alt="" />
            <div>
              <span class="name">{{person.type}}</span>
              <span class="preview">{{person.preview}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="top sender_big_name"><span><span class="message_text-big">{{$t('Safety')}}</span></span></div>
        <div class="messages" v-for="(person, index) in persons" :key="index">
          <div v-if="person.show">
            <div class="" v-for="(message, key) in person.messages" :key="key">
              <b>{{message.title}}</b>
              <br>
              <br>
              {{message.text}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'notification-data-view',
  data(){
    return{
        persons:[
        {
          id:1,
          show:true,
          is_active:'active',
          type:"Системное сообщение",
          preview:"Добро пожаловать в наш магазин!",
          messages:[
            {
              title:"Добро пожаловать в наш магазин!",
              text:"Мы рады что вы выбрали нас! С нашей стороны мы обеспечиваем Вас всегда качественными товарами и быстрой доставкой 😊",
            }
          ]
        },
        {
          id:1,
          show:false,
          is_active:'',
          type:"Системное сообщение",
          preview:"Добро пожаловать в наш магазин!",
          messages:[
            {
              title:"Welcome to our store!",
              text:"We are glad that you chose us! For our part, we always provide you with we always provide you with we always provide you with high-quality goods and fast delivery 😊",
            }
          ]
        },
        {
          id:1,
          show:false,
          is_active:'',
          type:"Системное сообщение",
          preview:"Добро пожаловать в наш магазин!",
          messages:[
            {
              title:"Bizning do'konimizga xush kelibsiz!",
              text:"Bizni tanlaganingizdan xursandmiz! O'z tomonimizdan biz sizga doimo sifatli tovarlar va tez yetkazib berishni ta'minlaymiz 😊",
            }
          ]
        }
      ],
    }
  },
  methods:{
    makeFalse(value, key){
      if(this.persons[key].show == true){
        this.persons[key].show = false
        this.persons[key].is_active = ''
      }
    },
    showMessageFunc(index){
      this.persons.forEach(this.makeFalse)
      if(this.persons[index].show == false){
        this.persons[index].show = true
        this.persons[index].is_active = 'active'
      }
    }
  }
}
</script>
<style>
.person{
  text-align: start;
}
.messages{
  padding-left: 24px;
  text-align: start;
}
.messages>div{
  padding-top: 24px;
}
</style>