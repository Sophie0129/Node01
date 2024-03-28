const express = require('express');
const app = express();
/*express로 .get 이용해 경로를 지정해줄수 있다.
안쓸경우 main 파일처럼 if문으로 가는 경로마다 다 지정해줘야함 */


app.set("views", "./") //이 기능을 볼거고
app.set("view engine", "ejs")//그걸 ejs를 통해 볼꺼다


app.get("/", (req, res)=>{
    //res.send("기본 페이지");
    res.render("index") // index.js를 사용자에게 보내겠다
})
app.get("/test", (req, res)=>{
    res.send("테스트 페이지");
})
app.listen(3000, ()=>{console.log("3000 port server 구동")});