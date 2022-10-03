<template>
  <div class="post">
  <div><strong>Name:</strong>{{ post.title }}</div>
  <div><strong>Description:</strong>{{ post.body }}</div>
  </div>
  <div>
    <button >Delete</button>
  </div>
</template>

<script>
export default {
  name: "PostItem",

  props: {
    post: {
      type: Object,
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