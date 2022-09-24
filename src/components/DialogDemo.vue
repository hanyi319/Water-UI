<template>
  <h1>Dialog 对话框</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
  <div class="link">
    <span>
      &lt;
      <router-link to="/doc/button">Button 按钮</router-link>
    </span>
    <span>
      <router-link to="/doc/tabs">Tabs 标签页</router-link>
      &gt;
    </span>
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "./dialog/Dialog1.demo.vue";
import Dialog2Demo from "./dialog/Dialog2.demo.vue";

export default {
  components: { Demo },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
    };
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
