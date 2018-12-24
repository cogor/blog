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
import store from "../store";

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
  font-family: "Montserrat";
  margin-top: 35px;
  display: grid;
  grid-template-columns: 1050px;
  justify-content: center;
  img {
    width: 100%;
  }
}
@media (max-width: 1150px) {
  .post {
    grid-template-columns: auto;
    margin-top: 0;
  }
}
</style>
