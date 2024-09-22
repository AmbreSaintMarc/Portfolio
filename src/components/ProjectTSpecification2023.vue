<script setup>
import { ref } from "vue";
import ModalComponent from "../components/ModalComponent.vue";

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;

}
const closeModal = () => {
  isModalOpened.value = false;

}
</script>

<template>
    <article class="project__t__specification2023" @click="openModal">
      <h2 class="t__specification2023__title">Mon cahier des charges 2023</h2>
      <img class="t__specification2023__image" src="./image/La socketterie logo.png" alt="Logo de l'entreprise pour laquelle la maquette de cahier des charges a été réalisée">
    </article>
    <ModalComponent :isOpen="isModalOpened" TSpecification @modal-close="closeModal"  name="first-modal"></ModalComponent>
</template>

<style scoped>

.project__t__specification2023 {
  border: 3px solid #3c887e;
  border-radius: 10px;
  background-color: #3c887e;
  color: #E0F2E9;
  width: 850px;
}

.project__t__specification2023:hover {
  box-shadow: 5px 5px 3px #449C90;
}

.t__specification2023__title {
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    margin-left: 22px;
}

.t__specification2023__image {
    width: 300px;
    height: 250px;
    margin-left: 235px;
    margin-bottom: 25px;
}

</style>