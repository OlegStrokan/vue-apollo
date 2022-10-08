<template>
  <div class="app">
    <h1>Page with posts</h1>
    <MyInput
        v-model="searchQuery"
        type="text"
        placeholder="Search post..."/>
    <div class="app__btns">
      <MyButton @click="showDialog" style="margin: 15px 0;">Create post</MyButton>
      <MySelect
          v-model="selectedSort"
          :options="sortOptions"
        />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </MyDialog>
    <PostList
        v-if="!isPostsLoading"
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
    />

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
      searchQuery: '',
      sortOptions: [
        { value: 'title', name: 'With title'},
        { value: 'body', name: 'With body'},
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
  },
  computed: {
     sortedPosts() {
       return [...this.posts].sort((firstPost,secondPost) => {
         return firstPost[this.selectedSort]?.localeCompare(secondPost[this.selectedSort])
       })
    },
    sortedAndSearchedPosts() {
       return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
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

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}


</style>