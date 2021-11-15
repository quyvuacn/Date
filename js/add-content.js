var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
document.write('<h3>' + greeting + '<br> <br>' + `${today.getHours()}: ${today.getMinutes()}`+'</h3>');
setInterval(function(){   
    today = new Date()
    console.log(today.getHours(),today.getMinutes(),today.getSeconds())
    document.getElementsByTagName('h3')[0].innerHTML = `${greeting}  <br> <br>  ${today.getHours()}: ${today.getMinutes()<10 ? '0'+today.getMinutes() : today.getMinutes()} : ${today.getSeconds()<10 ? '0'+today.getSeconds() : today.getSeconds()} `
},1000)
// document.write('<h3> ahihi </h3>');