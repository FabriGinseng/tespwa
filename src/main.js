import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import OneSignal from '@onesignal/onesignal-vue3'


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/push/OneSignalSDKWorker.js').then((registration) => {
    console.log('Service Worker 2 registered with scope:', registration.scope);
  }).catch((error) => {
    console.error('Service Worker 2 registration failed:', error);
  });
}
const app = createApp(App, {
  productionTip: false
})

app.use(OneSignal, {
  appId: "b7fced3b-c9c5-4587-83d2-67a2fe99d6bd",
  allowLocalhostAsSecureOrigin: true
})

app.mount('#app')
