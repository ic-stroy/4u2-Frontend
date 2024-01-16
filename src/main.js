import { createApp } from 'vue'
import App from './App.vue'
import {toast} from "@k90mirzaei/vue-toast";
import '@k90mirzaei/vue-toast/dist/index.css'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import ComponentContents from '@/components/UI'
import {createI18n, useI18n} from "vue-i18n/dist/vue-i18n";
import {languages} from './i18n'
import {defaultLocale} from "./i18n";
import vue3GoogleLogin from 'vue3-google-login'

const messages = Object.assign(languages)
const localStorageLang = localStorage.getItem('lang')
const i18n = createI18n({
    legacy:false,
    locale: localStorageLang||defaultLocale,
    fallbackLocale:'en',
    messages
})
const app = createApp(App, {
    setup(){
        const {t} = useI18n()
        return {t}
    }
});
ComponentContents.forEach(ComponentContent=>
{
    app.component(ComponentContent.name, ComponentContent);
})

app.use(vue3GoogleLogin, {
    clientId: '667921179600-trul0uv0rrptc46pv09li0cg8dr8m71s.apps.googleusercontent.com'
})
app.use(store).use(router).use(toast).use(i18n).mount('#app')