const express = require('express');
// 요청에 대한 로그를 남겨줌
const morgan= require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

const app = express();
db.sequelize.sync();

// 아래 두줄을 넣어줘야 라우터에서 whrer{req.body.userId,} 이런 형식으로 받을 수 있음.
app.use('/',express.json()); // json 본문처리 '/' <- 생략가능
app.use(express.urlencoded({ extended: true})); // form 본문처리
// 요청에 대한 로그를 남겨줌
app.use(morgan('dev'));
// 브라우저에서 다른경로 ex) localhot:3000와 localhost:3065 끼리의 요청을 막기때문에 cors를 설치해줘야함
app.use(cors());
// 프론트는 세션을 조회할수 있는 쿠키를 전달(쿠키를 알아서 파싱)
app.use(cookieParser('SIPO')); // 시크릿 키! 세션과 같은값
// 사용자 정보는 서버의 세션에(세션 사용가능)
app.use(expressSession({
    //매번 세션 강제저장
    resave:false,
    // 빈 값도 저장
    saveUninitialized:false,
    // 시크릿 키! 쿠키파서에 도 같은값을넣어줌
    secret: process.env.COOKIE_SECRET,
    cookie{
        httpOnly:true, // 자바스크립트에서 쿠키에 접근 못하게함.(보안, true 설정이 좋음)
        secure:false, // https를 쓸때 트루로 해야함
    }
}));
app.use(passport.initialize()); // 패스포트는 세션 미들웨어 아래쪽에 써줘야함 ! 세션의 일부를 사용하기때문.
app.use(passport.session()); 

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