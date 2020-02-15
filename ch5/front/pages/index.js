import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const { me } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div>
      {me && <PostForm />}
      {mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
