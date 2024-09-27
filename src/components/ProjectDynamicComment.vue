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
    <article class="project__dynamic__comment" @click="openModal">
        <h2 class="project__dynamic__comment__title">Mon espace commentaire dynamique</h2>
        <img class="project__dynamic__comment__image" src="./image/comment-page-neutre.png" alt="Aperçu de mon projet espace de commentaire dynamique">
    </article>
    <ModalComponent :isOpen="isModalOpened" DynamicComment @modal-close="closeModal"  name="first-modal"></ModalComponent>
</template>

<style scoped>

.project__dynamic__comment {
  border: 3px solid #3C887E;
  border-radius: 10px;
  background-color: #3C887E;
  color: #E0F2E9;
  width: 850px;
}

.project__dynamic__comment:hover{
  box-shadow: 5px 5px 3px #449C90;
}

.project__dynamic__comment__title {
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    margin-left: 22px;
}

.project__dynamic__comment__image {
    width: 325px;
    height: auto;
    margin-left: 260px;
    margin-bottom: 25px;
}
</style>