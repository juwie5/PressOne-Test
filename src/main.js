import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.jsonserve.com/';

axios.defaults.headers.get['header-name'] = 'value';

axios.interceptors.request.use((config) => {
    config.headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json'
    },
    config.crossdomain =  true;
    // return config to not block request
    return config
  });
  

const app = createApp(App)

app.use(router)

app.mount('#app')
