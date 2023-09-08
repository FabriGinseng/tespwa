<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>{{ pushenabled }}</p>
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
  data(){
    return{
      pushenabled:false
    }
  },
  async mounted() {
    try {
      // await this.$OneSignal.Notifications.requestPermission()
      // this.pushenabled = this.$OneSignal.Notifications.permission
      // console.log('Push enabled', this.$OneSignal.Notifications.permission)
    } catch (error) {
      console.error('error', error)
      alert(error)
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
