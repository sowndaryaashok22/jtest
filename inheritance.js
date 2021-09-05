import { SingleFamilyHome } from './singleFamily'


let myHome = new Home('san jose', 850000);
console.log(myHome);
console.log(myHome.payPropertyTax());

let myNextHome = new SingleFamilyHome('santa clara', 1000000, true);
console.log(myNextHome);
console.log(myNextHome.moweLawn());
console.log(myNextHome.payPropertyTax());