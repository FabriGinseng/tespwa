<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>{{ pushenabled }}</p>
  <button @click="Enable">enable push</button>
  <button @click="requestCameraPermission">permesso della fotocamera</button>
  <input type="file" id="fileInput" name="fileInput" accept=".jpg, .jpeg, .png, .gif">

  <Cameracomponent v-if="permissionGranted"></Cameracomponent>
</template>

<script>
// eslint-disable-next-line
import OneSignal from '@onesignal/onesignal-vue3'
import Cameracomponent from './components/Cameracomponent.vue'

export default {
  name: 'App',
  components: {
    Cameracomponent
  },
  data(){
    return{
      pushenabled:false,
      permissionGranted: false
    }
  },
  async mounted() {
    try {
      
      this.pushenabled = this.$OneSignal.Notifications.permission
      console.log('Push enabled', this.$OneSignal.Notifications.permission)
    } catch (error) {
      console.error('error', error)
      alert(error)
    }

  },
  methods:{
    async requestCameraPermission() {
      try {
        //await navigator.mediaDevices.getUserMedia({ video: true,  });
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
          this.permissionGranted = true
          // Il permesso è stato concesso, ora puoi inviare notifiche.
        } else {
          // L'utente ha negato il permesso.
          console.warn('L\'utente ha negato il permesso per le notifiche.');
        }
      } catch (error) {
        // Gestisci eventuali errori qui, ad esempio l'utente ha negato il permesso.
        console.error('Errore nell\'ottenere l\'accesso alla fotocamera:', error);
      }
    },
   async Enable(){
      await this.$OneSignal.Notifications.requestPermission()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
