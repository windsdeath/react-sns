import React from 'react'
import {Card,Icon,Button,Avatar } from 'antd';
import PropTypes from 'prop-types';

// import {appDummy} from '../components/AppLayout';

const PostCard = ({post}) => {
    return (
        <Card
        key={post.createdAt}
        cover={post.img && <img alt="example" src={post.img} />}
        actions={[
            <Icon type="retweet" key="retweet" />,
            <Icon type="heart" key="heart" />,
            <Icon type="message" key="message" />,
            <Icon type="ellipsis" key="ellipsis" />,
        ]}
        extra={<Button>팔로우</Button>}
    >
        <Card.Meta
    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
    title={post.User.nickname}
    description={post.content}
    />
    </Card>
    )
}

PostCard.prototypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        context: PropTypes.string,
        createdAt: PropTypes.object,
    })
}

export default PostCard;
