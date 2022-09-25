<template>
  <TopNav />
  <div class="home">
    <div class="content">
      <div class="main">
        <h1 class="name">
          <span class="clip">Toy UI</span>
        </h1>
        <p class="text">简洁有效的组件库</p>
        <p class="tagline">基于 Vue 3，适合新手练习</p>
        <div class="actions">
          <div class="action">
            <router-link class="VPButton brand" to="/doc">快速开始</router-link>
          </div>
          <div class="action">
            <a class="VPButton alt" href="https://github.com/hanyi319/Toy-UI">查看源码</a>
          </div>
        </div>
      </div>
      <div class="image">
        <div class="image-container">
          <div class="image-bg"></div>
          <svg class="VPImage image-src">
            <use xlink:href="#icon-toy"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="features"></div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: { TopNav },
};
</script>

<style lang="scss" scoped>
$nav-height: 60px;
$text: rgba(56 56 56 / 70%);
$--vp-button-brand-border: #42b883;
$--vp-button-brand-bg: #42b883;
$--vp-button-brand-text: rgba(255, 255, 255, 0.87);
$--vp-button-alt-border: #d1d1d1;
$--vp-button-alt-bg: #f2f2f2;
$--vp-button-alt-text: #213547;

.home {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  flex-grow: 1;
  flex-shrink: 0;

  > .content {
    margin-top: calc($nav-height * -1);
    padding: calc($nav-height + 48px) 24px 48px;
    text-align: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1152px;

    > .main {
      position: relative;
      z-index: 10;
      order: 2;
      flex-grow: 1;
      flex-shrink: 0;

      > .name {
        color: transparent;

        > .clip {
          background: -webkit-linear-gradient(120deg, #42b883 30%, #86b91a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      > .name,
      .text {
        margin: 0 auto;
        // max-width: 392px;
        letter-spacing: -0.4px;
        line-height: 40px;
        font-size: 32px;
        font-weight: 700;
        white-space: pre-wrap;
      }

      > .tagline {
        margin: 0 auto;
        padding-top: 8px;
        max-width: 329px;
        line-height: 28px;
        font-size: 18px;
        font-weight: 500;
        white-space: pre-wrap;
        color: $text;
      }

      > .actions {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: -6px;
        padding-top: 24px;

        > .action {
          flex-shrink: 0;
          padding: 6px;

          > .VPButton {
            display: inline-block;
            border: 1px solid transparent;
            border-radius: 20px;
            padding: 0 20px;
            line-height: 38px;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            white-space: nowrap;
            transition: color 0.25s, border-color 0.25s, background-color 0.25s;
          }

          > .brand {
            border-color: $--vp-button-brand-border;
            background-color: $--vp-button-brand-bg;
            color: $--vp-button-brand-text;
          }

          > .alt {
            border-color: $--vp-button-alt-border;
            background-color: $--vp-button-alt-bg;
            color: $--vp-button-alt-text;
          }
        }
      }
    }

    > .image {
      order: 1;
      margin: -76px -24px -48px;

      > .image-container {
        position: relative;
        margin: 0 auto;
        width: 320px;
        height: 320px;

        > .image-src {
          position: absolute;
          top: 50%;
          left: 50%;
          max-width: 192px;
          transform: translate(-50%, -50%);
        }

        > img {
          display: block;
          vertical-align: middle;
          max-width: 100%;
          height: auto;
        }
      }
    }
  }
}

@media (min-width: 640px) {
  .content {
    padding: calc($nav-height + 80px) 48px 64px;
    max-width: 640px;

    > .main {
      > .name,
      .text {
        max-width: 576px;
        line-height: 56px;
        font-size: 48px;
      }

      > .tagline {
        padding-top: 12px;
        max-width: 576px;
        line-height: 32px;
        font-size: 20px;
      }

      > .actions {
        padding-top: 32px;
      }
    }

    > .image {
      margin: -108px -24px -48px;

      > .image-container {
        width: 392px;
        height: 392px;

        > .image-src {
          max-width: 256px;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .home {
    padding-bottom: 128px;

    > .content {
      max-width: 768px;
    }
  }
}

@media (min-width: 960px) {
  .home {
    padding-top: $nav-height;
    padding-bottom: 96px;

    > .content {
      padding: calc($nav-height + 80px) 64px 64px;
      text-align: left;
      display: flex;
      flex-direction: row;

      > .main {
        max-width: 592px;
        order: 1;
        width: calc((100% / 3) * 2);

        > .name,
        .text {
          margin: 0;
          line-height: 64px;
          font-size: 56px;
        }

        > .tagline {
          margin: 0;
          line-height: 36px;
          font-size: 24px;
        }

        > .actions {
          justify-content: flex-start;
        }
      }

      > .image {
        flex-grow: 1;
        order: 2;
        margin: 0;
        min-height: 100%;

        > .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          transform: translate(-32px, -32px);

          > .image-bg {
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            width: 192px;
            height: 192px;
            background-image: linear-gradient(-45deg, #86b91a60 30%, #edd53260);
            filter: blur(72px);
            transform: translate(-50%, -50%);

            > .image-src {
              max-width: 320px;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .content {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .content {
    max-width: 1280px;
  }
}
</style>
