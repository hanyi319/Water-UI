<template>
  <article class="markdown-body">
    <h1>开始</h1>
    <p>请先<a href="#/doc/install">安装</a>该组件库</p>
    <p>然后在你的代码中引入</p>
    <pre><code>import {Switch, Button, Dialog, Tabs} from "toy-ui"</code></pre>
    <p>就可以正常使用了</p>

    <h2>Vue 单文件组件</h2>
    <p>代码示例：</p>
    <pre><code>
    &lt;template&gt;
      &lt;div&gt;
        &lt;Button&gt;按钮&lt;/Button&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import {Switch, Button, Dialog, Tabs} from "toy-ui"
      
    export default {
      components: {Button}
    }
    &lt;/script&gt;
    </code></pre>

    <p>上一节：<a href="#/doc/install">安装</a></p>
    <p>下一节：<a href="#/doc/switch">Switch 开关</a></p>
  </article>
</template>
