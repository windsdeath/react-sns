// passport/index.js의 export된 함수는 back/index.js에서 호출됨.

const passport = require('passport');
const db = require('../models');
const local = require('./local');

module.exports = () => {
    // 서버쪽에(db에 저장된 id) [{ id:3, cookie: '8sdf78sdf78' }] 를 쿠키값으로 불러옴
    passport.serializeUser((user,done)=>{
        return done(null, user.id);
    });
    passport.deserializeUser(async(id,done)=>{
        try{
            const user = await db.User.findOne({
                where:{ id },
            });
            return done(null, user); // req.user 에 저장됨.
        } catch (e){
            console.error(e);
            return done(e);
        }
    });

    local();
};