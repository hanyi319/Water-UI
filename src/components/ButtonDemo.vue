<template>
  <h1>theme 示例</h1>
  <div>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
  <br />
  <h1>size 示例</h1>
  <div>
    <Button theme="button" size="small">按钮（小）</Button>
    <Button theme="button" size="normal">按钮（普通）</Button>
    <Button theme="button" size="big">按钮（大）</Button>
  </div>
  <br />
  <div>
    <Button theme="link" size="small">链接（小）</Button>
    <Button theme="link" size="normal">链接（普通）</Button>
    <Button theme="link" size="big">链接（大）</Button>
  </div>
  <br />
  <div>
    <Button theme="text" size="small">文本（小）</Button>
    <Button theme="text" size="normal">文本（普通）</Button>
    <Button theme="text" size="big">文本（大）</Button>
  </div>
  <br />
  <h1>level 示例</h1>
  <div>
    <Button>普通按钮</Button>
    <Button level="main">主要按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <br />
  <div>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <br />
  <div>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
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
