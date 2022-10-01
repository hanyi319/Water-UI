<template>
  <aside v-if="menuVisible">
    <h2>指南</h2>
    <ol>
      <li>
        <router-link to="/doc/intro">介绍</router-link>
      </li>
      <li>
        <router-link to="/doc/install">安装</router-link>
      </li>
      <li>
        <router-link to="/doc/get-started">开始</router-link>
      </li>
    </ol>
    <br />
    <h2>组件</h2>
    <ol>
      <li>
        <router-link to="/doc/switch">Switch 开关</router-link>
      </li>
      <li>
        <router-link to="/doc/button">Button 按钮</router-link>
      </li>
      <li>
        <router-link to="/doc/dialog">Dialog 对话框</router-link>
      </li>
      <li>
        <router-link to="/doc/tabs">Tabs 标签页</router-link>
      </li>
    </ol>
  </aside>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");

    return { menuVisible };
  },
};
</script>

<style lang="scss" scoped>
$border-primary: #e7e9e8;

aside {
  background: #fafafa;
  width: 250px;
  padding: 24px 8px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  border-right: 1px solid $border-primary;
  z-index: 2;

  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > li {
      > a {
        display: block;
        padding: 6px 16px;
        margin-bottom: 4px;
        border-radius: 6px;
        text-decoration: none;
      }

      > a:hover {
        background: #94cfc1;
        color: #fff;
      }

      .router-link-active {
        background: #00ab95;
        color: #fff;
      }
    }
  }
}
</style>
