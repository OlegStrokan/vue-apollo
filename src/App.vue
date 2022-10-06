<template>
  <div class="app">
    <h1>Page with posts</h1>
    <input type="text">
    <MyButton @click="showDialog">Create post</MyButton>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </MyDialog>
    <PostList :posts="posts" @remove="removePost"/>

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
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
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