<template>
  <div class="home">
    <Banner/>
    <h2>Последние статьи</h2>
    <div class="posts">
      <div class="post" v-for="(item, index) in posts" :key="index">
        <router-link :to="{ name: 'post', params: { post: index }}">
          <img :src="item.img">
        </router-link>
        <h3>{{item.title}}</h3>
        <p>{{item.content}}</p>
        <div class="button-more">
          <router-link :to="{ name: 'post', params: { post: index }}">Читать</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Banner from "@/components/Banner.vue";
import store from "../store";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Banner
  },
  computed: {
    posts() {
      return store.state.posts;
    }
  }
};
</script>
<style lang="scss">
h2 {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 36px;
  color: #3b3b3b;
}
.posts {
  font-family: Montserrat;
  display: grid;
  grid-template-columns: 1050px;
  justify-content: center;
  .post {
    margin-bottom: 35px;
    border: 1px solid #35495e36;
    border-radius: 5px;
    img {
      width: 100%;
    }
    h3 {
      font-family: Montserrat;
      font-weight: bold;
      font-size: 26px;
      color: #3b3b3b;
      text-align: left;
      padding-left: 28px;
      padding-right: 28px;
    }
    p {
      font-family: Montserrat;
      font-weight: 300;
      font-size: 18px;
      color: #3b3b3b;
      padding-left: 28px;
      padding-right: 28px;
      text-align: left;
    }
  }
  .button-more {
    margin-top: 20px;
    text-align: right;
    a {
      display: inline-block;
      background: #42b983;
      padding: 8px 85px;
      font-family: Montserrat;
      font-weight: bold;
      font-size: 24px;
      text-decoration: none;
      color: #fff;
      border-radius: 5px;
      transition: all 0.3s;
      margin-right: 44px;
      margin-bottom: 28px;
      &:hover {
        background: #35495e;
      }
    }
  }
}
@media (max-width: 1150px) {
  h2 {
    font-size: 24px;
    margin-top: 45px;
  }
  .posts {
    grid-template-columns: auto;
    .button-more {
      a {
        margin-right: 5px;
        margin-bottom: 5px;
        font-size: 18px;
        padding: 5px 50px;
      }
    }
    .post {
      h3 {
        font-size: 20px;
      }
      p {
        font-size: 16px;
      }
    }
  }
}
</style>
