const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../models");
const passport = require("passport");

const router = express.Router();

router.get("/", (req, res) => {});
router.post("/", async (req, res, next) => {
  try {
    const exUser = await db.User.findOne({
      where: {
        userId: req.body.userId
      }
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디 입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await db.User.create({
      nickname: req.body.nickname,
      userId: req.body.userId,
      password: hashedPassword
    });
    console.log(newUser);
    return res.status(200).json(newUser);
  } catch (e) {
    console.error(e);
    // 에러처리를 여기서
    // return res.status.apply(403).send(e)
    return next(e);
  }
});

router.get("/:id", (req, res) => {
  // 남의 정보 가져오는 것 ex) /3
});

router.post("/login", (req, res, next) => {
  // POST /api/user/login
  passport.authenticate("local", (err, user, info) => {
    // err, user, info 는 local.js의 done(null, false , {reason:'비밀번호가 틀립니다.}) 부분.
    console.log(err, user, info);
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, loginErr => {
      if (loginErr) {
        return next(loginErr);
      }
      const filteredUser = Object.assign({}, user.toJSON()); // 시퀄라이저에서 가져온객체라 toJSON() 붙여서 사용해야함.
      delete filteredUser.password;
      return res.json(filteredUser);
    });
  })(req, res, next); // kakao를 구현했음 kakao google이면 google 등으로 쓰면 됨.
});

// /api/user/logout
router.post("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("logout 성공");
});
router.get("/:id/follow", (req, res) => {
  // /api/user/:id/follow
});
router.post("/:id/follow", (req, res) => {});
router.delete("/:id/follow", (req, res) => {});
router.delete("/:id/follower", (req, res) => {});
router.get("/:id/posts", (req, res) => {});

module.exports = router;
