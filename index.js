const app = require('express')();
const navi = require("./api/navi");
const banner = require("./api/banner");
const interview = require("./api/interview");

// 리액트가 요청할 수 있도록 주소생성하기
app.use('/', interview);
app.use('/b', banner);
app.use('/navi', navi);


app.use((req, res) =>{
    res.status(404).sendFile( __dirname+'/public/nopage.html')
})

app.listen(8000, ()=>{
    console.log("서버정상구동중")
})
