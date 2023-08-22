const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("나는 api폴더에 있는 banner.js에요")
})

module.exports = router ;