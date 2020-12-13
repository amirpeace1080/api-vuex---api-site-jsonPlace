<template>
  <div>
      <h1>Edit Post</h1>
      <br>
      <br>
      <br>
      <input v-model="id" />
      <br><br>
      <input v-model="title" />
      <br><br>
      <input v-model="body" />
  </div>
</template>

<script>
export default {
    name: 'EditPosts',
    data() {
        return {
            id: null,
            title: null,
            body: null
        }
    },
    mounted() {
        this.id = this.$route.params.id
        this.title = this.$route.params.title
        this.body = this.$route.params.body
    },
}
</script>

<style>

</style>