<template>
  <div class="post">
    <div>
  <div><strong>Name:</strong>{{ post.title }}</div>
  <div><strong>Description:</strong>{{ post.body }}</div>
    </div>
  <div class="post__btns">
    <MyButton>Delete</MyButton>
  </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: "PostItem",
  components: {MyButton},
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
</style>