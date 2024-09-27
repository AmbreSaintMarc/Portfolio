<script setup>
import HeaderMain from './components/HeaderMain.vue'
import NavMain from "./components/NavMain.vue"
import FooterMain from "./components/FooterMain.vue"

</script>

<template>
  <body>
    <HeaderMain></HeaderMain>
    <NavMain></NavMain>
    <RouterView></RouterView>
    <FooterMain></FooterMain>
  </body>

  
</template>

<style scoped></style>