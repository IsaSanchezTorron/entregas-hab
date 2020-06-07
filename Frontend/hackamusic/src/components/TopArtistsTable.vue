<template>
  <div class="contenedorArtists">
    <!--No son muy bonitas pero he decidido sacar por tablas el contenido ya que el mini proyecto
    de Rick y Morty lo hice con tarjetas-->
    <table>
      <thead>
        <tr>
          <!--Los titulitos de los campos -->
          <th>Artista</th>
          <th>Oyentes</th>
          <th>URL</th>
          <th>mbid</th>
          <th>imagen</th>
        </tr>
      </thead>

      <tbody>
        <!--En los tr hago el v-for que recorre el array tomando como clave el id -->
        <tr class="fichaArtist" v-for="artist in artists" :key="artist.id">
          <!--Le pido los campos concretos que me interesan y que previamente comprobé
          en la página de la API-->
          <td>
            <b>{{ artist.name }}</b>
          </td>
          <td>{{ artist.listeners }}</td>
          <td>
            <a href="artist.url">{{ artist.url }}</a>
          </td>
          <td>{{ artist.mbid }}</td>

          <!--La triste estrellita-->
          <td>
            <img :src="artist.image[2]['#text']" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

// Exportamos el componente y le indicamos el tipo de dato que es "artists".
export default {
  name: "topartistable",
  props: {
    artists: Array,
    search: "",
  },

  created() {
    api.getAll().then((response) => (this.artists = response.data.results));
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Scope+One&family=Special+Elite&display=swap");

thead tr th {
  font-family: "Cabin Sketch", cursive;
  -webkit-text-stroke: 0px white;
}

img {
  width: 50px;
}
</style>
