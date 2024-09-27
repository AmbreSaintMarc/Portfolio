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
    <article class="project__cv2023" @click="openModal">
      <h2 class="project__cv__title">Mon CV</h2>
      <img class="project__cv__image" src="./image/appercu__principal__cv.png" alt="Aperçu de mon CV 2023">
    </article>
    <ModalComponent :isOpen="isModalOpened" CV2023 @modal-close="closeModal"  name="first-modal"></ModalComponent>
</template>


<style scoped>

.project__cv2023 {
  border: 3px solid #3C887E;
  border-radius: 10px;
  border-style: solid;
  background-color: #3C887E;
  color: #E0F2E9;
  width: 850px;
}

.project__cv2023:hover {
  box-shadow: 5px 5px 3px #449C90;
}

.project__cv__title {
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    margin-left: 22px;
}

.project__cv__image {
    width: 500px;
    height: 375px;
    margin-left: 175px;
    margin-bottom: 25px;
}

.modal {
    position: absolute;
    margin-left: -150px;
    width: 1300px;
    height: auto;
    display: none;
    font-family: "Montserrat", sans-serif;
    color: #449C90;

}


</style>