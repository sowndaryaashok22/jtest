const http = require('http');
const fs = require('fs');

fs.readFile('../../test.html',(err,data)=>{
    if(err){
        throw err
    }
    else{
        const server = http.createServer((request,response)=>{
            response.statusCode = 200;
            response.setHeader('Content-type','text/html');
            response.write(data);
            response.end();
        });

        server.listen(3000,'127.0.0.1',()=>{
            console.log("the server is listening - " + 3000);
        });

    }
});