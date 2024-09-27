<script setup></script>

<template>
    <article class="project__presentation">
        <h2 class="presentation__title">Présentation</h2>
        <p class="presentation__text">Je m'appelle Ambre Saint-Marc, j'ai 23 ans et je suis développeuse Web Junior en plein apprentissage.</p>
    </article>
</template>

<style scoped>

.project__presentation {
  border: 3px solid #3C887E;
  border-radius: 10px;
  background-color: #3C887E;
  color: #E0F2E9;
  width: 850px;
}
.presentation__title {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  margin-left: 22px;
}
.presentation__text {
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  margin-left: 22px;
}

.project__presentation:hover {
  box-shadow: 5px 5px 3px #449C90;
}

</style>