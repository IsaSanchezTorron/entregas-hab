<template>
  <div>
    <!--El menú custom que estará en la parte de arriba de todas las vistas excepto login y register-->
    <div id="nav">
      <!-- Los enlaces se hacen de manera dinámica, puede cambiar la ruta pero se mantiene el componente
      al invocarlo por su nombre-->
      <a>
        <router-link :to="{ name: 'Productos' }">Productos</router-link>
      </a>
      <a>
        <router-link :to="{ name: 'Clientes' }">Clientes</router-link>
      </a>
      <a>
        <router-link :to="{ name: 'AddClients' }">Añadir Clientes</router-link>
      </a>
      <a>
        <router-link :to="{ name: 'About' }">Contacto</router-link>
      </a>
      <!--Botón que llama a la función de LogOut -->
      <button @click="logoutUser()">Logout</button>
    </div>
  </div>
</template>

<script>

//IMPORTAMOS la función de vaciar el LogIn.
import {clearLogin} from "../api/utils";

export default {
  name: "menucustom",

  data(){
    return{
     
    
    };
  },

methods:{
  //Función de LogOut
  logoutUser(){
    //Nos lleva al login
    this.$router.push("/")
    // No deja datos en el logueo, vacío.
    return clearLogin();
  },
 
},


};
</script>

<style scoped>
#nav {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
}
</style>