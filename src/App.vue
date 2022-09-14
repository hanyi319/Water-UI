<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Hanyi />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Hanyi from "./components/Hanyi.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Hanyi,
  },
};
</script>
