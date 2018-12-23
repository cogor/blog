<template>
  <div class="home">
    <Header/>
    <Banner/>
    <h2>Последние статьи</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "home",
  data: function() {
    return {
      posts: [
        {
          title: "Хороший, спорный, злой Vue.js: опыт перехода с React",
          img:
            "https://proglib.io/wp-content/uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png",
          content: `
          Прежде чем начать работу с Vue.js, следует подробнее узнать о его достоинствах, недостатках и спорных моментах. Наш обзор поможет в этом.
          Переход с одного фреймворка на другой всегда сопровождается волнением и стрессом. Даже освоившись немного с новым инструментом, нельзя расслабляться.

Автор статьи вместе со своей командой перешел с React на Vue. Спустя два года регулярной работы он решился написать небольшой обзор о достоинствах и недостатках нового инструмента.
          `
        }
      ]
    };
  },
  components: {
    Header,
    Banner
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
</style>
