<template>
  <div class="app">
    <PostForm @create="createPost"/>
    <PostList :posts="posts"/>

  </div>
</template>

<script>

import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {PostList, PostForm},

  data() {
    return {
      posts: [],
      title: '',
      body: '',
    }
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post)
    }
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px
}

</style>