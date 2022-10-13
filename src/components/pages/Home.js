import React, { useEffect, useState } from "react";
import NewsFeed from "../posts/NewsFeed";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../actions/postsAction";

const Home = () => {
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  });
  return (
    <>
      <NewsFeed id={id} setId={setId} />
    </>
  );
};

export default Home;
