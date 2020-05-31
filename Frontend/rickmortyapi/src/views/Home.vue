<template>
  <div class="home">
    <!-- LOGO RICK Y MORTY -->
    <figure>
      <img src="../assets/foto.jpeg" width="650" height="200" />
    </figure>
    <!-- BARRA DE BÚSQUEDA -->
    <div class="busqueda">
      <label for="bySearch">Busca tu personaje</label>
      <input
        v-model="search"
        id="search"
        name="bySearch"
        type="search"
        title="Busca por id, nombre,estado, especie o género"
        placeholder
      />
    </div>
    <!-- CONTENEDOR PARA DAR PROPIEDADES FLEXBOX -->
    <div class="contenedor">
      <CharCard
        v-for="char in filteredChars"
        :key="char.id"
        :charName="char.name"
        :charId="char.id"
        :charGender="char.gender"
        :charStatus="char.status"
        :charSpecies="char.species"
        :charOrigin="char.origin.name"
        :charLocation="char.location.name"
        :charImage="char.image"
      ></CharCard>
    </div>
    <Footer></Footer>

    <!-- PRINTEANDO MI ARRAY DE LA API -->
    <!--
    <ul>
      <li v-for="char in chars" :key="char.id">{{ char.name }}</li>
    </ul>-->
  </div>
</template> 

<script>
// @ is an alias to /src
import CharCard from '@/components/CharCard.vue';
import Footer from '@/components/Footer.vue';

//IMPORTANDO LA CONFIGURACIÓN DE LA API
import api from '@/api/api.js';

export default {
  name: 'Home',
  components: {
    CharCard,
    Footer
  },

 data(){
   return{
     chars:[],
     search:''
   }
 },

 computed:{
   filteredChars(){
     //SI SEARCH ESTÁ VACÍO
     if(!this.search){
       return this.chars
     }
     // SI SEARCH TIENE ALGO
     return this.chars.filter( char =>
     char.name.toLowerCase().includes(this.search.toLowerCase()) ||
     char.status.toLowerCase().includes(this.search.toLowerCase()) ||
     char.gender.toLowerCase().includes(this.search.toLowerCase()) ||
     char.species.toLowerCase().includes(this.search.toLowerCase()) ||
     char.id.toString().includes(this.search)
     )
   }

 },

  created(){
    api.getAll().then(response => (this.chars= response.data.results))
  }
}


</script>


<style scoped >
.busqueda {
  width: 99%;
  font-size: 3em;
  border-radius: 4%;
  font-family: "Creepster", cursive;
  -webkit-text-stroke: 3px rgb(47, 180, 14);
  color: rgb(108, 13, 149);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0px 0px;
}

input {
  width: 280px;
  height: 40px;
  border: solid 2px rgb(47, 180, 14);
  border-radius: 3%;
  font-size: 1em;
  box-shadow: 4.5px 6px 10px rgb(47, 180, 14);
}
.busqueda label {
  padding: 0px 25px;
  text-shadow: 0.3em 0.3em 0.5em rgb(47, 180, 14);
}

.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

@media (max-width: 700px) {
  .busqueda {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-height: 10rem;
    width: auto;
  }

  #home {
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
  }
  figure img {
    width: 50%;
    height: 50%;
  }
}
</style>
