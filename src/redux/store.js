import { postsReduser } from './slices/posts';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    post: postsReduser,
  },
});

export default store;
