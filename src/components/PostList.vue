<template>
  <div v-for="post in posts" class="post" :key=post.id>
    <div><strong>Name:</strong>{{ post.title }}</div>
    <div><strong>Description:</strong>{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  name: "PostList",

  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 1px solid teal;
  margin: 15px;
}
</style>