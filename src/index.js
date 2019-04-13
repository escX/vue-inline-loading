import Vue from 'vue';
import App from './app.vue';
import VueInlineLoading from '../../src/index';

Vue.use(VueInlineLoading);

export default new Vue({
  el: '#app',
  render: h => h(App),
});
