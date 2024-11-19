
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
//注册脚本
import svgIcon from './components/svgicon/index.vue';
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './scss/index.scss'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.component('svg_icon', svgIcon);
app.mount('#app')
