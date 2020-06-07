<template>
  <!--Humilde página de error -->
  <div class="about">
    <h1>¡Socorri!</h1>
    <p>
      ¿A dónde vas?
      <br />¡Esta página no existe!
    </p>
    <!--Con su imagen "robada"-->
    <img src="../assets/error.jpg" title="La página no existe, utiliza el menú de navegación" />

    <!--Always footer -->
    <footercustom></footercustom>
  </div>
</template>

<script>
//Me traigo el footer
import footercustom from "@/components/FooterCustom.vue";
//Exporto mi vista
export default{
  name:"ErrorView",
  components:{
    footercustom
  }
};
</script>
