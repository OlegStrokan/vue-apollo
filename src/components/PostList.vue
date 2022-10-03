<template>
  <div>
    <h3>List of users</h3>
  </div>
  <PostItem
      v-for="post in posts"
      :key=post.id
      :post="post"
  />
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