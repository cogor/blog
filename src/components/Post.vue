<template>
  <div class="post">
    <img :src="post.img">
    <h3>post.title</h3>
    <p>post.content</p>
  </div>
</template>
<script>
export default {
  name: 'Post',
};
</script>
