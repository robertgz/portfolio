import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueGtm from 'vue-gtm';

Vue.config.productionTip = false

Vue.use(VueGtm, {
  id: process.env.NODE_ENV === 'production' ? 'GTM-KWRLK7J' : 'GTM-MZ3LVQD',
  // queryParams: { // Add url query string when load gtm.js with GTM ID (optional)
  //   gtm_auth:'AB7cDEf3GHIjkl-MnOP8qr',
  //   gtm_preview:'env-4',
  //   gtm_cookies_win:'x'
  // },
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional) 
});

new Vue({
  render: h => h(App),
}).$mount('#app')
