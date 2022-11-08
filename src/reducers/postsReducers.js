import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  GET_ONE,
  CREATE,
  UPDATE,
  LIKE,
  DELETE,
} from "../constants/actionType";

export const postsReducer = (
  state = { posts: [], isLoading: true },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case END_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case FETCH_ALL:
      return {
        posts: action.payload,
      };
    case GET_ONE: {
      return {
        ...state,
        post: action.payload,
      };
    }
    case CREATE:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case UPDATE:
      return {
        ...state,
        post: action.payload,
      };
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter(
          (restPosts) => restPosts._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
