let myCar = new Object()
myCar.name = "honda";
myCar.speed = 200;
myCar.price = 3000;
//console.log(myCar)
myCar.drive = function(dest){
console.log("driving to " + dest);
}
// myCar.drive('pungar');
// console.log(myCar);
 
//console.log('outside - ' , this);

let myManager = { 
    name : "ash",
    age : 30,
    sex : "male",
    assignTask : function(task){
        console.log(" assigned task is " + task );
        return " assigned"
    },
    assignGrade : function(grade){
        console.log(" performance grade is " + grade);
    },
    add : function(a,b){
        console.log('inside - ' , this);
        return a + b;
    },


}
// console.log(myManager.name);
//  let a = myManager.assignTask("spirit planning");
// console.log(a);

// //let sum = myManager.add(2,2)
// console.log(myManager.add(2,2))

//console.log(myManager.assignTask("coding"));

console.log(myManager.name);

myManager.name = 'sow';
console.log(myManager.name);
console.log(myManager);


//construtor

let House = function(owner , city, price){
    this.owner = owner;
    this.city = city;
    this.price = price;
    this.isOverPriced = function(finalPrice){
        if(this.price > finalPrice)
        {
            console.log("good deal for buyer");
            return false;
        }
        else{
            console.log("good deal for seller");
            return true;
        }
    }
};


let house1 = new House('sow' , 'san jose', 2000);
console.log(house1);
let result = house1.isOverPriced(3000);
console.log(result);

//date object
let sowBday = new Date(1992, 11, 22, 5, 10, 25)
console.log(sowBday);
console.log(sowBday.getTime());
let ashBday = new Date(1988, 9, 21, 4, 10, 30 )
if(sowBday.getTime() > ashBday.getTime())
{
    console.log("ash is elder");
}
else{
    console.log('sow is elder');
}