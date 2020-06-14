<template>
  <!--Esta es mi vista para registro de usuario -->

  <!-- FORMULARIO -->
  <div class="contenedorformulario">
    <!--Uso del vue-headful para definir el título de las páginas, visible en el navegador -->
    <vue-headful title="Registro" />
    <!--En función del estado de "required" mostramos o no el mensaje; manejado en methods -->
    <p v-show="required">Tienes datos aún por rellenar</p>
    <!-- Se pide el mail o nombre de usuario para registro  en BBDD -->
    <label for="nombre">Mail o nombre de usuario:</label>
    <input type="text" name="mail" placeholder="mail de usuario" v-model="email" />
    <br />
    <br />
    <!-- Se pide la contraseña para registro en BBDD -->
    <label for="password">Contraseña:</label>
    <input type="password" name="password" placeholder="Tu contraseña" v-model="password" />
    <br />
    <br />
    <!-- El botón llama a la función de registrar usuario a la que se le pasan como parámetos ambos campos de la autenticación -->
    <button @click="registerUser(email, password)">REGISTRAR</button>
    <p>
      <a>
        <!--Para mejor navegación, incluyo un volver atrás -->
        🔙
        <router-link :to="{ name: 'Login' }">Volver al Login.</router-link>
      </a>
    </p>
  </div>
  <!-- /FORMULARIO -->
</template>

<script>
// Importamos herramientas necesarias para 
// control títulos de página visible en navegador
import vueHeadful from "vue-headful";
// manejo del envío de peticiones, endpoints...
import axios from "axios";
// librería para alertas personalizables
import Swal from "sweetalert2";

export default {
  //Exporto el componente nombrándole
  name: "Register",
  //Especifico los componentes visibles que contiene
  components: { vueHeadful },
  data() {
    //Defino dos strings vacíos para recibir la información
    return {
      email: "",
      password: "",
    //Booleano para saber si el estado de los datos listos para enviar es correcto.
      correctData: false,
    //Booleano para controlar el mensaje de advertencia visible en el HTML que es manejado más arriba a través de un v-show.
      required: false,
    };
  },

  methods: {

    // FUNCIÓN PARA COMPROBAR SI HAY CAMPOS VACÍOS
    validatingData() {
      if (this.email === "" || this.password === "") {
        this.correctData = false; //NO ENVIAR
        this.required = true; //MOSTRAMOS EL MENSAJE DE ADVERTENCIA
      } else {
        this.correctData = true; //SÍ ENVIAR
        this.required = false; //NO MOSTRAMOS EL MENSAJE
      }
    },

  //FUNCIÓN PARA REGISTRAR USUARIO
    registerUser(email, password) {
      // Validando datos del formulario, llamada a la función.
      this.validatingData(); 
      //Si la función nos da el o.k. de que todos los campos están completos.
      if (this.correctData === true) {
        let self = this;
        // Hacemos una petición de tipo post, enviando los datos.
        axios
          .post("http://localhost:3050/register", {
            email: self.email,
            password: self.password,
          })
          //Una vez se envían, los campos son limpiados.
          .then(function (response) {
            self.emptyFields();
            self.required = false;
            //Enviamos un mensaje al usuario de que el registro se ha realizado con éxito.
            Swal.fire({
              title: "Registro correcto",
              text: "Te has registrado correctamente",
              confirmButtonText: "O.K. 👍 ",
            });
          // Catcheamos errores posibles post limpiado de campos y mensaje de confirmación
          })
          .catch(function (error) {
            console.error(error);
          });
          // Si correctData === false, viene por aquí a avisarnos de que faltan campos por cubrir.
      } else {
        Swal.fire({
          title: "⚠️",
          text: `Todos los campos del formulario son obligatorios`,
          confirmButtonText: "O.K.",
        });
      }
    },
    // Una función para limpiar los campos que los reestablece a vacío y que una vez se ejecuta te manda a la página principal, la del Login.
    emptyFields() {
      this.email = "";
      this.password = "";
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* Un poco de sombrita, espacios, márgenes y tamaño para el contenedor de registro */

.contenedorformulario {
  box-shadow: 2px 2px 2px 2px #888888;
  padding: 7em;
  width: 200px;
  font-size: 14px;
  margin: 70px auto;
}
</style>
