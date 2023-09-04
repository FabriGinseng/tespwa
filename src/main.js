import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import OneSignalVuePlugin from '@onesignal/onesignal-vue3'
//import 'OneSignalSDKWorker' 
createApp(App).use(OneSignalVuePlugin, {
    appId: '17a8e88e-effa-4d51-a98e-826375232323',
  }).mount('#app')
