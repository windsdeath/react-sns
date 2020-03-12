const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/:tag', async (req, res, next) => {
    try {
        const posts = await db.Post.findAll({
            include: [{
                model: db.Hashtag,
                where: {name: decodeURIComponent(req.params.name)}, // URICOMPONENT란 한글이나 특수문자 등을 직접 주소창에 쳤을때 (%551%등으로 변하는 것)
        }, {
                model: db.User,
                attributes:['id', 'nickname'],
            }],
        )};
    res.json(posts);
    }catch (e){
    console.error(e);
    next(e);
}
});

module.exports = router;