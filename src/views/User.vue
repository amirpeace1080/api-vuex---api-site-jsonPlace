<template>
  <div>
    <h1>User Page</h1>
    <!-- <h2>{{ this.$store.state.users[0] }}</h2> -->

    <table id="customers">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company</th>
      </tr>
      <tr v-for="(user, index) in this.$store.state.users" :key="index">
        <td> {{ user.id }} </td>
        <td> {{ user.name }} </td>
        <td> {{ user.username}} </td>
        <td> {{ user.email }} </td>
        <td>
            <span> {{ user && user.address && user.address.city }} </span> -
            <span> {{ user && user.address && user.address.street }} </span> -
        </td>
        <td> {{ user.phone }} </td>
        <td>
            <a :href="user.website">{{ user.website}}</a>
        </td>
        <td>
            <span> {{ user && user.company && user.company.name }} </span> - 
            <span> {{ user && user.company && user.company.catchPhrase }} </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "User",
  mounted() {
    this.$store.dispatch("user").then((resp) => {
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
