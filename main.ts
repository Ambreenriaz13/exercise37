// Making a function
function make_shirt(size : string = "Large",
 printMessage: string = "I love TypeScript"){


console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
 }

 // calling a function with by default values
 make_shirt();

 
 // calling a function now with medium size and dafult message
 make_shirt ("Medium")

 // calling a function now with medium size and dafult message
 make_shirt ("small","I love JavaScript")