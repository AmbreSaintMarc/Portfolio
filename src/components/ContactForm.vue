<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue';

const form = ref(null);

const sendEmail = () => {
  emailjs
    .sendForm('service_portfolioASM2024', 'template_109fh61', form.value, {
      publicKey: 'NnsCukYT7qi_BWB4D',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};


</script>

<template>
  <form ref="form" @submit.prevent="sendEmail">
    <section class="form__content">
      <h2 class="form__title">Formulaire de contact</h2>
      <section class="form__name">
        <label>Name :</label>
        <input type="text" name="name" class="input__name">
        <label>Surname :</label>
        <input type="text" name="surname" class="input__name">
      </section>
      <section class="form__about">
        <label>About :</label>
        <input type="text" name="about" class="input__about">
      </section>
      <label>Message :</label>
      <textarea name="message"></textarea>
      <button>Envoyer</button>
    </section>
  </form>
</template>

<style scoped>

form {
  border: 3px solid #3C887E;
  border-radius: 10px;
  background-color: #3C887E;
  color: #E0F2E9;
  width: 850px;
}

form:hover {
  box-shadow: 5px 5px 3px #449C90;
}

.form__content {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  margin-left: 40px;
  margin-bottom: 40px;
  display:flex;
  flex-direction: column;
  gap: 15px;
  width : 90%;
}

.form__name {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.input__name {
  height: 15px;
  margin-top: 5px;
  border-radius: 15px;
  border: 0cm;
}

.form__about {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.input__about {
  width: 63%;
  height: 15px;
  margin-top: 5px;
  border-radius: 15px;
  border: 0cm;
}

textarea {
  width: 100%;
  height: 90px;
  border-radius: 15px;
  border: 0cm;
}

button {
  width: 150px;
  height: 35px;
  margin-left: 300px;
  font-family: "Montserrat", sans-serif;
  background-color: #E0F2E9;
  border: 0cm;
  border-radius: 15px;

}

button:hover {
  background-color:  #449C90;
}

</style>