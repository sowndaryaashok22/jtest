// let mybutton = document.querySelector('button')
let myhead = document.querySelector('h1')


// mybutton.onclick = function(){
//     let myNAME = prompt("my another name is" );
//     //localStorage.setItem('name' , myNAME)
//     myhead.textContent =  myNAME + " hates js";
// }

let mybut1 = document.getElementById('butt')
let mytext1 = document.getElementById('myText')

mybut1.onclick = function()
{
    let enteredtext = mytext1.value;
    console.log(enteredtext)
    myhead.textContent = enteredtext + " welcome";

}


let body1 = document.querySelector('body')
let colorButton1 = document.getElementById('colorButton')
let colors = ['pink' , 'red ' , 'blue' , 'purple' , 'black']
let count = 0;

colorButton1.addEventListener('mouseover' , changeColor)

function changeColor(){
  body1.style.backgroundColor = colors[count % colors.length ]
  count++;
    
}

let counterButton1 = document.getElementById('counterButton')
let counter1 = document.getElementById('counter')
let count2 = 0;
counterButton1.onclick = function(){
    counter1.textContent = count2;
    count2++;
}