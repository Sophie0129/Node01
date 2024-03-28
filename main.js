const http = require('http'); //리콰이어 == import
const fs = require("fs");
const app = http.createServer( (request, response) => {
    //사용자 요청값이 리퀘스트로 들어오고, 서버 응답값이 리스폰으로 들어옴
    console.log("연결성공");

    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    /*200은 성공적으로 요청이 이뤄졌다는 의미(HTTP 상태 코드)*/

    if( request.url === "/") {
        response.end(`<h1>기본 페이지 연결</h1>
        <a href="/test">test 이동</a>`)
        //그냥 192.168.15.1:3000 로 연결했을때

    }else if(request.url === "/test"){
        fs.readFile("test.html", (err,data)=>{
            response.end(data)
        }) 
        //첫값은 에러시 보일 값, 두번째는 해당파일의 데이터값
        //뒤에 /test 붙혀서 연결됐을때
    }else{

    }

    //response.end("연결 성공 되었습니다33")
})
app.listen(3000, "192.168.15.1"); 
/* 서버는 항상 켜져있어야 하므로 그걸 3000포트넘버로 대기하겠다
뒤에 아이피넘버 적으면 아이피로 접속하게됨
http://localhost:3000/로 접속하면 열려있음
아이피로는 http://192.168.15.1:3000/
PS D:\01_김보선_핀테크\web_front\HTML> cd .\Node\day01
PS D:\01_김보선_핀테크\web_front\HTML\Node\day01> node main
연결성공
연결성공
끌땐 ctrl+c

기능을 추가할 때
npm install supervisor --save
기능 기능 설치할프로그램 해당파일 안에서만 사용하겠다는 의미의 기능
uninstall 하면 삭제된다

설치한 프로젝트가 무슨버전으로 설치되었는지 기억해야
나중에 유지보수할때 버전 맞춰서 수정을 해야만한다

이후 다른 버전이 나오면 기능이 없어지거나, 사용방법이 달라지는등
기존에 있던 페이지를 못쓰게 될수도 있으니까

설치할때 프로그램명 뒤에 @버전명 하면 코드명을 명시하고,
이후 latest는 최신버전으로...?

supervisor = 연결된 웹페이지에 바뀐 코드 내용을 새로고침으로 볼 수 있게 함

수퍼바이져 실행 안될땐 npx supervisor 파일이름 
npx > 현재 위치에서..실행?
-g 글로벌(전역)으로 저장실행하는 기능

*/
