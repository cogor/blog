<template>
  <div class="banner">
    <div>
      <h1>Блог
        <br>
        <span>Vue.js</span> разработчика
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner"
};
</script>
<style lang="scss">
.banner {
  position: relative;
  display: grid;
  max-height: 800px;
  height: 80vh;
  z-index: 1;
  align-items: center;
  background-image: url("../assets/Group.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 100%;
  h1 {
    margin-left: 70px;
    font-family: Montserrat;
    text-align: left;
    font-weight: bold;
    font-size: 72px;
    color: #3b3b3b;
    align-self: center;
    span {
      color: #42b983;
    }
  }
}
</style>
