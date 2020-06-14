<template>
  <div class="productos">
    <!--Vue headful para titular las páginas, visible en el navegador -->
    <vue-headful title="Productos" />
    <!--Llamada al menú para que encabece la página-->
    <menucustom></menucustom>
    <!--Llamada al spinner con condicional de que en cuanto nos dé el primer resultado, deje de cargar -->
    <spinner v-if="productos.length === 0"></spinner>
    <!--Indicamos la equivalencia de los arrays para productos -->
    <div class="contenedorproductos">
      <listaproductos :productos="productos"></listaproductos>
    </div>
    <footercustom></footercustom>
  </div>
</template>

<script>
// Importaciones para 
// manejar rutas, endpoints...
import axios from "axios";
// manejar títulos de página visibles en navegador.
import vueHeadful from "vue-headful";
// componentes internos:
import listaproductos from "@/components/ListaProductos.vue";
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import spinner from "@/components/Spinner.vue";

export default {
  
  name: "productos",
  // Todos los componentes que lo "componen"
  components: {
    listaproductos,
    menucustom,
    footercustom,
    spinner,
    vueHeadful,
  },
  // El array que manejamos con los productos.
  data() {
    return {
      productos: [],
    };
  },


  methods: {

    //FUNCIÓN PARA MOSTRAR TODOS LOS PRODUCTOS

    showProducts() {
      let self = this;
      axios
        .get("http://localhost:3050/productos")
        //SI SALE BIEN
        .then(function (response) {
          self.productos = response.data;
        })
        //SI SALE MAL
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  // LA LLAMADA A LA FUNCIÓN EN LA CARGA
  created() {
    this.showProducts();
  },
};
</script>
