<template>
  <div>
    <h1>Comment Page</h1>
    <!-- <h2> {{ this.$store.state.comments[0] }} </h2> -->

    <table id="customers">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Body</th>
      </tr>
      <tr v-for="(comment, index) in this.$store.state.comments" :key="index">
        <td>{{ comment.id }}</td>
        <td>{{ comment.name }}</td>
        <td>{{ comment.email }}</td>
        <td>{{ comment.body }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Comment",
  created() {
    this.$store.dispatch("comment").then((resp) => {
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
  border: 1px solid red;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: aqua;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
