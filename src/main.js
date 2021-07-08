import { createApp }  from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import  VueScrollTo from 'vue-scrollto'
import './assets/css/style.css'
import './assets/css/calendar.css'

 

const app = createApp(App)
app.use(VueAxios, axios) // 👈
app.use(VueScrollTo)
app.mount('#app')
