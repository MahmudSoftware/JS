let power =  Math.pow(2,53);

let cubeRoot = Math.cbrt(26);

let imulateValue = Math.imul(30,5);

// console.log(cubeRoot);

// console.log(imulateValue);

// console.log(power);


//

let a = myFunction(10 + 20);
let b = myFunction(30 + 40);
let c = myFunction(40 + 20);
let d = myFunction(50 + 20);
let e = myFunction(60 + 20);
let f = myFunction(70 + 20);

function myFunction(a,b){
     
    return a + b -1
}


function getRandomNumber(min, max){
         
    const randomNumber = Math.round(Math.random() * min + (max - min));

    return randomNumber;
}

console.log(getRandomNumber(6,7));
