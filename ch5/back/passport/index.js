// passport/index.js의 export된 함수는 back/index.js에서 호출됨.

const passport = require("passport");
const db = require("../models");
const local = require("./local");

module.exports = () => {
  // 서버쪽에(db에 저장된 id) [{ id:3, cookie: '8sdf78sdf78' }] 를 쿠키값으로 불러옴
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({
        where: { id }
      });
      return done(null, user); // req.user 에 저장됨.
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local();
};

// 프론트에서 서버로는 cookie만 보냄 '8sdf78sdf78'
// 서버가 쿠키파서, 익스프레스 세션으로 쿠키검사후 id: 2 발견
// id: 2 가 deserializeUser에 들어감
// req.user로 사용자 정보가 들어감

// 요청 보낼때마다 deserializeUser가 실햄됨(db 요청 1번씩 실행)
// 실무에선 deserializeUser 결과를 캐싱해서 사용함(비용 낮추기)
