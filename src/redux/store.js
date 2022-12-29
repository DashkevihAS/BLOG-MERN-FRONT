import { authReducer } from './slices/auth';
import { postsReduser } from './slices/posts';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    posts: postsReduser,
    auth: authReducer,
  },
});

export default store;
