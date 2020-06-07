<template>
  <div class="contenedor">
    <!--Recurrente menucustom para todas las vistas -->
    <menucustom></menucustom>
    <spinner v-if="tracks.length === 0"></spinner>

    <h1>TOP DE LAS CANCIONES MÁS ESCUCHADAS</h1>

    <!--Traigo el componente toptracks y le indico la equivalencia de arrays -->
    <div class="contenedorTracks">
      <toptracks :tracks="tracks"></toptracks>
    </div>

    <!--Querido footer-->
    <footercustom></footercustom>
  </div>
</template>spinner v-if="artists.length === 0"></spinner>spinner v-if="artists.length === 0"></spinner>

<script>
//Importaciones de rigor: conexión a la API y componentes
import api from "@/api/index.js";
import toptracks from "@/components/TopTracks.vue";
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import spinner from "@/components/Spinner.vue";

//Exporto la vista con sus componentes
export default {
  name: "TopTracks",
  components: {
    toptracks,
    menucustom,
    footercustom,
    spinner,
  },

  // Hook. La API me da la información en ese array precioso del return.
  created() {
    api
      .getTopTracks()
      .then((response) => (this.tracks = response.data.tracks.track));
  },

  data() {
    return {
      tracks: [],
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: "Cabin Sketch", cursive;
  font-size: 2em;
  -webkit-text-stroke: 0.4px black;
}
</style>
