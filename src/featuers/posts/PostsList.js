import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import Post from "./Post";
import { LoadingWrapper } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../actions/postsAction";

const NewsFeed = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!posts) return null;
  if (isLoading) {
    return (
      <section>
        <LoadingWrapper>
          <CircularProgress />
        </LoadingWrapper>
      </section>
    );
  }

  return (
    <section>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <div key={post._id}>
            <Post
              currentId={currentId}
              setCurrentId={setCurrentId}
              post={post}
            />
          </div>
        ))}
    </section>
  );
};

export default NewsFeed;
