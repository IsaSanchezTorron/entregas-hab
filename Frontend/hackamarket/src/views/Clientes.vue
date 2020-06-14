<template>
  <div class="productos">
    <!-- Uso del vue-headful para manejar título de página visible en navegador -->
    <vue-headful title="Listado de clientes" description="Listado de clientes" />
    <!--Llamada al componente menú en la cabecera de la página -->
    <menucustom></menucustom>
    <!--Uso del spinner hasta que obtengamos un primer resultado -->
    <spinner v-if="clientes.length === 0"></spinner>
    <!--Este contenedor usa un v-show para mostrarse a conveniencia -->
    <div class="contenedoreditar" v-show="showEditar">
      <!-- Los input usan v-model, son editables -->
      <input type="text" v-model="newNombre" name="nombre" />
      <input type="text" v-model="newApellido" name="apellido" />
      <input type="text" v-model="newCiudad" name="ciudad" />
      <input type="text" v-model="newEmpresa" name="empresa" />
      <!-- Botón que llama a la función de modificar -->
      <button @click="editClient()">✔️MODIFICAR</button>
    </div>

    <div class="contenedorclientes" v-show="true">
      <!-- Se llama desde la vista al componente que lista los clientes, espedificando 
      los arrays y pidiendo que se escuchen los eventos-->
      <listaclientes :clientes="clientes" v-on:editar="showEditClients" v-on:borrar="deleteClient"></listaclientes>
    </div>
    <!-- Llamada al footer a pié de página -->
    <footercustom></footercustom>
  </div>
</template>

<script>
// IMPORTACIONES PARA
// manejar peticiones, rutas, endpoints...
import axios from "axios";
// manejar nombres de página visibles en navegador
import vueHeadful from "vue-headful";
// personalizar los mensajes para el usuario
import Swal from "sweetalert2";
// componentes internos
import listaclientes from "@/components/ListaClientes.vue";
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import spinner from "@/components/Spinner.vue";


export default {
  name: "clientes",
  //Componentes que conforman esta vista:
  components: {
    listaclientes,
    menucustom,
    footercustom,
    spinner,
    vueHeadful,
  },

  data() {
    return {
      //Necesitamos inicializar los valores para todas las operaciones.
      clientes: [],
      id: null,
      newNombre: "",
      newApellido: "",
      newCiudad: "",
      newEmpresa: "",
      // Para el v-show del contenedor de edición
      showEditar: false,
    };
  },

  methods: {

    //FUNCIÓN PARA MOSTRAR TODOS LOS CLIENTES
    showClients() {
      console.log("response.data");
      let self = this;
      axios
        .get("http://localhost:3050/clientes")
        //SI SALE BIEN
        .then(function (response) {
          self.clientes = response.data;
        })
        //SI SALE MAL
        .catch(function (error) {
          console.error(error);
        });
    },

// FUNCIÓN PARA MOSTRAR DATOS DEL CLIENTE SELECCIONADO PARA EDITAR. V-ON.
    showEditClients(data) {
      this.id = data.id;
      this.newNombre = data.nombre;
      this.newApellido = data.apellido;
      this.newCiudad = data.ciudad;
      this.newEmpresa = data.empresa;
      this.showEditar = true;
    },

//FUNCIÓN PARA GUARDAR LOS DATOS MODIFICADOS. EDITAR CLIENTE. 

    editClient() {
      let self = this;
      axios
      // Hacemos un put, indicando la ruta a la que debe sumarse el id, en forma de "parámetro".
        .put("http://localhost:3050/clientes/update/" + self.id, {
          id: self.id,
          nombre: self.newNombre,
          apellido: self.newApellido,
          ciudad: self.newCiudad,
          empresa: self.newEmpresa,
        })
        //SI SALE BIEN
        .then(function (response) {
          Swal.fire({
            title: "✅",
            text: "Cliente actualizado!",
            confirmButtonText: " O.K. ",
          });
          location.reload();
        })
        //SI SALE MAL
        .catch(function (error) {
          console.log(error);
        });
    },

// FUNCIÓN PARA BORRAR UN CLIENTE

    deleteClient(data) {
      const self = this;
      axios
      // Hacemos una petición delete. En data va el cliente activo. 
        .delete("http://localhost:3050/clientes/del/" + data)
        //SI SALE BIEN
        .then(function (response) {
          Swal.fire({
            title: "✅",
            text: "Cliente borrado",
            confirmButtonText: " O.K. ",
          });

          location.reload();
        })

        //SI SALE MAL
        .catch(function (error) {
          console.error(error);
        });
    },
  },

//Llamada automática
  created() {
    this.showClients();
  },
};
</script>



<style scoped>
.contenedoreditar {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
input {
  margin: 6px;
}
</style>
