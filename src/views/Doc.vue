<template>
  <div class="layout">
    <TopNav :toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <SideMenu />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import SideMenu from "../components/SideMenu.vue";

export default {
  components: { TopNav, SideMenu },
};
</script>

<style lang="scss" scoped>
$aside-index: 1;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 250px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: #fff;
  }
}

main {
  overflow: auto;
}
</style>
