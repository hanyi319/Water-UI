<template>
  <div>Tabs 示例</div>
  <h1>示例 1</h1>
  <Tabs>
    <Tab title="导航1">内容 1</Tab>
    <Tab title="导航2">内容 2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";

export default {
  components: { Tabs, Tab },
};
</script>
