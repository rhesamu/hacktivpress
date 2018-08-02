<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-light bg-light justify-content-between">
      <router-link to="/" class="navbar-brand">Hacktivpress</router-link>
      <button v-show="!isLoggedIn" class="btn btn-primary" @click="$router.push('/login')">Login</button>
      <button v-show="isLoggedIn" class="btn" @click="$router.push('/add')">Post Article</button>
      <button v-show="isLoggedIn" class="btn btn-primary" @click="logout">Logout</button>
    </nav>
    <div class="container" id="mainView">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoggedIn: false
    }
  },
  created () {
    if(localStorage.getItem('token')) {
      this.isLoggedIn = true
    }
  },
  mounted () {
    if(localStorage.getItem('token')) {
      this.isLoggedIn = true
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.isLoggedIn = false
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#mainView {
  padding-top: 80px;
}
</style>
