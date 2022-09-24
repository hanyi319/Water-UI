<template>
  <div>
    <h1>Switch 开关</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
    <div class="link">
      <span>
        <router-link to="/doc/button">Button 按钮</router-link>
        &gt;
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Switch1Demo from "./switch/Switch1.demo.vue";
import Switch2Demo from "./switch/Switch2.demo.vue";
import Demo from "./Demo.vue";

export default {
  components: { Demo },
  setup() {
    return { Switch1Demo, Switch2Demo };
  },
};
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  justify-content: space-between;
  color: #42b883;
}
</style>
