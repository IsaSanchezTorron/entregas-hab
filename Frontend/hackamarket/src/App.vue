<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@1&display=swap");

#app {
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #14afc3;
}

button {
  border-radius: 15px;
  color: #14afc3;
  font-size: 13px;
  padding: 0.4em;
  font-weight: bold;
}
button:active {
  color: #2c3e50;
}

input {
  height: 1.8em;
  border-radius: 0.1px;
}
</style>
