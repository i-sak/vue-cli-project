import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import statusComponent from './Status.vue'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .component('AppStatus', statusComponent)
  .mount('#app')

// args1 : 컴포넌트명, args2 : 옵션
// Vue.component('AppStatus', statusComponent)
