<template>
  <div class="galeriaradio">
    <h1>Radios online</h1>
    <div>
      <a href="http://www.radio-espana.es/europa-fm">
        <img src="../assets/europafm.png" />
      </a>
    </div>
    <div>
      <a href="http://www.radio-espana.es/flamenco-radio">
        <img src="../assets/flamencoradio.png" />
      </a>
    </div>
    <div>
      <a href="http://www.radio-espana.es/hit-fm">
        <img src="../assets/hitfm.png" />
      </a>
    </div>
    <div>
      <a href="http://www.radio-espana.es/ibiza-beats-radio">
        <img src="../assets/inizabeatsradio.jpg" />
      </a>
    </div>
    <div>
      <a href="http://www.radio-espana.es/gb/jazz-fm">
        <img src="../assets/jazzradio.jpg" />
      </a>
    </div>
    <div>
      <a href="http://www.radio-espana.es/kiss-fm">
        <img src="../assets/kissfm.png" />
      </a>
    </div>
    <div>
      <a href="http://www.radio-espana.es/perfect-reggae">
        <img src="../assets/perfectreggae.jpg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "radio",
};
</script>

<style scoped>
.galeriaradio {
  display: flex;
  flex-direction: column;
  padding: 80px;
  font-family: "Cabin Sketch", cursive;
  -webkit-text-stroke: 0.2px black;
}

.galeriaradio div {
  padding: 150px 60px 40px;
}

img{
width:200px;
}
</style>
