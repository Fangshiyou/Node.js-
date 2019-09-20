var interval= setInterval(function loop(){
        console.log('i will loop forever!');
    },500);
setTimeout(function(){
    console.log("Game over");
    clearInterval(interval);
},5000);
