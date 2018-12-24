<template>
  <div id="app">
    <Header/>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}
.header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 18px 30px;
  justify-content: space-between;

  align-items: center;
  background: #f5f5f5;
  box-shadow: 0px 4px 10px #e5e5e5;
  z-index: 999;
  position: relative;
}
logo {
  cursor: pointer;
}
.logo {
  text-align: left;
  a {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 24px;
    color: #3b3b3b;
    text-decoration: none;
  }
  &:hover {
    opacity: 0.9;
  }
  span {
    color: #42b983;
  }
}
.menu {
  text-align: right;
  ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
  li {
    display: inline-block;
    margin-left: 35px;
    margin-right: 35px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
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
.hamburger {
  display: none;
}
@media (max-width: 1150px) {
  .menu {
    display: none;
  }
  .hamburger {
    display: block;
    height: 100%;
    text-align: right;
    img {
      height: 35px;
    }
  }
  .header {
    padding: 15px 10px;
  }
}
</style>
