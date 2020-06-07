<template>
  <div class="contenedorTracks">
    <!--Otro componente que sale por vista, lo imprimo directamente en la tabla
    con un v-for diciéndole qué quiero quem e imprima-->

    <table>
      <thead>
        <tr>
          <th>Canción</th>
          <th>Artista</th>
          <th>Reproducciones</th>
          <th>Duración</th>
          <th>URL canción</th>
          <th>mbid Canción</th>
          <th>mbid Artista</th>
          <th>URL Artista</th>
        </tr>
      </thead>
      <tbody>
        <tr class="fichaTrack" v-for="track in tracks" :key="track.id">
          <td>
            <b>{{ track.name }}</b>
          </td>
          <td>
            <b>{{ track.artist.name }}</b>
          </td>
          <td>{{ track.listeners }}</td>
          <td>{{ track.duration }} seg.</td>
          <td>
            <a :href="track.url">{{ track.url }}</a>
          </td>

          <td>{{ track.mbid }}</td>
          <td>{{ track.artist.mbid }}</td>
          <td>
            <a :href="track.artist.url">{{ track.artist.url }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//La exportación del componente, listo para ser llamado por la vista.
export default {
  name: "toptracks",
  props: {
    tracks: Array,
  },
};
</script>

<style scoped>
table {
  font-size: 0.8em;
}
</style>
