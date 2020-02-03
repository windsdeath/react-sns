import React from 'react';
import { Form, Input, Button, Card,Icon, Avatar } from 'antd';

const dummy = {
    isLoggedin: true,
    imagePaths:[],
    mainPosts: [{
        User: {
            id:1,
            nickname:"시포",
            },
            content:"첫번째 게시글",
            img: 'http://wordpress.sipo.kr/wp-content/uploads/2020/01/web_logo.svg',
    }],
}

const Home = () => {
    return(
        <div>
            {dummy.isLoggedin && <Form style={{ marginBottom: "20px"}} encType="multipart/form-data">
                <Input.TextArea maxLength={140} placeholder="특별한 일을 기록해주세요" />
                <div>
                    <input type="file" multiple hidden />
                    <Button>이미지 업로드</Button>
                    <Button type="primary" style={{ float: 'right'}} htmlType="submit">짹짹</Button>
                </div>
                <div>
                    {dummy.imagePaths.map( (v,i) => {
                        return (
                            <div key={v} style={{ display: 'inline-block' }}>
                                <img src={'http://localhost:3000/' +v} style={{ width:'200px' }} alt={v} />
                                <div>
                                    <Button>제거</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </Form>}
                {dummy.mainPosts.map((c) => {
                    return (
                        <Card
                            key={+c.createdAt}
                            cover={c.img && <img alt="example" src={c.img} />}
                            actions={[
                                <Icon type="retweet" key="retweet" />,
                                <Icon type="heart" key="heart" />,
                                <Icon type="message" key="message" />,
                                <Icon type="ellipsis" key="ellipsis" />,
                            ]}
                            extra={<Button>팔로우</Button>}
                        >
                            <Card.Meta
                        avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
                        title={c.User.nickname}
                        description={c.content}
                        />
                        </Card>
                    );
                })}
        </div>
    );
};

export default Home;