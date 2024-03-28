const http = require('http');
const fs = require("fs");
const app = http.createServer( ( request , response )=>{
    console.log("연결 성공!!!!");

    response.writeHead( 200, {'Content-Type':'text/html; charset=utf-8' } )

    if( request.url === "/" ){
        response.end(`<h1>기본 페이지 연결</h1>
            <a href="/test">test이동</a>
        `)
    }else if(request.url === "/test"){
        fs.readFile("test.html" , (err, data)=>{
            response.end( data );
        } )
    }else{
        response.end("연결 성공 되었습니다!!!")
    }
    //response.end("연결 성공 되었습니다!!!")
} )
app.listen( 3000 ,"192.168.42.44" ); 



