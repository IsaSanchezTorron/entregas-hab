<template>
  <div>
    <!--Encabezado de página -->
    <h2>Nuestros productos</h2>
    <!-- Forumulario de búsqueda -->
    <div id="formulario">
      <label for="bySearch">Búsqueda</label>
      <br />
      <input
        v-model="search"
        id="search"
        name="bySearch"
        type="search"
        placeholder="🔍 Nombre/Descripción"
      />
    </div>

    <div class="contenedor">
      <br />
      <!-- Contenedor para dar formato a la ficha de productos, lo cargamos con el array de productos filtrados -->
      <div class="productoscontenedor" v-for="producto in filteredProducts" :key="producto.id">
        <p>
          <b>id.:</b>
          {{producto.id}}
        </p>
        <p>
          <b>Nombre:</b>
          {{producto.nombre}}
        </p>
        <p>
          <b>Descripción:</b>
          {{producto.descripcion}}
        </p>
        <!-- Con una clase dinámica manejo los colores en función del estado del producto -->
        <p
          :class="{green: producto.estado === 'disponible', red: producto.estado ==='no disponible' }"
        >
          <b>Estado:</b>
          {{producto.estado}}
        </p>
        <p>
          <img :src="producto.img" />
          <a :href="producto.img"></a>
        </p>
        <p>
          <b>Precio:</b>
          {{ producto.precio }}
        </p>
        <p>
          <b>Stock:</b>
          {{ producto.stock }}
        </p>
        <!-- El botón de comprar, hace una llamada a la función que nos envía un Sweet Alert -->
        <button @click="speak()">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
// IMPORTAMOS PARA
// enviar mensajes custom
import Swal from "sweetalert2";

export default {
name: 'listaproductos',
props:{
  // Le indicamos que está recibiendo un array.
productos: Array,
},

data(){
  return {
    // Inicializamos un string vacío que contendrá la búsqueda.
    search:"",
}
},


computed: {
  //FUNCIÓN PARA FILTRAR PRODUCTOS
    filteredProducts() {
      // Si en la búsqueda no hay nada nos devuelve todo.
      if (!this.search) {
        return this.productos;
      }
      return this.productos.filter(
        (producto) =>
          producto.nombre.toLowerCase().includes(this.search.toLowerCase())  ||
          producto.descripcion.toLowerCase().includes(this.search.toLowerCase()) 
      )
    },

},

methods:{
// Método para el botón de "comprar"
speak(){
  Swal.fire({
    title: "🛒",
    text:`Hemos añadido este producto a tu carrito`,
    confirmButtonText: "Continuar comprando",

  });

},

}


};
</script>

<style scoped>
/* Para las clases dinámicas, defino rojo y verde */
.red {
  color: red;
}

.green {
  color: green;
}
.productoscontenedor {
  box-shadow: 2px 2px 2px 2px #888888;
  padding: 3em;
  width: 300px;
  margin: 10px auto;
  border-radius: 20px;
}

.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: 10px auto;
}
img {
  width: 250px;
  height: 250px;
  border-radius: 20px;
  transition: transform 0.5s ease-in-out;
}
img:hover {
  transform: scale(1.3);
}

#formulario {
  padding: 2em;
}
</style>