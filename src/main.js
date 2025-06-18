import AOS from 'aos';
import 'aos/dist/aos.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app')

AOS.init();
