const express = require('express');
const app = express();

app.set("views", "./");
app.set("view engine","ejs");

app.get("/", (req, res)=>{
    //res.send("기본 페이지");
    res.render("index");
})
app.get("/test", (req, res)=>{
    res.send("테스트 페이지");
})

app.listen( 3000 , ()=>{ console.log("3000port 서버 구동")} );