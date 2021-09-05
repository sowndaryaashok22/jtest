// let stockPriceUsd = [200 , 398, 192 ,2300];

// let convertUsdToInr = function(stockprice){
//     return stockprice * 75;
// }
// for(let i = 0; i < stockPriceUsd.length; i++)
// {
//     console.log(stockPriceUsd[i]);
//     console.log(convertUsdToInr(stockPriceUsd[i]));
// }

// let stockPriceInr = stockPriceUsd.map(function(stockprice){
//     return stockprice * 75;
// });
// console.log(stockPriceInr);


// let fullNames = [ 'ashok', 'sowndarya', 'lavanya', 'yalini'];
// let shortNames = fullNames.map(function(fullName){
//     return fullName.slice(0,3);
// });
// console.log(shortNames);

// let shortNameCreate = function(fullName){
//     return fullName.slice(0,3);
// }


// for(let i=0; i< fullNames.length; i++)
// {
//     console.log(shortNameCreate(fullNames[i]));
// }

// let stocksBoughts = [10, 40, 50, 120];

// let totalStocks = 0;

// for(let i=0; i<stocksBoughts.length; i++){

//     totalStocks = totalStocks + stocksBoughts[i]
// }

// console.log(totalStocks);


//map example

//map is a funtion/method available for every arrray/list

//map function will take an input array and gives out an output by changing each element into a new element

let names = ['ashok', 'sow', 'lava', 'jeeva'];

let nameUpperCase = names.map(name => name.toUpperCase());
console.log(nameUpperCase);

