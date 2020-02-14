const express = require('express');
// 요청에 대한 로그를 남겨줌
const morgan= require('morgan');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const cors = require('cors');

const app = express();
db.sequelize.sync();

// 아래 두줄을 넣어줘야 라우터에서 whrer{req.body.userId,} 이런 형식으로 받을 수 있음.
app.use('/',express.json()); // json 본문처리 '/' <- 생략가능
app.use(express.urlencoded({ extended: true})); // form 본문처리
// 요청에 대한 로그를 남겨줌
app.use(morgan('dev'));
app.use(cors());
// 라우터 미들웨어
app.use('/api/user', userAPIRouter); // import한 routes/user.js의 api의 기본경로를 /api/user로 만들어주는 부분.
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postAPIRouter);



// app.get('/', (req, res) => {
//     res.send('Hello, server');
// });

// app.get('/about', (req, res) => {
//     res.send('Hello, about');
// });

app.listen(3065, ()=>{
    console.log('server is running on localhost:3065');
});