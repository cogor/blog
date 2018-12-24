<template>
  <div class="header">
    <div class="logo">
      <router-link to="/">
        <span>Vue</span>Blog
      </router-link>
    </div>
    <div class="menu">
      <ul>
        <li>
          <router-link to="/">Главная</router-link>
        </li>
        <li>
          <router-link to="/posts">Статьи</router-link>
        </li>
        <li>
          <router-link to="/about">Обо мне</router-link>
        </li>
        <li>
          <router-link to="/contacts">Контакты</router-link>
        </li>
      </ul>
    </div>
    <div class="hamburger">
      <img @click="OpenMenu" v-show="mob" src="../assets/menu.svg" alt>
      <img class="close-menu" @click="CloseMenu" v-show="mobClose" src="../assets/close.svg" alt>
    </div>
    <div class="mob-menu" v-show="mobClose">
      <ul>
        <li>
          <router-link @click="OnRedirect" to="/">Главная</router-link>
        </li>
        <li>
          <router-link @click="OnRedirect" to="/posts">Статьи</router-link>
        </li>
        <li>
          <router-link @click="OnRedirect" to="/about">Обо мне</router-link>
        </li>
        <li>
          <router-link @click="OnRedirect" to="/contacts">Контакты</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import store from "../store";
export default {
  name: "Header",
  data: function() {
    return {
      mob: true,
      mobClose: false
    };
  },
  methods: {
    OpenMenu() {
      this.mob = false;
      this.mobClose = true;
    },
    CloseMenu() {
      this.mob = true;
      this.mobClose = false;
    },
    OnRedirect() {
      this.mob = true;
      this.mobClose = false;
    }
  }
};
</script>
<style lang="scss">
.mob-menu {
  top: 65px;
  z-index: 9999;
  position: absolute;
  height: auto;
  width: 100vw;
  background: #fff;
  ul {
    padding-left: 0;
    padding-right: 15px;
    li {
      text-align: center;
      margin-top: 5px;
      margin-bottom: 5px;
      text-align: right;
    }
  }
  a {
    color: #3b3b3b;
    text-decoration: none;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      color: #42b983;
    }
  }
}
.close-menu {
  img {
    display: block;
    height: 35px;
  }
}
</style>


