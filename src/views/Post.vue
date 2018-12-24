<template>
  <div class="wrapper">
    <div class="post">
      <img :src="post.img">
      <h3>{{post.title}}</h3>
      <p>{{post.content}}</p>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import store from "../store.js";

export default {
  name: "post",
  computed: {
    post() {
      return store.state.posts[this.$route.params.post];
    }
  }
};
</script>
<style lang="scss">
.post {
  margin-top: 35px;
  display: grid;
  grid-template-columns: 1050px;
  justify-content: center;
  img {
    width: 100%;
  }
}
</style>
