const http = require('http');

http.createServer((req, res)=>{ 
    res.writeHead(200,{'Content-Type':'application/json'})
    //res.write('Hola Mundo');
    let salida = {
        nombre:'Alx',
        edad:33,
        url:req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);
console.log('listen(8080)');
