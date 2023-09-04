import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import OneSignalVuePlugin from '@onesignal/onesignal-vue3'
//import 'OneSignalSDKWorker' 
createApp(App).use(OneSignalVuePlugin, {
   // appId: 'a373835c-11e4-49e8-a0b2-52a0b2e93ab8',
    appId:"b7fced3b-c9c5-4587-83d2-67a2fe99d6bd",
    allowLocalhostAsSecureOrigin: true,
  }).mount('#app')
