<template>
  <div id="contenedor">
    <div class="card">
      <!--Aquí agrupo nombre, foto, id y gusanito para darle estilos -->
      <div class="nombreyfoto">
        <h3>{{ charName }}</h3>
        <p>
          <b style="color: rgb(11, 148, 11);"></b>
          {{ charId }}
        </p>
        <img
          :src="`https://rickandmortyapi.com/api/character/avatar/${charId}.jpeg`"
          border="1"
          alt="Foto de personaje de Rick y Morty"
        />
        <p>🐛</p>
      </div>
      <!-- Aquí los datos en una clase para darle propiedades flexbox
      y utilizando clases dinámicas para cambiar los colores referentes al estado-->
      <div class="datos">
        <p :class="{ rojo: charStatus === 'Dead', gris: charStatus =='unknown'}">
          <b style="color: rgb(11, 148, 11);">:: Status ::</b>
          {{ charStatus }}
        </p>

        <p>
          <b style="color: rgb(11, 148, 11);">:: Specie ::</b>
          {{ charSpecies }}
        </p>

        <p>
          <b style="color: rgb(11, 148, 11);">:: Gender ::</b>
          {{ charGender }}
        </p>
        <p>
          <b style="color: rgb(11, 148, 11);">:: Origin ::</b>
          {{ charOrigin }}
        </p>

        <p>
          <b style="color: rgb(11, 148, 11);">:: Localization ::</b>
          {{ charLocation }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharCard',
  props: { 
      charName: String,
      charId: Number,
      charStatus: String,
      charSpecies: String,
      charGender: String,
      charOrigin: String,
      charLocation: String,
    
  },
 
}
</script>

<!--  Para los estilos,  me traigo la tipografía creepy de Google Fonts, ordeno con flexbox los elementos
y le doy coloritos, sombras y todo eso. Aquí es donde, lógicamente, se definen las propiedades de las clases
dinámicas -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Coming+Soon&family=Creepster&family=Freckle+Face&family=Open+Sans&family=Permanent+Marker&family=Roboto&family=Sunshiney&family=Walter+Turncoat&display=swap");

h3 {
  font-family: "Creepster", cursive;
  -webkit-text-stroke: 3px black;
  font-size: 2.5em;
  text-shadow: 0.3em 0.3em 0.5em rgb(28, 102, 9);
  color: greenyellow;
  padding-left: 1em;
  width: 70%;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 75px;
  box-shadow: 2.1px 5px 5px black;
  border-width: 0.1em;
  -webkit-box-reflect: below -40px -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      to(rgba(255, 255, 255, 0.26))
    );
  -webkit-filter: brightness(100%);
  filter: brightness(110%);
  -webkit-filter: contrast(120%);
  filter: contrast(120%);
  -webkit-filter: saturate(170%);
  filter: saturate(170%);
  transition: transform 0.5s ease-in-out;
}
img:hover {
  transform: scale(1.5);
}

.card {
  border-radius: 80px;
  width: 540px;
  height: 430px;
  padding-top: 0px;

  border: 5px solid black;
  background: rgb(118, 180, 98);
  background: rgb(70, 24, 89);
  background: rgb(239, 41, 250);
  background: linear-gradient(
    285deg,
    rgba(70, 24, 89, 1) 8%,
    rgba(231, 52, 192, 1) 100%,
    rgba(29, 31, 29, 1) 100%
  );
  box-shadow: 4.5px 6px 10px rgb(47, 180, 14);
}

p {
  color: greenyellow;
  font-family: "Creepster", cursive;
  font-size: 1.3em;
  -webkit-text-stroke: 1px black;
  padding: 0px 0px 0px 25px;
  text-shadow: 0.5em 0.5em 1em black;
}

.nombreyfoto {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2em 1em 1em 1em;
}

.datos {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

#contenedor {
  padding: 40px 20px 30px 50px;
}

.rojo {
  color: red;
}
.gris {
  color: rgb(63, 59, 59);
}
</style>
