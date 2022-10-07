<template>
  <div class="app">
    <h1>Page with posts</h1>
    <div class="app__btns">
      <MyButton @click="showDialog" style="margin: 15px 0;">Create post</MyButton>
      <MySelect v-model="selectedSort">

      </MySelect>
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </MyDialog>
    <PostList v-if="!isPostsLoading" :posts="posts" @remove="removePost"/>

  </div>
</template>

<script>

import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  components: {PostList, PostForm},

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [

      ]
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
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data;
        this.isPostsLoading = false;
      } catch {
        console.log('error')
      }
    },
  },
  mounted() {
    this.fetchPosts()
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

.app__btns {
  margin: 15px;
  display: flex;
  justify-content: space-between;
}


</style>