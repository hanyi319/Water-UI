<template>
  <div class="header">
    <div class="header-container">
      <svg v-if="toggleMenuButtonVisible" class="toggleMenu" @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
      </svg>
      <router-link to="/" class="logo">
        <svg class="icon">
          <use xlink:href="#icon-toy"></use>
        </svg>
        <span class="can-hide">Toy UI</span>
      </router-link>
      <nav class="nav-links can-hide">
        <div class="nav-item">
          <router-link to="/doc/intro">指南</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/doc/switch">组件</router-link>
        </div>
        <div class="nav-item">
          <a href="https://www.yuque.com/docs/share/784f9146-e690-4abc-bb08-22e570b23047?#">语雀</a>
        </div>
        <div class="nav-item">
          <a href="https://github.com/hanyi319/Toy-UI">GitHub</a>
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
$bg-primary: #fff;
$border-primary: #e7e9e8;

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 10;
  background: $bg-primary;
  border-bottom: 1px solid $border-primary;

  > .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 24px;

    > .logo {
      display: inline-block;
      font-weight: 500;
      text-decoration: none;
      margin-right: auto;

      > svg {
        height: 2.2rem;
        min-width: 2.2rem;
        margin-right: 0.8rem;
        vertical-align: top;
      }

      > span {
        font-size: 1.3rem;
        font-weight: 600;
        color: #2c3e50;
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
          font-weight: 500;
          text-decoration: none;
        }

        > .router-link-active {
          color: #42b883;
          font-weight: bolder;
          margin-bottom: -2px;
          border-bottom: 2px solid #42b883;
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
      > .logo .can-hide {
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
