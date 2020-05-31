<template>
  <div id="app">
    <div id="menutop">
      <router-link id="home" to="/">
        <a id="home">Home</a>
      </router-link>👈👉
      <router-link id="about" to="/about">
        <a id="about2">About</a>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: black;
}

#menutop {
  padding: 40px;
  font-family: "Creepster", cursive;
  font-size: 1.5em;
  text-shadow: 0em 0.1em 1em rgb(194, 40, 221);
}

#home {
  -webkit-text-stroke: 0.5px black;
}

#about {
  -webkit-text-stroke: 0.5px black;
}

a #home {
  color: rgb(46, 176, 199);
  text-decoration: none;
}
a #about2 {
  color: rgb(47, 180, 14);
  text-decoration: none;
}

a:active {
  position: relative;
  top: 1px;
}
</style>
