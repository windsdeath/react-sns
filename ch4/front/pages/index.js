import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector, useDispatch} from 'react-redux';
import { LOG_IN_SUCCESS } from '../reducers/user';

const Home = () => {

  const { isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector( state => state.post);
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch({
        type:LOG_IN_SUCCESS,
      });
    }, [])

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => {
        return (
          <PostCard key={c} post={c} />
        );
      })}
    </div>
  );
};

export default Home;
