<template>
  <div>
    <!--El menú custom que estará en la parte de arriba de todas las vistas -->
    <div id="nav">
      <!-- Los enlaces se hacen de manera dinámica, puede cambiar la ruta pero se mantiene el componente
      al invocarlo por su nombre -->
      <a>
        <router-link :to="{ name: 'Home' }">Inicio</router-link>
      </a>
      <a>
        <router-link :to="{ name: 'TopArtists' }">Artistas</router-link>
      </a>
      <a>
        <router-link :to="{ name: 'TopTracks' }">Canciones</router-link>
      </a>
      <a>
        <router-link :to="{ name: 'About' }">Contacto</router-link>
      </a>
    </div>
  </div>
</template>

<script>
//Exportamos as allways el componente que acabamos de crear
export default {
  name: "MenuCustom",
};
</script>
<style>
a {
  margin: 0 auto;
  text-decoration: none;
  font-size: 1.2em;
  transition: background-color 0.5s;
  padding: 2.3em;

}
#nav {
  padding: 15px;
}
</style>
