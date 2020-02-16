const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const posts = await db.Post.findAll({
      include: [
        {
          model: db.User,
          attributes: ["id", "nickname"] // 비밀번호를 가져오지 않게 속성 따로지정.
        }
      ],
      order: [["createdAt", "DESC"]] // DESC는 내림차순, ASC는 오름차순
    });
    res.json(posts);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
