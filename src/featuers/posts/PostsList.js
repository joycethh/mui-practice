import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Typography } from "@mui/material";
import PostExcerpt from "./PostExcerpt";
import { LoadingWrapper } from "./styles";

import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "./postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  const { posts } = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  if (!posts) {
    return (
      <section>
        <Typography variant="h4">No posts Found!</Typography>
      </section>
    );
  }
  if (postsStatus === "loading") {
    return (
      <section>
        <LoadingWrapper>
          <CircularProgress />
        </LoadingWrapper>
      </section>
    );
  }
  if (postsError === "failed") {
    return (
      <section>
        <p>{postsError}</p>
      </section>
    );
  }

  return (
    <section>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <div key={post._id}>
            <PostExcerpt
              currentId={currentId}
              setCurrentId={setCurrentId}
              post={post}
            />
          </div>
        ))}
    </section>
  );
};

export default PostsList;
