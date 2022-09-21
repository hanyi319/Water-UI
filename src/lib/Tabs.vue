<template>
  <div class="toy-tabs">
    <div class="toy-tabs-nav" ref="container">
      <div
        class="toy-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        :key="index"
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div class="toy-tabs-nav-indicator" ref="indicator"></div>
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
import { computed, onMounted, onUpdated, ref } from "vue";
import Tab from "./Tab.vue";

export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    // TypeScript 的泛型语法
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    const x = () => {
      // 动态设置 div 宽度

      const { width } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";

      // 动态设置 div 位置
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    };

    // 只在第一次渲染时执行
    onMounted(x);

    onUpdated(x);

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
    return { selectedItem, indicator, container, defaults, titles, current, select };
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
      transition: all 250ms;
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
