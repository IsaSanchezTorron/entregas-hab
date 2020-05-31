<template>
  <div class="about">
    <figure>
      <!--Aquí va toda la ristra de iconos que son los enlaces a mis redes sociales y a la API utilizada -->
      <a href="http://www.instagram.com/rebelionnatural">
        <img src="../assets/instagram.png" width="80" height="80" />
      </a>
      <a href="http://www.facebook.com/isapulsatilla">
        <img src="../assets/facebook.png" width="80" height="80" />
      </a>
      <a href="https://twitter.com/isa56k1">
        <img src="../assets/gorjeo.png" width="80" height="80" />
      </a>
      <a href="http://www.github.com/IsaSanchezTorron">
        <img src="../assets/git.svg" width="80" height="80" />
      </a>
      <a href="https://www.linkedin.com/in/isabel-s%C3%A1nchez-torr%C3%B3n-b988161a2/">
        <img src="../assets/linkedin.svg" width="80" height="80" />
      </a>
      <a href="https://rickandmortyapi.com/api">
        <img
          src="../assets/api.svg"
          title="Esta es la API que he utilizado para este ejercicio"
          width="80"
          height="80"
        />
      </a>
      <a href="https://divisasdeisa.surge.sh">
        <img
          class="divisas"
          src="../assets/divisas.jpeg"
          title="Una vez hice un coversor de divisas"
        />
      </a>
      <a href="https://flukeout.github.io/">
        <img
          class="divisas"
          src="../assets/pickle.png"
          title="Yo no sé cómo he llegado aquí pero si pinchas sobre mí te llevo a una página genial con un juego para aprender a usar los selectores de CSS"
        />
      </a>
    </figure>

    <h1>Si pasas tu ratón sobre las fotos averiguarás cositas random sobre mí.</h1>

    <!-- Y aquí toda la ristra de fotos que me hubiera gustado sacar por un array pero me aturullé -->
    <div class="presentacion">
      <img
        class="biografia"
        src="../assets/PERRITAS.jpg"
        title="Vivo con tres perritas adorables: Lola, Triana y Paca. Las amo."
      />

      <img
        src="../assets/tacaños.jpg"
        title="Soy fan de ver mierdacas de youtube como Tacaños Extremos. "
      />

      <img
        src="../assets/gallina.jpg"
        title=" ...también soy fan del grupo de facebook 'Cosas de Gallinas'..."
      />
      <img
        src="../assets/palomas2.jpeg"
        title=" de hecho hice nuevas amigas durante la cuarentena..."
      />
      <img src="../assets/tarta.jpg" title=" me encanta cocinar con amor..." />
      <img src="../assets/pelos.jpg" title=" y hacer manualidades con otras muchas emociones..." />
      <img src="../assets/emociones.jpg" title=" y emociones..." />

      <img
        src="../assets/mar.jpg"
        title="En San Juan, las cuatro nos lavamos la cara con el agua de remojar a la luz de la luna las Hierbas de San Juan"
      />
      <img
        src="../assets/periodico.jpg"
        title="Una vez salí con una amiga en el periódico haciendo las monas en la calle, hicimos una fiesta para celebrarlo"
      />
      <img src="../assets/cocinarr.jpg" title="lo de cocinar iba en serio 🙈 " />
      <img src="../assets/rebelion.jpg" title="Me encanta fotografiar Rebeliones Naturales " />
      <img src="../assets/musica.jpg" title="y me pongo bizca escuchando música " />
      <img src="../assets/cercamar.jpg" title="El mar es otro de mis Amores " />
      <img
        src="../assets/salto.jpg"
        title="¡Me voy corriendo que hay palomas discutiendo mi ventana!"
      />
    </div>

    <Footer></Footer>
  </div>
</template>

 <script>
 import Footer from "@/components/Footer.vue";
 export default {
   name:"About",
   components: {
     Footer
   }
 };
 </script>

  <style scoped>
.about {
  width: 100%;
  height: 100%;
  background-color: black;
}

figure img {
  padding: 0px 50px 0px 0px;
  border-radius: 0px;
  width: 100px;
  height: 100px;
}

.presentacion img {
  padding: 0.5em 1em 1em 1em;
  border-radius: 30px;
  width: 200px;
  height: 200px;
  transition: transform 0.7s ease;
}
.presentacion img:hover {
  transform: scale(2);
}

h1 {
  padding-top: 0.5em;
  font-family: "Creepster", cursive;
  -webkit-text-stroke: 3px rgb(47, 180, 14);
  color: rgb(108, 13, 149);
  font-size: 3em;
  text-shadow: 0.3em 0.3em 0.5em rgb(47, 180, 14);
}

figure {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.presentacion {
  padding: 50px 50px 0px 50px;
}
a:active {
  position: relative;
  top: 2px;
}

@media (max-width: 700px) {
  #about {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 10rem;
  }
  figure {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 50%;
    height: 50%;
  }
}
</style>