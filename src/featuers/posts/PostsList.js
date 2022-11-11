import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import PostExcerpt from "./PostExcerpt";
import { LoadingWrapper } from "./styles";

import { getPostsError, getPostsStatus, selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const [currentId, setCurrentId] = useState(0);
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  if (!posts) return null;
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
