<template>
  <div class="home">
    <div class="row">
      <Articles
        v-for="(article, index) in articles"
        :article="article"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Articles from '@/components/Articles.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Articles
  },
  data () {
    return {
      articles: []
    }
  },
  created () {
    axios.get('http://localhost:3000/articles', {})
    .then(response => {
      console.log(response)
      this.articles = response.data
    })
    .catch (err => {
      console.log(err.response)
    })
  }
}
</script>


