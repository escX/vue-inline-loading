<template>
  <div id="app">
    <div class="demo" v-loading="loadingShow">
      <p>v-loading="loadingShow"</p>
    </div>
    <div class="btn-box">
      <span>loadingShow: {{loadingShow}}</span>
      <button @click="loadingShow = !loadingShow">loading</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingShow: false
    };
  }
};
</script>

<style>
.demo {
  width: 560px;
  height: 200px;
  background-color: #fff;
  border: 1px solid #eee;
  text-align: center;
  line-height: 200px;
}
.btn-box {
  margin-top: 20px;
}
.btn-box button {
  margin-left: 50px;
}
</style>
