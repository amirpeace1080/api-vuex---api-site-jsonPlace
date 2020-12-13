import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Comment from '../views/Comment.vue'
import Album from '../views/Album.vue'
import Photo from '../views/Photo.vue'
import Todo from '../views/Todo.vue'
import User from '../views/User.vue'
import EditPost from '../views/EditPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/editPost',
    name: 'EditPost',
    component: EditPost
  },
  {
    path: '/comment',
    name: 'Comment',
    component: Comment
  },
  {
    path: '/album',
    name: 'Album',
    component: Album
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  routes
})

export default router
