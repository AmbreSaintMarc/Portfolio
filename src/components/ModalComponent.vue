<script setup>
import { defineProps, defineEmits, ref } from "vue";
import {onClickOutside} from '@vueuse/core'


const props = defineProps({
  isOpen: Boolean,
  CV2023 : Boolean,
  TSpecification : Boolean,
  DynamicComment : Boolean,
});

const emit = defineEmits(["modal-close"]);

const target = ref(null)
onClickOutside(target, ()=>emit('modal-close'))

</script>

<template>
  <div v-if="isOpen" class="projects__modal">
    <div class="modal__wrapper">
      <div class="projects__modal__content" ref="target">

        <section class="cv__modal" v-if="CV2023">
          <h2 class="modal__title">Mon CV 2023 en ligne</h2>
          <p class="modal__text">CV réalisé en HTML et CSS (Flexbox) en septembre 2023. Accessible sur GitHub en cliquant
            <a href="https://github.com/AmbreSaintMarc/devoir_CV" target="_blank" class="cv__modal__github__link">ici.</a>
          </p>
          <section class="modal__images">
            <img class="modal__image1" src="./image/appercu__principal__cv.png" alt="Aperçu de la partie haute de mon CV">
            <img class="modal__image2" src="./image/cv-contenu-2.png" alt="Aperçu de la partie basse de mon CV">
            <img class="modal__image3" src="./image/cv-contenu-1.png" alt="Aperçu de la barre réactive du corp de mon CV">
            <img class="modal__image4" src="./image/cv-html.png" alt="Aperçu du code HTML de mon CV">
            <img class="modal__image5" src="./image/cv-css.png" alt="Aperçu du code CSS de mon CV">
          </section>
        </section>

        <section class="t__specification" v-if="TSpecification">
          <h2 class="modal__title">Mon cahier des charge 2023</h2>
          <p class="modal__text">Voici mon cahier des charges pour l'entreprise fictive de La Socketterie réalisé en novembre 2023 à l'aide de Figma. Il est accessible en PDF en cliquant 
            <a href="https://drive.google.com/file/d/1ofORkSlyfIt_ntyiJfp1Hm0NrUsQsxRA/view?usp=sharing" target="_blank" class="t__specification__pdf__link">ici.</a>
          </p>
          <section class="modal__images">
            <img class="modal__image1" src="./image/La socketterie logo.png" alt="Logo de l'entreprise La Socketterie">
            <img class="modal__image2" src="./image/apperçu maquette site .png" alt="Aperçu de la maquette du site faite sur Figma">
            <img class="modal__image3" src="./image/arborescence site.png" alt="Arborescence de la maquette du site web">
          </section>
        </section>

        <section class="dynamic__comment__modal" v-if="DynamicComment">
          <h2 class="modal__title">Mon espace commentaire dynamique</h2>
          <p class="modal__text">Voici mon espace commentaire dynamique réalisé en décembre 2023 en Javascript. Il est accessible sur mon GitHub en cliquant 
            <a href="https://github.com/AmbreSaintMarc/Devoir-Dynamiser-un-espace-commentaire-en-JS-" target="_blank" class="dynamic__comment__github__link">ici.</a>
          </p>
          <section class="modal__images">
            <img class="modal__image1" src="./image/comment-page-neutre.png" alt="Aperçu de mon espace commentaire avant ajout d'un commentaire.">
            <img class="modal__image2" src="./image/comment-add.png" alt="Aperçu de mon espace commentaire après ajout de commentaire.">
            <img class="modal__image3" src="./image/comment-javascript.png" alt="Aperçu de mon code javascript pour cet espace commentaire">
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>

.projects__modal {
  display: flex;
  position: fixed;
  height: auto;
  font-family: "Montserrat", sans-serif;
  color: #449C90;
  border-color: #E0F2E9;
}

.modal__wrapper {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: center;
}

.projects__modal__content {
  background-color: #E0F2E9;
  width: 1300px;
  padding-bottom: 25px;
}

.cross {
  padding-left: 10px;
}


.modal__title {
    margin-left: 35px;
}

.modal__text {
    margin-left: 35px;
    font-size: 20px;
}

.modal__images {
   display: flex;
   flex-flow: row wrap;
   justify-content: space-evenly;
} 

.modal__image1 {
    max-block-size: 300px;
    transition: transform 1s;
}

.modal__image1:hover {
    transform:scale(2);
}

.modal__image2 {
    max-block-size: 300px;
    transition: transform 1s;
}

.modal__image2:hover {
    transform:scale(2);
}

.modal__image3 {
    max-block-size: 300px;
    transition: transform 1s;
}

.modal__image3:hover {
    transform:scale(2);
}

.modal__image4 {
    max-block-size: 300px;
    transition: transform 1s;
    margin-top: 25px;
}

.modal__image4:hover {
    transform:scale(2);
}

.modal__image5 {
    max-block-size: 300px;
    transition: transform 1s;
    margin-top: 25px;
}

.modal__image5:hover {
    transform:scale(2);
}

</style>