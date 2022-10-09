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
    <div v-else>Downloading...</div>
    <div ref="observer" class="observer"></div>
<!--    <div class="page__wrapper">
      <div
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          class="page"
          :class="{
            'current-page': page === pageNumber
          }"
          @click="changePage(pageNumber)"
      >{{ pageNumber }}</div>
    </div>-->
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
      totalPages: null,
      page: 1,
      limit: 10,
      sortOptions: [
        {value: 'title', name: 'With title'},
        {value: 'body', name: 'With body'},
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
   /* changePage(pageNumber) {
      this.page = pageNumber;
    },*/
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        })
        this.posts = response.data;
        this.isPostsLoading = false;
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
      } catch {
        console.log('error')
      }
    },

    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        })
        this.posts = [...this.posts, ...response.data];
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
      } catch {
        console.log('error')
      }
    },
  },
  mounted() {
    this.fetchPosts()
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }

    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        this.loadMorePosts()
      }
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(this.$refs.observer)
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((firstPost, secondPost) => {
        return firstPost[this.selectedSort]?.localeCompare(secondPost[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
 /*   page() {
      this.fetchPosts();
    }*/
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

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: gray;
}

</style>