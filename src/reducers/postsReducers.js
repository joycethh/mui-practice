import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  GET_ONE,
  CREATE,
  UPDATE,
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
      console.log("get one state", state);
      return {
        ...state,
        post: action.payload,
      };
    }
    case CREATE:
      console.log("create state", state);
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case UPDATE:
      console.log("update state", state);
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE:
      console.log("delete state", state);
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

// export const postsReducer = (posts = [], action) => {
//   switch (action.type) {
//     case FETCH_ALL:
//       return action.payload;
//     case GET_ONE:
//       return action.payload;
//     case CREATE:
//       return [action.payload, ...posts];
//     case UPDATE:
//       return posts.map((post) =>
//         post._id === action.payload._id ? action.payload : post
//       );
//     case DELETE:
//       return posts.filter((post) => post._id !== action.payload);
//     default:
//       return posts;
//   }
// };
// FETCH_ALL_START
// isPostsLoading: true

// FETCH_ALL_SUCCESS
// isPostsLoading: false
