<template>
  <div class="contenedorVideos">
    <h1>Recomendaciones fuera de listas</h1>

    <!-- Pues me he hecho este componente para darle vidilla a la Home y porque me gustan mucho 
estas canciones, muchas de las cuales me recuerdan a mi infancia. También para poner
    en práctica  lo aprendido en el repaso-->

    <!-- Los códigos extraídos de los videos de youtube a los cuales sólo modifiqué el tamaño y añadí un
    span a modo de pie de vídeo-->

    <iframe
      width="320"
      height="180"
      src="https://www.youtube.com/embed/RnM2q_Ovi5o"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <span>Israel Cachao López - Guajira clásica</span>

    <iframe
      width="320"
      height="180"
      src="https://www.youtube.com/embed/W3LGPBruQM0"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <span>Tienes que decicir - Liliana Felipe.</span>

    <iframe
      width="320"
      height="180"
      src="https://www.youtube.com/embed/15ezpwCHtJs"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <span>Variaciones Goldberg</span>

    <iframe
      width="320"
      height="180"
      src="https://www.youtube.com/embed/Ogx9LgSH-z4"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <span>Arabesque nº1 - Debussy</span>

    <iframe
      width="320"
      height="180"
      src="https://www.youtube.com/embed/sGT0A4-vyEc"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <span>Semilla en la tierra - Carlos Chaouen</span>

    <iframe
      width="320"
      height="180"
      src="https://www.youtube.com/embed/aJ5hf5aYiaU"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <span>Tonada de la luna llena - Simón Díaz</span>
  </div>
</template>

<script>
//La exportación, ya de la familia.

export default {
  name: "Videos",
};
</script>

<style>
.contenedorVideos {
  display: flex;
  flex-direction: column;
  padding: 40px;
  font-family: "Cabin Sketch", cursive;
  -webkit-text-stroke: 0.2px black;
}

iframe {
  padding: 132px;
}
</style>
