<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Toy UI</h1>
        <h2>简洁有效的组件库</h2>
        <h3>基于 Vue 3，适合新手练习</h3>
        <p class="actions">
          <router-link to="/doc">快速开始</router-link>
          <a href="https://github.com/hanyi319/Toy-UI">查看源码</a>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%,
    rgba(183, 233, 230, 1) 100%,
    rgba(255, 255, 255, 1) 100%
  );
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $color;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
    }
  }
}

.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
</style>
