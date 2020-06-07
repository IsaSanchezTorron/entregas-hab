<template>
  <div class="about">
    <!--El menú, allways-->
    <menucustom></menucustom>

    <div id="contenedorCuerpoAbout">
      <div id="informacionpersonal">
        <h3>Soy Isa Sánchez Torrón</h3>
        <img
          src="../assets/yo.jpg"
          alt="foto de la autora"
          title="Yo toda contenta haciendo la primera entrega de Front"
        />
        <p>
          He hecho este ejercicio sobre la API de
          <a href="https://www.last.fm/es/home">LAST FM</a>utilizando
          <a href="https://vuejs.org/">VUE JS,</a>con ayuda de las librerías
          <a
            href="https://es.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html"
          >AXIOS</a>
          y
          <a href="https://sweetalert2.github.io/">Sweet Alert 2</a>
          propuesto por mi profesora
          <a
            href="https://twitter.com/helleworld_?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >Desiré M. Carmona</a>y como parte de las entregas para el Bootcam de
          <a
            href="https://hackaboss.com/?origen=gads&utm_term=hack%20a%20boss&utm_campaign=%5BBrand%5D%20HACK%20A%20BOSS&utm_source=adwords&utm_medium=ppc&hsa_acc=1070315109&hsa_cam=10071656143&hsa_grp=102933325324&hsa_ad=435563871322&hsa_src=g&hsa_tgt=kwd-874532447671&hsa_kw=hack%20a%20boss&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwoPL2BRDxARIsAEMm9y_5W7GO2ZsO0cNmhbXD_g_jbtmbHB60zGkQm3eOC4VnrJJmEJrne3gaAurjEALw_wcB"
          >Hack a Boss</a>
        </p>

        <p></p>
      </div>
      <div id="gentefeliz">
        <p>
          <img src="../assets/gentefeliz1.jpg" alt="foto de personas felices" />
        </p>

        <button @click="speak()">¡SORPRESA!</button>
      </div>

      <div id="formulariocontacto">
        <form action="/contacto" method="post">
          <ul>
            <li>
              <label for="name">
                Nombre
                <br />
              </label>
              <input type="text" id="name" name="nombreusuario" />
            </li>
            <li>
              <label for="mail">
                Correo electrónico:
                <br />
              </label>
              <input type="email" id="mail" name="mailusuario" />
            </li>
            <li>
              <label for="msg">
                Mensaje:
                <br />
              </label>
              <textarea id="msg" name="mensajeusuario"></textarea>
            </li>
          </ul>
        </form>
        <button id="botonformulario" @click="submitform()">ENVIAR</button>
      </div>
    </div>

    <!-- Aquí de nuevo el footer -->
    <footercustom></footercustom>
  </div>
</template>

<script>
//Aquí las tradicionales importaciones de componentes
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import Swal from "sweetalert2";

//Y la exportación de la vista con sus componentes
export default {
  name: "About",
  components: {
    menucustom,
    footercustom,
  },

  methods: {
    speak() {
      Swal.fire({
        title: "Gente Feliz",
        text:
          "¡Esta es una foto de gente feliz para ti! Mis amigas Olalla, Rubi, Mariquiña y mi Paquita",
        confirmButtonText: "🌼 O.K. 🐳 ",
      });
    },

    submitform() {
      Swal.fire({
        title: "Era mentirijilla",
        text:
          "Como este es un ejercicio no tenemos un formulario funcional, puedes contactar en isasancheztorron@gmail.com",
        confirmButtonText: "🤓 O.K. 📥",
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 400px;
  border-radius: 50px;
}

button {
  background: rgb(238, 141, 193);
  padding: 0.5em;
  font-family: "Cabin Sketch", cursive;
  font-size: 1.2em;
  -webkit-text-stroke: 0.4px rgb(15, 15, 15);
  box-shadow: 1px 1px 1px 1px black;
}

#contenedorCuerpoAbout {
  display: flex;
  flex-direction: row;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
}

#formulariocontacto {
  width: 30%;
}
#gentefeliz {
  width: 30%;
}

ul {
  list-style: none;
}
li {
  padding-top: 1em;
}

input {
  width: 400px;
  box-shadow: 1px 1px 1px 1px black;
}
textarea {
  width: 400px;
  height: 200px;
  box-shadow: 1px 1px 1px 1px black;
}
label {
  font-size: 1.3em;
}

#informacionpersonal {
  width: 30%;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#informacionpersonal p {
  text-align: start;
  font-size: 0.9em;
}
</style>
