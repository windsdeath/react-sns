import React from 'react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

export const indexDummy = {
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
            {indexDummy.isLoggedin && <PostForm />}
                {indexDummy.mainPosts.map((c) => {
                    return (
                       <PostCard key={c}  post={c} />
                    );
                })}
        </div>
    );
};

export default Home;