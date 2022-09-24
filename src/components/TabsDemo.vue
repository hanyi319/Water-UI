<template>
  <h1>Tabs 标签页</h1>
  <Demo :component="Tabs1Demo" />
  <div class="link">
    <span>
      &lt;
      <router-link to="/doc/dialog">Dialog 对话框</router-link>
    </span>
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Tabs1Demo from "./tabs/Tabs1.demo.vue";

export default {
  components: { Demo },
  setup() {
    return { Tabs1Demo };
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
