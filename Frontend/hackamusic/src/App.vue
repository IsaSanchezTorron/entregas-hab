<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Scope+One&family=Special+Elite&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Scope+One&family=Special+Elite&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Scope One", serif;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #111010;
}
td {
  border: solid 0px rgb(145, 17, 145);
  box-shadow: 1px 1px 1px 1px #ab2cc2;
  padding: 1em;
  background: rgba(181, 67, 181, 0.69);
  background: -moz-linear-gradient(
    left,
    rgba(181, 67, 181, 0.69) 0%,
    rgba(232, 199, 232, 0.69) 0%,
    rgba(232, 199, 232, 0) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(181, 67, 181, 0.69)),
    color-stop(0%, rgba(232, 199, 232, 0.69)),
    color-stop(100%, rgba(232, 199, 232, 0))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(181, 67, 181, 0.69) 0%,
    rgba(232, 199, 232, 0.69) 0%,
    rgba(232, 199, 232, 0) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(181, 67, 181, 0.69) 0%,
    rgba(232, 199, 232, 0.69) 0%,
    rgba(232, 199, 232, 0) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(181, 67, 181, 0.69) 0%,
    rgba(232, 199, 232, 0.69) 0%,
    rgba(232, 199, 232, 0) 100%
  );
  background: linear-gradient(
    to right,
    rgba(181, 67, 181, 0.69) 0%,
    rgba(232, 199, 232, 0.69) 0%,
    rgba(232, 199, 232, 0) 100%
  );
  border-bottom: 1px solid rgb(15, 0, 0);
}

th {
  border: solid 0px black;
  padding: 0.5em;
  font-size: 1.5em;
  color: white;
  -webkit-text-stroke: 1px black;
  background: rgba(89, 89, 89, 1);
  background: -moz-linear-gradient(
    left,
    rgba(89, 89, 89, 1) 0%,
    rgba(102, 102, 102, 1) 0%,
    rgba(71, 71, 71, 1) 0%,
    rgba(17, 17, 17, 1) 0%,
    rgba(43, 43, 43, 1) 0%,
    rgba(19, 19, 19, 1) 0%,
    rgba(44, 44, 44, 1) 0%,
    rgba(0, 0, 0, 1) 1%,
    rgba(76, 76, 76, 1) 79%,
    rgba(76, 76, 76, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(89, 89, 89, 1)),
    color-stop(0%, rgba(102, 102, 102, 1)),
    color-stop(0%, rgba(71, 71, 71, 1)),
    color-stop(0%, rgba(17, 17, 17, 1)),
    color-stop(0%, rgba(43, 43, 43, 1)),
    color-stop(0%, rgba(19, 19, 19, 1)),
    color-stop(0%, rgba(44, 44, 44, 1)),
    color-stop(1%, rgba(0, 0, 0, 1)),
    color-stop(79%, rgba(76, 76, 76, 1)),
    color-stop(100%, rgba(76, 76, 76, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(89, 89, 89, 1) 0%,
    rgba(102, 102, 102, 1) 0%,
    rgba(71, 71, 71, 1) 0%,
    rgba(17, 17, 17, 1) 0%,
    rgba(43, 43, 43, 1) 0%,
    rgba(19, 19, 19, 1) 0%,
    rgba(44, 44, 44, 1) 0%,
    rgba(0, 0, 0, 1) 1%,
    rgba(76, 76, 76, 1) 79%,
    rgba(76, 76, 76, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(89, 89, 89, 1) 0%,
    rgba(102, 102, 102, 1) 0%,
    rgba(71, 71, 71, 1) 0%,
    rgba(17, 17, 17, 1) 0%,
    rgba(43, 43, 43, 1) 0%,
    rgba(19, 19, 19, 1) 0%,
    rgba(44, 44, 44, 1) 0%,
    rgba(0, 0, 0, 1) 1%,
    rgba(76, 76, 76, 1) 79%,
    rgba(76, 76, 76, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(89, 89, 89, 1) 0%,
    rgba(102, 102, 102, 1) 0%,
    rgba(71, 71, 71, 1) 0%,
    rgba(17, 17, 17, 1) 0%,
    rgba(43, 43, 43, 1) 0%,
    rgba(19, 19, 19, 1) 0%,
    rgba(44, 44, 44, 1) 0%,
    rgba(0, 0, 0, 1) 1%,
    rgba(76, 76, 76, 1) 79%,
    rgba(76, 76, 76, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(89, 89, 89, 1) 0%,
    rgba(102, 102, 102, 1) 0%,
    rgba(71, 71, 71, 1) 0%,
    rgba(17, 17, 17, 1) 0%,
    rgba(43, 43, 43, 1) 0%,
    rgba(19, 19, 19, 1) 0%,
    rgba(44, 44, 44, 1) 0%,
    rgba(0, 0, 0, 1) 1%,
    rgba(76, 76, 76, 1) 79%,
    rgba(76, 76, 76, 1) 100%
  );
}
table {
  margin: 0 auto;
  border: solid 0.5px rgb(27, 23, 23);
  padding: 5px;
  box-shadow: 4px 4px 4px 4px black;
}
</style>
