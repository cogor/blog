<template>
  <div class="header">
    <div class="logo">
      <logo>
        <span>Vue</span>Blog
      </logo>
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
  </div>
</template>
<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
.header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 18px 30px;
  justify-content: space-between;
  background: #f5f5f5;
  box-shadow: 0px 4px 10px #e5e5e5;
  z-index: 999;
  position: relative;
}
logo {
  cursor: pointer;
}
.logo {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 18px;
  color: #3b3b3b;
  text-align: left;

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
    font-size: 18px;
  }
}
</style>
