<demo>
  size 属性
</demo>

<template>
  <div>
    <div>
      <Button size="small">按钮（小）</Button>
      <Button size="normal">按钮（普通）</Button>
      <Button size="big">按钮（大）</Button>
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
  </div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";

export default {
  components: { Button },
};
</script>
