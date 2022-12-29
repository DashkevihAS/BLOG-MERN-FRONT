import { postsReduser } from './slices/posts';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    posts: postsReduser,
  },
});

export default store;
