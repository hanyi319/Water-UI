# 开始

请先[安装](#/doc/install)该组件库
然后在你的代码中引入

```
import {Switch, Button, Dialog, Tabs} from "toy-ui"
```

就可以正常使用了

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script>
import {Switch, Button, Dialog, Tabs} from "toy-ui"

export default {
  components: {Button}
}
</script>
```

上一节：[安装](#/doc/install)
下一节：[Switch 开关](#/doc/switch)
