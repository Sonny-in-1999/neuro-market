import {createApp} from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import router from "@/router";


createApp(App).use(router).mount('#app')
global.$ = jQuery