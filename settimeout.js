const processOrder = (customer) =>{

    console.log('Prcessing Order');

    setTimeout(()=>{
        console.log('Complete');
    }, 3000);

    console.log('Process For Customer');
};

console.log('Take Order For Customer');

processOrder();

console.log('Complete Order');