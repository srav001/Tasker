import { createApp } from 'vue';

import { createPinia } from 'pinia';

import { IonicVue } from '@ionic/vue';

import App from './App.vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Import the bootstrap grid system */
import 'bootstrap/dist/css/bootstrap-grid.min.css';

/* Theme variables */
import './theme/variables.css';

/* Import the tailwaind files */
import '../index.css';

const app = createApp(App).use(createPinia()).use(IonicVue);

app.mount('#app');
