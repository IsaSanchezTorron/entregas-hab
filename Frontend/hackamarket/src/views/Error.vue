<template>
  <div id="contenedorerror">
    <!-- Uso del vue-headful para definir títulos de página visibles en navegador -->
    <vue-headful title="Error 404" />
    <!--Llamo al componente menú para que encabece la página -->
    <menucustom></menucustom>
    <!-- Un primer mensaje que te comenta la situación -->
    <h3>
      Lo sentimos, la página a la que estás intentando acceder no existe o no
      tienes permisos para acceder a ella.
    </h3>
    <br />
    <!--Posibles soluciones a semejante tesitura -->
    <p>
      👆 Si ha sido un accidente puedes
      <b>continuar tu navegación en el menú superior.</b>
    </p>
    <br />
    <p>
      👥 Si quieres
      <b>registrarte como usuario</b> para acceder a la Tienda puedes hacerlo
      desde este enlace
    </p>
    <a>
      🔗
      <router-link :to="{ name: 'Register' }">Registro de nuevo usuario.</router-link>🛒
      <br />
    </a>
    <br />
    <p>
      🔴 Si crees que hay algún error y deberías tener acceso, puedes ponerte en
      contacto con nosotros en cualquiera de las redes sociales de la parte
      inferior.
    </p>

    <br />
    <br />
    <!-- Imagen llamativa que nos deja clara la situación de un solo vistazo y que recogí en la web, no sé dónde.-->
    <img src="../assets/error404.jpg" alt="Imagen de error 404" />
    <!-- Llamada al footer a pie de página -->
    <footercustom></footercustom>
  </div>
</template>

<script>
// Importaciones para
// manejar los títulos de página visibles en navegador
import vueHeadful from "vue-headful";
// componentes internos
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "error",
  //componentes presentes en nuestra vista
  components: { menucustom, footercustom, vueHeadful },
};
</script>

<style scoped>
#contenedorerror {
  width: 80%;
  margin: 0 auto;
}

img {
  border-radius: 90px;
  width: 65%;
  box-shadow: 2px 2px 2px 2px #888888;
}
</style>
