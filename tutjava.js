console.log('hi sow')
let a = 5;
let b = 6;
let userName = 'sow'
if(isNaN(a)){
    console.log("not a number");
}
function add(a1,b1)
{
    console.log('user = ' + userName)
    console.log(a1, b1)
    let sum = a1 + b1;
    return sum;
}

function sub(a1,b1)
{
    console.log('user = ' + userName)
    console.log(a1, b1)
    let diff = a1 - b1;
    return diff;
}
let res = add(2, 6);
console.log("add result - " + res);

let res1 = sub(6, 2);
console.log("sub result - " + res1);

let myStr1 = "i'm sowndarya";
let myStr2 = "sowndarya shanmugam";

console.log(myStr1.slice(4,6));
let strArray = myStr2.split(' ');
console.log(myStr2[0]);
console.log(myStr2[1]);

let arr1 =[ 40, 2 , "sow" , true ]
console.log(arr1);
let arr2 = new Array()
 arr2[0]="sow";
console.log(arr2[0]);
console.log(arr1.length);
console.log(arr1.reverse());

