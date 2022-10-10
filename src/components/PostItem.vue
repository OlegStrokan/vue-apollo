<template>
  <div class="post">
    <div>
  <div><strong>Name:</strong>{{ post.title }}</div>
  <div><strong>Description:</strong>{{ post.body }}</div>
    </div>
  <div class="post__btns">
    <MyButton @click="$router.push(`/posts/${post.id}`)">
      Open
    </MyButton>
    <MyButton
        @click="$emit('remove', post)">
      Delete
    </MyButton>
  </div>
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
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__btns {
  display: flex;
}
</style>