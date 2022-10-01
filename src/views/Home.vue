<template>
  <TopNav />
  <div class="home">
    <div class="content">
      <div class="main">
        <h1 class="name">
          <span class="clip">Toy UI</span>
        </h1>
        <p class="text">简洁有效的组件库</p>
        <p class="tagline">如无必要，勿增实体</p>
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
          <svg class="image-src">
            <use xlink:href="#icon-toy"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="features">
      <div class="items">
        <div class="item">
          <article class="VPFeature">
            <div class="icon">⚡️</div>
            <h2 class="title">技术新颖</h2>
            <p class="details">Vue 3，时代之选</p>
          </article>
        </div>
        <div class="item">
          <article class="VPFeature">
            <div class="icon">🔩</div>
            <h2 class="title">安全保证</h2>
            <p class="details">TypeScript，诚不欺我</p>
          </article>
        </div>
        <div class="item">
          <article class="VPFeature">
            <div class="icon">🔑</div>
            <h2 class="title">使用便捷</h2>
            <p class="details">极低门槛，快速上手</p>
          </article>
        </div>
        <div class="item">
          <article class="VPFeature">
            <div class="icon">📦</div>
            <h2 class="title">资源丰富</h2>
            <p class="details">海量组件，持续更新</p>
          </article>
        </div>
        <div class="item">
          <article class="VPFeature">
            <div class="icon">💡</div>
            <h2 class="title">代码易读</h2>
            <p class="details">追求极致，重构不止</p>
          </article>
        </div>
        <div class="item">
          <article class="VPFeature">
            <div class="icon">🛠️</div>
            <h2 class="title">文档贴心</h2>
            <p class="details">反复斟酌，学习无忧</p>
          </article>
        </div>
      </div>
    </div>
    <br />
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
$text-1: rgba(56 56 56 / 70%);
$text-2: rgba(60, 60, 60, 0.7);
$--vp-button-brand: #00ab95;
$--vp-button-brand-hover: #94cfc1;
$--vp-button-brand-text: rgba(255, 255, 255, 0.87);
$--vp-button-alt: #f2f2f2;
$--vp-button-alt-hover: #d1d1d1;
$--vp-button-alt-text: #213547;

.home {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  flex-grow: 1;
  flex-shrink: 0;

  > .content {
    display: flex;
    flex-direction: column;
    padding: calc($nav-height + 48px) 24px 48px;
    text-align: center;
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
          background: -webkit-linear-gradient(
            120deg,
            $--vp-button-brand 30%,
            $--vp-button-brand-hover
          );
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
        color: $text-1;
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
            text-decoration: inherit;
            white-space: nowrap;
            touch-action: manipulation;
            transition-property: color, background-color, border-color;
            transition-duration: 0.25s, 0.25s, 0.25s;
            transition-timing-function: ease, ease, ease;
            transition-delay: 0s, 0s, 0s;
          }

          > .brand {
            color: $--vp-button-brand-text;
            background-color: $--vp-button-brand;
            border-color: $--vp-button-brand;
          }

          > .brand:hover {
            background-color: $--vp-button-brand-hover;
            border-color: $--vp-button-brand-hover;
          }

          > .alt {
            border-color: $--vp-button-alt;
            background-color: $--vp-button-alt;
            color: $--vp-button-alt-text;
          }

          > .alt:hover {
            background-color: $--vp-button-alt-hover;
            border-color: $--vp-button-alt-hover;
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

        > .image-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          width: 192px;
          height: 192px;
          background-image: linear-gradient(
            -45deg,
            $--vp-button-brand 20%,
            $--vp-button-brand-hover
          );
          filter: blur(72px);
          transform: translate(-50%, -50%);
        }

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

  > .features {
    position: relative;
    padding: 0 24px;
    margin: 0 auto;
    max-width: 1152px;

    > .items {
      display: flex;
      flex-wrap: wrap;
      margin: -8px;

      > .item {
        padding: 8px;
        width: 100%;

        > .VPFeature {
          border: 1px solid #f9f9f9;
          border-radius: 12px;
          padding: 24px;
          height: 100%;
          background-color: #f9f9f9;

          > .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            border-radius: 6px;
            background-color: #e5e5e5;
            width: 48px;
            height: 48px;
            font-size: 24px;
          }

          > .title {
            line-height: 24px;
            font-size: 16px;
            font-weight: 600;
          }

          > .details {
            padding-top: 8px;
            line-height: 24px;
            font-size: 14px;
            font-weight: 500;
            color: rgba(60, 60, 60, 0.7);
          }
        }
      }
    }
  }
}

@media (min-width: 640px) {
  .home {
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

          > .image-bg {
            width: 256px;
            height: 256px;
          }

          > .image-src {
            max-width: 256px;
          }
        }
      }
    }

    .features {
      padding: 0 48px;
      > .items {
        > .item {
          width: 50%;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .home {
    > .content {
      max-width: 768px;
    }

    > .features {
      .items {
        > .item {
          width: calc(100% / 3);
        }
      }
    }
  }
}

@media (min-width: 960px) {
  .home {
    padding-top: $nav-height;

    > .content {
      padding: calc($nav-height + 40px) 32px 64px;
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
            width: 320px;
            height: 320px;
          }

          > .image-src {
            max-width: 320px;
          }
        }
      }
    }

    > .features {
      padding: 0 64px;
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
