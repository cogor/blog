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
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>

