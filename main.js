// question# 1
var myname = "hellow eric ";
var massage = " would you like to learn some python today?";
console.log(myname + massage);
// question# 2 
//lowercase 
var personname = "daniyal";
console.log("lowercase:", personname.toLowerCase());
//upper case 
console.log("uppercase:", personname.toLocaleUpperCase());
//titlecase
console.log("titlecase", personname.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
