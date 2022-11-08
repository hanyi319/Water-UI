<template>
  <div class="header">
    <div class="header-container">
      <svg v-if="toggleMenuButtonVisible" class="toggleMenu" @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
      </svg>
      <router-link to="/" class="logo">
        <img src="../assets/icons/logo.svg" alt="logo" class="icon" />
        <span class="can-hide">Water UI</span>
      </router-link>
      <nav class="nav-links can-hide">
        <div class="nav-item">
          <router-link to="/doc/intro">指南</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/doc/switch">组件</router-link>
        </div>
        <div class="nav-item">
          |&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/hanyi319/Toy-UI">
            <svg class="icon">
              <use xlink:href="#icon-github"></use>
            </svg>
            GitHub
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 20;
  background: var(--bg-color-grey);
  backdrop-filter: saturate(50%) blur(8px);
  border-bottom: 1px solid var(--border-color);

  > .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    height: 100%;

    > .logo {
      display: inline-block;
      font-weight: 500;
      text-decoration: none;
      margin-right: auto;

      > svg {
        height: 2.2rem;
        min-width: 2.2rem;
        margin-right: 0.8rem;
        vertical-align: middle;
      }

      > span {
        font-size: 1.3rem;
        font-weight: bold;
        padding: 0 4px;
        color: var(--title-color-black);
        position: relative;
      }
    }

    > .nav-links {
      display: flex;
      white-space: nowrap;

      > .nav-item {
        position: relative;
        display: inline-block;
        margin: 0 1rem;
        line-height: 2rem;

        > a {
          line-height: 1.4rem;
          color: inherit;
          font-weight: bold;
          text-decoration: none;
        }

        > a:hover {
          color: var(--theme-color-blue-1);
        }

        > .router-link-active {
          color: var(--theme-color-blue-1);
          font-weight: bolder;
          margin-bottom: -2px;
          border-bottom: 2px solid var(--theme-color-blue-1);
        }
      }
    }

    > .toggleMenu {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      display: none;
    }

    @media (max-width: 500px) {
      .can-hide {
        display: none;
      }
      > .nav-links .can-hide {
        display: none;
      }
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .toggleMenu {
        display: inline-block;
      }
    }
  }
}
</style>
