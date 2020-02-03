import React from 'react'
import {appDummy} from '../components/AppLayout';

const userProfile = () => {
    return (
        <Card actions={[
            <div key="twit">포스트<br />{appDummy.Post.length}</div>,
            <div key="following">팔로윙<br />{appDummy.Follwings.length}</div>,
            <div key="follower">팔로워<br />{appDummy.Followers.length}</div>,
        ]}
    >
        <Card.Meta
        avatar={<Avatar>{appDummy.nickname[0]}</Avatar>}
        title={appDummy.nickname}
        />
    </Card>
    )
    }

export default userProfile;
