<demo>
  theme 示例
</demo>

<template>
  <div>
    <Button>按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";

export default {
  components: { Button },
};
</script>
