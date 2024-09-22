<script setup>
import Presentation from './Presentation.vue';
import ProjectCV2023 from './ProjectCV2023.vue';
import ProjectTSpecification2023 from './ProjectTSpecification2023.vue';
import ProjectDynamicComment from './ProjectDynamicComment.vue'
import ContactForm from './ContactForm.vue'
</script>

<template>
    <main class="project">
      <Presentation></Presentation>
      <ProjectCV2023></ProjectCV2023>
      <ProjectTSpecification2023></ProjectTSpecification2023>
      <ProjectDynamicComment></ProjectDynamicComment>
      <ContactForm></ContactForm>
    </main>
</template>

<style scoped>


.project { 
  font-size: 2em;
  display :flex;
  flex-direction: column;
  align-items: center;
  row-gap: 70px;
  padding: 65px;
  margin: 30px;
  margin-left: 200px;
  margin-top: -40px;

}

article {
  flex: 1;
}

</style>