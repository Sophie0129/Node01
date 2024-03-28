const ex = require('express')
const arr = ex();

arr.set("views", "./quiz")
arr.set("view engine", "ejs")

arr.get("/", ((req,res)=>{
    const context={
        rank : [
            [1,2,3,4,5],
            ["육","7","팔","구","10"],
            [11,12,13,14,15]
        ]
    }
    res.render("for", {c:context})
}))
arr.get("/url", ((req,res)=>{
    const context={
        url : [
            {"네이버" : "https://www.naver.com/"},
            {"구글" : "https://www.google.com/"},
            {"다음" : "https://www.daum.net/"}
        ]
    }
    res.render("url", {c:context})
}))

arr.listen(3000,()=>{console.log("quiz 서버 가동")})