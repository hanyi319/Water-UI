<template>
  <aside v-if="menuVisible">
    <div class="mask" @click="closeMenu"></div>
    <div class="menu">
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
    </div>
  </aside>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const closeMenu = () => {
      menuVisible.value = false;
    };
    return { menuVisible, closeMenu };
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .mask {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    width: 100%;
    height: calc(100% - var(--nav-height));
    background: var(--sideMenu-mask-bg);
    z-index: var(--z-index-sideMenu-mask);
  }
}

.menu {
  position: fixed;
  top: var(--nav-height);
  left: 0;
  width: 250px;
  height: calc(100% - var(--nav-height));
  padding: 16px 8px;
  background: var(--sideMenu-menu-bg);
  color: var(--text-color-black);
  border-right: 1px solid var(--border-color);
  z-index: var(--z-index-sideMenu-menu);

  > h2 {
    padding: 0 16px;
    margin-bottom: 4px;
    font-weight: bold;
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

      > a:hover:not(.router-link-active) {
        background: var(--sideMenu-button-hover);
      }

      .router-link-active {
        text-align: center;
        background-color: var(--sideMenu-button-active);
        color: var(--text-color-white);
      }
    }
  }
}
</style>
