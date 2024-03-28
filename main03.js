const express = require('express');
const app = express();

app.set("views", "./views") 
app.set("view engine", "ejs")


app.get("/", (req, res)=>{

    res.render("index", {key : "value"})
})
app.get("/login", (req, res)=>{
    const name = "홍길동"
    res.render("login", {n : name});
})
app.get("/logout", (req, res)=>{
    const context = {
        key1: "값1",
        key2: "값2",
        key3: [10,20,30],
        key4: {k1 : "k11", k2:"k22"}
    }
    res.render("logout",{c :context});
})
app.get("/member", (req, res)=>{
    context = {
        arr : ['홍길동', '20살', '산골짜기'],
        obj : {'name':'김개똥', 'age':'30살', 'addr':'개똥별'},
        name : '고길동', 'age' : '40살', 'addr' : '마포구'
    }
    res.render("member",{context:context}) //키와 밸류를 같은이름으로 넘길경우
    //생략으로 그냥 {context} 하나만 적어도 된다
    }
)

app.get("/for", (req, res)=>{
    const arr = [10,20,30]
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
    console.log('--------')
    arr.forEach((data)=>{
        console.log('foreach : '+data)
    })
    res.render("for")
})

app.listen(3000, ()=>{console.log("main03 포트3000 서버 구동")});