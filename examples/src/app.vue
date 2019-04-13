<template>
  <div>
  <div id="app" v-loading="loadingShow">

  </div>
  <button @click="loadingShow = !loadingShow">button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingShow: true
    };
  }
};
</script>

<style>
#app {
  width: 100px;
  height: 100px;
  border: 1px solid #999;
}
</style>
