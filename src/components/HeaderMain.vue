<script setup>
</script>

<template>
  <header class="header__main">
    <section class="logo">
      <a href="./icons/cat.jpg">
        <img src="./icons/cat.jpg" class="header__logo" alt="Mon logo">
      </a>
      <h1>Ambre Saint-Marc</h1>
    </section>
  </header>
</template>

<style scoped>
.logo {
  display: flex;
  flex-direction: row;
  gap: 25px;
}

h1 {
  color: #449C90;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 40px;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 4em;
}


.header__logo {
  width: 250px;
  height: 210px;
  border-radius: 150px;
  margin-top: 25px;
  margin-left: 90px;
}


</style>
