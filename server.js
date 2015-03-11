var restify=require('restify');
var bunyan=require('bunyan');
var options={
    name:"DoDo API"
}
var server=restify.createServer(options);

server.use(function(req,res,next){
    console.log(" middleware here ",req.body);
    next();
});
server.use(restify.bodyParser({
    maxBodySize:10*1024
}));
server.use(function(req,res,next){
   console.log("middleware 2 here",req.body);
    next();
});
server.on('after',restify.auditLogger({
    log: bunyan.createLogger({
       name:'audit',
        stream:process.stdout
    })
}));
module.exports=server;

require('./routes')