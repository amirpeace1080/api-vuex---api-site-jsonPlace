import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Promise from "core-js/features/promise";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    comments: [],
    albums: [],
    photos: [],
    todos: [],
    users: [],
  },
  mutations: {
    SET_POST(state, posts) {
      state.posts = posts;
    },
    SET_COMMENT(state, comments) {
      state.comments = comments;
    },
    SET_ALBUM(state, albums) {
      state.albums = albums;
    },
    SET_PHOTO(state, photos) {
      state.photos = photos;
    },
    SET_TODO(state, todos) {
      state.todos = todos;
    },
    SET_USER(state, users) {
      state.users = users;
    },
  },
  actions: {
    post({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((resp) => {
            commit("SET_POST", resp.data);
            resolve;
          })
          .catch((error) => {
            console.log(error, statusPost);
          });
      });
    },
    comment({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://jsonplaceholder.typicode.com/comments")
          .then((resp) => {
            commit("SET_COMMENT", resp.data);
            resolve();
          })
          .catch((error) => {
            console.log(error, statusComment);
          });
      });
    },
    album({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://jsonplaceholder.typicode.com/albums")
          .then((resp) => {
            commit("SET_ALBUM", resp.data);
            resolve();
          })
          .catch((error) => {
            console.log(error, statusAlbum);
          });
      });
    },
    photo({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://jsonplaceholder.typicode.com/photos")
          .then((resp) => {
            commit("SET_PHOTO", resp.data);
            resolve();
          })
          .catch((error) => {
            console.log(error, statusPhoto);
          });
      });
    },
    todo({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then((resp) => {
            commit("SET_TODO", resp.data);
            resolve;
          })
          .catch((error) => {
            console.log(error, statusTodo);
          });
      });
    },
    user({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((resp) => {
            commit("SET_USER", resp.data);
            resolve();
          })
          .catch((error) => {
            console.log(error, statusUser);
          });
      });
    },
  },
  modules: {},
});
