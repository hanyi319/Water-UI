<template>
  <h1>theme 示例</h1>
  <div>
    <Button>按钮（默认）</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
  <h1>size 示例</h1>
  <div>
    <Button theme="button" size="normal">按钮（普通）</Button>
    <Button theme="button" size="big">按钮（大）</Button>
    <Button theme="button" size="small">按钮（小）</Button>
  </div>
  <br />
  <div>
    <Button theme="link" size="normal">链接（普通）</Button>
    <Button theme="link" size="big">链接（大）</Button>
    <Button theme="link" size="small">链接（小）</Button>
  </div>
  <br />
  <div>
    <Button theme="text" size="normal">文本（普通）</Button>
    <Button theme="text" size="big">文本（大）</Button>
    <Button theme="text" size="small">文本（小）</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>
