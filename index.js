// //node는 CommonJS 문법을 사용
// //import는 require();

// const http = require('http');
// // 본인 컴퓨터의 주소를 의미 127.0.0.1
// const hostname = "127.0.0.1";
// const port = 8080;

// // 서버만들기 createServer(f(req,res))
// const server = http.createServer(function(req,res){
//     // 요청정보 req
//     // 응답정보 res
//     const path = req.url;
//     const method =req.method;
//     if(path ==="/products"){
//         if(method === 'GET'){
//             //응답을 보낼때 타입을 제이슨 객체로 헤더에 보냄
//             res.writeHead(200, {'Coutent-Type' : 'application/json'})
//             // js 배열을 json형태로 변경해서 product에 담기
//             const products = JSON.stringify([
//                 {
//                 name: "거실조명",
//                 price: 50000,
//             },
//             {
//                 name:"어린이조명",
//                 price:50000,
//             }
//             ])
//             res.end(products);
//         }
//     }
//     console.log(path);
//     console.log(method);
//     res.end("Hello Cient");
// })

// // listen은 대기 호스트네임과 포트번호로 요청을 기다림
// server.listen(port, hostname);
// console.log('쇼핑몰 서버가 돌아가고 있슴')
