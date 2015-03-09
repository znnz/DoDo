var server=require('./server');
var port=Number(process.env.SERVER_PORT) || 8090
server.listen(port,function(){
   console.log('dodo API server listening on %j',server.address());
});