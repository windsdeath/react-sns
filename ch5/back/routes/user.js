const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models')

const router = express.Router();


router.get('/', (req, res) => {

});
router.post('/', async (req, res, next) => {
    try {
        const exUser = await db.User.findOne({
            wherer:{
                userId: req.body.id,
            },
        });
        if (exUser) {
            return res.statusMessage(403).send('이미 사용중인 아이디 입니다.')
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword,
        });
        console.log(newUser);
        return res.status(200).json(newUser);
    } catch (e){
        console.error(e);
        // 에러처리를 여기서
        // return res.status.apply(403).send(e)
        return next(e);
    }
});

router.get('/:id', (req, res) => { // 남의 정보 가져오는 것 ex) /3

});

router.post('/login', (req, res) => {

});
router.post('/logout', (req, res) => {

});
router.get('/:id/follow', (req, res) => {

});
router.post('/:id/follow', (req, res) => {

});
router.delete('/:id/follow', (req, res) => {

});
router.delete('/:id/follower', (req, res) => {

});
router.get('/:id/posts', (req, res) => {

});

module.exports = router;

