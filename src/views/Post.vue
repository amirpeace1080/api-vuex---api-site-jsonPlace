<template>
  <div>
    <h1>Post Page</h1>
    <!-- <h2>{{ this.$store.state.posts[0] }}</h2> -->
    <table id="customers">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      <tr v-for="(post, index) in this.$store.state.posts" :key="index">
        <td>{{ post.id }}</td>
        <router-link
          :to="{
            id: post.id,
            name: 'EditPost',
            params: { id: post.id, title: post.title, body: post.body },
          }"
        >
          <td>{{ post.title }}</td>
        </router-link>
        <td>{{ post.body }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Post",
  mounted() {
    this.$store.dispatch("post").then((resp) => {
      resp.data;
    });
  },
};
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
