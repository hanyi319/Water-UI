<template>
  <div>
    导航栏 |
    <router-link to="/">Hanyi</router-link>
    |
    <router-link to="/xxx">Hanyi2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
