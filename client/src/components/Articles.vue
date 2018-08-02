<template>
  <div class="col-md-12 col-sm-12">
    <div class="card">
      <img class="card-img-top" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ article.title }}</h5>
        <p class="card-text">{{ article.content }}</p>
        <small>Posted by: {{ article.author.username }}</small>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>
