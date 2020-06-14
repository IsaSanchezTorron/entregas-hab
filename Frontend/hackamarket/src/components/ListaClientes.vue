<template>
  <div>
    <!--Encabezado de página -->
    <h2>Nuestros clientes</h2>

    <!-- Formulario para la búsqueda -->
    <div id="formulario">
      <label for="bySearch">Búsqueda</label>
      <br />
      <input
        v-model="search"
        id="search"
        name="bySearch"
        type="search"
        placeholder="🔍 Nombre, apellido, empresa, ciudad "
      />
    </div>

    <!-- Contenedor para dar formato a las fichas de cliente, recorremos el array de clientes filtrados en un v-for -->
    <div class="contenedor">
      <div class="clientescontenedor" v-for="(cliente,index) in filteredClientes" :key="cliente.id">
        <p>
          👤
          <b>{{cliente.id}}</b>
        </p>
        <p>
          <b>
            <u>{{cliente.nombre}}</u>
          </b>
        </p>
        <p>
          <b>
            <u>{{cliente.apellido}}</u>
          </b>
        </p>
        <p>
          CIUDAD:
          <b>{{cliente.ciudad}}</b>
        </p>
        <p>
          EMPRESA:
          <b>{{cliente.empresa}}</b>
        </p>
        <hr />
        <br />
        <div id="botones">
          <!--Eventos de botón para ser escuchados -->
          <button @click="deleteClientsEvent(index)">🗑 BORRAR</button>
          <button @click="editClientsEvent(index)">📝 EDITAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";


export default {

name: 'listaclientes',


data(){
    return {
      // Necesitamos inicializar un string vacío donde referenciar la búsqueda.
search:"",
        };
},

props:{
  //Le decimos el tipo de dato que recibe
clientes: Array,

},



computed: {
  // Función para filtrar clientes en función del texto en el campo de búsqueda, si no hay nada, nos lo devuelve todo.
    filteredClientes() {
      if (!this.search) {
        return this.clientes;
      }
      return this.clientes.filter(
        (cliente) =>
          cliente.nombre.toLowerCase().includes(this.search.toLowerCase())  ||
          cliente.apellido.toLowerCase().includes(this.search.toLowerCase()) ||
          cliente.empresa.toLowerCase().includes(this.search.toLowerCase()) ||
          cliente.ciudad.toLowerCase().includes(this.search.toLowerCase()) 
          
             
      )
    },

},



methods: {

// Eventos de botón, necesitan viajar con la información de cuál es la llamada y cuál es el índice necesario para la acción.
 
 editClientsEvent(index){
   let data = this.clientes[index];
   this.$emit('editar', data)
 },

 deleteClientsEvent(index){
   let data = this.clientes[index].id;
   this.$emit('borrar', data)
 },



}};


</script>

<style scoped>
.clientescontenedor {
  box-shadow: 2px 2px 2px 2px #888888;
  padding: 3em;
  width: 200px;
  border-radius: 20px;
  margin: 10px;
}

.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
}

#botones {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#formulario {
  padding: 2em;
}
</style>