<template>
  <div class="toy-tabs">
    <div class="toy-tabs-nav">
      <div
        class="toy-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div class="toy-tabs-nav-indicator"></div>
    </div>
    <div class="toy-tabs-content">
      <component
        class="toy-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
        v-for="(c, index) in defaults"
        :key="index"
        :is="c"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import Tab from "./Tab.vue";

export default {
  props: {
    selected: {
      type: String,
    },
  },
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

    // 找到当前选中的内容，并且 current 是根据 selected 得到的计算属性
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
      // 因为 filter 返回值就算只有一个，也会作为数组返回，所以还要取第0个
    });

    // 给导航标签添加点击事件，监听 selected 属性是否发生变化，并通知外部
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return { defaults, titles, current, select };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.toy-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>
