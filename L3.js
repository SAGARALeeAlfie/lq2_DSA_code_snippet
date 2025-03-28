//Original for loop

let fname = "Jose Cruz"; 
let i; 

for(i = 0; fname.length > i; i++){ 
    let c = 2 + i; 
    let nLengthCounterTwo = fname.length - c; 
    console.log(fname); 
    console.log("Iterations Name was Printed: " + i); 
}

// converted to while loop

let fname = "Jose Cruz"; 
let i = 0; 

while (i < fname.length) { 
    let c = 2 + i; 
    let nLengthCounterTwo = fname.length - c; 
    console.log(fname); 
    console.log("Iterations Name was Printed: " + i); 
    i++; 
}
