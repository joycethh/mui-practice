import {
  FETCH_ALL,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
} from "../constants/actionType";

// export const postsReducer = (state = {}, action) => {
//   switch (action.type) {
//     case FETCH_ALL:
//       return {
//         posts: action.payload,
//       };
//     case CREATE:
//       return {
//         posts: [...state.posts, action.payload],
//       };
//     case UPDATE:
//       return {
//         posts: [action.payload, ...state.posts],
//       };
//     case DELETE:
//       return {
//         posts: state.posts.filter(
//           (restPosts) => restPosts._id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };

export const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case GET_ONE:
      return action.payload;
    case CREATE:
      return [action.payload, ...posts];
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
// FETCH_ALL_START
// isPostsLoading: true

// FETCH_ALL_SUCCESS
// isPostsLoading: false
