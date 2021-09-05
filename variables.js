// let name;
// console.log('hello sow');
// console.log(name);

const person = {
    firstName : 'Ashok',
    secondName : 'Marannan',
    run() {
        console.log(this)
    }
}

// let input = 'secondName';
 
// //constant 
// console.log(person.firstName)

// console.log(person[input])

person.run();

let firstName2 = person.firstName;

let run2 = person.run.bind(person);

run2();

