<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>Toy UI</h1>
      <h2>简洁有效的组件库</h2>
      <h3>基于 Vue 3，适合新手练习</h3>
      <div class="actions">
        <div class="action">
          <router-link class="VPButton medium brand" to="/doc">快速开始</router-link>
        </div>
        <div class="action">
          <a class="VPButton medium alt" href="https://github.com/traveler319/Stream-UI">
            查看源码
          </a>
        </div>
      </div>
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

  > .actions {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;
    padding-top: 24px;
    > .action {
      flex-shrink: 0;
      padding: 6px;
      > .VPButton {
        display: inline-block;
        border: 1px solid transparent;
        text-align: center;
        font-weight: 500;
        white-space: nowrap;
        transition: color 0.25s, border-color 0.25s, background-color 0.25s;
      }
      > .medium {
        border-radius: 20px;
        padding: 0 20px;
        line-height: 38px;
        font-size: 14px;
      }
      > .brand {
        border-color: #747bff;
        color: rgba(255, 255, 255, 0.87);
        background-color: #646cff;
      }
      > .alt {
        border-color: #d1d1d1;
        color: #213547;
        background-color: #f2f2f2;
      }
    }
  }
}
</style>
