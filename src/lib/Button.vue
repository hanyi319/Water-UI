<template>
  <button class="stream-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="stream-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return [`stream-theme-${theme}`, `stream-size-${size}`, `stream-level-${level}`];
    });
    return { classes };
  },
};
</script>

<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: red;
$grey: grey;
$radius: 4px;

.stream-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  // 针对 Firefox 浏览器的优化
  &::-moz-focus-inner {
    border: 0;
  }

  &.stream-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &focus {
      color: lighten($blue, 10%);
    }
  }

  &.stream-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.stream-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.stream-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.stream-theme-button {
    &.stream-level-main {
      background: $blue;
      border-color: $blue;
      color: white;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }

    &.stream-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.stream-theme-link {
    &.stream-level-danger {
      color: $red;
      &:hover,
      &focus {
        color: darken($red, 10%);
      }
    }
  }

  &.stream-theme-text {
    &.stream-level-main {
      color: $blue;
      &:hover,
      &focus {
        color: darken($blue, 10%);
      }
    }

    &.stream-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.stream-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }

  &.stream-theme-link,
  &.stream-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .stream-loadingIndicator {
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: stream-spin 1s infinite linear;
  }
}

@keyframes stream-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
