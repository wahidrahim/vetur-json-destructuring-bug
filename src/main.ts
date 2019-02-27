import Vue from 'vue';
import App from './App.vue';

import { tsFile } from '@/assets/test.json'; // no error
import jsonFile from '@/assets/test.json'; // no error

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

console.log(tsFile); // shows "This is a .ts file"
console.log(jsonFile) // shows test.json as an object

