<template>
  <div class="contenedorlogin">
    <!-- Uso del vue headful para nombrar los títulos de pag. visibles en navegador -->
    <vue-headful title="Login" description="Página de login" />
    <h2>Haz login 👇</h2>
    <br />
    <!-- Input para campo email -->
    <input type="text" placeholder="Tu usuario" v-model="email" />
    <br />
    <br />
    <!--Input para campo password -->
    <input type="password" placeholder="Tu contraseña" v-model="password" />
    <br />
    <br />
    <!-- Botón con llamada a la función Login -->
    <button @click="login()">LOGIN</button>
    <br />
    <br />

    <div id="nav">
      <!-- Enlace a la vista de Registro desde el Login -->
      <p>Si no tienes cuenta, regístrate aquí 👇</p>
      <router-link :to="{ name: 'Register' }">Registro</router-link>
    </div>
  </div>
</template>

<script>
// Importamos
//el vueHeadful para majer títulos de página
import vueHeadful from "vue-headful";
//La función de Login desde utils.
import { loginUser } from "../api/utils";
//El sweetAlert para alertar de posibles errores con globos más bonitos.
import Swal from "sweetalert2";

export default {
  name: "login",
  components: { vueHeadful },
  data() {
    return {
      // Declaro comos strings vacíos los campos que se requieren para hacer login.
      email: "",
      password: "",
    };
  },

  methods: {
    //Llamada asíncrona a login, la respuesta al botón del HTML.
    async login() {
      try {
        //INTENTO HACER LOGIN
        await loginUser(this.email, this.password);
        //SI HAY LOGIN QUE ME LLEVE A LA TIENDA
        this.$router.push("/productos");
        //Console.log de testeo
        console.log("login correcto");
      } catch (err) {
        alert(`Error: ${err}`);
      }
    },
  },
};
</script>

<style escoped>
.contenedorlogin {
  box-shadow: 2px 2px 2px 2px #888888;
  padding: 3em;
  width: 300px;
  margin: 0 auto;
}
</style>
