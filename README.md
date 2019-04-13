# vue-inline-loading
Vue directive for show loading in a container

[Live demo and usage](https://escx.github.io/vue-inline-loading/)

## Install

```shell
npm install vue-inline-loading
```

## Usage

```js
// es6 import
import VueInlineLoading from 'vue-inline-loading'

// 或者通过<script>引入
<script src="path/to/vue-inline-loading.js"></script>
```

```js
// 全局注册
Vue.use(VueInlineLoading)

// 或者局部注册
new Vue({
  directives: {VueInlineLoading}
})
```

```html
<div v-loading="loadingShow"></div>
```
