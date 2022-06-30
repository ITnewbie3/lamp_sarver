const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;

//json 형식의 데이터를 처리할 수 있게 설정
app.use(express.json());
// 브라우저 cors이슈를 막기위해 사용(모든 브라우저의 요청을 일정하게 받음)
app.use(cors());

// 요청 처리 app.메서드(url, 함수)
app.get('/products', async(req,res) => {
    const result = {
        products: [
            {
                id:1,
                name:'학원조명',
                price:50000,
                imgsrc:"images/products/product1.jpg",
                seller: "green"
            },
            {
                id:2,
                name:'집조명',
                price:30000,
                imgsrc:"images/products/product2.jpg",
                seller: "home"
            },
            {
                id:3,
                name:'밖조명',
                price:40000,
                imgsrc:"images/products/product3.jpg",
                seller: "out"
            },
            {
                id:4,
                name:'식당조명',
                price:60000,
                imgsrc:"images/products/product4.jpg",
                seller: "rice"
            },
            {
                id:5,
                name:'거실조명',
                price:70000,
                imgsrc:"images/products/product5.jpg",
                seller: "livingroom"
            },
            {
                id:6,
                name:'그냥조명',
                price:10000,
                imgsrc:"images/products/product6.jpg",
                seller: "etc"
            },
            {
                id:7,
                name:'진짜그냥조명',
                price:35000,
                imgsrc:"images/products/product7.jpg",
                seller: "etc2"
            },
            {
                id:8,
                name:'가짜조명',
                price:5000,
                imgsrc:"images/products/product8.jpg",
                seller: "copy"
            },
        ] 
    }
    res.send(result)
});
app.post('/green',async (req,res)=> {
    console.log(req)
    res.send('게시글 등록완료')
});
// 실행
app.listen(port, () => {
    console.log('쇼핑몰 서버가 동작중')
})