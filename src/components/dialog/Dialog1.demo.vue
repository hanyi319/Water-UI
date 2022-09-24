<demo>
  默认
</demo>

<template>
  <div>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
      <template v-slot:title>
        <p>标题</p>
      </template>
      <template v-slot:content>
        <p>内容：Hello, world!</p>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import Dialog from "../../lib/Dialog.vue";
import { ref } from "vue";

export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {};
    const f2 = () => {};

    return { x, toggle, f1, f2 };
  },
};
</script>
