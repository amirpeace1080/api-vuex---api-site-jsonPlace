<template>
  <div>
    <h1>Todo Page</h1>
    <h3>{{ this.$store.state.todos[0] }}</h3>

    <table id="customers">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Completed</th>
      </tr>
      <tr v-for="(todo, index) in this.$store.state.todos" :key="index">
        <td> {{ todo.id }} </td>
        <td> {{ todo.title}} </td>
        <td> {{ todo.completed }} </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Todo",
  mounted() {
    this.$store.dispatch("todo").then((resp) => {
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
  border: 1px solid green;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: red;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: aqua;
  color: white;
}
</style>
