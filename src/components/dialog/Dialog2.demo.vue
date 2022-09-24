<demo>
  一键打开
</demo>

<template>
  <div>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import { openDialog } from "../../lib/openDialog";

export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "内容：Hello, world!",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { showDialog };
  },
};
</script>
