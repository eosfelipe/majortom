import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueTypedJs from 'vue-typed-js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from './store/store'

library.add(faFacebook,faInstagram, faGithub);
library.add(faEnvelope);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueTypedJs);

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
  app.$store.commit('setLoading', true)

  // Simulate request
  setTimeout(() => {
    next();
  }, 1000)
  
});

router.afterEach(() => {
  app.$store.commit('setLoading', false)
});