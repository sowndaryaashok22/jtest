const items = [
   { name : 'sow', price : 2000} ,
   { name : 'ash', price : 3000} ,
   { name : 'lava', price : 3500} ,
   { name : 'yalu', price : 200} ,
   { name : 'yaso', price : 12050} ,
   { name : 'jeeva', price : 300} ,
   { name : 'kalpana', price : 10000}   
]
//filter - it will filter given array based on condition and give the new array
const newItems = items.filter((item)=> {
    return item.price < 2500
})

//map - it will create a new array based on the condition
const mapItems = items.map((item) => {
    return item.name
})

//find - used to find a item in an array
const findItems = items.find((item) => {
    return item.name == 'lava'
})

//foreach - like for loop
items.forEach((item) => {
   console.log(item.name);
})

//some =  it returns true if it satisify the condition atleast one item in list
const inExpensiveItems = items.some((item) => {
    return item.price >2000;
})

//every = it returns true if it satisify the condition all items in list
const hasExpensiveItems = items.every((item) => {
    return item.price  <2000;
})

// reduce
const totalItems = items.reduce((currentTotal,item) => {
    return item.price + currentTotal;
  
}, 0)




//console.log(items);
// console.log(newItems);
//console.log(mapItems);
//console.log(findItems);
//console.log(inExpensiveItems);
//console.log(hasExpensiveItems);
//console.log(totalItems);
