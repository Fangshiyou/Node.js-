var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(req,res){
    var imgPath = path.join(__dirname,"/node.png");
    var imgBuffer = fs.readFileSync(imgPath);
    var data = imgBuffer.toString("base64");
    var imgSrc = "data:image/png; base64," + data;
    var htmlStr = "<!DOCTYPE html><head></head>"+
    "<body><img src='" + imgSrc + "'/></body>"+"</html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlStr);
    res.end();
}).listen(8081);

console.log("Server is listening 8081！");