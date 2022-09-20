<template>
  <div>
    <div v-for="t in titles" :key="t">{{ t }}</div>
    <component v-for="(c, index) in defaults" :key="index" :is="c" />
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";

export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return { defaults, titles };
  },
};
</script>
