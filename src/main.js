import { createApp } from 'vue'
import App from './App.vue';
import router from './routes';
import Store from './store';

createApp(App).use(router).use(Store).mount('#app');
