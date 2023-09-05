<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// eslint-disable-next-line
import OneSignal from '@onesignal/onesignal-vue3'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  async mounted() {
    try {
      console.log('entro?',  this.$OneSignal.User.PushSubscription);
      await this.$OneSignal.Notifications.requestPermission()
    console.log('Push enabled', this.$OneSignal.Notifications)
    } catch (error) {
      console.error('error', error)
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
