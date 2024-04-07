const names = ['Ronaldo','Messi','Salah','bemgima'];

let index = -1;

let name= names[++index]

setInterval(()=>{
   
    name = names[index++];
    
    console.log(name,name.length);
    if(index == names.length){
        index  = 0;
    }
},1000) //It willll run lifetime

