<script></script>

<template>
    <Footer>
        <nav class="footer__icons">
            <a href="./icons/linkedin.png" target="_blank" class="footer__icon__linkedin">
                <img src="./icons/linkedin.png" alt="Logo de Linkedin">
            </a>
            <a href="./icons/github.png" target="_blank" class="footer__icon__github">
                <img src="./icons/github.png" alt="Logo de GitHub">
            </a>
        </nav>
        <small class="footer__text">Dernière mise à jour le 22.09.2024</small>
    </Footer>
  </template>
<style>


footer {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
}

.footer__icons {
  display: flex;
  flex-direction: row;
}

.footer__icon__linkedin {
  margin : 10px;
}

.footer__icon__github {
  margin: 10px;
}
.footer__text {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  margin-left: 22px;
}

</style>