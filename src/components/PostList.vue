<template>
  <div v-if="posts.length > 0">
    <h3>List of posts</h3>
  <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post)"
  />
  </div>
  <h2 v-else>List of posts is empty</h2>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  name: "PostList",
  components: {PostItem},


  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
</style>