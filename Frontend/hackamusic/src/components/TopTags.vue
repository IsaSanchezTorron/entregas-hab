<template>
  <div class="contenedorTags">
    <!--Aquí mi componente - tabla con los más tagueados que sale por la home -->
    <h1 id="titulo"># LO MÁS REFERENCIADO #</h1>

    <table>
      <thead>
        <tr>
          <th>Tag</th>
          <th>Taggings</th>
          <th>URL</th>
          <th>Reach</th>
        </tr>
      </thead>

      <tbody>
        <!--Recorremos nuestro array-->
        <tr class="fichaTags" v-for="tag in tags" :key="tag.id">
          <!--Le decimos qué debe imprimir -->
          <td>
            <b>{{ tag.name }}</b>
          </td>
          <td>{{ tag.taggings }}</td>
          <td>
            <a :href="tag.url">{{ tag.url }}</a>
          </td>
          <td>{{ tag.reach }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//La exportación del componente y del array.

export default {
  name: "TopTags",
  props: {
    tags: Array,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Scope+One&family=Special+Elite&display=swap");
thead tr th {
  font-family: "Cabin Sketch", cursive;
  -webkit-text-stroke: 0px white;
}
#titulo {
  font-family: "Cabin Sketch", cursive;
  padding: 1em;
  -webkit-text-stroke: 0.3px black;
}
.contenedorTags {
  width: 100%;
}
</style>
