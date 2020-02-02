import React from 'react'
import {Card,Avatar } from 'antd';

const LogedInCard = () => {
    return (
<Card
                        actions={[
                            <div key="twit">포스트<br />{dummy.Post.length}</div>,
                            <div key="following">팔로윙<br />{dummy.Follwings.length}</div>,
                            <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
                        ]}
                    >
                        <Card.Meta
                        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                        title={dummy.nickname}
                        />
                    </Card>
    )
}

export default LogedInCard;
