<template>
    <img :src="src" />
  </template>
  
  <script>
  export default {
    name:'photo-component',
    props: {
      src: {
        type: String,
        default: null,
      },
    },
  };
  </script>
  
  <style scoped>
  img {
    height: 100%;
  }
  </style>