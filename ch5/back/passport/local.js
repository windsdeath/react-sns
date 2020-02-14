// local.js의 export된 함수는 같은경로의 index.js에서 실행됨.

const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const db = require("../models");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "userId",
        passwordField: "password"
      },
      async (userId, password, done) => {
        // 전략이 들어가는 부분. ↓
        try {
          const user = await db.User.findOne({ where: { userId } }); // 시퀄라이저에서 유저를 가져옴(제이슨으로 변환해서 사용해야함)
          if (!user) {
            return done(null, false, { reason: "존재하지 않는 사용자입니다." }); // 첫번째 null 은 서버쪽 에러(에러가 나면 1을 넣어줌), 성공했을때의 사용자정보 ,로직상에서 에러가 났을때 세번째 인자 사용.
          }
          const result = await bcrypt.compare(password, user.password); // 프론트에서 보낸 패스워드와 DB에 저장된 패스워드를 비교 ->bcrypt에서 메소드를 제공
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다" });
        } catch (e) {
          console.error(e);
          return done(e);
        }
      }
    )
  );
};
