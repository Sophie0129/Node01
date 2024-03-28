const express = require('express');
const app = express();

app.set("views", "./views");
app.set("view engine","ejs");

app.get("/", (req, res)=>{
    res.render("index", { key : "value" });
})
app.get("/login", (req, res)=>{
    const name = "홍길동";
    res.render("login" , { n : name } );
})
app.get("/logout", (req, res)=>{
    const context = {
        key1 : "값1", 
        key2 : "값2", 
        key3 : [10,20,30],
        key4 : {k1 : "k11",k2 : "k22" } 
    }
    res.render("logout", { c : context }  );
})
app.get("/member", (req, res)=>{
    context = {
        arr : ['홍길동', '20살', '산골짜기'],
        obj : {'name':'김개똥','age':'30살','addr':'개똥별'},
        name : '고길동', 'age' : '40살', 'addr' : '마포구'
    } 
    res.render("member", { context }  );
})

app.get("/for", (req, res)=>{
    const arr = [10,20,30];
    for(let i=0; i<arr.length ; i++){
        console.log( arr[i] );
    }
    console.log("------")
    arr.forEach( (data)=>{
        console.log('foreach : '+data);
    })
    res.render("for")
})
app.get("/for_quiz",(req, res)=>{  
    context={ "rank":[ [1,2,3,4,5], ["육","7","팔","구","10"], [11,12,13,14,15] ] }
    res.render("for_quiz", context);
});
app.get("/url",(req, res)=>{  
    context={
        "url":[
            {"네이버":"https://www.naver.com/"},
            {"구글":"https://www.google.co.kr/"},
            {"다음":"http://www.daum.net/"} 
        ]
    }  
    res.render("url", context);
});
  
app.listen( 3000 , ()=>{ console.log("3000port 서버 구동")} );