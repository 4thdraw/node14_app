const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("naiv.js입니다. 나중에 sql에 가서 navi DB가져다가 리액트줄거에요.")
})
router.get('/sub', (req, res)=>{
    res.send("하위라우터에요. 주소창에서 요청해야해요 부모라우터/sub")
})

module.exports = router ;