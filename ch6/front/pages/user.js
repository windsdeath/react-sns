import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux'
import {Avatar, Card} from 'antd';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import { LOAD_USER_REQUEST} from '../reducers/user';
import PostCard from '../components/PostCard';

const User = ({ id }) => (
  const dispatch = useDispatch();
  const {mainPosts} = useSelector(state => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
      data: id
    })
    dispatch({
      type:LOAD_USER_POSTS_REQUEST,
      data:id,
    })
  }, []);
  return(
  <div>
    {userInfo 
      ? (<Card
        actions={[
          <div key="twit">
            트윗
            <br />
            {userInfo.Post}
          </div>
          <div key="following">
            팔로잉
            <br />
          {userInfo.Followings}
          </div>
          <div key="follower">
            팔로워
            <br />
          {userInfo.Followers}
          </div>
        ]}
      >
        <Card.Meta 
          avatar={<Avatar>{UserInfo.nickname[0]}</Avatar>}
          title={userInfo.nickname}
        />
      </Card>)
      : null}
    {mainPosts.map(c=>(
      <PostCard key={c.createdAt} post={c} />
    ))}
  </div>)
);

User.propTypes = {
  id: PropTypes.number.isRequired,
};


User.getInitialProps = async (context) => {
  console.log('User getInitialProps :', context.query.id);
  return { id: parseInt(context.query.id, 10) };
};

export default User;
