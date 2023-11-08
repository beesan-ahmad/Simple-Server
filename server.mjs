//const http = require('http');
import http from 'http';

const port = 3005;
const server = http.createServer(function(req,res){
res.write('Welcome To Vast');
res.end();
});

server.listen(port,function(error){
    if(error){
        console.log("Something went wrong",error);
    }
    else{
        console.log('server is listening on port '+ port);
    }
});