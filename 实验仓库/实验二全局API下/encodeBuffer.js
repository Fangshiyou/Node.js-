var username = process.argv[2];
var password = process.argv[3];

if(username != undefined && password != undefined){
    var login ="用户名:"+ username+" " +"密码:"+password;
    console.log(login);
    var buf1 = Buffer.from(login,"utf-8");
    var base64Str = buf1.toString("base64");
    console.log(base64Str);
}
else{
    console.log("用户名密码不能为空!")
}