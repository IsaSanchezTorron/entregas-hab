<template>
  <div class="home">
    <!-- He hecho mi componente de menú para ponerlo en todas las vistas -->
    <menucustom></menucustom>

    <!--El espinner funcionando dinámicamente hasta que se cargue el primer registro de la API-->
    <spinner v-if="tags.length === 0"></spinner>

    <!-- Meto los elementos en divs para poder darles propiedades flexbox -->
    <div id="cabecera">
      <!--<img id="logo" src="../assets/fotoc.png" />-->
      <h1>
        HACK
        <br />A
        <br />MUSIC
      </h1>

      <h2>Tendencias musicales al día</h2>
    </div>
    <div>
      <div class="contenedorHome">
        <div class="contenedorRadios">
          <radios></radios>
        </div>

        <div class="contenedorTags">
          <!--Llamo al componente y le digo que los arrays son el mismo -->
          <TopTags :tags="tags"></TopTags>
        </div>

        <!--He creado una vista de videos, para ponerla aquí en el home junto a la sositabla para darle un poco de
        vidilla-->
        <div class="contenedorVideos">
          <videos></videos>
        </div>
      </div>
    </div>

    <!--También tengo mi componente footer para todas las vistas-->
    <footercustom></footercustom>
  </div>
</template>

<script>
// @ is an alias to /src

// Aquí es donde importo todos los componentes que necesito en la Home y también la conexión con la API.

import api from "@/api/index.js";
import TopTags from "@/components/TopTags.vue";
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import videos from "@/components/Videos.vue";
import radios from "@/components/Radios.vue";
import spinner from "@/components/Spinner.vue";

//Exportación de la vista y sus componentes
export default {
  name: "Home",
  components: {
    TopTags,
    menucustom,
    footercustom,
    videos,
    radios,
    spinner,
  },
  created() {
    // Hook para tomar la información que me devuelve la API
    api.getTopTags().then((response) => (this.tags = response.data.tags.tag));
  },

  data() {
    return {
      // Mi array de vuelta lleno de cositas con la response que se va para el componente.
      tags: [],
      search: "",
    };
  },
};
</script>

<!-- Aquí es donde hago chorricientas cosas, sobretodo flex y estilos aunque lo que más ocupa son los degradados. 
También soy muy fan de ponerle bordecillo a la tipografías -->

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Scope+One&family=Special+Elite&display=swap");

#cabecera {
  font-family: "Cabin Sketch", cursive;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  flex-direction: column;
  -webkit-text-stroke: 0.5px rgb(233, 210, 210);
  color: transparent;
  background-color: rgb(209, 61, 214);
  margin: 0 auto;
  background: rgba(252, 236, 252, 1);
  background: -moz-linear-gradient(
    left,
    rgba(252, 236, 252, 1) 8%,
    rgba(253, 170, 227, 1) 69%,
    rgba(253, 137, 215, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(8%, rgba(252, 236, 252, 1)),
    color-stop(69%, rgba(253, 170, 227, 1)),
    color-stop(100%, rgba(253, 137, 215, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(252, 236, 252, 1) 8%,
    rgba(253, 170, 227, 1) 69%,
    rgba(253, 137, 215, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(252, 236, 252, 1) 8%,
    rgba(253, 170, 227, 1) 69%,
    rgba(253, 137, 215, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(252, 236, 252, 1) 8%,
    rgba(253, 170, 227, 1) 69%,
    rgba(253, 137, 215, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(252, 236, 252, 1) 8%,
    rgba(253, 170, 227, 1) 69%,
    rgba(253, 137, 215, 1) 100%
  );
  background-image: url("../assets/cielitolindo.jpeg");
  background-size: cover;
  background-position: center;
}

h1 {
  font-family: "Cabin Sketch", cursive;
  font-size: 2.5em;
  -webkit-text-stroke: 0.5px white;
  margin: 40px;
}

.contenedorHome {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  align-self: center;
  margin: 40px;
}
.contenedorVideos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
}

.contenedorRadio {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
}

#cabecera {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1.3em;
  box-shadow: 4px 4px 4px 4px black;
}

#logo {
  width: 150px;
  padding: 10px;
}

#gentefeliz {
  width: 350px;
  padding: 30px;
}

a:hover {
  filter: opacity(0.5);
}
h2 {
  padding: 2em;
}

/*Hola pseudoelemento!*/
h2::first-letter {
  font-size: 1.8em;
}
</style>
