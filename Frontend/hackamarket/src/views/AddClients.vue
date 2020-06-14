<template>
  <div id="contenedorprincipal">
    <!-- Uso del vue headful para manejar títulos de página visibles en el navegador -->
    <vue-headful title="Añadir clientes" description="Añadir clientes" />
    <!-- Inserción del componente menú en la cabecera de la página -->
    <menucustom></menucustom>
    <!--Contenedor que contiene el formulario -->
    <div class="contenedorformulario">
      <!-- Uso del required para controlar la aparición del mensaje mediante el uso de v-show -->
      <p v-show="required">Rellena todos los datos, por favor</p>
      <!-- Campo de inserción del nombre que va a ir hacia la BBDD -->
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" placeholder="Nombre del cliente" v-model="nombre" />
      <br />
      <br />
      <!-- Campo de inserción del apellido que va a ir hacia la BBDD -->
      <label for="apellido">Apellido:</label>
      <input type="text" name="apellido" placeholder="Apellido del cliente" v-model="apellido" />
      <br />
      <br />
      <!-- Campo de inserción de la empresa que va a ir hacia la BBDD -->
      <label for="empresa">Empresa:</label>
      <input type="text" name="empresa" placeholder="Empresa del cliente" v-model="empresa" />
      <br />
      <br />

      <!-- Campo de inserción de la ciudad que va a ir hacia la BBDD -->
      <label for="ciudad">Ciudad:</label>
      <input type="text" name="ciudad" placeholder="Ciudad del cliente" v-model="ciudad" />
      <br />
      <br />
      <!-- Botón para "añadir" con llamada a la función a la que se le pasan todos los campos insertados como parámetros -->
      <br />
      <button @click="addClient(nombre, apellido, empresa, ciudad)">🆗 AÑADIR CLIENTE</button>
    </div>

    <!--Inserción del componente footer -->
    <footercustom></footercustom>
  </div>
</template>

<script>

// IMPORTACIONES PARA
// manejo de rutas, endpoints, 
import axios from "axios";
// manejo de mensajes custom
import Swal from "sweetalert2";
// manejo del título visible en navegador
import vueHeadful from "vue-headful";
// componentes internos
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";


export default {
  name: "addclients",
  components: {
    // componentes de la vista
    menucustom,
    footercustom,
    vueHeadful,
  },

  data() {
    return {
      // Inicializamos strings vacíos para los campos que vamos a procesar.
      nombre: "",
      apellido: "",
      ciudad: "",
      empresa: "",
      // Con el uso de este booleano hacemos la verificación de si hay campos vacíos
      correctData: false,
      // Con el uso de este booleano podemos manejar el v-show que hace visible un mensaje de alerta en el HTML
      required: false,
    };
  },

  methods: {

    //Validamos que no haya datos sin rellenar
    validatingData() {
      if (
        this.nombre === "" ||
        this.apellido === "" ||
        this.ciudad === "" ||
        this.empresa === ""
      ) {
        //Damos valores a los booleanos en función de los resultados para regular el uso del v-show y el control del paso de datos.
        this.correctData = false;
        this.required = true;
      } else {
        this.correctData = true;
        this.required = false;
      }
    },

// FUNCIÓN PARA AÑADIR CLIENTE CON LOS PARÁMETROS REQUERIDOS
    addClient(nombre, apellido, empresa, ciudad) {
//Comprobamos que todos los campos están cumplimentados.
      this.validatingData();
      //En caso de que la respuesta sea O.K.
      if (this.correctData === true) {
        let self = this;
        // ... hacemos petición post con todos los campos listos para viajar.
        axios
          .post("http://localhost:3050/add-client", {
            nombre: self.nombre,
            apellido: self.apellido,
            empresa: self.empresa,
            ciudad: self.ciudad,
          })
          // Vaciamos campos, no se muestra el mensaje de alerta en el HTML.
          .then(function (response) {
            self.emptyFields();
            self.required = false;
          // Enviamos un mensaje al usuario confirmando la operación.
            Swal.fire({
              title: "✅",
              text: `Cliente añadido a la base de datos.`,
              confirmButtonText: "O.K.",
            });
            //Console.log de control 
            console.log(response);
          }) //catcheamos errores
          .catch(function (error) {
            console.error(error);
          });

          // En caso de que falten campos por rellenar, enviamos mensaje al usuario.
      } else {
        Swal.fire({
          title: "⚠️",
          text: `Todos los campos del formulario son obligatorios`,
          confirmButtonText: "O.K.",
        });
      }
    },
// Función de limpieza de campos.
    emptyFields() {
      this.nombre = "";
      this.apellido = "";
      this.ciudad = "";
      this.empresa = "";
    },
  },
};
</script>



<style scoped>
.contenedorformulario {
  box-shadow: 2px 2px 2px 2px #888888;
  padding: 7em;
  width: 200px;
  font-size: 14px;
  margin: 70px auto;
  border-radius: 20px;
}
</style>
