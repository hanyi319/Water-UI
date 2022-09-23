<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  data(props) {
    // 加载 markdown 文件成功后，在回调中用一个容器承载结果
    const content = ref<string>("");

    // 动态引入，异步加载
    import(props.path).then((result) => {
      content.value = result.default;
    });

    // // 整个过程为先渲染一个空字符串，请求成功后，再渲染 markdown 文件
    // import(props.path).then((result) => {
    //   // 延迟 10 秒，观察过程
    //   setTimeout(() => {
    //     content.value = result.default;
    //   }, 10000);
    // });

    return { content };
  },
};
</script>
