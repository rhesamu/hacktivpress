<template>
  <div>
    <form>
      <div class="form-group">
        <label>Title</label>
        <input v-model="title" type="text" class="form-control" placeholder="title">
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Content</label>
        <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <div class="form-group">
        <label>Category</label>
        <input v-model="category" type="text" class="form-control" placeholder="Category">
      </div>
      <button type="submit" class="btn btn-primary">Post</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content: '',
      category: ''
    }
  }
}
</script>



