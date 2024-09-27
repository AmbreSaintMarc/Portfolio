<script setup>
</script>

<template>
    <nav>
      <section class="nav__look">
        <section class="presentation"><RouterLink class="link" to="presentation">Présentation</RouterLink></section>
        <section class="project__nav"><RouterLink class="link" to="creations">Mes créations</RouterLink></section>
        <section class="contact__form"><RouterLink class="link" to="contact">Contact</RouterLink></section>
      </section>
    </nav>
</template>

<style scoped>

.nav__look {
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  padding: 25px;
  font-size: 2em;
  box-sizing: border-box;
  row-gap: 30px;
  position: absolute;
  margin-left: 30px;
}

.presentation {
  width: 300px;
  height: 50px;
  border: 3px solid #3C887E;
  border-radius: 10px;
  background-color: #3C887E;
  color: #E0F2E9;
  text-align: center;

}

.project__nav {
  width: 300px;
  height: 50px;
  border: 3px solid #3C887E;
  border-radius: 10px;
  background-color: #3C887E;
  color: #E0F2E9;
  text-align: center;
}

.contact__form {
  width: 300px;
  height: 50px;
  border: 3px solid #3C887E;
  border-radius: 10px;
  background-color: #3C887E;
  color: #E0F2E9;
  text-align: center;
}

.link {
  text-decoration: none;
  color: #E0F2E9;
}
</style>
