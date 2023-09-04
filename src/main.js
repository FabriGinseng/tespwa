import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import OneSignalVuePlugin from '@onesignal/onesignal-vue3'
//import 'OneSignalSDKWorker' 
createApp(App).use(OneSignalVuePlugin, {
    appId: 'b7fced3b-c9c5-4587-83d2-67a2fe99d6bd',
  }).mount('#app')
