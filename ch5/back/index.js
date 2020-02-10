const express = require('express');

const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

const app = express();
db.sequelize.sync();

app.use(/api/user, userAPIRouter); // import한 routes/user.js의 api의 기본경로를 /api/user로 만들어주는 부분.
app.use(/api/post, postAPIRouter);
app.use(/api/posts, postAPIRouter);



// app.get('/', (req, res) => {
//     res.send('Hello, server');
// });

// app.get('/about', (req, res) => {
//     res.send('Hello, about');
// });

app.listen(3065, ()=>{
    console.log('server is running on localhost:3065');
});