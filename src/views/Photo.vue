<template>
  <div>
    <h1>Photo Page</h1>
    <h2>{{ this.$store.state.photos[0] }}</h2>

    <table id="customers">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Images</th>
      </tr>
      <tr v-for="(photo, index) in this.$store.state.photos" :key="index">
        <td> {{ photo.id }} </td>
        <td> {{ photo.title }} </td>
        <td>
            <img :src="photo.thumbnailUrl" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Photo",
  created() {
    this.$store.dispatch("photo").then((resp) => {
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
  border: 1px solid brown;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: black;
  color: white;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: blue;
  color: white;
}
</style>
