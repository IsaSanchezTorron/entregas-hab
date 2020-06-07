<template>
  <div class="contenedor">
    <vue-headful title="Top Artistas" />
    <!-- Componente siempre ahí -->
    <menucustom></menucustom>

    <spinner v-if="artists.length === 0"></spinner>

    <h1>TOP DE LOS ARTISTAS MÁS ESCUCHADOS</h1>

    <!--Componente y su equivalencia de arrays -->
    <div class="contenedorArtist">
      <input
        v-model="search"
        id="search"
        name="bySearch"
        type="search"
        placeholder="Busca por el nombre del artista"
      />
      <topartistable :artists="filteredArtists"></topartistable>
    </div>

    <!-- footer -->
    <footercustom></footercustom>
  </div>
</template>

<script>

//Conexión con la API e importaciones pertinentes de lo que está visible en la vista.
import api from "@/api/index.js";
import topartistable from "@/components/TopArtistsTable.vue";
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import spinner from "@/components/Spinner.vue";

export default {
  //Todo para fuera
  name: "TopArtists",
  components: {
    topartistable,
    menucustom,
    footercustom,
 
    spinner,
  },

  data() {
    return {
      artists: [],
      search: "",
    };
  },


  computed: {

filteredArtists() { 
  if(!this.search) {
        return this.artists;
    }else{

      return this.artists.filter(artist=> artist.name.toLowerCase().includes(this.search.toLowerCase())
      
      );
      }
    }
  },


  //Hook. Recojo la info con esta arrow function en el array del return.
  created() {
    api
      .getArtists()
      .then((response) => (this.artists = response.data.topartists.artist));
  },


}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Scope+One&family=Special+Elite&display=swap");

h1 {
  font-family: "Cabin Sketch", cursive;
  font-size: 2em;
  -webkit-text-stroke: 0.4px black;
}
input {
  width: 300px;
  height: 30px;
  margin: 30px;
}
</style>