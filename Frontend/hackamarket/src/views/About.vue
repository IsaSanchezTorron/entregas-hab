<template>
  <div class="about">
    <!--Uso del vue-headful para títulos de página en navegador -->
    <vue-headful title="About" />
    <!-- Inserción del componente menú en la cabecera -->
    <menucustom></menucustom>

    <!-- Información sobre el ejercicio con enlaces a las referencias -->
    <p>
      He hecho este ejercicio sobre una base de datos local con
      <a
        href="https://www.mysql.com/"
      >MySQL</a> utilizando
      <a href="https://vuejs.org/">VUE JS,</a> con ayuda de las librerías
      <a
        href="https://es.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html"
      >AXIOS</a>
      y
      <a href="https://sweetalert2.github.io/">Sweet Alert 2</a>
      propuesto por mi profesora
      <a
        href="https://twitter.com/helleworld_?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
      >Desiré M. Carmona</a>
      y como parte de las entregas para el Bootcam de
      <a
        href="https://hackaboss.com/?origen=gads&utm_term=hack%20a%20boss&utm_campaign=%5BBrand%5D%20HACK%20A%20BOSS&utm_source=adwords&utm_medium=ppc&hsa_acc=1070315109&hsa_cam=10071656143&hsa_grp=102933325324&hsa_ad=435563871322&hsa_src=g&hsa_tgt=kwd-874532447671&hsa_kw=hack%20a%20boss&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwoPL2BRDxARIsAEMm9y_5W7GO2ZsO0cNmhbXD_g_jbtmbHB60zGkQm3eOC4VnrJJmEJrne3gaAurjEALw_wcB"
      >Hack a Boss</a>
    </p>

    <!--Inserción del footer a pie de página -->
    <footercustom></footercustom>
  </div>
</template>

<script>

//IMPORTACIONES PARA
// manejar títulos en el navegador
import vueHeadful from "vue-headful";
// componentes internos
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "about",
// Componentes  en esta vista:
  components: {
    menucustom,
    footercustom,
    vueHeadful,
  },
};
</script>
