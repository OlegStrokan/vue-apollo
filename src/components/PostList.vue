<template>
  <div v-if="posts.length > 0">
    <h3>List of posts</h3>
    <transition-group name="post_list">
      <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @remove="$emit('remove', post)"
      />
    </transition-group>
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
.post_list-item {
  display: inline-block;
  margin-right: 10px;
}

.post_list-enter-active,
.post_list-leave-active {
  transition: all 0.4s ease;
}

.post_list-enter-from,
.post_list-leave-to {
  opacity: 0;
  transform: translateX(140px)
}

.post_list-move {
  transition: transform 0.4s ease;
}
</style>