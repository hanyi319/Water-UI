<template>
  <button @click="toggle" class="stream-switch" :class="{ 'stream-checked': value }">
    <span></span>
  </button>
  <div>{{ value }}</div>
</template>
value
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

.stream-switch {
  height: $h;
  width: calc($h * 2);
  border: none;
  background: #bfbfbf;
  border-radius: calc($h / 2);
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: #fff;
    border-radius: calc($h2 / 2);
    transition: all 250ms;
  }

  &.stream-checked {
    background: #1890ff;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.stream-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
