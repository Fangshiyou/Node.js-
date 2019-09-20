const http = require("http");
const path = require("path");
const fs = require("fs");//读文件内容
var server = http.createServer(function(req,res){
    var htmlPath = path.join(__dirname,"/views/view.html");
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    console.log(htmlPath);
    res.end();
}).listen(8080);
console.log("this server is listening 8080.");
