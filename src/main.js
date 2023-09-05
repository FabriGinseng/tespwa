import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import OneSignal from '@onesignal/onesignal-vue3'

const app = createApp(App, {
    productionTip: false
  })
  
  app.use(OneSignal, {
    appId: "b7fced3b-c9c5-4587-83d2-67a2fe99d6bd",
    allowLocalhostAsSecureOrigin: true
  })
  
  app.mount('#app')
