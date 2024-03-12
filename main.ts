// question# 1
let myname :string = "hellow eric ";
let massage = " would you like to learn some python today?"
console.log ( myname + massage)

// question# 2 
//lowercase 
let personname : string = "daniyal" 
console.log ("lowercase:", personname .toLowerCase());


//upper case 
console.log ("uppercase:", personname . toLocaleUpperCase () )

//titlecase
console.log ("titlecase", personname.replace(/\bw/g,c => c.toUpperCase()))