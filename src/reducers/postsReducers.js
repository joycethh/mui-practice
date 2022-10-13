import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../contants/actionType";

export const postsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        posts: action.payload,
      };
    case CREATE:
      return {
        posts: [...state.posts, action.payload],
      };
    case UPDATE:
      return {
        posts: [action.payload, ...state.posts],
      };
    case DELETE:
      return {
        posts: state.posts.filter(
          (restPosts) => restPosts._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
