import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import statusComponent from './Status.vue'
import mitt from 'mitt'

loadFonts()

export const emitter = mitt();
const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app
  .use(router)
  .use(store)
  .use(vuetify)
  .component('AppStatus', statusComponent)  // 전역으로 사용할 수 있는 컴포넌트
  .mount('#app')

// args1 : 컴포넌트명, args2 : 옵션
// Vue.component('AppStatus', statusComponent)
