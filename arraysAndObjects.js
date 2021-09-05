let names = [];
let namesKnown = ['ashok', 'sow', 'jeeva'];

let ages = [20, 40, 60]

names.push('yaso')

console.log('name array = ', names);
console.log('name known array = ', namesKnown);

namesKnown[2] = 'kalpana';
// console.log('name known array = ', namesKnown);

let myHome = {
    price : 850000,
    city : 'SJ',
    calculatePropertyTax: function(){
        let propertyTax = parseFloat(this.price) * 0.025;
        return propertyTax;
    }
}

let jeevaHome = {
    price : 60000,
    city: 'vkp'
}

//object destructuring

let { price } = jeevaHome;
let { city : cityName} = jeevaHome;
console.log('price = ' , price);
console.log('city = ' , cityName);

// console.log('myHome = ', myHome)

let myPropertyTax = myHome.calculatePropertyTax();

// console.log('myPropertyTax = ', myPropertyTax)


let homes = [myHome, jeevaHome, 'ashok', 872]

console.log('homes = ', homes)

let student = new Object();

student.name = 'lava';
student.id = 1234;

student.calculateGrade = function(mark){
    let grade = mark/10;
    return grade;
}

console.log('student = ', student)