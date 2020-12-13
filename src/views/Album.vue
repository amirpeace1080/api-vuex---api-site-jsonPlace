<template>
  <div>
    <h1>Album Page</h1>
    <!-- <h2>{{ this.$store.state.albums[0] }}</h2> -->
    <table id="customers">
      <tr>
        <th>UserId</th>
        <th>Id</th>
        <th>Title</th>
      </tr>
      <tr v-for="(album, index) in this.$store.state.albums" :key="index">
        <td> {{ album.userId }} </td>
        <td> {{ album.id }} </td>
        <td> {{ album.title}} </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Album",
  mounted() {
    this.$store.dispatch("album").then((resp) => {
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
  border: 1px solid yellow;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: white;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: orange;
  color: white;
}
</style>
